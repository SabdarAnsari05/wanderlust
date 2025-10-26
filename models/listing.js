const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema ({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
    type: String,
    default: "https://unsplash.com/photos/white-concrete-building-g39p1kDjvSY",
    set: (v) =>
        v === "" 
        ? "https://unsplash.com/photos/white-concrete-building-g39p1kDjvSY" 
        : v,
    },
    price: {
        type: Number,
        required: true,
        default: 0,
    },
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;