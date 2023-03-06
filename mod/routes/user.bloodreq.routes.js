const express = require("express");
const {
    route
} = require("../app");

const upload = require("../multer/multer");

const {
    getAllUsersBloodRequest,
    createUsersBloodRequest,
    getOneUsersBloodRequest,
    deleteUsersBloodRequest,
    updateUsersBloodRequest
} = require("../controllers/user.bloodreq.controller");

const bloodRequestRouter = express.Router();

bloodRequestRouter.get('/', getAllUsersBloodRequest);
bloodRequestRouter.get("/:id", getOneUsersBloodRequest);
bloodRequestRouter.post("/", upload.single("image"), createUsersBloodRequest);
bloodRequestRouter.delete("/:id", deleteUsersBloodRequest);
bloodRequestRouter.patch("/:id", upload.single("image"), updateUsersBloodRequest);


module.exports = bloodRequestRouter;