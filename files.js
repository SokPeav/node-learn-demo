const fs = require('fs');





// For writing file
// fs.writeFile("./assets/joke.txt",'U fking joker',()=>{
//     console.log("success");
// })


// Read file
// fs.readFile("./assets/joke.txt",(err,data)=>{
//     if(err)
//     {
//         console.log(err);
//     }
//     else{
//         console.log(data.toString());
//     }
// })


// Create diretory
// fs.mkdir('./assets',(err)=>{
//     console.log(err);
    
// })

// Remove directory
//fs.rmdir('./assets',(err)=>{
//     console.log(err);
    
// })


//Delete file
//fs.unlink()


// For readStream with large file
const readStream = fs.createReadStream('./assets/joke.txt',{encoding: 'utf8'})
const writeStream = fs.createWriteStream('./assets/jokers.txt')
// readStream.on('data',(chunk) =>{
//     console.log(chunk);
// })
// pipe = use it to copy the thing file to another file 
readStream.pipe(writeStream)




// console.log(__dirname);
// console.log(__filename);