import path from "path";
import express from "express";
// import cookieParser from "cookie-parser";
// import bodyParser from "body-parser";
// import track from "./routes/track";
// import actions from "./routes/actions";
// import config from "./routes/config";
// import pixel from "./routes/pixel";
// import iframeAction from "./routes/iframe-action";

function createApp() {
  const app = express();
  app.use((_req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
  app.get("/list/:pvid", (req, res) => {
    res.json({ items: [{ name: req.params.pvid }] });
  });
  // app.use(bodyParser.json());
  // app.use(cookieParser());

  // app.set("view engine", "ejs");
  // app.set("views", path.join(__dirname, "views"));

  // app.get("/amp/config/:api_key", config);
  // app.post("/amp/track", track);
  // app.get("/amp/actions", actions);
  // app.get("/amp/pixel", pixel);
  // app.get("/amp/iframe-action/:pvid", iframeAction);
  // app.get("/amp/iframe-action-items/:pvid", (req, res) => {
  //   // pvid を展開するだけの endpoint
  //   res.header("Access-Control-Allow-Origin", "http://localhost:16000");
  //   res.header("Access-Control-Allow-Credentials", "true");
  //   res.json({ items: [{ pvid: req.params.pvid }] });
  // });

  app.use(express.static(__dirname + "/dist"));

  // const host = "//localhost:10000";

  // app.get("/", (req, res) => {
  //   res.render("index", { host });
  // });

  // app.get("/action", (req, res) => {
  //   res.render("action", { host });
  // });

  // app.get("/modal", (req, res) => {
  //   res.render("modal.ejs", { host });
  // });
  // app.get("/tracks", (req, res) => {
  //   res.render("tracks.ejs", { host });
  // });

  return app;
}

const app = createApp();
app.listen(9999, () => {
  console.log("started", 9999);
});
