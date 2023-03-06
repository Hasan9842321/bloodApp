const express = require("express");
const {
    route
} = require("../app");

const upload = require("../multer/multer");

const {
    getAllUsersComplain,
    createUsersComplain,
    getOneUsersComplain,
    deleteUsersComplain,
    updateUsersComplain
} = require("../controllers/user.complain.controllers");

const complainRouter = express.Router();

complainRouter.get('/', getAllUsersComplain);
complainRouter.get("/:id", getOneUsersComplain);
complainRouter.post("/", upload.array("image", 4), createUsersComplain);
complainRouter.delete("/:id", deleteUsersComplain);
complainRouter.patch("/:id", upload.array("image", 4), updateUsersComplain);


module.exports = complainRouter;