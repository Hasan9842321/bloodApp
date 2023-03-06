const {
  v4: uuid4
} = require("uuid");

const {
  request
} = require("../app");
const user = require("../models/appUser.model");



const bcrypt = require('bcrypt');
const saltRounds = 10;


//find all user methods here............ .........
const getAllUsers = async (req, res) => {
  try {
    const users = await user.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
//find all user methods end............

//find one user............................................
const getOneUsers = async (req, res) => {
  try {
    const users = await user.findOne({
      id: req.params.id
    })
    res.status(200).json(users)
  } catch (error) {
    res.status(500).send(error.message);
  }
};
//find one user methods end......................................



//Login  user............................................
const loginUsers = async (req, res) => {
  try {
    const {

      nidbriNo,
      passward
    } = req.body;
    // const users = await user.findOne({
    //   nidbriNo: nidbriNo
    // });
    const users = await user.findOne({
      nidbriNo
    });
    // res.status(201).json(user);

    if (users.nidbriNo === Number(nidbriNo)) {
      // Load hash from your password DB.
      bcrypt.compare(passward, users.passward, function (err, result) {
        if (result === true) {
          res.status(201).json({
            status: "you are login"
          });

        } else {
          res.status(404).json({
            status: "password invalid"
          });
        }

      });

    } else {
      res.status(404).json({
        status: "username or password invalid"
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
//Loginone  methods end......................................






//user will create    here............................................
const createUsers = async (req, res) => {
  try {



    bcrypt.hash(req.body.passward, saltRounds, async function (err, hash) {
      const newUser = new user({

        id: uuid4(),
        name: req.body.name,
        age: req.body.age,
        // Number(req.body.age),
        passward: hash,
        gender: req.body.gender,
        BloodGroup: req.body.BloodGroup,
        address: req.body.address,
        phon: req.body.phon,
        nidbriNo: req.body.nidbriNo,
        // image: req.file
      });
      await newUser.save();

      res.status(201).json(newUser);
    });



  } catch (error) {
    res.status(500).send(error.message);
  }
};
//user create methods ends  here............................................

//user will update  here............................................
const updateUsers = async (req, res) => {
  try {
    bcrypt.hash(req.body.passward, saltRounds, async function (err, hash) {


      const User = await user.findOne({
        id: req.params.id
      });

      User.name = req.body.name,
        User.age = Number(req.body.age),
        User.passward = hash,
        User.gender = req.body.gender,
        User.BloodGroup = req.body.BloodGroup,
        User.address = req.body.address,
        User.phon = req.body.phon,
        User.nidbriNo = Number(req.body.nidbriNo),
        // User.image = req.file

        await User.save();
      res.status(200).json(User);


    });






  } catch (error) {
    res.status(500).send(error.message);
  }
};
// user update  method ends.............................................

// user delete  method.............................................
const deleteUsers = async (req, res) => {
  try {
    const users = await user.deleteOne({
      id: req.params.id
    })
    res.status(200).json({
      message: " user is deleted",
    })
  } catch (error) {
    res.status(500).send(error.message);
  }
};
// user delete  method ends here.............................................

module.exports = {
  getAllUsers,
  getOneUsers,
  loginUsers,
  createUsers,
  updateUsers,
  deleteUsers
};