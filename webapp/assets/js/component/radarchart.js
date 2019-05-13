
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