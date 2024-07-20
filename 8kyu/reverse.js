function digitize(n) {
	let array = n.toString().split('').reverse()
	for (let i = 0; i < array.length; i++) {
		array[i] = Number(array[i])
	}
	return array
}

console.log(digitize(123))
