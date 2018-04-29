function loop(value, condition, update, body){
	let current = value
	while (condition(current)) {
		body(current)
		current = update(current)
	}
	return current
}
