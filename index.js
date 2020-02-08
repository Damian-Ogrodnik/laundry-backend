const config = require("./src/config/config");
const app = require("./src/server");
require("./src/database/database");

const PORT = 7000;

app.listen(PORT, () => {
  console.log("Server is listening...");
});
