var exports = module.exports = {};

function PasswordMessage(m){
    let this.name="Password Message";
    let this.message=m;
}

function inRange(char,min,max){
  let unicode = char.charCodeAt(0);
     if(unicode >= min && unicode <= max){
       return true;
     }
     else{
        return false;
     }
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


exports.containsUpper=function(str){
  let hasUpper=false;
  try{
    for(let x=0;x < str.length;x++){
      if(str[x] >= 65 && str[x] <= 90){
      hasUpper=true;
        throw new PasswordMessage("Has uppercase");
          }
      }
      if(hasUpper===false){
        throw new PasswordMessage("Needs a uppercase");
      }
  }
  catch(e){
      console.log(e.name+": "+e.message);
      return hasUpper;
  }
}
exports.containsLower=function(str){
  let hasLower=false;
  try{
    for(let x=0;x < str.length;x++){
      if(str[x] >= 97 && str[x] <= 122){
        hasLower=true;
          throw new PasswordMessage("Has lowercase character!");
          }
      }
      if(hasLower===false){
          throw new PasswordMessage("Does not have lowercase character!");
      }
  }
  catch(e){
      console.log(e.name+": "+e.message);
      return hasLower;
  }
}

exports.containsNumerical=function(str){
  let hasNumerical=false;
  try{
    for(let x=0;x < str.length;x++){
    if(str[x] >= 48 && str[x] <= 57){
    hasNumerical=true;
              throw new PasswordMessage("Has numerical character!");
          }
      }
      if(hasNumerical===false){
          throw new PasswordMessage("Does not have numerical character!");
      }
  }
  catch(e){
      console.log(e.name+": "+e.message);
      return hasNumerical;
  }
}



exports.containsSpecial=function(str){
  hasSpecial=false;
  let special=[33,64,35,36,37,94,38,42]
  try{
    for(let x=0;x < str.length;x++){
    for(let c=0;c < special.length;c++){
      if(str[x].charCodeAt(0)==special[c]){
          hasSpecial=true;
          throw new PasswordMessage("Has a special character");
        }
       }
      }
      if(hasSpecial===false){
          throw new PasswordMessage("Needs a special character");
      }
  }
  catch(e){
      console.log(e.name+": "+e.message);
      return hasSpecial;
  }
}

exports.checkAll=function(str){
  let state=true;
  let array=[exports.checkLength(str),exports.containsUpper(str),exports.containsSpecial(str),exports.containsLower(str),exports.containsNumerical(str)];
   for(let a=0;a<array.length;a++){
      if(array[a]===false){
      state=false;
    }
  }
  return state;
}
