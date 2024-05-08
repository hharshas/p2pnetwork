import express from "express"
import {getRandomSeedServer} from "./src/getRandomSeedServer.js";
import { registerWithSeedServer } from "./src/registerWithSeedServer.js";
import { lookup } from "./src/routes/lookup.js";
import { message } from "./src/routes/message.js";
import { register } from "./src/routes/register.js";
import { seeds } from "./seed.js";
import { addNode } from "./src/servers.js";
import { send } from "./src/routes/send.js";

const PORT = process.env.PORT ?? 3000;

const app = express();
app.use(express.json());

app.post("/register", register);
app.get("/lookup", lookup);
app.post("/send", send);
app.post("/message", message);

app.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});

async function initialize() {
  for (let seed of seeds) {
    addNode(seed);
  }
  const randomSeedServerUri = getRandomSeedServer();
  await registerWithSeedServer(randomSeedServerUri.uri);
}

setTimeout(() => {
  initialize();
}, 500);
