export const jsonToArray = (json) => {
	let array = [];
	let values = Object.values(json); // transform json to array
	Array.prototype.push.apply(array, values); // for each apply push in array
	return array;
}