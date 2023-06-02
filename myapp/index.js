const myapp = require("express");
const app = express();
app.get("/", (request, response) => {
  resonse.send("Hello World!");
});

app.listen(3000);
