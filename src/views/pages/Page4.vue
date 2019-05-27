<template>
    <div id="page4">
    <div id="page4-report"></div>
        <el-table :data="tableData" stripe border >
            <el-table-column type="index" width="55">
            </el-table-column>
            <el-table-column prop="date" label="日期" sortable width="240">
            </el-table-column>
            <el-table-column prop="count" label="站点数" sortable width="220">
            </el-table-column>
        </el-table>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import echarts, { ECharts } from 'echarts';
import data from '@/mock/report-data1';

@Component
export default class Page4 extends Vue {
  tableData: any[] = data.map((item) => ({date: item[0], count: item[1]}));
  mounted() {
    const el = document.getElementById('page4-report') as HTMLDivElement;
    const myChart = echarts.init(el);
    const option = {
        backgroundColor: '#404a59',
        title: {
            top: 30,
            text: '2018-19年某公司前端站点上线次数',
            left: 'center',
            textStyle: {
                color: '#fff',
            },
        },
        tooltip : {
            trigger: 'item',
        },
        legend: {
            top: '30',
            left: '100',
            data: ['次数', 'Top 30'],
            textStyle: {
                color: '#fff',
            },
        },
        calendar: [{
            top: 100,
            left: 'center',
            range: ['2018-01-01', '2018-12-31'],
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#000',
                    width: 4,
                    type: 'solid',
                },
            },
            yearLabel: {
                formatter: '{start}  1st',
                textStyle: {
                    color: '#fff',
                },
            },
            itemStyle: {
                normal: {
                    color: '#323c48',
                    borderWidth: 1,
                    borderColor: '#111',
                },
            },
        }, {
            top: 340,
            left: 'center',
            range: ['2019-01-01', '2019-12-31'],
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#000',
                    width: 4,
                    type: 'solid',
                },
            },
            yearLabel: {
                formatter: '{start}  2nd',
                textStyle: {
                    color: '#fff',
                },
            },
            itemStyle: {
                normal: {
                    color: '#323c48',
                    borderWidth: 1,
                    borderColor: '#111',
                },
            },
        }],
        series : [
            {
                name: '站点数',
                type: 'scatter',
                coordinateSystem: 'calendar',
                data,
                symbolSize(val: any) {
                    return val[1] * 5;
                },
                itemStyle: {
                    normal: {
                        color: '#ddb926',
                    },
                },
            },
            {
                name: '站点数',
                type: 'scatter',
                coordinateSystem: 'calendar',
                calendarIndex: 1,
                data,
                symbolSize(val: any) {
                    return val[1] * 5;
                },
                itemStyle: {
                    normal: {
                        color: '#ddb926',
                    },
                },
            },
            {
                name: 'Top 30',
                type: 'effectScatter',
                coordinateSystem: 'calendar',
                calendarIndex: 1,
                data: data.sort((a: any, b: any) => {
                    return b[1] - a[1];
                }).slice(0, 30),
                symbolSize(val: any) {
                    return val[1] * 5;
                },
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke',
                },
                hoverAnimation: true,
                itemStyle: {
                    normal: {
                        color: '#f4e925',
                        shadowBlur: 10,
                        shadowColor: '#333',
                    },
                },
                zlevel: 1,
            },
            {
                name: 'Top 30',
                type: 'effectScatter',
                coordinateSystem: 'calendar',
                data: data.sort((a: any, b: any) => {
                    return b[1] - a[1];
                }).slice(0, 30),
                symbolSize(val: any) {
                    return val[1] * 5;
                },
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke',
                },
                hoverAnimation: true,
                itemStyle: {
                    normal: {
                        color: '#f4e925',
                        shadowBlur: 10,
                        shadowColor: '#333',
                    },
                },
                zlevel: 1,
            },
        ],
    };
    // @ts-ignore
    myChart.setOption(option);
  }
}
</script>
<style scoped lang="scss">
#page4 {
  #page4-report {
    width:100%;
    height: 600px;
    margin-bottom: 20px;
  }
}
</style>
