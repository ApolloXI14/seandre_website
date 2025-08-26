var makeData = (rows) => {
	let str = "";
	for (var i = 1; i <= rows; i++) {
			str = str.concat(JSON.stringify({
					_id: i,
					data: i.toString()
			}) + ', ')
	}
	return str;
}
