function listToArray(list){
	let arr = []
	function delistify(list){
		if(!list) return null
		arr.push(list.value)
		rest = delistify(list.rest)
	}
	delistify(list)
	return arr
}
