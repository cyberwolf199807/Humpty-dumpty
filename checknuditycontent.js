module.exports=(url)=>
{
    
list_of_words = ['smut', 'bawdiness', 'dirt', 'erotica',  'peeled', 'stark', 'stark-naked', 'stripped',
'unattired', 'unclad', 'unclothed', 'uncovered', 'undraped', 'undressed', 'wearing only a smile',
'without a stitch', 'fuck', 'rape','Pornstar', 'Porn', 'https://www.porn.com','https://www.pornhub.com','https://redtube.com','https://www.xhamster.com','Amature', 'Tabbo', 'Sex', 'Cheating', 'Maid', 'Wet', 'Pussy', 'Gangbang', 'Roleplay','Blow Job', 'blow job', 'cum', 'dick', 'Dick', 'dildo', 'Dildo', 'orgasm', 'Orgasm', 'penius', 'Penius','dishabille', 'raw', 'skin', 'au naturel', 'bare', 'bare-skinned', 'buck naked', 'disrobed', 'exposed','Pornstar', 'Porn', 'Amature', 'Tabbo', 'Sex', 'Cheating', 'Maid', 'Wet', 'Pussy', 'Gangbang', 'Roleplay','Blow Job', 'blow job', 'cum', 'dick', 'Dick', 'dildo', 'Dildo', 'orgasm', 'Orgasm', 'penius', 'Penius','porno', 'sexploitation', 'X-rated material', 'X-rated movie', 'adult material', 'adult movie'];
var flag=true;
list_of_words.map((word)=>{
    if((word).includes(url))
    {flag=true;}
})

    var spawn = require("child_process").spawn; 
    var process = spawn('python',["./detectmalcontent.py", 
                            url
                            ] ); 
    var flag=list_of_words.includes(url);
    process.stdout.on('data', function(data) { 
    return flag || data.toString().includes("porn");   })}
        
           
