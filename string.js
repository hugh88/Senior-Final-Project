var exports = module.exports = {};

function PasswordMessage(m){
let this.name = "Password Message";
let this.message = m;
}

function inRange(char,min,max){
    let unicode = char.charCodeAt(0);
    let char = (min >= 8 && max <= 20)

}

exports.checkLength = function(str){
    let valid = (str.length >= 8 && str.length <= 20);
    try{
        if(str.length < 8){
            throw new PasswordMessage("Password max is 20 characters");
        }
        else if(str.length > 20){
            throw new PasswordMessage("Password min is 8 characters");
        }
        else{
            throw new PasswordMessage("Password character length is correct");
        }
    }
    catch(e){
        console.log(e.name+": "+e.mestsage);
        return valid;
    }
}


exports.containsUpper =function(str){

}


exports.containsLower =function(str){

}


exports.containsNumerical =function(str){

}


exports.containsSpecial =function(str){

}
