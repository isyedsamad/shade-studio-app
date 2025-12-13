const mongoose = require('mongoose');
const mongo_uri = process.env.MONGODB_URI;
const connection = {
    isConnected: ''
};
async function dbConnect() {
    if(connection.isConnected) {
        return;
    }
    try {
        const db = await mongoose.connect(mongo_uri || '');
        connection.isConnected = mongoose.connection.readyState;
    } catch (error) {
        console.log('Database Connection Error: ' + error);
        process.exit(1);
    }
}
export default dbConnect;