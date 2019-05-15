//chart
let layout = (className) => {
	// console.log($(className));
	return ($(className).height() < $(className).width() ? $(className).height() : $(className).width());
	// return 300;
}
let index_position = (select_tag, dataSet) => {
    let position = {
        'top':'column-reverse',
        'right':'row',
        'left':'row-reverse',
        'bottom':'column',
        'none':''
    }
    let status = $(select).data('index-position')


    if(status == 'none') {
        $(select_tag+'.chart-wrapper').css({'height':'100%', 'width':'100%'})
    } else if(status){
        // console.log(status)
        $(select_tag).append('<div class="chart-index"></div>')

        $(select_tag).css({
            'flex-direction':position[status]
        })
        status = (status == 'top'||status == 'bottom')?'height':'width';
        // console.log(status)
        if(status == 'height'){
            $(select_tag+'.chart-wrapper').css({'height':'calc(100% - 60px)'})
            $(select_tag+'.chart-index').css({'height':'60px'})
        } else {
            $(select_tag+'.chart-wrapper').css({'width':'calc(100% - 60px)'})
            $(select_tag+'.chart-index').css({'width':'60px'})
        }
    } else {
        $(select_tag).append('<div class="chart-index"></div>')
        $(select_tag).css({'flex-direction':'column'})
        $(select_tag+'.chart-wrapper').css({'height':'calc(100% - 60px)'})
        $(select_tag+'.chart-index').css({'height':'60px'})
    }
    
    if(select.indexOf('circle') != -1){
    	for(var i=0; i<dataSet.length;i++){
        	
        	$(select+'.chart-index').append('<div id='+dataSet[i].title+'></div>');
        	$(select+'#'+dataSet[i].title).css({'text-align':'center'});
        	$(select+'#'+dataSet[i].title).css({'flex':'auto'});
        	$(select+'#'+dataSet[i].title).append('<div></div>');
        	$(select+'#'+dataSet[i].title).append('<label>'+dataSet[i].title+'</label>');
        	$(select+'#'+dataSet[i].title+' div').css({'float':'left'});
            $(select+'#'+dataSet[i].title+' label').css({'float':'left'});
            $(select+'#'+dataSet[i].title+' div').css({'margin':'1vmin'});
            $(select+'#'+dataSet[i].title+' label').css({'margin':'1vmin 0'});
            $(select+'#'+dataSet[i].title+' div').css({'background-color':dataSet[i].color});
            $(select+'#'+dataSet[i].title+' div').css({'width':'3vmin'});
            $(select+'#'+dataSet[i].title+' div').css({'height':'3vmin'});
        }
    }
    
}