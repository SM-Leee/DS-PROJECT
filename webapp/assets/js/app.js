let size = window.screen.availWidth;
let heightSize = window.screen.availHeight;
let setLocate = 0;
var togglemenu_visible = [ false ];
var togglemenu_visibility = "hide";
const footerBoxList = $('.ds-ui-footerBox');


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

	/*input data*/
	$('.basicBtn').click(function(){
		/*datepicker data*/
		console.log($('.ds-ui-datepicker-box input').val());
		/*dropdown data*/
		console.log($('.dropdown-picker').val())
		$('.ds-ui-input input').each(function(){
			if($(this).closest("div").hasClass("kwdnumber")===true){
				/*input kwdnumber가 존재하는경우 , 삭제 된 상태*/
				console.log($(this).val().replace(/\D/g, ""));
			} else{
				/*input data*/
				console.log($(this).val());
			}
		});
		/*textarea data (Big input 창)*/
		console.log($('.ds-ui-input textarea').val());
	});
	footerTouchSlider(footerBoxList);
	staticBtnTouchMove($('#ds-ui-staticBtn'), $('#ds-ui-staticShowBtn'));
	
});

//footerTouchSlider
const footerTouchSlider = (footerBoxList) => {
    let sX = 0,
        fX = 0,
        locate = 0;
    $('.footer').bind('touchstart', function (e) {
        e.preventDefault();
        sX = e.touches[0].screenX;
    })

    $('.footer').bind('touchend', function (e) {
        fX = e.changedTouches[0].screenX;
        // 왼쪽
        if ((fX - sX) / size > 0.20) {
            setLocate = (locate - 1) < 0 ? (footerBoxList.length - 1) : (locate - 1);
            slideFooter(footerBoxList, locate, setLocate);
            locate--;
            locate = locate < 0 ? (locate = footerBoxList.length - 1) : locate;
        }
        // 오른쪽
        if ((fX - sX) / size < -0.20) {
            setLocate = (locate + 1) == footerBoxList.length ? 0 : (locate + 1);
            slideFooter(footerBoxList, locate, setLocate);
            locate++;
            locate = (locate == footerBoxList.length) ? locate = 0 : locate;
        }
    })
}
//slideFooter
const slideFooter = (footerBoxList, locate, setLocate) => {
    if (footerBoxList.length !== 1) {
        $(footerBoxList[locate]).hide(0, function () {
            $(footerBoxList[setLocate]).show(0);
        })
        initFooter(footerBoxList, setLocate);
    }
};

//staticMove
const staticBtnTouchMove = (staticBtn, staticShowBtn) => {
    $(staticBtn).bind('touchmove', function (e) {
        e.preventDefault();
        var touchLocation = e.targetTouches[0];
        var left = touchLocation.pageX;
        var top = touchLocation.clientY;
        $(staticBtn).children('div').css('display', 'none')
        $(staticBtn).css('left', left - 25 + 'px');
        $(staticBtn).css('top', top - 25 + 'px');
        if (left < 0 || left > size || top < 0 || top > heightSize) {
            $(staticBtn).css('display', 'none');
            $(staticShowBtn).css('display', 'block');
        }
    });
}
// 일단 붙
const staticBtnTouchEnd = (left, top, staticBtn, staticShowBtn) => {
    $(staticBtn).bind('touchend', function (e) {
        if (left < 0 || left > size || top < 0 || top > heightSize) {
            $(staticBtn).css('display', 'none');
            $(staticShowBtn).css('display', 'block');
        }
    })
}
