const axios = require("axios");
const { faker } = require("@faker-js/faker");

const data = [];

const numOfRecord = 20;
for (let i = 1; i <= numOfRecord; i++) {
  data.push({
    title: faker.lorem.sentence(),
    createdAt: faker.date.past().toISOString(),
    isCompleted: false,
  });
}

async function sendData() {
  for (const obj of data) {
    try {
      await axios.post("http://localhost:3001/tasks", obj);
      console.log("Successfully sent data");
    } catch (error) {
      console.error(`Error sending data: ${error.message}`);
    }
  }
}

sendData();
