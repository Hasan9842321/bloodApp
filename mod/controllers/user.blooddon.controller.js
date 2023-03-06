 const {
     request
 } = require("../app");


 const UserBloodDonate = require("../models/user.blooddon.models");



 // all user  get  here............................................
 const getAllUsersBloodDonate = async (req, res) => {

     try {

         const userBloodDonate = await UserBloodDonate.find();
         res.status(200).json(userBloodDonate);

     } catch (error) {
         res.status(500).send(error.message);
     }
 };
 // all user  get method end  here............................................


 // one user  get  here............................................
 const getOneUsersBloodDonate = async (req, res) => {

     try {
         const userBloodDonate = await UserBloodDonate.findOne({
             _id: req.params.id
         })
         res.status(200).json(userBloodDonate)
     } catch (error) {
         res.status(500).send(error.message);
     }
 };
 // one user  get method end  here............................................


 //user will create here............................................
 const createUsersBloodDonate = async (req, res, next) => {

     try {

         const newUserBloodDonate = new UserBloodDonate({

             centerName: req.body.centerName,
             Name: req.body.Name,
             BloodGrup: req.body.BloodGrup,


             Reciver: req.body.Reciver,


             destination: req.body.description,
             description: req.body.description



         })
         await newUserBloodDonate.save();
         res.status(201).json(newUserBloodDonate);
     } catch (error) {
         res.status(500).send(error.message);
     }
 };
 // user create method ends...............................................



 //user will update  here............................................
 const updateUsersBloodDonate = async (req, res) => {

     try {
         const User = await UserBloodDonate.findByIdAndUpdate({
                 _id: req.params.id
             }, {
                 $set: {

                     Name: req.body.Name,
                     BloodGrup: req.body.BloodGrup,
                     Reciver: req.body.Reciver,


                     destination: req.body.description,
                     description: req.body.description



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
 const deleteUsersBloodDonate = async (req, res) => {
     try {
         const users = await UserBloodDonate.deleteOne({
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
     getAllUsersBloodDonate,
     getOneUsersBloodDonate,
     createUsersBloodDonate, //export all cntrollers
     updateUsersBloodDonate,
     deleteUsersBloodDonate
 };