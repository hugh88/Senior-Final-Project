const readline = require('readline');
const testString  =require('./string');


function getString(){
    let password = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    password.question("Set new password", function(str){
        let passesAllChecks = true;

        //Conditional Statements here.


        if(!passesAllChecks){
            console.log("\nTry again\n");
            password.close();
            getString();
        }
        else{
            console.log("\nPassword is acceptible\n");
            password.close();
        }
    });
}

getString();
