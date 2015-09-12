

// some globals
var entryLane = "";
var exitLane = "";

function startUp(){
	setLanes();
	setTravelers();
	setUndo();
	hideMenu();
	showCount();
}

function setUndo(){
	$("#undoCounts").click(function(){undoCounts();})
}

function undoCounts(){
	if(savingData()) return false;
	clearAll();
}

function setLanes() {
	clearLanes();
	$(".entry").click(function(){laneClicked(this);});
}

function clearLanes() {
	entryLane = "";
	exitLane = "";
	$(".entry").css('background-color','#bcf').text("Entry");
}

function setTravelers(){
	$(".traveler").click(function(){travelerClicked(this)});
	clearTravelers();
}

function laneClicked(which){
	if(savingData()) return; // waiting for data upload
	if(!hasTraveler()) return; // need to click a traveler first
	var targetName = $("#"+which.id).attr("name")
	if(entryLane == "") {
		// this is the entry
		// first change all the entry point titles...
		$(".entry").text("")
		$("#"+which.id).css('background-color','#3f3').text("Entry");
		entryLane = targetName;
	} else {
		if(entryLane == targetName) return; /// can't exit the entry
		// this is the exit
		$("#"+which.id).css('background-color','red').text("Exit");
		exitLane = targetName;
		// record the trip...
		// compile each traveler type count
		for(var i = 1; i < 5; i++){
			var cnt = $("#Cnt_traveler_" + i).text();
			if (cnt + 0 > 0){
				var y = "Entry = " + entryLane + "\rExit = "+exitLane + "\rTraveler = "+ $("#traveler_"+i).attr("name") + "\rCount = "+cnt;
				//alert(y);
			}
		}
		setTimeout("clearAll()", 1500) // feedback delay
	}
}

function travelerClicked(which){
	if(savingData()) return; // waiting for data upload
	var y = "#Cnt_"+which.id;
	var cnt = $(y).text();
	cnt++;
	$(y).text(cnt).show();
}

function clearTravelers() {	$(".travelerCnt").text("0").hide();}

function clearAll() {
	clearTravelers();
	clearLanes();
}

function savingData() {
	if(entryLane != "" && exitLane != "") {
		return true; // waiting for data upload
	}else{
		return false;
	}
}

function hasTraveler() {
	// test that there is at least one traveler counted
	var cnt;
	for(var i=1; i < 5; ++i){
		cnt = $("#Cnt_traveler_" + i ).text();
		cnt++;
		if(cnt > 1) return true;
	}
	return false;
}

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
function showCount(){
	$("#countContain").show();
	$("#infoContain").hide();
	hideMenu();
}
function showForm(){
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
/* seems to work with document, but not on individule elements

var doubleTouchStartTimestamp = 0;
$(".traveler").bind("touchstart", function (event) {
    var now = +(new Date());
    if (doubleTouchStartTimestamp + 500 > now) {
        event.preventDefault();
    }
    doubleTouchStartTimestamp = now;
});

*/