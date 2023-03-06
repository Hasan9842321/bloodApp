 const {
     request
 } = require("../app");


 const UserComplain = require("../models/complainBox");



 // all user  get  here............................................
 const getAllUsersComplain = async (req, res) => {

     try {

         const userComplain = await UserComplain.find();
         res.status(200).json(userComplain);

     } catch (error) {
         res.status(500).send(error.message);
     }
 };
 // all user  get method end  here............................................


 // one user  get  here............................................
 const getOneUsersComplain = async (req, res) => {

     try {
         const userComplain = await UserComplain.findOne({
             _id: req.params.id
         })
         res.status(200).json(userComplain)
     } catch (error) {
         res.status(500).send(error.message);
     }
 };
 // one user  get method end  here............................................


 //user will create here............................................
 const createUsersComplain = async (req, res, next) => {

     try {

         const newUserComplain = new UserComplain({




             complainType: req.body.complainType,
             description: req.body.description,
             image: req.file



         })
         await newUserComplain.save();
         res.status(201).json(newUserComplain);
     } catch (error) {
         res.status(500).send(error.message);
     }
 };
 // user create method ends...............................................



 //user will update  here............................................
 const updateUsersComplain = async (req, res) => {

     try {
         const User = await UserComplain.findByIdAndUpdate({
                 _id: req.params.id
             }, {
                 $set: {


                     complainType: req.body.complainType,
                     description: req.body.description,
                     image: req.file
                 },
             }, {
                 new: true
             }

         );

         if (User) {

             res.status(200).send({
                 success: true,
                 message: "updated",
                 data: User
             });
         } else {
             res.status(404).send({
                 success: false,
                 message: "not updated",
                 data: User
             });
         }
     } catch (error) {
         res.status(500).send(error.message);
     }
 };
 // user update  method ends...............................................



 // user wull delete  here...............................................
 const deleteUsersComplain = async (req, res) => {
     try {
         const users = await UserComplain.deleteOne({
             id: req.params.id
         })
         res.status(200).json({
             message: " user is deleted",
         })
     } catch (error) {
         res.status(500).send(error.message);
     }
 };
 // user  delete method   ends ..............................................


 module.exports = {
     getAllUsersComplain,
     createUsersComplain,
     getOneUsersComplain,
     deleteUsersComplain,
     updateUsersComplain
 };