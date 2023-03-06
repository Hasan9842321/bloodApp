const {
    default: mongoose
} = require("mongoose");


const complainBoxSchema = mongoose.Schema(

    {


        complainType: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true,
        },
        image: {

            type: mongoose.Schema.Types.Mixed,

        },


        createOn: {
            type: Date,
            default: Date.now,

        },





    }




);


module.exports = mongoose.model("complainsBox", complainBoxSchema);