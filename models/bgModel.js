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
    style_code: {
        type: String,
        required: true,
    },
    tailwind_code: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    isDark: {
        type: Boolean,
        required: true,
    },
    downloads: {
        type: Number,
        default: 0
    }
})
const bgModel = mongoose.models.bg_design || mongoose.model('bg_design', bgSchema);
export default bgModel;