
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>

<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<title>프로젝트 진행</title>
<meta http-equiv="content-type" content="text/html; charset=utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="stylesheet" type="text/css"
	href="${pageContext.request.contextPath}/assets/css/default.css">
<link rel="stylesheet" type="text/css"
	href="${pageContext.request.contextPath}/assets/css/dscomponent.css">
<link rel="stylesheet"
	href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
<link rel="stylesheet"
	href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
	integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
	crossorigin="anonymous">
</head>
<body>
	<div class="App">
		<div class="header">
			<div id="ds-ui-menu">
				<div>Toggle Menu</div>
				<div>회계관리</div>
				<div>전표관리</div>
				<div>금융</div>
			</div>
			<div id="ds-ui-title">회계관리</div>
		</div>
		<div class="navigator">
			<div id="ds-ui-subtopic">
				<div data-href='currentassets'>현재 자산</div>
				<div data-href='byperiod'>기간별</div>
				<div data-href='documententry'>전표입력</div>
				<div data-href='index' class="selected">예시</div>
			</div>
		</div>

		<div class="contents">
			<div id="ds-ui-piechart"></div>
		</div>

		<div class="footer">
			<div class='footerBox'>
				<div class='income-bgcolor vertical'>
					<p>수입</p>
					<p>수입</p>
				</div>
				<div class='spent-bgcolor horizen'>
					<p>지출</p>
					<p>200,000,000</p>
				</div>
			</div>
			<div class='footerBox'>
				<div class='income-bgcolor'>수입</div>
				<div class='spent-bgcolor'>지출</div>
				<div class='receivables-bgcolor'>미지급</div>
			</div>
			<div class='footerBox'>
				<div class='income-bgcolor vertical'>
					<p>수입</p>
					<p>200원</p>
				</div>
			</div>
		</div>
	</div>
	</div>


	<script src="//code.jquery.com/jquery-3.3.1.min.js"></script>
	<script type="text/javascript"
		src="${pageContext.request.contextPath}/assets/js/dscomponent.js"></script>
	<script type="text/javascript">
	
		var chart = [
			{title :'ex1' , percent:12},
			{title: 'ex2', percent: 26},
			{title: 'ex3', percent: 5},
			{title: 'ex4',percent: 40},
			{title: 'ex5',percent: 6},
			{title: 'ex6',percent: 11}]
	</script>
</body>
</html>