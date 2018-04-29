<<<<<<< HEAD
function deepEqual(obj1, obj2){
  console.log(`obj1 is ${obj1}, obj2 is ${obj2}`)
  for(let el1 in obj1){
    for(let el2 in obj2){
      console.log(obj1[el1], obj2[el2])
      if (typeof obj1[el1] == "object" && typeof obj2[el2] == "object") deepEqual(obj1[el1], obj2[el2])
      else if (obj1[el1] !== obj2[el2]) return false
      else if (el1 != Object.keys(obj1)[Object.keys(obj1).length-1] && 
               el2 != Object.keys(obj2)[Object.keys(obj2).length-1]) {
        return true
      }
      else break
    }
  }
  return true
}
// I have flawed logic somewhere
// it's the loops, one continues and the other doesn't, I need to somehow sync the item being compared from the first object with the second object
=======
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
>>>>>>> 3f0215ec3d2088f74eaf6ef4275bbaad9eecbe27
