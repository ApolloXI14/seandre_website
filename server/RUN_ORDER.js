const scriptArray = [ './createStoriesCollection.js', 'fixHomeLinks.js', 'updateActiveViews.js', 'homesUpdate.js', 'createViewUserRole.js']

for (script in scriptArray) {
	try {
		load(script);
	} catch (err) {
		throw new Error(`Error running scripts: ${err}`)
	}
}


