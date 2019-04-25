<template>
  <div id="page1">
    <el-container class="page1-container">
      <el-header height="auto">
        <el-breadcrumb separator="/" class="breadcrumb">
          <el-breadcrumb-item :to="{ name: 'baseLayout' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>页面1</el-breadcrumb-item>
        </el-breadcrumb>
        <el-form ref="form" :model="form" label-width="80px" class="form">
          <el-form-item label="活动时间">
            <el-col :span="8">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="8">
              <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即查询</el-button>
          </el-form-item>
        </el-form>
      </el-header>
      <el-main>
        <el-table :data="tableData" stripe border height="100%">
          <el-table-column prop="date" label="日期" width="140">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="120">
          </el-table-column>
          <el-table-column prop="address" label="地址">
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { QueryForm, TableRow } from '@/types';
import { Message } from 'element-ui';

@Component
export default class Page1 extends Vue {
  form: QueryForm = {
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
  };

  tableData: TableRow[] = Array(20).fill({
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄',
  } as TableRow);

  private onSubmit(): void {
    Message('表单已提交');
  }
}
</script>
<style scoped lang="scss">
#page1 {
  height:100%;
  .page1-container {
    height:100%;
    .breadcrumb {
      margin-bottom:20px;
    }
    .form {
      text-align: left;
      .el-form-item {
        .line {
          text-align: center;
        }
      }
    }
  }
  
}
</style>
