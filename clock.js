function getMyDate() {
	var now = new Date();
	var exam = new Date(2022,4-1,9,11,40);
	
	var examsec = Math.floor((exam - now)/1000);
	
	sec.innerHTML = examsec;
	
	if ( examsec < 0 ) {
		sec.classList.add('safe');
	}
}

var evName = "英語文法テスト";
inev.innerHTML = evName;

setInterval(getMyDate,1000);
