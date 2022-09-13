const { version } = require("../package.json");

const ethereum = require("../tokens/ethereum.json");
const fantom = require("../tokens/fantom.json");
const polygon = require("../tokens/polygon.json");
const bsc = require("../tokens/bsc.json");
const avalanche = require("../tokens/avalanche.json");
//const arbitrum = require("../tokens/arbitrum.json");
const optimism = require("../tokens/optimism.json");

function sortTokens(tokens) {
  return tokens.sort((t1, t2) => {
    if (t1.chainId === t2.chainId) {
      return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
    }
    return t1.chainId < t2.chainId ? -1 : 1;
  });
}

module.exports = function buildList() {
  const parsed = version.split(".");
  return {
    name: "DexKit Token List",
    timestamp: new Date().toISOString(),
    version: {
      major: +parsed[0],
      minor: +parsed[1],
      patch: +parsed[2],
    },
    tags: {},
    logoURI:
      "https://raw.githubusercontent.com/DexKit/assets/main/images/logo.png",
    keywords: ["dexkit", "default"],
    tokens: sortTokens([
      ...ethereum,
      ...fantom,
      ...polygon,
      ...bsc,
      ...avalanche,
      //  ...arbitrum,
      ...optimism,
    ]),
  };
};
