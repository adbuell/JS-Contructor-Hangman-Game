
//Sets up the array of words that can be guessed.
var words = ["soccer", "golf", "tennis", "basketball", "football", "chess", "checkers", "Badmitton"];

//Sets up a function that chooses the word and returns it back. Exports is used so that this function is accessible within other JS files.
exports.chooseWord = function(){
	var randNum = Math.floor((Math.random()*words.length)+1);
	return words[randNum];
}
