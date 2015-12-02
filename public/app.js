
function getActivities(){
	var selectObject = document.getElementById("objects");
    var id = selectObject.options[selectObject.selectedIndex].value;

    var data = null;

	var xhr = new XMLHttpRequest();
	xhr.withCredentials = true;

	xhr.addEventListener("readystatechange", function () {
  		if (this.readyState === this.DONE) {
    console.log(this.responseText);
  		}
	});

	xhr.open("GET", "https://[appId].stamplayapp.com/api/cobject/v1/:cobjectId/:id/activities");
	xhr.setRequestHeader("accept", "application/json");
	xhr.setRequestHeader("content-type", "application/json");
	xhr.send(data);
}
