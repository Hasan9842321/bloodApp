const app= require("./app");
const config= require("./config/config")
const port = config.app.port;


app.get('/', (req, res) => {
  res.send('Welcome to my server ')
});

app.listen(port, () => {
  console.log(`app is running on http://localhost:${port}`)
});
