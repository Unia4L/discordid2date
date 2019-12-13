// MIT License
// 
// Copyright (c) 2019 Hugonun(https://github.com/hugonun)

function convertIDtoUnix(id) {
	/* Note: id has to be str */
	var bin = (+id).toString(2);
	var unixbin = '';
	var unix = '';
	var m = 64 - bin.length;
	unixbin = bin.substring(0, 42-m);
	unix = parseInt(unixbin, 2) + 1420070400000;
	return unix;
}

function convert(id) {
	var unix = convertIDtoUnix(id.toString());
	var timestamp = moment.unix(unix/1000);
	document.getElementById('i-date24').innerHTML = timestamp.format('DD-MM-YYYY, HH:mm:ss');
	document.getElementById('i-timeago').innerHTML = timestamp.fromNow();
}
