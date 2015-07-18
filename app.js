var profiles = require('./Profiles');

var usersArray = process.argv.slice(2);


// I used this for-loop incrementing by 2, so that I could input the coding language as well as the username
for (i=0; i<usersArray.length; i+=2) {
	profiles.getData(usersArray[i], usersArray[i+1]);
}
