const getUsers = (req, res) => {
    res.status(200).send("All users")
};

const getUser = (req, res) => {
    res.status(200).send("Get single user")
};

const updateUser = (req, res) => {
    res.status(200).send("Update users")
};

const createUser = (req, res) => {
    res.status(200).send("Create user")
};

const deleteUser = (req, res) => {
    res.status(200).send("Delete user")
};

module.exports ={
    getUsers,
    getUser,
    updateUser,
    createUser,
    deleteUser,

};