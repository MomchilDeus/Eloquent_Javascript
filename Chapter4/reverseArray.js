function reverseArray(arr){
  let newArr = []
  for(let el of arr){
    newArr.unshift(el)
  }
  return newArr
}
