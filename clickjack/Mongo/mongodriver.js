var mongoose=require('mongoose');
function open_connection(){
mongoose.connect(process.env.URL,{useNewUrlParser: true, useUnifiedTopology: true }).then(()=>console.log("Logged in to Mongo Server"));
}
function close_connection(){
mongoose.connection.close();
}
module.exports={open_connection,close_connection};