import { addNode } from "../servers.js";


export function register (req, res){
    const { user, uri } = req.body;
    addNode({
      user,
      uri,
    });
    res.json({ message: "success" });
}