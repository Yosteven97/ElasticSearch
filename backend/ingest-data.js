const elasticClient = require("./elastic-client");

// *Ingest data
async function run() {
  await elasticClient.index({
    index: "game-of-thrones",
    body: {
      character: "Ned Stark",
      quote: "Winter is coming.",
    },
  });

  await elasticClient.index({
    index: "game-of-thrones",
    body: {
      character: "Daenerys Targaryen",
      quote: "I am the blood of the dragon.",
    },
  });

  await elasticClient.index({
    index: "game-of-thrones",
    body: {
      character: "Tyrion Lannister",
      quote: "A mind needs books like a sword needs whetstone.",
    },
  });

  await elasticClient.indices.refresh({ index: "game-of-thrones" });
}

run().catch(console.log);
