//datePicker setting
const datePicker = () => {
	if($('#date').length != 0) {
		dateHtml($('#date'));
		// datepicker click event on
		datepickerListener($('#date'));
		initDate($('#date'));
	}
	if($('#fromDate').length != 0) {
		$('#fromDate').addClass('period-option');
		dateHtml($('#fromDate'));
		// datepicker click event on
		datepickerListener($('#fromDate'));
		initDate($('#fromDate'));
	}
	if($('#toDate').length != 0) {
		$('#toDate').addClass('period-option');
		dateHtml($('#toDate'));
		// datepicker click event on
		datepickerListener($('#toDate'));
		initDate($('#toDate'));
	}
}
const datepickerListener = ($target) => {
	$target.on('click', function(event){
		console.log("clicked! : datepicker");
		// basicModal();                
		dateModal($target);
	});
}
const dateHtml = ($target) => {
	$target.wrap('<div class="ds-ui-datepicker-box"></div>')
		.addClass('ds-ui-datepicker')
		.attr('readonly', 'readonly');
	
	if($target.data('dsLabel')) {
		$target.before('<div class="datepicker-label-box"></div>')
			.prev().append('<label>' + $target.data('dsLabel') + '</label>');
	}
}
const initDate = ($target) => {
	if($('.ds-ui-datepicker-box').length != 0){
		transDate = today.getFullYear() + '-' 
		+ (today.getMonth() + 1 < 10 ? '0' : '') 
		+ (today.getMonth() + 1) + '-' 
		+ (today.getDate() < 10 ? '0' : '') 
		+ today.getDate();
		$target[0].value = transDate;
	}
}

/*date-picker*/
let today = new Date(); // 오늘 날짜
function prevCalendar() {
	today = new Date(today.getFullYear(), today.getMonth() -1, today.getDate());
	buildCalendar();
}
function nextCalendar() {
	today = new Date(today.getFullYear(), today.getMonth() +1, today.getDate());
	buildCalendar();
}

function buildCalendar() {
	let nMonth = new Date(today.getFullYear(), today.getMonth(), 1); // 이번 달의 첫째 날
	let lastDate = new Date(today.getFullYear(), today.getMonth() + 1, 0); // 이번 달의 마지막 날
	let $tbCalendar = $('.date-tb'); // 테이블 달력을 만들 테이블 선택
	let $tbCalendarYM = $('.date-tb-title'); // yyyy년 mm월 출력할 곳

	// 오늘 날짜
	let currentYear = today.getFullYear();
	let currentMonth = today.getMonth() + 1;
	let currentDate = today.getDate();
	let week = ['일', '월', '화', '수', '목', '금', '토'];
	let currentVIP = week[today.getDay()]; // 요일

	tempValue = currentMonth + '월 ' + currentDate + '일 (' + currentVIP + ')';

	$('.date-title').children('span').text(tempValue);
	$('.date-subtitle').children('span').text(currentYear + '년');
	tempValue = currentYear + '년 ' + currentMonth + '월';
	$tbCalendarYM.children().text(tempValue); // yyyy년 m월 출력

	while ($tbCalendar[0].rows.length > 1) {
		$tbCalendar[0].deleteRow($tbCalendar[0].rows.length - 1);
	}
	let row = null;
	row = $tbCalendar[0].insertRow();
	let cnt = 0;
	// 1일이 시작되는 칸을 맞추어 줌
	for (i=0; i<nMonth.getDay(); i++) {
		cell = row.insertCell();
		cnt = cnt + 1;
	}

	for (i=1; i<=lastDate.getDate(); i++) { 
		cell = row.insertCell();
		cell.innerHTML = i;
		cnt = cnt + 1;
		if (cnt%7 == 0)// 1주일이 7일 이므로
			row = $tbCalendar[0].insertRow();// 줄 추가
	}

	$('td').on('click', (event) => {
		currentDate = event.target.innerHTML;
		if(currentDate == '') return;
		today.setDate(currentDate);
		currentVIP = week[today.getDay()];
		tempValue = currentMonth + '월 ' + currentDate + '일 (' + currentVIP + ')';
		$('.date-title').children('span').text(tempValue);
		$('.date-subtitle').children('span').text(currentYear + '년');
		tempValue = currentYear + '년 ' + currentMonth + '월';
		$tbCalendarYM.children('span').text(tempValue); // yyyy년 m월 출력
	});

	$('td').hover((event) => {
		currentDate = event.target.innerHTML;
		if(currentDate == '') return;
		$(event.target).addClass('hover');
	}, () => {
		$(event.target).removeClass('hover');
	});

}


const dateModal = ($target) => {
	basicModal($target);

	if($('.date-header').length == 0) {
		//headerViewRender
		let dateHeader = 
			"<div class='date-header'>" +
			"<div class='date-title'>" +
			"<span></span>" +
			"</div>" +
			"<div class='date-subtitle'>" +
			"<span></span>" +
			"</div>" +
			"</div>";
		$('.popup-header')
		.append(dateHeader);

		//bodyViewRender
		let dateBody = 
			"<div class='date-component-spinner'>" +
			"<div class='ic-express-np'>" +
			"<div><i class='fa fa-angle-left'></i></div>" +
			"<div><i class='fa fa-angle-right'></i></div>" +
			"</div>" +
			"<div class='date-basic'>" +
			"<div class='date-tb-title'>" +
			"<span></span>" +
			"</div>" +
			"<table class='date-tb'>" +
			"<th>일</th><th>월</th><th>화</th><th>수</th><th>목</th><th>금</th><th>토</th>" +
			"</table>" +
			"</div>" +
			"</div>";
		$('.popup-body').append(dateBody);
		buildCalendar();
		$('.fa-angle-left').on('click', (event) => {
			prevCalendar();
		});
		$('.fa-angle-right').on('click', (event) => {
			nextCalendar();
		});
	}

}


const basicModal = ($target) => {
	if($('.popupBox').length == 0) {
		$('<div class="popupBox"></div>').appendTo("body");
		console.log("popupBox created!!");

		$popupBox = $('.popupBox');
		$popupBox
		.append('<div class="overlay">overlay</div>')
		.append('<div class="popup"></div>')
		.children('.popup')
		.append('<div class="popup-content"></div>')
		.children('.popup-content')
		.append('<div class="popup-header"></div>') // text : popup-hearder
		.append('<div class="popup-body"></div>') // text : popup-body
		.append('<div class="popup-footer"></div>')
		.children('.popup-footer')
		.append('<div class="popup-set-tb"></div>');

		row = "<div><a id='popup-close' href='#close'>취소</a></div>";
		$('.popup-set-tb').append(row).children().on('click', () => {
			$('.popupBox').addClass('popup-off');
		});

		row = "<div><a id='popup-check' href='#check'>설정</a></div>";
		$('.popup-set-tb').append(row).children().next().on('click', () => {
			$('.popupBox').addClass('popup-off');
			transDate = today.getFullYear() + '-' 
			+ (today.getMonth()+1 < 10 ? '0' : '')
			+ (today.getMonth()+1) + '-' 
			+ (today.getDate() < 10 ? '0' : '') 
			+ today.getDate();
			$target[0].value = transDate;
		});

		console.log('layout, popup created in popupBox!!');

	}

	$('.popupBox').removeClass('popup-off');
};