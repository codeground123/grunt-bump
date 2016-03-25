// Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm.
// Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a).
// Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.

function LetterChanges(str){

    var alphabets = "abcdefghijklmnopqrstuvwxyz";
    var vowels = "aeiou";
    var newStr = "";

    for(var i=0;i<str.length;i++){

        var index = alphabets.indexOf(str[i]);

        if(index === 25){
            newStr+= "A";
        } else if (index !==-1){
             if(vowels.indexOf(alphabets[index+1]) !==-1){
                 newStr+= alphabets[index+1].toUpperCase();
             } else {
                 newStr +=alphabets[index+1];
             }

        } else{
            newStr+=str[i];
        }
    }
   console.log(newStr);
}
LetterChanges("zppld");