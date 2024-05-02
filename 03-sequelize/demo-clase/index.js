const server = require("./src/server");
const { database } = require("./src/db");

database
  .sync({ alter: true })
  .then(() => {
    server.listen("3001", () => {
      console.log("Server listening on port ", 3001);
    });
  })
  .catch((error) => console.log(error));
