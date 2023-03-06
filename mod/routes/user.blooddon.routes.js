const express = require("express");
const {
    route
} = require("../app");
const {
    getAllUsersBloodDonate,
    createUsersBloodDonate,
    getOneUsersBloodDonate,
    deleteUsersBloodDonate,
    updateUsersBloodDonate
} = require("../controllers/user.blooddon.controller");

const bloodDonateRouter = express.Router();

bloodDonateRouter.get('/', getAllUsersBloodDonate);
bloodDonateRouter.get("/:id", getOneUsersBloodDonate);
bloodDonateRouter.post("/", createUsersBloodDonate);
bloodDonateRouter.delete("/:id", deleteUsersBloodDonate);
bloodDonateRouter.patch("/:id", updateUsersBloodDonate);


module.exports = bloodDonateRouter;