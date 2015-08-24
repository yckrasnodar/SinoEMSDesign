option = {
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['耗热','耗水','耗电','耗气']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'耗热',
            type:'line',
            stack: '总量',
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132]
        },
        {
            name:'耗水',
            type:'line',
            stack: '总量',
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 220, 182, 191, 234, 290, 330, 220, 182, 191, 234, 290, 330, 220, 182, 191, 234, 290, 330]
        },
        {
            name:'耗气',
            type:'line',
            stack: '总量',
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[150, 232, 201, 154, 190, 330, 410,150, 232, 201, 154, 190, 330,150, 232, 201, 154, 190, 330,150, 232, 201, 154, 190, 330,150, 232, 201, 154, 190, 330]
        },
        {
            name:'耗电',
            type:'line',
            stack: '总量',
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[320, 332, 301, 334, 390, 330, 320, 332, 301, 334, 390, 330, 320, 332, 301, 334, 390, 330, 320, 332, 301, 334, 390, 330, 320, 332, 301, 334, 390, 330, 320]
        },
    ]
};
                    