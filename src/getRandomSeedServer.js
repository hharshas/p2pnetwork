import { seeds } from "../seed.js";

export function getRandomSeedServer() {
    const seedsOmittingCurrentNode = seeds.filter(
      (seed) => seed.user !== process.env.USERNAME
    );
    return seedsOmittingCurrentNode[
      Math.floor(Math.random() * seedsOmittingCurrentNode.length)
    ];
  }
  