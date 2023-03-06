const express = require("express");
const {
    route
} = require("../app");

const upload = require("../multer/multer");

const {
    getAllUsersRequestFeed,
    createUsersRequestFeed,
    getOneUsersRequestFeed,
    deleteUsersRequestFeed,
    updateUsersRequestFeed
} = require("../controllers/reqfeed.controllers");

const reqFeedsRouter = express.Router();

reqFeedsRouter.get('/', getAllUsersRequestFeed);
reqFeedsRouter.get("/:id", getOneUsersRequestFeed);
reqFeedsRouter.post("/", upload.array("image", 4), createUsersRequestFeed);
reqFeedsRouter.delete("/:id", deleteUsersRequestFeed);
reqFeedsRouter.patch("/:id", upload.array("image", 4), updateUsersRequestFeed);


module.exports = reqFeedsRouter;