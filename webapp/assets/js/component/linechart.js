let lineChart = (dataSet, select) => {
    console.log("lineChart")
    let point = '';
    let dist = ($(select).data('max')-$(select).data('min'))/$(select).data('dist');

    $(select).html(
        '<div class="line-wrapper chart-wrapper">'+
            '<div class="line-background"></div>'+
            '<div class="line-showdata"></div>'+
        '</div>'
    )
    index_position(select,dataSet)
    for(let i = 0; i < dist; i++){
        $(select + '.line-background').append('<div class="stand-line stand-line'+i+'"></div>');
        $(select + '.stand-line'+i).css({
            'top':(100/dist*i) + '%'
        })
    }

    dataSet.map(function(d, i){
  
        let X_value = 100/(dataSet.length-1)*i;
        let beforedata = (100-(d.data-$(select).data('min'))/($(select).data('max')-$(select).data('min'))*100);

        point = point + X_value + '% ' + beforedata + '% ';
        if(i+1 !== dataSet.length){point = point + ',';}

        $(select + '.line-background').append('<div class="event data-point data-point'+i+'" data-value="'+d.data+'"></div>')
        $(select + '.data-point'+i).css({
            'top':'calc('+beforedata+'% - 0.5rem)',
            'left':'calc('+X_value+'% - 0.5rem)'
        })
    })
    point = 'polygon(' + point + ',100% 100%, 0 100%)';
    
    let stand_size = ($(select+'.line-wrapper').height()/2*3 < $(select+'.line-wrapper').width()) ? $(select+'.line-wrapper').height() : $(select+'.line-wrapper').width();

    $(select + '.line-background, ' + select + '.line-showdata').css({
        'top': 'calc(50% - ' + (stand_size / 3) + 'px)',
        'left': 'calc(50% - ' + (stand_size / 2) + 'px)',
        'width': stand_size,
        'height': stand_size/3*2
    })

    $(select + '.line-showdata').css({
        'clip-path': '-webkit-'+point,
        'clip-path': point
    })
    
}