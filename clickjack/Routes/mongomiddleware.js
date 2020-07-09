var mongo=require('../Mongo/mongodriver.js');
module.exports.open_con=()=>mongo.open_connection();
module.exports.close_con=()=>mongo.close_connection();