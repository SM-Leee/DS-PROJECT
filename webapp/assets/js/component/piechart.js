
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