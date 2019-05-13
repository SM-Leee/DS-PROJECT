//chart
let layout = (className) => {
	// console.log($(className));
	return ($(className).height() < $(className).width() ? $(className).height() : $(className).width());
	// return 300;
}