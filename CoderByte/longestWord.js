/**
 * Created by rupakulr on 3/11/2016.
 */

function longestWord(str){

    var words = str.split(' ');
   var longWord = "";

    for(var i=0;i<words.length;i++){
        if(words[i].length > longWord.length){
            longWord = words[i];
        }
    }
    console.log(longWord);
}

longestWord("the brown fox jumped over the red seiling");