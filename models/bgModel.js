const mongoose = require('mongoose');
const bgSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true,
    },
    downloads: {
        type: Number,
        default: 0
    }
})
const bgModel = mongoose.models.bgdesign || mongoose.model('bgdesign', bgSchema);
export default bgModel;