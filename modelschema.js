var mongoose=require('mongoose');
const postschema=mongoose.Schema(
    {
    contact_name: {type: String,required: "Contact Name is required"},
    contact_email:{type: String,required: "Contact Email is required"},
    password:     {type: String,required: "Password is required"}},
    {collection: 'master'}
);
module.exports=mongoose.model("emp",postschema);


    