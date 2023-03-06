const express = require('express');
const cors = require("cors");
const userRouter = require("./routes/user.routes");
const userbloodRequestRouter = require("./routes/user.bloodreq.routes");
const userblooddonatesRouter = require("./routes/user.blooddon.routes");
const userreqFeedRouter = require("./routes/reqFeed.routes");
const usercomplainBoxRouter = require("./routes/user.complain.routes");
const app = express();




app.use(cors());
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.use("/api/appusers", userRouter); //user Registration 
app.use("/api/appuserbloodrequest", userbloodRequestRouter); // user blood request in center 
app.use("/api/appuserblooddonate", userblooddonatesRouter); // user blood donate in center 
app.use("/api/userrequestfeeds", userreqFeedRouter); // user view posts in newsfeed 
app.use("/api/appusercomplainBox", usercomplainBoxRouter); // user compain 


app.use("/api/appusercomplainBoxs", usercomplainBoxRouter); // user compain 

require("./config/db");
// Semester 12 Fall\ Thesis[G8]\ bloodApp\ mod

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/./views/index.html");
});

//route error
app.use((req, res, next) => {
  res.status(404).json({
    message: "route not found",
  });
});

//server error
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "somthing broke",
  });
});


module.exports = app;