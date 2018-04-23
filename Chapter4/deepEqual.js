// I think it works
function deepEqual(obj1, obj2){
	for (let el in obj1){
		if (typeof obj1[el] == "object" && typeof obj2[el] == "object") {
			deepEqual(obj1[el], obj2[el])
			continue
		}
		if (obj1[el] !== obj2[el]) return false
	}
	return true
}
