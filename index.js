const express = require("express");
const userRouter = require("./routes/users.route")

const app = express()

app.get("/", (req, res) => {
    res
    .status(200)
    .send("Welcome to my server. Please use / users to get all users");
});
app.use("/users", userRouter);

app.listen (4000, (err) => {
    console.log("server listening on http://localhost:4000" );
})