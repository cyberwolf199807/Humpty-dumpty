const mongoose=require('mongoose');
const schema=require('./modelschema.js');
var bodyparse=require('body-parser');
async function operation(url,credentials)
{ 
    
await mongoose.connect(url,{ useUnifiedTopology: true,useNewUrlParser: true }).then(()=>{flag=1;console.log("Loggedin")});

await new schema(credentials).save();

mongoose.connection.close();
}
module.exports={operation};

