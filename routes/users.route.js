const router = require("express").Router;
const { 
    getUsers,
    createUser, 
     getUser,
    deleteUser,
    updateUser,
} = require('../controllers/users.controller');

const userRouter = router();

userRouter.route("/").get(getUsers).post(createUser);
userRouter.route("/:userId")
          .get(getUser)
          .patch(updateUser)
          .delete(deleteUser)

module.exports = userRouter;


