let size = window.screen.availWidth;
let heightSize = window.screen.availHeight;
let setLocate = 0;
var togglemenu_visible = [ false ];
var togglemenu_visibility = "hide";
let select;
let cardlistWidth = $('.cardlist-wrapper').outerWidth();


$(document).ready(function () {
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
	/* DropdownPicker */
	if($("#ds-ui-dropdown-picker-box").length != 0){
		$('.dropdown-picker').click(function(){
			$(this).toggleClass("show");
		})
	}
	$('.cardlist').width(cardlistWidth + 'px');

	/* InputBox */
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
		});
	}
	/* fileuploadButton */
	var fileTarget = $('.ds-ui-basicButton .upload-hidden');
	
	fileTarget.on('change', function(){
		// 값이 변경되면
		var ext = fileTarget.val().split('.').pop().toLowerCase();
		if($.inArray(ext,['gif','png','jpg','jpeg']) == 1){
			if(window.FileReader){
				var filename = $(this)[0].files[0].name;
			}
			else{
				var filename = $(this).val().split('/').pop().split('\\').pop();
			}
		} else{
			$(this).val("");
		}
		// 추출한 파일명 삽입 
		$(this).siblings('.upload-name').val(filename);
	});


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
	
	/*input data*/
	$('.basicBtn').click(function(){
		$('.ds-ui-input input').each(function(){
			if($(this).closest("div").hasClass("kwdnumber")===true){
				console.log($(this).val().replace(/\D/g, ""));
			} else{
				console.log($(this).val());
			}
		});
		console.log($('.ds-ui-input textarea').val());
	});
	
	
});
