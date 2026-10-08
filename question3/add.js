const fs = require('fs');
var dir = './Logs';

if (!fs.existsSync(dir)) {
	fs.mkdirSync(dir);
}

process.chdir(dir);

for (let i = 1; i < 11; i++) {
	const currentTime = new Date();
	const filename = `log${i}.txt`;
	console.log(`${currentTime} - Creating log file ${filename}`);
	fs.writeFileSync(filename, `Don Joe${i}`);
}

