const {
    default: mongoose
} = require("mongoose");


const centerBloodDonateSchema = mongoose.Schema(

    {


        centerName: {
            type: String,
            required: true
        },
        Name: {
            type: String,
            required: true
        },
        BloodGrup: {
            type: String,
            required: true
        },


        Reciver: {
            type: String,
            required: true,
        },


        destination: {
            type: String,
            required: true,
        },

        description: {
            type: String

        }



    }




);


module.exports = mongoose.model("centerBloodDonate", centerBloodDonateSchema);