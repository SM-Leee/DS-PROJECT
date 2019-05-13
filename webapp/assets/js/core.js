document.write("<script type='text/javascript' src='./assets/js/component/falsepiechart.js' ><" + "/script>");

document.write("<script type='text/javascript' src='./assets/js/component/input.js' ><" + "/script>");
document.write("<script type='text/javascript' src='./assets/js/component/header-title.js' ><" + "/script>");
document.write("<script type='text/javascript' src='./assets/js/component/header-togglemenu.js' ><" + "/script>");
document.write("<script type='text/javascript' src='./assets/js/component/navigator-submenu.js' ><" + "/script>");
document.write("<script type='text/javascript' src='./assets/js/component/dropdownpicker.js' ><" + "/script>");
document.write("<script type='text/javascript' src='./assets/js/component/datepicker.js' ><" + "/script>");

document.write("<script type='text/javascript' src='./assets/js/component/chartutil.js' ><" + "/script>");
document.write("<script type='text/javascript' src='./assets/js/component/piechart.js' ><" + "/script>");
document.write("<script type='text/javascript' src='./assets/js/component/radarchart.js' ><" + "/script>");
document.write("<script type='text/javascript' src='./assets/js/component/linechart.js' ><" + "/script>");

document.write("<script type='text/javascript' src='./assets/js/component/footer.js' ><" + "/script>");
document.write("<script type='text/javascript' src='./assets/js/component/button.js' ><" + "/script>");

function component(){
	resizible();
	
	headerTitle()
	headerToggleMenu();
	navigatorSubmenu();
	inputFormat();
	dropdownPicker();
	datePicker();
	falsepiechart();
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
	basicButton();
}
const resizible = function () {
	const restartHeight = () => { $('.App').css('height', $(window).height() + 'px'); }
	restartHeight();
	$(window).resize(function () {
		restartHeight();

	});
}
