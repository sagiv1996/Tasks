const axios = require("axios");
const { faker } = require("@faker-js/faker");
const data = [];

for (let i = 1; i <= 100; i++) {
  data.push({
    title: faker.lorem.sentence(),
    id: i.toString(),
    createdAt: faker.date.past(),
    isCompleted: false,
  });
}

async function sendData() {
  for (const obj of data) {
    try {
      await axios.post("http://localhost:3001/tasks", obj);
      console.log(`Successfully sent data for id ${obj.id}`);
    } catch (error) {
      console.error(`Error sending data for id ${obj.id}: ${error.message}`);
    }
  }
}

sendData();
