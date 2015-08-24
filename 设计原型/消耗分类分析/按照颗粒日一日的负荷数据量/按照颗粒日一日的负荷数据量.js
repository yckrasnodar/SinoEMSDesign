option = {
    title : {
        text: '亨通光电吴江厂一号厂房',
        subtext: 'KWh'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['负荷量']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data : ['1','2','3','4','5','6','7','8','9日','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'负荷量',
            type:'bar',
            data:[22.6,25.9,29.0,26.4,28.7,30.7,45.6,32.2,48.7,18.8,26.0,22.3,22.6,25.9,29.0,26.4,28.7,30.7],
             markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
          markLine : {
                data : [
                    {type : 'average', name : '平均值'}
                ]
            }
        }
    ]
};