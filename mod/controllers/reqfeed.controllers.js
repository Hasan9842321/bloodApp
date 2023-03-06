 const {
     request
 } = require("../app");


 const requestfeed = require("../models/reqFeed.models");



 // all user  get  here............................................
 const getAllUsersRequestFeed = async (req, res) => {

     try {

         const requestfeeds = await requestfeed.find();
         res.status(200).json(requestfeeds);

     } catch (error) {
         res.status(500).send(error.message);
     }
 };
 // all user  get method end  here............................................


 // one user  get  here............................................
 const getOneUsersRequestFeed = async (req, res) => {

     try {
         const requestfeeds = await requestfeed.findOne({
             _id: req.params.id
         })
         res.status(200).json(requestfeeds)
     } catch (error) {
         res.status(500).send(error.message);
     }
 };
 // one user  get method end  here............................................


 //user will create here............................................
 const createUsersRequestFeed = async (req, res, next) => {

     try {

         const newrequestfeed = new requestfeed({




             bloodtype: req.body.bloodtype,
             units: Number(req.body.units),
             reason: req.body.reason,
             phon: req.body.phon,
             image: req.file,
             destination: req.body.destination



         })
         await newrequestfeed.save();
         res.status(201).json(newrequestfeed);
     } catch (error) {
         res.status(500).send(error.message);
     }
 };
 // user create method ends...............................................



 //user will update  here............................................
 const updateUsersRequestFeed = async (req, res) => {

     try {
         const User = await requestfeed.findByIdAndUpdate({
                 _id: req.params.id
             }, {
                 $set: {


                     bloodtype: req.body.bloodtype,
                     units: req.body.units,
                     reason: req.body.reason,
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
 const deleteUsersRequestFeed = async (req, res) => {
     try {
         const users = await requestfeed.deleteOne({
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
     getAllUsersRequestFeed,
     getOneUsersRequestFeed,
     createUsersRequestFeed, //export all cntrollers
     updateUsersRequestFeed,
     deleteUsersRequestFeed
 };