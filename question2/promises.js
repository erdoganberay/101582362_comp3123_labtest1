const resolvedPromise = () => {
	return new Promise((res, _) => {
		setTimeout(() => {
			let successJSON = { 'message: ': 'delayed success!' }
			res(successJSON);
		}, 500)
	})
}

const rejectedPromise = () => {
	return new Promise((_, rej) => {
		setTimeout(() => {
			let failureJSON = { 'error: ': 'delayed exception!' }
			rej(failureJSON);
		}, 500)
	})
}


const success = await resolvedPromise();
console.log(success);

try {
	await rejectedPromise();
} catch (error) {
	console.log(error);
}
