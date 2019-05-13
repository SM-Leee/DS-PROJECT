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