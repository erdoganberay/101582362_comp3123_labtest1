const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
function lowerCaseWords(mixedArray) {
	const result = [];
	return new Promise((res, rej) => {
		if (mixedArray == null){
			rej(new Error("Invalid input"))
		}
		for (const item of mixedArray) {
			if (typeof item === "string"){
				result.push(item.toLowerCase());
			}
		}
		console.log(result);
		res(result);
	})
}

lowerCaseWords(mixedArray);
