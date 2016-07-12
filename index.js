/*
	Below is a small script which generates random adventures. There are two
	problems which are marked below with "TODO". Your assignment is to solve
	those TODOs and get this script really up to snuff.
*/

var monsters = [
	"dragon",
	"troll",
	"alien mothership",
	"illithid",
	"spider",
	"snake",
	"vampire",
	"boogieman",
	"zombie"
];

var weapons = [
	"deadly dagger",
	"artful axe",
	"skillful swordplay",
	"menacing mace",
	"assault rifle",
	"audio device",
	"club",
	"nunchaku",
	"batarang"
];

var actions = [
	"defeated",
	"attacked",
	"ran from",
	"talked to",
	"sang to",
	"hacked",
	"ate",
	"hid under"
];

var heroGender;
if (Math.random() < 0.5) {
	heroGender = "heroine";
} else {
	heroGender = "hero";
}

/*
	TODO: The following three lines of code have a lot of repetition and are
	ripe for turning into a function! Create a function to handle choosing
	a random element from an array instead of doing the math each time.
*/
// var chosenMonster = monsters[Math.floor(Math.random() * monsters.length)];
// var chosenWeapon = weapons[Math.floor(Math.random() * weapons.length)];
// var chosenAction = actions[Math.floor(Math.random() * actions.length)];

	function random(arr){
	return arr[Math.floor(Math.random() * arr.length)];
	}


// var output = "Armed with only their " +
// 	chosenWeapon +
// 	" our " +
// 	heroGender +
// 	" " +
// 	chosenAction +
// 	" the evil " +
// 	chosenMonster +
// 	"!";

// document.getElementById("adventure").innerText = output;

function newAdventure(){
	var chosenWeapon = random(weapons);
	var chosenAction = random(actions);
	var chosenMonster = random(monsters);

	var heroGender;
	if (Math.random() < 0.5) {
		heroGender = "heroine";
	} else {
		heroGender = "hero";
	}


	var output = "Armed with only their " +
	chosenWeapon +
	" our " +
	heroGender +
	" " +
	chosenAction +
	" the evil " +
	chosenMonster +
	"!";

	document.getElementById("adventure").innerText = output;

}

var element = document.getElementById("new_adventure");

element.onclick = newAdventure;

window.onload = newAdventure;

/*
	TODO: Right now the "new adventure!" button doesn't work. Create a function
	to bind to that button so that the user can create a new adventure without
	refreshing the page.
*/

/*
	Optional: Create several more types of adventures, weapons, actions, etc.

	Optional: Allow the user to interact with the story more than just clicking
	the "new adventure!" button. You'll need to create variables to keep track
	of state.

	Optional (advanced): Use document.location.hash in a way which allows the
	user to bookmark a specific story that they like and return to it later.
*/
