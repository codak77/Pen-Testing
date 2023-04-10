const writeFile = require('./writeFile');


function useRegex(responseData, userName) {
    if (responseData.includes('Invalid Username/Password')) {
        let username = userName;
        let dataDigits = 'Invalid Username/Password'

        console.log(username, dataDigits);

        let fileContent = `${username} ${dataDigits}\n`;
        writeFile(fileContent);
    } else {
        let username = userName;
        // let username = responseData.match(/([a-z]*\.[a-z]*|[A-Za-z0-9]+[0-9]{4,5})/);
        let dataDigits = responseData.match(/-?[0-9]{1,3}\.[0-9]{1,3} [A-Za-z]*/g);
        
        console.log(username, dataDigits);
        
        let fileContent = `${username} ${dataDigits}\n`;
        writeFile(fileContent);
    }
}


module.exports = useRegex;