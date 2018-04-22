function range(start, end, step){
  let arr = []
  if(start > end && step < 0){
    while (start >= end) {
      arr.push(start)
      start += step
    }  
  } else if (start < end && step > 0){
    while(start <= end){
      arr.push(start)
      start += step || 1
    }
  } else return "something went wrong"
  return arr
}
