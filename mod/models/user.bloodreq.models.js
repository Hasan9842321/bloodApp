const {
    default: mongoose
} = require("mongoose");


const centerBloodRequestSchema = mongoose.Schema(

    {


        unitsOfBloodType: [{
            "bName": {
                type: String,
                required: true
            },
            "units": {
                type: Number,
                required: true
            }



        }],

        Accident: {
            type: String,
            required: true,
        },
        phon: {
            type: Number,
            required: true,
        },
        createOn: {
            type: Date,
            default: Date.now,

        },

        destination: {
            type: String,
            required: true,
        }



    }




);


module.exports = mongoose.model("centerBloodRequest", centerBloodRequestSchema);