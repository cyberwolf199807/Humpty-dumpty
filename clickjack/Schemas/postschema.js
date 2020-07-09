// var mongoose=require('mongoose');
// var schema=new mongoose.Schema({
//     title: {type: String, required: "True", maxlength: 10},
//     body:  {type: String, required: "True", maxlength: 20}},
//     {collection: "mes"}
// );
// module.exports=mongoose.model('schem',schema);
var mongoose=require('mongoose');
const postschema=mongoose.Schema(
    {
    title: {type: String,require: "title"},
    password:{type: String,required: "body"},
    },
    {collection: 'mes'}
);
module.exports=mongoose.model("postschema1",postschema);


    