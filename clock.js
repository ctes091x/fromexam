function getMyDate() {
	var now = new Date();
	var exam = new Date(2022,3-1,7,10,40);
	
	var examsec = Math.floor((exam - now)/1000);
	
	sec.innerHTML = examsec;
	
	if ( examsec < 0 ) {
		sec.classList.add('safe');
	}
}

var evName = "学年末考査終了";
inev.innerHTML = evName;

setInterval(getMyDate,1000);