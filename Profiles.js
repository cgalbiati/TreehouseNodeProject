var http = require('http');


function printData(username, badgeCount, points, codeLang) {
	var message = username + ' has ' + badgeCount + ' total badge(s) and ' + points + ' total points in ' + codeLang;
	console.log(message);
}

function printError(error) {
	console.log(error.message);
}

function getData(username, codeLang) {
	request = http.get('http://teamtreehouse.com/' + username + '.json', function(response) {
		var responseBody = '';
		response.on('data', function(datachunk) {
			responseBody += datachunk;
		});
		response.on('end', function(){
			if (response.statusCode === 200) {
				try {
					var profile = JSON.parse(responseBody);
					var pointsInput = 'profile.points.' + codeLang;
					printData(username, profile.badges.length, pointsInput, codeLang);
				} catch(error) {
					printError(error)
				}
			}
			else {
				printError({message: 'There was an error getting the profile for ' + username + '.(' + http.STATUS_CODES[response.code] + ') Try checking the username and your connection.'})
			}
		});
	});

}

module.exports.getData = getData;