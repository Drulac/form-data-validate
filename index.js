const validator = require('validator');
const siret = require('siret');

validator.isNotempty = function(str){
	return !validator.isEmpty(str);
}
validator.isSiret = function(str){
	return siret.isSIRET(str);
}
validator.isSiren = function(str){
	return siret.isSIREN(str);
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