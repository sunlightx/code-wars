// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!

// function doubleChar(str) {
// 	const array = str.split('')
// 	for (let i = 0; i < array.length; i++) {
// 		array[i] += array[i]
// 	}
// 	return array.join('')
// }

function doubleChar(str) {
	return str
		.split('')
		.map(el => el + el)
		.join('')
}