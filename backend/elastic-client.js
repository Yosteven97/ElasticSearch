const { Client } = require("@elastic/elasticsearch");

const elasticClient = new Client({
  cloud: {
    id: 'ID'
  },
  auth: {
    username: 'USERNAME',
    password: 'PASSWORD',
  },
});

module.exports = elasticClient;