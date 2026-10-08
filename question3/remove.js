const fs = require('fs');
var dir = './Logs';

try {
	const logs = fs.readdirSync(dir);
	for (const log of logs) {
		const currentTime = new Date();
		console.log(`${currentTime} - Removing log file ${log}`);
		fs.rmSync(`${dir}/${log}`);
	}
	fs.rmdirSync(dir);

}catch(err){
	console.log(err)
}
