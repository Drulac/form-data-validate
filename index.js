const validator = require('validator');
validator.isNotempty = function(str)
{
	return !validator.isEmpty(str);
}

const Validate = function(inputs){
	return Object.getOwnPropertyNames(inputs).reduce(
		(sum, e)=>{
			const assert = validator['is'+e.charAt(0).toUpperCase()+e.toLowerCase().substr(1)];

			return sum && inputs[e].reduce((sum, e)=>{
				return sum && (e === undefined ? false : assert(e))
			}, true);
		},
		true
	);
}

module.exports = Validate;