export function formatDollar(value){
    var finalString ="$ "
    var listByDec = value.toString().split('.')
    if(listByDec.length==1){
      finalString+=value+".00"
    }
    else if(listByDec[1].length==1){
      finalString+=value+"0"
    }
    else if(listByDec[1].length>3){
      var trim = listByDec[1].subString(0,2)
      finalString += listByDec[0]+'.'+ trim
    }
    else{
      finalString+=value
    }
  
    return finalString;
  }
  