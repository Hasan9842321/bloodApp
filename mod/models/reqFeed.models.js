const {
    default: mongoose
} = require("mongoose");


const requestfeedSchema = mongoose.Schema(

    {


        bloodtype: {
            type: String,
            required: true
        },
        units: {
            type: Number,
            required: true
        },

        reason: {
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
        image: {

            type: mongoose.Schema.Types.Mixed,

        },

        destination: {
            type: String,
            required: true,
        }



    }




);


module.exports = mongoose.model("requestfeed", requestfeedSchema);