const scriptArray = ['createContentCollection.js'];

return scriptArray.forEach( (script) => {
	try {
		return load(script);
	} catch(err) {
		throw new Error(`Error running scripts: ${err}`)
	}
})
