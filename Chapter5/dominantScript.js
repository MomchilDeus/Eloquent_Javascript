function testy(text){
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0))
    return script ? script.name : "none"
  })
  let totalCount = scripts.reduce((a, b) => a.count + b.count)
  let dominantScript = scripts.sort((a, b) => b.count - a.count)[0].name
  let dominantCount = scripts[0].count
  let percentage = dominantCount/totalCount * 100
  return {dominantScript, percentage}
}
