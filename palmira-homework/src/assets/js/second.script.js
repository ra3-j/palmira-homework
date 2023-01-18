        var mainObj = "#E36537",
            blueColor = "#6da0bf";

        Highcharts.chart('obj', {

            chart: {
                type: 'networkgraph',
                marginTop: 0,
                backgroundColor: '#FAFEFF',
            },

            title: {
                text: ''
            },

            subtitle: {
                text: ''
            },

            plotOptions: {
                networkgraph: {
                    keys: ['from', 'to'],
                    layoutAlgorithm: {
                        enableSimulation: true,
                        integration: 'verlet',
                        linkLength: 100
                    }
                }
            },

            series: [{
                marker: {
                    radius: 13,
                },
                dataLabels: {
                    enabled: true,
                    linkFormat: '',
                    allowOverlap: true
                },
                data: [
                    ['Object name goes here', 'Object1'],
                    ['Object name goes here', 'Object2'],
                    ['Object name goes here', 'Object3'],
                    ['Object name goes here', 'Object4'],
                    ['Object name goes here', 'Object5'],
                    ['Object name goes here', 'Object6'],
                    ['Object name goes here', 'Object7'],
                    ['Object name goes here', 'Object8']
                ],
                nodes: [{
                    id: 'Object name goes here',
                    color: mainObj
                },
                {
                    id: 'Object1',
                    color: blueColor
                }, {
                    id: 'Object2',
                    color: blueColor
                }, {
                    id: 'Object3',
                    color: blueColor
                }, {
                    id: 'Object4',
                    color: blueColor
                }, {
                    id: 'Object5',
                    color: blueColor
                }, {
                    id: 'Object6',
                    color: blueColor
                }, {
                    id: 'Object7',
                    color: blueColor
                }, {
                    id: 'Object8',
                    color: blueColor
                }]
            }]
        });