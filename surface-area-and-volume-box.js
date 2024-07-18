// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

// My solution
function getSize(width, height, depth) {
	const volume = width * height * depth
	const area = 2 * (width * height) + 2 * (width * depth) + 2 * (depth * height)
	return [area, volume]
}
