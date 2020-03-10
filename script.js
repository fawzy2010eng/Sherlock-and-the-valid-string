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
    var repeating = Object.values(arrayOfLetters)
    var bigarray = [];
    for(var i in repeating){
        if(bigarray[repeating[i]] == undefined){
            bigarray[repeating[i]] = [];
            bigarray[repeating[i]].push(letters[i])
            
        }else{
            bigarray[repeating[i]].push(letters[i])  
        }   
    }
    function checkval(arr){
        var smallarray = [];
        var len = 0;
        for(var i in arr){
            if(arr[i] != undefined){
                len += 1;
                smallarray.push(i)
            }
        };
        var bool = false;
        if( (smallarray.length == 2) && (Math.abs(smallarray[0] - smallarray[1]) == 1) ){
              bool =  true  
        }
        return bool
    }
    console.log(bigarray);
    if(Object.keys(bigarray).length == 1 || (checkval(bigarray)) ){
        return('YES')  
    }else{
        return('NO')  
    }
}      
