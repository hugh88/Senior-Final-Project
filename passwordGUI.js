const readline=require('readline');
const testString=require('./string');


function getString(){
    let password = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    password.question("Choose a password", function(str){
        let passesAllChecks = true;

        //Conditional Statements here.
        if(exports.checkAll(str) === false){
          passesAllChecks = false;
             }

        if(!passesAllChecks){
          console.log("\nTry again\n");
            password.close();
             getString();
        }
        else{
            console.log("\nThis password fits all the requirements\n");
             password.close();
        }
    });
}

getString();
