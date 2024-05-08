import { lookupUser } from "../lookupUser.js";
import { v4 as uuidv4 } from "uuid";
import { sendMessage } from "../sendMessage.js";
import { getRandomSeedServer } from "../getRandomSeedServer.js";
import { getCurrentUri } from "../getCurrentUri.js";

export async function send(req, res) {
  const { to, message } = req.body;
  try {
    const foundUser = await lookupUser(to, getCurrentUri(), uuidv4());
    await sendMessage(process.env.USERNAME, message, foundUser.uri);
    return res.json({ message: "success" });
  } catch (err) {
    console.log(err);
    return res.status(404).send("user not found");
  }
}
