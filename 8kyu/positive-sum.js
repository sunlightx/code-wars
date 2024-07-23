function positiveSum(arr) {
	return arr.filter(num => num > 0).reduce((a, b) => a + b)
}

console.log(positiveSum([]))
