<template>
  <div id="page2">
    <el-container class="container">
      <el-header height="auto" class="header">
        <el-breadcrumb separator="/" class="breadcrumb">
          <el-breadcrumb-item :to="{ name: 'baseLayout' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>页面2</el-breadcrumb-item>
        </el-breadcrumb>
        <el-form ref="form" :model="form" label-width="80px" class="form">
          <el-form-item label="活动名称">
            <el-col :span="18">
              <el-input v-model="form.name"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="活动区域">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="活动时间">
            <el-col :span="8">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="8">
              <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="即时配送">
            <el-switch v-model="form.delivery"></el-switch>
          </el-form-item>
          <el-form-item label="活动性质">
            <el-checkbox-group v-model="form.type">
              <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
              <el-checkbox label="地推活动" name="type"></el-checkbox>
              <el-checkbox label="线下主题活动" name="type"></el-checkbox>
              <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="特殊资源">
            <el-radio-group v-model="form.resource">
              <el-radio label="线上品牌商赞助"></el-radio>
              <el-radio label="线下场地免费"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="活动形式">
            <el-col :span="18">
              <el-input type="textarea" v-model="form.desc"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </el-header>
      <el-main>
        <el-table :data="tableData" stripe border height="100%">
          <el-table-column prop="date" label="日期" sortable width="140">
          </el-table-column>
          <el-table-column prop="name" label="姓名" sortable width="120">
          </el-table-column>
          <el-table-column prop="address" sortable label="地址">
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
export default class Page2 extends Vue {
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
    name: '王中虎',
    address: '上海市普陀区金沙江路 1518 弄',
  } as TableRow);

  private onSubmit(): void {
    Message('表单已提交');
  }
}
</script>
<style scoped lang="scss">
#page2 {
  height: 100%;
  .container {
    .header {
      .breadcrumb {
        margin-bottom:20px;
      }
      .form {
        text-align:left;
        .el-form-item {
          .line {
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
