import fetch from "cross-fetch";
import { getCurrentUri } from "./getCurrentUri.js";

export function registerWithSeedServer(uri) {
    return fetch(`${uri}/register`, {
      method: "POST",
      body: JSON.stringify({
        uri: getCurrentUri(),
        user: process.env.USERNAME,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  }
  