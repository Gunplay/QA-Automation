export function isValidEmail(email) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isGmail(email) {
	return /^[^\s@]+@gmail\.com$/.test(email.toLowerCase());
}

export function isPositiveNumber(value) {
	return typeof value === 'number' && value > 0;
}

export function isNonEmptyString(value, minLen = 1, maxLen = 255) {
	return (
		typeof value === 'string' &&
		value.length >= minLen &&
		value.length <= maxLen
	);
}
