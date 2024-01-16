import app from "./app.js";
app.listen(app.get("port"), () => {
  console.log(`listening on ${app.get("host")} : ${app.get("port")}`);

});