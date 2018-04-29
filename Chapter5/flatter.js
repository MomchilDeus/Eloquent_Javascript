let arrays = [[1, 2, 3], [4, 5], [6]]
function flatter(array){
	return array.reduce((a, b) => a.concat(b))
}
