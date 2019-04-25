<template>
  <div id="page3">
    <el-table class="table" :data="tableData" stripe border height="90%">
      <el-table-column prop="id" label="ID" width="60"></el-table-column>
      <el-table-column prop="first_name" label="名"></el-table-column>
      <el-table-column prop="last_name" label="姓"></el-table-column>
      <el-table-column label="头像">
        <template slot-scope="scope">
          <img :src="scope.row.avatar" />
        </template>
      </el-table-column>
      <el-table-column label="联系方式">
        <el-table-column prop="contact.email" label="邮箱"></el-table-column>
        <el-table-column prop="contact.phone" label="手机"></el-table-column>
      </el-table-column>
      <el-table-column label="地址">
        <el-table-column prop="address.city" label="城市"></el-table-column>
        <el-table-column prop="address.country" label="国家"></el-table-column>
      </el-table-column>
      <el-table-column prop="gender" label="性别"></el-table-column>
      <el-table-column prop="ip_address" label="IP地址"></el-table-column>
    </el-table>
    <el-pagination background layout="prev, pager, next" :total="total" @current-change="currentChange"></el-pagination>
  </div>
</template>

<script lang="ts">
import { TableRow } from '@/types';
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { RootState, Person } from '@/types';

@Component
export default class Page3 extends Vue {
  @Getter('somePeople') somePeople!: Person[];
  tableData: Person[] = [];
  total: number = 0;
  currentPage: number = 1;
  pageSize: number = 10;
  mounted() {
    this.total = this.somePeople.length;
    this.getTableData(1);
  }
  currentChange(page: number): void {
    this.currentPage = page;
    this.getTableData(page);
  }
  getTableData(page: number) {
    const startIndex = (page - 1) * this.pageSize;
    this.tableData = this.somePeople.slice(startIndex, startIndex + 10);
  }
}
</script>
<style scoped lang="scss">
#page3 {
  height: 100%;
  .table {
    margin-bottom:20px;
    img {
      display:block;
      width:100%;
    }
  }
}
</style>
