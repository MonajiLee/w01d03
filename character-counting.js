function countLetters(string){
    var noSpaces = string.split(" ").join("").toLowerCase();
    var letters = noSpaces.split("");
    var uniqueCounterObj = {}
    for (var i = 0 ; i < letters.length ; i++){
            if (uniqueCounterObj[letters[i]] == undefined){
                uniqueCounterObj[letters[i]] = 1;
            } else {
                uniqueCounterObj[letters[i]] += 1;
            }
        } 
        
       // (isNaN(uniqueCounterObj[letters[i]]) ? 1 : uniqueCounterObj[letters[i]] + 1);
 
        // if (uniqueLetters.indexOf(letters[i]) == -1){
        //     var individualLetters = uniqueLetters.push(letters[i]);
        //     uniqueCounterObj[individualLetters]
        // }  
        return uniqueCounterObj;
}

console.log(countLetters("sweetie"))
// go through given string
// identify unique characters
// count number of each unique character
// output as object: character and number of times 