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