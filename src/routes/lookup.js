import { lookupUser } from "../lookupUser.js";
import { addNode, getNodeByUser, getNodes } from "../servers.js";
import {v4 as uuidv4} from "uuid";

const seedIds = new Set();

export async function lookup(req, res) {
    const {user} = req.query;
    const requestId = req.get("x-request-id") || uuidv4();

    if (seedIds.has(requestId)) {
      return res.status(404).send("user not found");
    }

    seedIds.add(requestId);
    const serverByUser = getNodeByUser(user);

    if (!serverByUser) {
      let foundUser;

      for (let server of getNodes()) {
        try {
          foundUser = await lookupUser(user, server.uri, requestId);
        } catch (err) {}
      }

      if (foundUser) {
        console.log(`cached ${foundUser.user}`);
        addNode(foundUser);
        return res.json(foundUser);
      } else {
        return res.status(404).send("user not found");
      }
    }

  res.json(serverByUser);
}