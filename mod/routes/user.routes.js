const express = require("express");
const {
  route
} = require("../app");

const upload = require("../multer/multer");

const {
  getAllUsers,
  createUsers,
  getOneUsers,
  deleteUsers,
  updateUsers,
  loginUsers
} = require("../controllers/user.controllers");

const router = express.Router();

router.get('/', getAllUsers);
router.get("/:id", getOneUsers);
router.post("/", upload.single("image"), createUsers);
router.delete("/:id", deleteUsers);
router.patch("/:id", updateUsers);
router.post("/login", loginUsers);


module.exports = router;