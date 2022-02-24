function getMyDate() {
	var now = new Date();
	var exam = new Date(2022,3-1,2,8,40);
	
	var examsec = Math.round((exam - now) * 100) / 100000;
	
	sec.innerHTML = examsec;
}

var evName = "学年末考査";
inev.innerHTML = evName;

setInterval(getMyDate,10);
