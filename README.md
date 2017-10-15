# form-data-validate
Perform simple validation on data

## Usage

run
```bash
npm i form-data-validate --save
```
and enjoy :smiley:
```js
const validate = require('form-data-validate');

const form = {
	familyName: 'dujardin',
	name: 'jean',
	siret: '0000',
	email: 'jean.dujardin@frama.soft',
	password: 'test'
};

const formIsValid = validate({
	notEmpty: [
		form.name,
		form.familyName,
		form.password
	],
	Numeric:[
		form.siret
	],
	Email:[
		form.email
	]
});
```

`validate` function return `true` or `false`, if the data is valid or not.

## Data Type

This lib use [Validator](https://github.com/chriso/validator.js), so the list of data types is from [here](https://github.com/chriso/validator.js#validators), we have just add the `notEmpty` type.

| Validator | Description |
| --------- | ----------- |
**After(str [, date])** | check if the string is a date that's after the specified date (defaults to now).
**Alpha(str [, locale])** |	check if the string contains only letters (a-zA-Z). <br><br>See at bottom of this tables for `locale`.
**Alphanumeric(str [, locale])** |	check if the string contains only letters and numbers. <br><br>See at bottom of this tables for `locale`.
**Ascii(str)** | check if the string contains ASCII chars only.
**Base64(str)** | check if a string is base64 encoded.
**Before(str [, date])** | check if the string is a date that's before the specified date.
**Boolean(str)** | check if a string is a boolean.
**ByteLength(str, options)** | check if the string's length (in UTF-8 bytes) falls in a range.<br><br>`options` is an object which defaults to `{min:0, max: undefined}`.
**CreditCard(str)** | check if the string is a credit card.
**Currency(str, options)** | check if the string is a valid currency amount.<br><br>`options` is an object which defaults to `{symbol: '$', require_symbol: false, allow_space_after_symbol: false, symbol_after_digits: false, allow_negatives: true, parens_for_negatives: false, negative_sign_before_digits: false, negative_sign_after_digits: false, allow_negative_sign_placeholder: false, thousands_separator: ',', decimal_separator: '.', allow_decimal: true, require_decimal: false, digits_after_decimal: [2], allow_space_after_digits: false}`.<br>Note: The array `digits_after_decimal` is filled with the exact number of digits allowd not a range, for example a range 1 to 3 will be given as `[1, 2, 3]`.
**DataURI(str)** | check if the string is a data uri format.
**Decimal(str, options)** | check if the string represents a decimal number, such as 0.1, .3, 1.1, 1.00003, 4.0, etc.<br><br>`options` is an opject which defaults to `{force_decimal: false, decimal_digits: '1,', locale: 'en-US'}`<br><br>See at bottom of this tables for `locale`.<br><br>Note: `decimal_digits` is given as a range like '1,3', a specific value like '3' or min like '1,'.
**DivisibleBy(str, number)** | check if the string is a number that's divisible by another.
**Email(str [, options])** | check if the string is an email.<br><br>`options` is an object which defaults to `{ allow_display_name: false, require_display_name: false, allow_utf8_local_part: true, require_tld: true }`.<br>If` allow_display_name` is set to true, the validator will also match Display Name <email-address>.<br>If `require_display_name` is set to true, the validator will reject strings without the format Display Name <email-address>.<br>If `allow_utf8_local_part` is set to false, the validator will not allow any non-English UTF8 character in email address' local part.<br>If `require_tld` is set to false, e-mail addresses without having TLD in their domain will also be matched.
**Empty(str)** | check if the string has a length of zero.
**FQDN(str [, options])** | check if the string is a fully qualified domain name (e.g. domain.com).<br><br>`options` is an object which defaults to `{ require_tld: true, allow_underscores: false, allow_trailing_dot: false }`.
**Float(str [, options])** | check if the string is a float.<br><br>`options` is an object which can contain the keys `min`, `max`, `gt`, and/or `lt` to validate the float is within boundaries (e.g. `{ min: 7.22, max: 9.55 }`) it also has locale as an option.<br><br>min and max are equivalent to 'greater or equal' and 'less or equal', respectively while gt and lt are their strict counterparts.<br><br>See at bottom of this tables for `locale`.
**FullWidth(str)** | check if the string contains any full-width chars.
**HalfWidth(str)** | check if the string contains any half-width chars.
**Hash(str, algorithm)** | check if the string is a hash of type algorithm.<br><br>Algorithm is one of `['md4', 'md5', 'sha1', 'sha256', 'sha384', 'sha512', 'ripemd128', 'ripemd160', 'tiger128', 'tiger160', 'tiger192', 'crc32', 'crc32b']`
**HexColor(str)** | check if the string is a hexadecimal color.
**Hexadecimal(str)** | check if the string is a hexadecimal number.
**IP(str [, version])** | check if the string is an IP (version 4 or 6).
**ISBN(str [, version])** | check if the string is an ISBN (version 10 or 13).
**ISSN(str [, options])** | check if the string is an ISSN.<br><br>`options` is an object which defaults to `{ case_sensitive: false, require_hyphen: false }`.<br>If case_sensitive is true, ISSNs with a lowercase 'x' as the check digit are rejected.
**ISIN(str)** | check if the string is an ISIN (stock/security identifier).
**ISO8601(str)** | check if the string is a valid ISO 8601 date.
**ISRC(str)** | check if the string is a ISRC.
**In(str, values)** | check if the string is in a array of allowed values.
**Int(str [, options])** | check if the string is an integer.<br><br>`options` is an object which can contain the keys `min` and/or `max` to check the integer is within boundaries (e.g. `{ min: 10, max: 99 }`). `options` can also contain the key `allow_leading_zeroes`, which when set to false will disallow integer values with leading zeroes (e.g. `{ allow_leading_zeroes: false }`). Finally, `options` can contain the keys `gt` and/or `lt` which will enforce integers being greater than or less than, respectively, the value provided (e.g. `{gt: 1, lt: 4}` for a number between 1 and 4).
**JSON(str)** | check if the string is valid JSON (note: uses JSON.parse).
**LatLong(str)** | check if the string is a valid latitude-longitude coordinate in the format lat,long or lat, long.
**Length(str, options)** | check if the string's length falls in a range.<br><br>`options` is an object which defaults to `{min:0, max: undefined}.` Note: this function takes into account surrogate pairs.
**Lowercase(str)** | check if the string is lowercase.
**MACAddress(str)** | check if the string is a MAC address.
**MD5(str)** | check if the string is a MD5 hash.
**MobilePhone(str, locale)** | check if the string is a mobile phone number<br><br>See at bottom of this tables for `locale`.
**MongoId(str)** | check if the string is a valid hex-encoded representation of a MongoDB ObjectId.
**Multibyte(str)** | check if the string contains one or more multibyte chars.
**Numeric(str)** | check if the string contains only numbers.
**Port(str)** | check if the string is a valid port number.
**PostalCode(str, locale)** | check if the string is a postal code,<br><br>See at bottom of this tables for `locale`.
**SurrogatePair(str)** | check if the string contains any surrogate pairs chars.
**URL(str [, options])** | check if the string is an URL.<br><br>`options` is an object which defaults to `{ protocols: ['http','https','ftp'], require_tld: true, require_protocol: false, require_host: true, require_valid_protocol: true, allow_underscores: false, host_whitelist: false, host_blacklist: false, allow_trailing_dot: false, allow_protocol_relative_urls: false }`.
**UUID(str [, version])** | check if the string is a UUID (version 3, 4 or 5).
**Uppercase(str)** | check if the string is uppercase.
**VariableWidth(str)** | check if the string contains a mixture of full and half-width chars.
**Whitelisted(str, chars)** | checks characters if they appear in the whitelist.
| | locale is one of `[ 'AT', 'AU', 'BE', 'CA', 'CH', 'CZ', 'DE', 'DK', 'DZ', 'ES', 'FI', 'FR', 'GB', 'GR', 'IL', 'IN', 'IS', 'IT', 'JP', 'KE', 'LI', 'MX', 'NL', 'NO', 'PL', 'PT', 'RO', 'RU', 'SA', 'SE', 'TW', 'US', 'ZA', 'ZM' ]` OR `any`. If `any` is used, function will check if any of the locals match.
