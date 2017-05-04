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
        throw new PasswordMessage("Password min is 8 characters");
      }
      else if(str.length > 20){
        throw new PasswordMessage("Password max is 20 characters");
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
  let hasUpper = false;
  try{
    for(let x=0;x < str.length;x++){
      if(str[x] >= 65 && str[x] <= 90){
      hasUpper = true;
          throw new PasswordMessage("Has uppercase");
          }
      }
      if(hasUpper === false){
          throw new PasswordMessage("Needs a uppercase");
      }
  }
  catch(e){
      console.log(e.name+": "+e.message);
      return hasUpper;
  }
}
exports.containsLower =function(str){
  let hasLower = false;
  try{
    for(let x=0;x < str.length;x++){
      if(str[x] >= 97 && str[x] <= 122){
      
}


exports.containsNumerical =function(str){

}


exports.containsSpecial =function(str){

}
