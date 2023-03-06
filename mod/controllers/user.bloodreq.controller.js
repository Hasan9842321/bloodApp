 const {
     request
 } = require("../app");


 const UserBloodRequest = require("../models/user.bloodreq.models");



 // all user  get  here............................................
 const getAllUsersBloodRequest = async (req, res) => {

     try {

         const userBloodRequest = await UserBloodRequest.find();
         res.status(200).json(userBloodRequest);

     } catch (error) {
         res.status(500).send(error.message);
     }
 };
 // all user  get method end  here............................................


 // one user  get  here............................................
 const getOneUsersBloodRequest = async (req, res) => {

     try {
         const userBloodRequest = await UserBloodRequest.findOne({
             _id: req.params.id
         })
         res.status(200).json(userBloodRequest)
     } catch (error) {
         res.status(500).send(error.message);
     }
 };
 // one user  get method end  here............................................


 //user will create here............................................
 const createUsersBloodRequest = async (req, res, next) => {

     try {

         const newUserBloodRequest = new UserBloodRequest({


             unitsOfBloodType: req.body.unitsOfBloodType,
             // {
             //      bName: req.body.bName,
             //      units: Number(req.body.units),

             //  },


             Accident: req.body.Accident,
             phon: Number(req.body.phon),
             image: req.file,

             destination: req.body.destination

         })
         await newUserBloodRequest.save();
         res.status(201).json(newUserBloodRequest);
     } catch (error) {
         res.status(500).send(error.message);
     }
 };
 // user create method ends...............................................



 //user will update  here............................................
 const updateUsersBloodRequest = async (req, res) => {

     try {
         const User = await UserBloodRequest.findByIdAndUpdate({
                 _id: req.params.id
             }, {
                 $set: {


                     //  bName: req.body.bName,
                     //  units: req.body.units,
                     unitsOfBloodType: req.body.unitsOfBloodType,

                     Accident: req.body.Accident,
                     phon: req.body.phon,
                     image: req.file,

                     destination: req.body.destination
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
 const deleteUsersBloodRequest = async (req, res) => {
     try {
         const users = await UserBloodRequest.deleteOne({
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
     getAllUsersBloodRequest,
     getOneUsersBloodRequest,
     createUsersBloodRequest, //export all cntrollers
     updateUsersBloodRequest,
     deleteUsersBloodRequest
 };