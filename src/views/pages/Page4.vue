<template>
  <div id="page4">
    <div id="main"></div>
    <el-table :data="tableData" stripe border >
      <el-table-column prop="date" label="日期" sortable width="140">
      </el-table-column>
      <el-table-column prop="name" label="姓名" sortable width="120">
      </el-table-column>
      <el-table-column prop="address" label="地址" sortable>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { TableRow } from '@/types';
import echarts from 'echarts';

@Component
export default class Page4 extends Vue {
  tableData: TableRow[] = Array(20).fill({
    date: '2016-05-02',
    name: '王虎',
    address: '上海市普陀区金沙江路 1518 弄',
  } as TableRow);
  mounted() {
    const el = document.getElementById('main') as HTMLDivElement;
    const myChart = echarts.init(el);
    myChart.setOption({
      title: {
          text: 'ECharts 入门示例',
      },
      tooltip: {},
      xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
      },
      yAxis: {},
      series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20],
      }],
    });
  }
}
</script>
<style scoped lang="scss">
#page4 {
  height:100%;
  #main {
    width:100%;
    height: 300px;
  }
}
</style>
