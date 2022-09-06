const router = require("express").Router;
const {
    getUsers,
    getUser,
    updateUser,
    createUser,
    deleteUser,
}= require("../controllers/users.controller");
const {pathMiddleware} = require("../middlewares/pathMiddleware")

const userRouter = router();

userRouter.route("/").get(pathMiddleware, getUsers).post(createUser);
userRouter.route("/:UserId")
            .get(getUser)
            .patch(updateUser)
            .delete(deleteUser);


module.exports = userRouter;