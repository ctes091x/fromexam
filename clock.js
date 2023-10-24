function getMyDate() {
	var now = new Date();
	var exam = new Date(2023,12-1,6,8,40);
	
	var examsec = Math.floor((exam - now)/1000);
	
	sec.innerHTML = examsec;
	
	if ( examsec < 100000 ) {
		sec.classList.add('warning');
	}
	
	if ( examsec < 0 ) {
		sec.classList.remove('warning');
		sec.classList.add('safe');
	}
}

var evName = "期末考査";
inev.innerHTML = evName;

setInterval(getMyDate,1000);
