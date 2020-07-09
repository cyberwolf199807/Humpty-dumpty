var validUrl = require('valid-url');
var url=require('url');
module.exports=(url)=>
{
if (validUrl.isUri(url)){
    return 1;
} 
else {
    return -1;
}
}