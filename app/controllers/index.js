// Our functions go here.
function transform(model){

	var carObject = model.toJSON();
	var output = 	
	{
		"title" : carObject.model + " by " + carObject.make,
		"id" :model.cid
	};
	return output;
}

// a filter we define, right now it's hard coded.
// this will (should) only show us fords
function filter(collection)
{
	return collection.where(
		{
			make: "Ford"
		}
	);
}


// an Event Listener, we need to clean up our app when it's done.
$.mainWindow.addEventListener("close", function()
{
	$.destroy();
});

// this function recreates the database when our app is created.
$.mainWindow.addEventListener("open", function(){
	Alloy.Collections.cars.reset(
		[
			{
				"make":"Honda",
			 	"model":"Civic"
			},
			{
				"make":"Honda",
				"model":"Accord"
			},
			{
				"make":"Ford",
				"model":"Canyonero"
			},
			{
				"make":"Ford",
				"model":"Prefect"
			},
			{
				"make":"Nissan",
				"model":"Rogue"
			}
		]
	);			
});


//open our main window, or the app will suck
$.mainWindow.open();