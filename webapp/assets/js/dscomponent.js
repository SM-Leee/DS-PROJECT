let size = window.screen.availWidth;
let heightSize = window.screen.availHeight;
let setLocate = 0;
var togglemenu_visible = [ false ];
var togglemenu_visibility = "hide";
var togglemenu = $('#ds-ui-menu').find('div').get();
let cardlistWidth = $('.cardlist-wrapper').outerWidth();
$(document).ready(function () {
	resizible();
	/*header title*/
	titlehtml();

	/* ToggleMenu */
	if($("#ds-ui-menu").length != 0){
		$('#ds-ui-menu').click(function() {
			togglemenu_visible.splice(0, 1, !togglemenu_visible[0]);
			$(".ds-ui-toggleMenu").toggleClass(togglemenu_visibility);
			if (togglemenu_visible[0]) {
				togglemenu_visibility = "show";
			} else {
				togglemenu_visibility = "hide";
			}
			$(".ds-ui-toggleMenu").toggleClass(togglemenu_visibility);

		});
	}
	if($("#ds-ui-dropdown-picker-box").length != 0){
		$('.dropdown-picker').click(function(){
			$(this).toggleClass("show");
		})
	}

	toggleMenu();
	subTopic();
	piechart();
	dropdownlist();
	inputFormat();
	$('.cardlist').width(cardlistWidth + 'px');
	/*$('.ds-ui-subtopicItem a').click(function(event){

		console.log($(this));
	});*/
	if($(".ds-ui-input").length!=0){
		$(".onlynumber input").keyup(function(event){
			reg = /[^0-9]/gi;
			v = $(this).val();

			if (reg.test(v)) {
				$(this).val(v.replace(reg, ''));
				$(this).focus();

			}
		})
		$(".kwdnumber input").keyup(function(event) {

			// format number
			$(this).val(function(index, value) {

				return value
				.replace(/\D/g, "")
				.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
				;
			});
			// , 없는 값
			console.log($(this).val().replace(/\D/g, ""));
		});
	}

	if($('.ds-ui-datepicker')) {
		$('.ds-ui-datepicker-box label').wrap('<div class="datepicker-label-box"></div>')    
		$datepicker = $('.ds-ui-datepicker');
		$datepicker.wrap('<div class="group-date"></div>')
		.after('<i class="fa fa-calendar"></i>');

		// datepicker click event on
		$('.ds-ui-datepicker').on('click', function(event){
			console.log("clicked! : datepicker");
			// basicModal();                
			dateModal();
		});

	}
	if($('.ds-ui-datepicker-box').length != 0){

		$('.fa-calendar').wrap('<span class="icon-wrap"></span>');
		transDate = today.getFullYear() + '-' 
		+ (today.getMonth()+1 < 10 ? '0' : '') 
		+ (today.getMonth()+1) + '-' 
		+ (today.getDate() < 10 ? '0' : '') 
		+ today.getDate();
		$('#date')[0].value = transDate;

	}


	const footerBoxList = $('.footerBox');
	let sX = 0,
	fX = 0,
	locate = 0;
	initFooter(footerBoxList, locate);
	$('.footer').bind('touchstart', function (e) {
		console.log(e.touches[0])
		e.preventDefault();
		sX = e.touches[0].screenX;
	})

	$('.footer').bind('touchend', function (e) {
		console.log($(e.target))
		fX = e.changedTouches[0].screenX;
		// 왼쪽
		if ((fX - sX) / size > 0.20) {
			setLocate = (locate - 1) < 0 ? (footerBoxList.length - 1) : (locate - 1);
			slideToggled(footerBoxList, locate, setLocate);
			locate--;
			locate = locate < 0 ? (locate = footerBoxList.length - 1) : locate;
		}
		// 오른쪽
		if ((fX - sX) / size < -0.20) {
			setLocate = (locate + 1) == footerBoxList.length ? 0 : (locate + 1);
			slideToggled(footerBoxList, locate, setLocate);
			locate++;
			locate = (locate == footerBoxList.length) ? locate = 0 : locate;
		}
	})


	let select;
	/* 원형 차트 */
	/* 기본적인 형태는 갖춰졌지만 UI적인 수정이 필요함 */    
	$('.circle').each(function(){
		select = '.circle[id='+$(this).attr('id')+'] ';
		console.log('111111111111');
		pieChart(dataSet, select);
	})

	/* 방사형 차트 (radar chart) */
	$('.radar').each(function(){
		select = '.radar[id='+$(this).attr('id')+'] ';
		radarchart(dataSet, select);
	})

	/* 꺽은선 차트 (line chart) */
	/* 아직 이건 차트의 사이즈 설정이 완전하지 않음 */
	/* 또한 UI 적인 수정이 필요함 */
	$('.line').each(function(){
		select = '.line[id='+$(this).attr('id')+'] ';
		lineChart(dataSet, select);
	})


	$('.event').click(function(){
		console.log($(this).data('value'));
	})

	/*static button*/
	const staticBtn = $('#staticBtn');
	$(staticBtn).append("<i id='plusBtn' class='fas fa-plus'></i>")
	$(staticBtn).bind('touchmove', function (e) {
		e.preventDefault();
		var touchLocation = e.targetTouches[0];
		var left = touchLocation.pageX;
		var top = touchLocation.clientY;
		$(staticBtn).css('left', left - 20 + 'px');
		$(staticBtn).css('top', top - 20 + 'px');
		console.log(top);
		if (left < 0 || left > size) {
			console.log('사이즈 작음');
			$(staticBtn).css('display', 'none');
		}
	});
	const staticBtn_child = $(staticBtn).children('div');
	$(staticBtn).click(function () {
		$(staticBtn_child).toggle(0, function () {
			$(staticBtn_child[0]).css({
				'bottom': '0rem',
				'right': '4rem',
			}),
			$(staticBtn_child[1]).css({
				'bottom': '3rem',
				'right': '3rem',
			}),
			$(staticBtn_child[2]).css({
				'bottom': '4rem',
				'right': '0rem',
			})
		})
	})

	const cardlist = $('.ds-ui-cardlist');
	const setting = $('.ds-ui-setting');
	for (var i = 0; i < cardlist.length; i++) {
		$(cardlist[i]).attr('data-no', i);
		$(setting[i]).attr('setting-no', i)
	}
	let dataNo = 0;
	$(cardlist).bind('touchstart', function (e) {
		e.preventDefault();
		sX = e.touches[0].screenX;
		dataNo = ($(this).attr('data-no'));
		selectCardlist(dataNo)
	})
	const selectCardlist = (no) => $(cardlist).bind('touchend', function (e) {
		dataNo = ($(this).attr('data-no'));
		fX = e.changedTouches[0].screenX;
		const showSetting = cardlistWidth + 80;
		if(dataNo == no){
			if ((fX - sX) / size > 0.20) {
				$(setting[no]).css({
					display: "none"
				}),
				$(cardlist[no]).css({
					transform: "translate3d(0px, 0, 0)",
					width: cardlistWidth + "px"
				})
			}
			if ((fX - sX) / size < -0.20) {
				$(setting[no]).css({
					display: "flex"
				}),
				$(cardlist[no]).css({
					transform: "translate3d(-80px, 0, 0)",
					width: showSetting + "px"
				})
			}
		}
	})
});


const resizible = function () {
	const restartHeight = () => { $('.App').css('height', $(window).height() + 'px'); }
	restartHeight();
	$(window).resize(function () {
		restartHeight();

	});
}

/*header title*/
var titlehtml = function(){
	if($("#ds-ui-title").length != 0){
		var titlehtml = "<span>"+$("#ds-ui-title").html()+"</span>"
		$("#ds-ui-title").empty();
		$("#ds-ui-title").append(titlehtml);
	}
}

/* ToggleMenu */
var toggleMenu = function(){
	if($("#ds-ui-menu").length != 0){
		$('#ds-ui-menu').empty();
		var menuhtml = "<div id='menu-icon-table'>"
			+ "<i class='fas fa-bars menu-icon'></i>"
			+ "</div>" + "<div class='ds-ui-toggleMenu hide'>"
			+ "</div>";

		$('#ds-ui-menu').append(menuhtml);
		var toggleMenuTitle = "<div class='ds-ui-toggleMenuTitle-table'>"
			+ "<div class='ds-ui-toggleMenuTitle'>"
			+ togglemenu[0].textContent + "</div>" + "</div>"
			$('.ds-ui-toggleMenu').append(toggleMenuTitle);

		for (var i = 1; i < togglemenu.length; i++) {
			var toggleMenuItem = "<div class='ds-ui-toggleMenuItem-table'>"
				+ "<a class='ds-ui-toggleMenuItem' href=''>"
				+ togglemenu[i].textContent + "</a>" + "</div>"
				$('.ds-ui-toggleMenu').append(toggleMenuItem);
		}
	}
}
/*subtopic*/

var subtopic = $('#ds-ui-subtopic').find('div');

var subtopic_array = [];

var  subTopic = function(){
	if($("#ds-ui-subtopic").length != 0){

		$('#ds-ui-subtopic').empty();
		for(i=0;i < subtopic.length; i++){
			subtopic_array.push({id : i, subtopictitle: subtopic.get()[i].textContent});

			var subtopicItem = "<div class='ds-ui-subtopicItem' id='subtopicItem"+i+"'>"+
			"<div class='sub'>"+
			"<a href='"+ subtopic[i].dataset.href +"'>"+subtopic_array[i].subtopictitle+"</a>"+
			"</div>"+					
			"</div>";

			$('#ds-ui-subtopic').append(subtopicItem);

			if(subtopic[i].classList.value == "selected"){

				$('#subtopicItem'+i).addClass("subtopic-selected");
			}
		}


	}
}
/*piechart*/
var piechart = function(){
	if($("#ds-ui-piechart").length == 1){
		var dsPiechart = "<canvas id='tutorial' width=300 height=300></canvas>";
		$('#ds-ui-piechart').append(dsPiechart);

		var canvas = document.getElementById("tutorial");
		var ctx = canvas.getContext('2d');
		ctx.clearRect(0,0,300,300);


		var prev_radian = 0;
		var next_radian = 0;
		for(i=0; i<chart.length; i++){
			ctx.beginPath();
			ctx.moveTo(150,150);

			next_radian = next_radian + (chart[i].percent/100)*360;

			var color = "rgb("+Math.floor(Math.random() * 256)+","+Math.floor(Math.random() * 256)+","+Math.floor(Math.random() * 256)+")";

			//무시해도되는 오류
			//부채꼴 그리고 코드
			ctx.arc(150 , 150, 100,(Math.PI/180)*prev_radian,(Math.PI/180)*next_radian,false);	

			ctx.fillStyle = color;
			ctx.fill();
			ctx.strokeStyle = "rgb(255,255,255)";
			ctx.stroke();

			//
			var rkqt = 200;
			var rkqt2 = 208;
			ctx.fillStyle = color;
			ctx.fillRect(10, rkqt+ i*15, 10, 10);

			ctx.fillStyle = '#000';
			ctx.font = '10px Arial';

			ctx.fillText(chart[i].title, 25, rkqt2+ i*15);

			// text 그리는 코드
			var text_radian = (prev_radian + next_radian)/2;
			ctx.font = '15px Arial';
			ctx.fillStyle = '#ffffff';

			ctx.fillText(chart[i].percent+"%", 138+70*Math.cos(text_radian*(Math.PI/180)), 156+ 70 * Math.sin(text_radian*(Math.PI/180)));
			prev_radian = next_radian;
		}
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

const dateModal = () => {
	basicModal();

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


const basicModal = () => {
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
			$('#date')[0].value = transDate;
		});

		console.log('layout, popup created in popupBox!!');

	}

	$('.popupBox').removeClass('popup-off');
};

/*dropdown*/
const dropdownlist = function(){
	if($(".ds-ui-dropdown-picker-box").length != 0){
		$('.ds-ui-dropdown-picker-box label').wrap('<div></div>');
	}
}

/*input format*/
const inputFormat = function(){
	if($(".ds-ui-input").length !=0){
		$('.ds-ui-input label').wrap('<div></div>');
		$('.ds-ui-input').each(function() {
			var inputText = "<input/>";
			$(this).append(inputText);
			if ($(this).data('rows') == 2) {
				$(this).addClass('rowlong');
			}
			if($(this).data('rows') > 2){
				console.error("rows의 최고값은 2 입니다.");
				$(this).remove();
			}
			if ($(this).data('column') == 2) {
				$(this).find('input').remove();
				var columnlong = "<textarea></textarea>";
				$(this).append(columnlong);

				$(this).addClass('columnlong');
			}

		})
	}
}


//footer
//Default footer 선택
const initFooter = (footerBoxList, locate) => {
	$(footerBoxList).each(function (i) {
		if (i !== locate) {
			this.style.display = 'none';
		}
	})
}

const slideToggled = (footerBoxList, locate, setLocate) => {
	if (footerBoxList.length !== 1) {
		$(footerBoxList[locate]).hide(0, function () {
			$(footerBoxList[setLocate]).show(0);
		})
		initFooter(footerBoxList, setLocate);
	}
};

//chart
let layout = (className) => {
	// console.log($(className));
	return ($(className).height() < $(className).width() ? $(className).height() : $(className).width());
	// return 300;
}

/* pie Chart */
let pieChart = (dataSet, select) => {
	let sum = 0;    // dataSet의 data의 총합 (100% 값)
	let value = 0;
	let rotate = 0;
	let stand_size = layout(select)
	for(let i=0; i < dataSet.length; i++){
		sum = sum + dataSet[i].data;
	}
	$(select).html('<div class="pie-wrapper"></div>')
	$(select + '.pie-wrapper').css({
		'width': stand_size,
		'height': stand_size,
		'top':'calc(50% - ' + (stand_size / 2) + 'px)',
		'left':'calc(50% - ' + (stand_size / 2) + 'px)'
	})

	dataSet.map(function(d, index){
		value = d.data / sum;

		$(select + '.pie-wrapper').append('<div class="event pie'+(index+1)+' pie" data-value="'+d.data+'"></div>');
		let tag = '.pie'+(index+1);
		let clip;
		if(0 <= value && value < 0.25){
			clip = Math.tan(Math.PI * value * 2) / (Math.tan(Math.PI * value * 2) + 1) * 100;
			clip = 'polygon(0 0, '+clip+'% 0, '+clip+'% 0, '+clip+'% 0, '+clip+'% 0, 50% 50%)';

		} else if(0.25 <= value && value < 0.5){
			clip = Math.tan(Math.PI * (value - 0.25) * 2) / (Math.tan(Math.PI * (value - 0.25) * 2) + 1) * 100;
			clip = 'polygon(0 0, 100% 0, 100% '+clip+'%, 100% '+clip+'%, 100% '+clip+'%, 50% 50%)';

		} else if(0.5 <= value && value < 0.75){
			clip = Math.tan(Math.PI * (value - 0.5) * 2) / (Math.tan(Math.PI * (value - 0.5) * 2) + 1) * 100;
			clip = 'polygon(0 0, 100% 0, 100% 100%, '+(100-clip)+'% 100%, '+(100-clip)+'% 100%, 50% 50%)';

		} else if(0.75 <= value && value < 1){
			clip = Math.tan(Math.PI * (value - 0.75) * 2) / (Math.tan(Math.PI * (value - 0.75) * 2) + 1) * 100;
			clip = 'polygon(0 0, 100% 0, 100% 100%, 0% 100%, 0% '+(100-clip)+'%, 50% 50%)';
		}

		$(select + tag).css({
			'background-color': d.color,
			'clip-path': clip,
			'transform': "rotate(" + (rotate+45) +"deg)"
		});
		rotate = rotate + (value * 360);  
	})
}

/* radar Chart */
let radarchart = (dataSet, select) => {

	// console.log();
	let stand_size = layout(select);
	let point = '';
	// console.log(stand_size)

	$(select).html("<div class='radar-background'></div>");
	dataSet.map(function(data, index){
		let angle = 360/dataSet.length*index;
		let beforedata = data.data/$(select).data('max')*50;

		// console.log('beforedata : ' + beforedata + " angle : " + angle)
		$(select + '.radar-background').append("<div class='stand-line stand-line"+index+"'></div>")
		$(select + '.stand-line'+index).css({
			'transform':"rotate(" + angle + "deg)"
		})

		point = point + ((beforedata*Math.sin(Math.PI * angle/360 *2))+50)+'% '+ ((beforedata*Math.cos(Math.PI * angle/360 *2)*-1)+50)+'% ';
		if(index+1 !== dataSet.length){point = point + ',';}

		// $('.radar-background').append("<div class='event data-point data-point"+index+"' data-value='"+data.data+"'></div>")
		$(select + '.radar-background').append("<div class='event data-point data-point"+index+"' data-value='"+data.data+"'></div>")
		$(select + '.data-point'+index).css({
			'left':'calc('+((beforedata*Math.sin(Math.PI * angle/360 *2))+50)+'% - 0.5rem)',
			'top':'calc(' + ((beforedata*Math.cos(Math.PI * angle/360 *2)*-1)+50)+'% - 0.5rem)'
		})
	})



	$(select).append("<div class='radar-showdata'></div>")
	$(select + '.radar-background,' + select + '.radar-showdata').css({
		'width': stand_size,
		'height': stand_size,
		'border-radius':'50%',
		'top': 'calc(50% - ' + (stand_size / 2) + 'px)',
		'left': 'calc(50% - ' + (stand_size / 2) + 'px)'
	})

	$(select + '.radar-showdata').css({
		'clip-path':'polygon(' + point + ')'
	})

}

/* line Chart */
let lineChart = (dataSet, select) => {
	let stand_size = layout(select);
	let point = '';
	let dist = ($(select).data('max')-$(select).data('min'))/$(select).data('dist');

	$(select).html("<div class='line-background'></div><div class='line-showdata'></div>");

	dataSet.map(function(data, index){

		let X_value = 100/(dataSet.length-1)*index;
		let beforedata = (100-(data.data-$(select).data('min'))/($(select).data('max')-$(select).data('min'))*100);

		point = point + X_value + '% ' + beforedata + '% ';
		if(index+1 !== dataSet.length){point = point + ',';}

		$(select + '.line-background').append('<div class="event data-point data-point'+index+'" data-value="'+data.data+'"></div>')
		$(select + '.data-point'+index).css({
			'top':'calc('+beforedata+'% - 0.5rem)',
			'left':'calc('+X_value+'% - 0.5rem)'
		})
	})

	for(let i = 0; i < dist; i++){


		$(select + '.line-background').append('<div class="stand-line stand-line'+i+'"></div>');
		$(select + '.stand-line'+i).css({
			'top':(100/dist*i) + '%'
		})
	}

	// console.log(point)
	point = 'polygon(' + point + ',100% 100%, 0 100%)';

	$(select + '.line-background, ' + select + '.line-showdata').css({
		'top': 'calc(50% - ' + (stand_size / 3) + 'px)',
		'left': 'calc(50% - ' + (stand_size / 2) + 'px)',
		'width': stand_size,
		'height': stand_size/3*2
	})

	$(select + '.line-showdata').css({
		'clip-path': point
	})

}