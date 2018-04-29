// Though the nesting is awkward, I'm reusing characterScript
function dominantDirection(text) {
  let script = countBy(text, char => {
    let script = characterScript(char.codePointAt(0))
    return script ? script : "none"
  }).sort((a, b) => b.count - a.count)[0]
  return script.name.direction
}
