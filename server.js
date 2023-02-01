require("dotenv").config();

let tracer = {};
if (process.env.DD_TRACE_ENABLED === "true") {
  tracer = require("dd-trace").init();
}

const app = require("./app");
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Server started on port http://localhost:" + PORT);
});
