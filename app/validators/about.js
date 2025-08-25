export const formValidationMap = {
	name: {
		validator: /\w+'?\w+\s?/g,
		isValid: (value) => value === value.match(/\w+'?\w+\s?/g)?.reduce( (word, currentWord) => word = word.concat(currentWord), ''),
		errorMessage: 'Please correct the name.'
	},
	email: {
		validator: /[\w+.]+@\w+\.[a-z]{2,3}/,
		isValid: (value) => value.match(/[\w+.]+@\w+\.[a-z]{2,3}/) && value === value.match(/[\w+.]+@\w+\.[a-z]{2,3}/)[0],
		errorMessage: 'Please format the email correctly.'
	},
	message: {
		validator: /\w+.?\s?|\$\d+\s+.+|\(/g,
		isValid: (value) => value === value.match(/\w+.?\s?|\$\d+\s+.+|\(/g)?.reduce( (word, currentWord) => word = word.concat(currentWord), ''),
		errorMessage: 'Please remove invalid characters from the message.'
	}
}

export default formValidationMap
