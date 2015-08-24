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
            data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
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
            data:[22.6, 25.9, 29.0, 26.4, 28.7, 30.7, 45.6, 32.2, 48.7, 18.8, 26.0, 22.3],
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