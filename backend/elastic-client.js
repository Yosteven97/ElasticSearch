const { Client } = require("@elastic/elasticsearch");

const elasticClient = new Client({
  cloud: {
    id: 'a5753321effe42d582fe5c11e90c54a5:dXMtY2VudHJhbDEuZ2NwLmNsb3VkLmVzLmlvOjQ0MyQzNWMzOWQ5YTk5ODg0ZDM0YjIzZWEwYzkyOWVjMmEzOCRmYjc1OTlmMTFiZDg0ZmI3YjQ1YmI3NGJkNGUwMTliMg==',
  },
  auth: {
    username: 'enterprise_search',
    password: 'html5@970504',
  },
});

module.exports = elasticClient;