const express = require("express");
const { AppointmentModel } = require("../model/appointments.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const appointmentRouter = express.Router();

appointmentRouter.post("/register", async (req, res) => {
    const { name, imageURL, specialization, experience, location, date, slots, fee } = req.body;
    try {
        const appointment = new AppointmentModel({ name, imageURL, specialization, experience, location, date, slots, fee });
        await appointment.save();
        res.send({ "msg": "Appointments Saved" })
    } catch (err) {
        res.send({ "msg": err })
    }
})

appointmentRouter.get("/", async (req, res) => {
    try {
        const appointment = await AppointmentModel.find({})
        res.send({ appointment })
    } catch (err) {
        res.send({ "msg": err })
    }
})

module.exports = {
    appointmentRouter
}