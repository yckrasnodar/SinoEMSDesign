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
            data : ['1日','2日','3日','4日','5日','6日','7日','8日','9日','10日','11日','12日','13日','14日','15日','16日','17日','18日','19日','20日','21日','22日','23日','24日','25日','26日','27日','28日','29日','30日']
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
            data:[22.6,25.9,29.0,26.4,28.7,30.7,45.6,32.2,48.7,18.8,26.0,22.3,22.6,25.9,29.0,26.4,28.7,30.7,45.6,32.2,48.9,18.8,26.0,22.3,22.3],
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