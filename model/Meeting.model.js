const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const meetingSchema = new Schema({
    participants: { type: [String], required: true },
    platform: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
}, {
    timestamps: true,
})

module.exports = Meeting = mongoose.model("Meetings", meetingSchema);