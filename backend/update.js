const elasticClient = require("./elastic-client");

// *Update
async function run() {
  await elasticClient.index({
    index: "game-of-thrones",
    id: "1",
    document: {
      character: "Ned Stark",
      quote: "Winter is coming Start.",
      times: 0,
    },
  });

  await elasticClient.index({
    index: "game-of-thrones",
    id: "2",
    document: {
      character: "Ned Stark",
      quote: "Winter is coming End.",
      times: 0,
    },
  });

  await elasticClient.update({
    index: "game-of-thrones",
    id: "1",
    script: {
      lang: "painless",
      source: `ctx._source.character = params.character; ctx._source.times = params.times`,
      params: {
        character: "Yosteven",
        times: 2,
      },
    },
  });

  const document = await elasticClient.get({
    index: "game-of-thrones",
    id: "1",
  });

  console.log(document);
}

run().catch(console.log);
