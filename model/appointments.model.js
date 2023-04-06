const mongoose=require("mongoose");

const appointmentSchema=mongoose.Schema({
    name:String,
    imageURL:String,
    specialization:String,
    experience:String,
    location:String,
    date:Date,
    slots:Number,
    fee:Number
});

const AppointmentModel=mongoose.model("appointment",appointmentSchema);

module.exports={
    AppointmentModel
}