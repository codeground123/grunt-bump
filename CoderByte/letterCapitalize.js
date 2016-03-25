// Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word.
// Words will be separated by only one space.

function LetterCapitalize(str){


    var words = str.split(' ');
    var newStr = [];
    for(var i=0; i<words.length; i++){
        newStr.push(words[i].charAt(0).toUpperCase() + words[i].slice(1));
    }
    console.log(newStr.join(" "));
}

LetterCapitalize("the brown fox jumped over the red gate");