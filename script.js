// Complete the isValid function below.
function isValid(s) {
    var arrayOfLetters = [];
    for(var i in s){
        if(s[i] in arrayOfLetters){
            arrayOfLetters[s[i]] += 1;
        }else{
            arrayOfLetters[s[i]] = 1 
        }
    }
    var letters = Object.keys(arrayOfLetters);
    var repeating = Object.values(arrayOfLetters);
    // var repeating = [4,2,2];
    var bigarray = [];
    for(var i in repeating){
        if(bigarray[repeating[i]] == undefined){
            bigarray[repeating[i]] = [];
            bigarray[repeating[i]].push(letters[i])
            
        }else{
            bigarray[repeating[i]].push(letters[i])  
        }   
    }
    // return bigarray;
    
    function checkval(arr){
        var smallarray = [];
        for(var i in arr){
            if(arr[i] != undefined){
                smallarray.push(i)
            }
        };
        var bool = false;
        if( 
        (Object.keys(bigarray).length == 1) 
        ||
        ( (smallarray.length == 2) && (smallarray.includes(1)) )
        ||
        ( (smallarray.length == 2) && (arr[smallarray[0]].length == 1 || arr[smallarray[0]].length == 1) )
        )
        {
              bool =  true  
        }
        return bool
    }
    if(checkval(bigarray)){
        return 'YES'  
    }else{
        return 'NO'  
    }
}
