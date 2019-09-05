var debug = require('debug')('train-controller:server');

class raildriver {
	static fs = require('fs');
	static config = require('./config.json');
	static sendFile = this.config.tsInstallPath + '/' + this.config.tsPluginDir + '/' + this.config.rdSendFile;
	static readFile = this.config.tsInstallPath + '/' + this.config.tsPluginDir + '/' + this.config.rdGetFile;

	static decode(encoded) {
		let data = {};
		let lines = encoded.toString().split('\r\n');
		lines.forEach(function (content) {
			let columns = content.split(': ', 2);
			data[columns[0]] = parseFloat(columns[1]);
		});
		return data;
	}

	static encode(data) {
		let encoded = '';
		data.forEach(function (key, value) {
			encoded += key + ': ' + value + '\r\n';
		});
		return encoded;
	}

	static send(data) {
		debug('sending data: ' + JSON.stringify(data));
		this.fs.writeFile(this.sendFile, this.encode(data), function (err) {
			if (err) console.log(err);
		});
	}

	static read() {
		var content = this.fs.readFileSync(this.readFile);
		let data = this.decode(content);
		debug('receiving data: ' + JSON.stringify(data));
		return data;
	}
}
module.exports = raildriver;