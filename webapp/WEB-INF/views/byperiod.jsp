<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<title>Insert title here</title>
<meta http-equiv="content-type" content="text/html; charset=utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="stylesheet" type="text/css"
	href="${pageContext.servletContext.contextPath}/assets/css/default.css">
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
				<div data-href='byperiod' class="selected">기간별</div>
				<div data-href='documententry'>전표입력</div>
				<div data-href='index'>예시</div>
			</div>
		</div>

		<div class="contents">
			<div class="content">
				<!-- periodpicker -->
				<div class='periodpicker'></div>
				<!-- cardlist -->
				<div class='cardlist-wrapper'>
					<div class='cardlist receivables-border'>
						<div class='card-date'>04/29 월</div>
						<div class='filledbar'>
							<p>
								<span>더존 비즈온</span> <span class='receivables-color'>3,600,000</span>
							</p>
						</div>
					</div>
					<div class='cardlist income-border'>
						<div class='card-date'>04/29 월</div>
						<div class='filledbar'>
							<p>
								<span>더존 비즈온</span> <span class='income-color'>3,600,000</span>
							</p>
						</div>
					</div>
					<div class='cardlist spent-border'>
						<div class='card-date'>04/29 월</div>
						<div class='filledbar'>
							<p>
								<span>더존 비즈온</span> <span class='spent-color'>3,600,000</span>
							</p>
						</div>
					</div>
					<div class='cardlist spent-border'>
						<div class='card-date'>04/29 월</div>
						<div class='filledbar'>
							<p>
								<span>더존 비즈온</span> <span class='spent-color'>3,600,000</span>
							</p>
						</div>
					</div>
					<div class='cardlist spent-border'>
						<div class='card-date'>04/29 월</div>
						<div class='filledbar'>
							<p>
								<span>더존 비즈온</span> <span class='spent-color'>3,600,000</span>
							</p>
						</div>
					</div>
					<div class='cardlist spent-border'>
						<div class='card-date'>04/29 월</div>
						<div class='filledbar'>
							<p>
								<span>더존 비즈온</span> <span class='spent-color'>3,600,000</span>
							</p>
						</div>
					</div>
					<div class='cardlist spent-border'>
						<div class='card-date'>04/29 월</div>
						<div class='filledbar'>
							<p>
								<span>더존 비즈온</span> <span class='spent-color'>3,600,000</span>
							</p>
						</div>
					</div>
					<div class='cardlist spent-border'>
						<div class='card-date'>04/29 월</div>
						<div class='filledbar'>
							<p>
								<span>더존 비즈온</span> <span class='spent-color'>3,600,000</span>
							</p>
						</div>
					</div>
					
					<div class='cardlist spent-border'>
						<div class='card-date'>04/29 월</div>
						<div class='filledbar'>
							<p>
								<span>더존 비즈온</span> <span class='spent-color'>3,600,000</span>
							</p>
						</div>
					</div>
					<div class='cardlist spent-border'>
						<div class='card-date'>04/29 월</div>
						<div class='filledbar'>
							<p>
								<span>더존 비즈온</span> <span class='spent-color'>3,600,000</span>
							</p>
						</div>
					</div>
					<div class='cardlist spent-border'>
						<div class='card-date'>04/29 월</div>
						<div class='filledbar'>
							<p>
								<span>더존 비즈온</span> <span class='spent-color'>3,600,000</span>
							</p>
						</div>
					</div>
					<div class='cardlist spent-border'>
						<div class='card-date'>04/29 월</div>
						<div class='filledbar'>
							<p>
								<span>더존 비즈온</span> <span class='spent-color'>3,600,000</span>
							</p>
						</div>
					</div>
					<div class='cardlist spent-border'>
						<div class='card-date'>04/29 월</div>
						<div class='filledbar'>
							<p>
								<span>더존 비즈온</span> <span class='spent-color'>3,600,000</span>
							</p>
						</div>
					</div>
					<div class='cardlist spent-border'>
						<div class='card-date'>04/29 월</div>
						<div class='filledbar'>
							<p>
								<span>더존 비즈온</span> <span class='spent-color'>3,600,000</span>
							</p>
						</div>
					</div><div class='cardlist spent-border'>
						<div class='card-date'>04/29 월</div>
						<div class='filledbar'>
							<p>
								<span>더존 비즈온</span> <span class='spent-color'>3,600,000</span>
							</p>
						</div>
					</div>
					<div class='cardlist spent-border'>
						<div class='card-date'>04/29 월</div>
						<div class='filledbar'>
							<p>
								<span>더존 비즈온</span> <span class='spent-color'>3,600,000</span>
							</p>
						</div>
					</div>
					<div class='cardlist spent-border'>
						<div class='card-date'>04/29 월</div>
						<div class='filledbar'>
							<p>
								<span>더존 비즈온</span> <span class='spent-color'>3,600,000</span>
							</p>
						</div>
					</div>
					<div class='cardlist spent-border'>
						<div class='card-date'>04/29 월</div>
						<div class='filledbar'>
							<p>
								<span>더존 비즈온</span> <span class='spent-color'>3,600,000</span>
							</p>
						</div>
					</div>
					<div class='cardlist spent-border'>
						<div class='card-date'>04/29 월</div>
						<div class='filledbar'>
							<p>
								<span>더존 비즈온</span> <span class='spent-color'>3,600,000</span>
							</p>
						</div>
					</div>
					<div class='cardlist spent-border'>
						<div class='card-date'>04/29 월</div>
						<div class='filledbar'>
							<p>
								<span>더존 비즈온</span> <span class='spent-color'>3,600,000</span>
							</p>
						</div>
					</div>
					
					<div class='cardlist spent-border'>
						<div class='card-date'>04/29 월</div>
						<div class='filledbar'>
							<p>
								<span>더존 비즈온</span> <span class='spent-color'>3,600,000</span>
							</p>
						</div>
					</div>
					<div class='cardlist spent-border'>
						<div class='card-date'>04/29 월</div>
						<div class='filledbar'>
							<p>
								<span>더존 비즈온</span> <span class='spent-color'>3,600,000</span>
							</p>
						</div>
					</div>
					<div class='cardlist spent-border'>
						<div class='card-date'>04/29 월</div>
						<div class='filledbar'>
							<p>
								<span>더존 비즈온</span> <span class='spent-color'>3,600,000</span>
							</p>
						</div>
					</div>
					<div class='cardlist spent-border'>
						<div class='card-date'>04/29 월</div>
						<div class='filledbar'>
							<p>
								<span>더존 비즈온</span> <span class='spent-color'>3,600,000</span>
							</p>
						</div>
					</div>
					<div class='cardlist spent-border'>
						<div class='card-date'>04/29 월</div>
						<div class='filledbar'>
							<p>
								<span>더존 비즈온</span> <span class='spent-color'>3,600,000</span>
							</p>
						</div>
					</div>
					<div class='cardlist spent-border'>
						<div class='card-date'>04/29 월</div>
						<div class='filledbar'>
							<p>
								<span>더존 비즈온</span> <span class='spent-color'>3,600,000</span>
							</p>
						</div>
					</div>
					<div class='cardlist spent-border'>
						<div class='card-date'>04/29 월</div>
						<div class='filledbar'>
							<p>
								<span>더존 비즈온</span> <span class='spent-color'>3,600,000</span>
							</p>
						</div>
					</div>
					<div class='cardlist spent-border'>
						<div class='card-date'>04/29 월</div>
						<div class='filledbar'>
							<p>
								<span>더존 비즈온</span> <span class='spent-color'>3,600,000</span>
							</p>
						</div>
					</div>
					<div class='cardlist spent-border'>
						<div class='card-date'>04/29 월</div>
						<div class='filledbar'>
							<p>
								<span>더존 비즈온</span> <span class='spent-color'>3,600,000</span>
							</p>
						</div>
					</div>
					
				</div>
			</div>
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
	<script src="//code.jquery.com/jquery-3.3.1.min.js"></script>
	<script type="text/javascript"
		src="${pageContext.request.contextPath}/assets/js/dscomponent.js"></script>
</body>
</html>