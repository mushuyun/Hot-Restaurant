// Dependencies
const express = require("express");

// const PORT = 3000;
const PORT = process.env.PORT || 3000;

const app = express();
//sets up the express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

require("./routes/htmlRoutes")(app);

require("./routes/apiRoutes")(app);


app.listen(PORT, () => {
      console.log("Server listening on: http://localhost:" + PORT);
});