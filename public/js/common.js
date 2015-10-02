/*
 An arbitray upper limit to the possible number
of travelers we would ever display.
*/
var howManyTravelers = 10

function startUp(){
	setLanes();
	setTravelers();
	setUndo();
	hideMenu();
	showCountPage();
	showData();
}

function setUndo(){
	$("#undoCounts").click(function(){undoCounts();})
}

function undoCounts(){
	clearAll();
}

function setLanes() {
	clearLanes();
	$(".entry").click(function(){laneClicked(this);});
}

function setTravelers(){
	$(".traveler").click(function(){travelerClicked(this)});
	clearTravelers();
}

// Traveler and Lanes UI

function clearTravelers() {	$(".travelerCnt").text("0").hide();}

function clearAll() {
	clearTravelers();
	clearLanes();
}

function hasTraveler() {
	// test that there is at least one traveler counted
	for(var i = 1; i <= howManyTravelers; i++){
		var cnt = $("#Cnt_traveler_" + i).text();
		if (cnt + 0 > 0){return true;}
	} // end for

	return false; // no counts

}

function clearLanes() {
	$(".entry").css('background-color','#bcf');
}

function travelerClicked(which){
	var y = "#Cnt_"+which.id;
	var cnt = $(y).text();
	cnt++;
	$(y).text(cnt).show();
}

// end Traveler and Lanes UI

function laneClicked(which){
	if(!hasTraveler()) return; // need to click a traveler first
	var entryLane = which.id;
	// change the lane color...
	$("#"+which.id).css('background-color','#3f3');
	// record the trip...

	// get the locally stored data
	var data = getData();

	// compile each traveler type count as tab/return delimited text
	// Arbtrarily limit the number of travelers to check at 10...
	for(var i = 1; i <= howManyTravelers; i++){
		var cnt = $("#Cnt_traveler_" + i).text();
		if (cnt + 0 > 0){
			var y = entryLane + "\t"+ $("#traveler_"+i).attr("name") + "\t"+cnt + "\n";
			//alert(y);
			data = data + y;
		}
	}

	// saveData writes data to sessionStorage
	// use webworker to upload data to host when connection is available
	saveData(data);
	showData();
	setTimeout("clearAll()", 500) // feedback delay
}

// Data Handling...
function saveData(data){
	if(hasSessionStorage()) {
		sessionStorage.data = data;
	} else {
		// Sorry! No Web Storage support..
		uploadData(data);
	}
}

function readData(){
	if(hasSessionStorage()) {
		return sessionStorage.data;
	} else {
		// Sorry! No Web Storage support..
		return "";
	}
}

function getData() {
	// return the current session data
	var data = "";
	// try to get it from sessionStorage
	data = readData()
	// if still empty? add the header row
	if (!data){data = "Lane\tTraveler\tCount\n";} 

	return data;
}

function showData() {
	var data = getData();
	// display the session data in the data div
	$("pre#data").text(data);
	showTotal(data);
}

function showTotal(data) {
	var theTotal = 0;
	// loop through the lines of data and add to theTotal
	var countLines = data.split("\n");
	var searchString = /\t\d/;
	if(countLines.length > 1){
		for(var i = 1;i< countLines.length; i++) {
			var pos = countLines[i].search(searchString);
			if(pos >= 0) {
				var n = Number(countLines[i].substr(pos+1));
				if(n) theTotal = theTotal + n ;
			}
		}
	}
	if(theTotal > 0){
		$("#total").text(theTotal);
	}else{
		$("#total").text("0");
	}
}

function hasSessionStorage() {
	if(typeof(sessionStorage) !== "undefined") {
		// Storage is available
		return true;
	} else {
		return false
	}	
}

function uploadData() {
	// just a stub for now

	/* 
	if sessionStorage and webWorkers are available,
	accumulate the data and upload it at intervals to 
	reduce network use on client device. Also allows
	data to be accumulated and uploaded when a connection
	is available in the case where the user does not
	have connection in the counting location.

	if storage is not available the data must be uploaded
	immediately. Alert the user if there is no connection.
	In that case they won't be able to use the app for counting
	without a connection.
	*/

}

function clearData() {
	if(hasSessionStorage()) {
		sessionStorage.removeItem("data");
		showData(); // refresh the data list
	}
	// else do nothing...
}

// End Data handling

/* handle the menu items */
function showMenu(){
	setModal("modalDiv",true);
	$("#modalDiv").click(function() {hideMenu();}).css("z-index","500");
	$("#menuList").css("z-index","1000").show();
}
function hideMenu() {
	setModal("modalDiv",false);
	$("#modalDiv").unbind("click");
	$("#menuList").hide();
}
function showCountPage(){
	$("#countContain").show();
	$("#infoContain").hide();
	hideMenu();
}
function showFormPage(){
	$("#countContain").hide();
	$("#infoContain").show();
	hideMenu();

}
function submitReport(){
	alert("Report Submitted!")
	hideMenu();
}

// Paint the screen with a div to simulate a modal dialog
function setModal(objectID,modalState) {
	var objectID = "#"+objectID;
	var docHeight = $(document).height()+"px";
	var docWidth = $(document).width()+"px";
	$(objectID).css("position","absolute").css("top","0").css("left","0");
	if(modalState) {
		// display the div
		$(objectID).css("height",docHeight).css("width",docWidth).show();
	}
	else {
		//hide the div
		docHeight = "1px";
		docWidth = "1px";
		$(objectID).css("height",docHeight).css("width",docWidth).hide();
	}
}

