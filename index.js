const config = require("./src/config/config");
const app = require("./src/server");
require("./src/database/database");

const PORT = process.env.PORT || config.PORT;

app.listen(PORT, () => {
  console.log("Server is listening...");
});
