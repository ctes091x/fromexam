function getMyDate() {
	var now = new Date();
	var exam = new Date(2023,7-1,5,8,40);

	var diff= exam - now
	var examsec = Math.floor((diff)/1000);
	var examweek = Math.floor(diff) / (7 * 24 * 60 * 60 * 1000)
	var examday = Math.floor(diff - (examweek*7*24*60*60*1000)) / (24 * 60 * 60 * 1000)
	var examhour = Math.floor(diff - (examweek*7*24*60*60*1000) - (examday*24*60*60*1000)) / (60 * 60 * 1000)
	var exammin = Math.floor(diff - (examweek*7*24*60*60*1000) - (examday*24*60*60*1000) - (examhour*60*60*1000)) / (60 * 1000)
	var examsec2 = Math.floor(diff - (examweek*7*24*60*60*1000)- (examday*24*60*60*1000) - (examhour*60*60*1000) - (exammin*60*1000)) / 1000	
	sec.innerHTML = examsec
	left.innnerHTNL= examweek+"週"+examday+"日"+examhour+"時間"+exammin+"分"+examsec2+"秒"
	
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
