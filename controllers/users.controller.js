const getUsers = (req, res) => {
    res.status(200).send("All users");
};
const getUser = (req, res) => {
    res.status(200).send("Get single user");
};
const createUser = (req, res) => {
    res.status(200).send("Create user");
};
const updateUser= (req, res) => {
    res.status(200).send("Update users");
};
const deleteUser = (req, res) => {
    res.status(200).send("Delete users");
};

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
};