function getMyDate() {
	var now = new Date();
	var exam = new Date(2022,3-1,2,8,40);
	
	var examsec = Math.floor((exam - now)/1000);
	
	sec.innerHTML = examsec;
	min.innerHTML = Math.floor(examsec/60);
	hour.innerHTML = Math.floor(examsec/3600);
}

var evName = "学年末考査";
inev.innerHTML = evName;

setInterval(getMyDate,1000);