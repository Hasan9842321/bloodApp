const {
    default: mongoose
} = require("mongoose");
const {
    stringify
} = require("uuid");

const appUserSchema = mongoose.Schema(

    {
        id: {
            type: String,
            require: true
        },

        name: {
            type: String,

            require: true
        },
        age: {
            type: Number,
            validate: {
                validator: (val) => {
                    if (val < 0 || val > 150) {
                        throw new Error("age is invalid")
                    }
                }
            }

        },
        passward: {
            type: String,
            require: true,
        },
        gender: {
            type: String,
            enum: ['male', 'female'],
            required: [true, "it will male or female"]
        },
        BloodGroup: {
            type: String,
            enum: ['ab+', 'ab-', 'a+', 'a-', 'o+', 'o-', 'b+', 'b-', 'AB+', 'AB-', 'A+', 'A-', 'O+', 'O-', 'B=', 'B-'],
            required: [true, "please give valid bloodGroup"]
        },
        address: {
            type: String,
            maxlength: [100, "adress maximum lenght 100"],
        },
        phon: {
            type: String,
            required: [true, 'User phone number required'],
            validate: {
                validator: function (v) {
                    return /\d{11}/.test(v);
                },
                message: (props) => `${props.value} is not a valid phone number!`
            },
        },
        nidbriNo: {
            type: Number,
            require: true,
            unique: [true, "nid or birth registration number must be unique"]
        },

        image: {

            type: mongoose.Schema.Types.Mixed,

        },

        createOn: {
            type: Date,
            default: Date.now,
        }
    }
);


module.exports = mongoose.model("appUsercollection", appUserSchema);