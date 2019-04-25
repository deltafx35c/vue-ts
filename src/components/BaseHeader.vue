<template>
  <div id="base-header">
    <a class="logo">AdminLTE</a>
    <div class="nav">
      <el-dropdown class="user" @command="handleCommand">
        <span class="el-dropdown-link user-link">
          用 户
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-plus" command="1">我的信息</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-plus" command="2">修改密码</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-plus-outline" command="3">切换用户</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Inject } from 'vue-property-decorator';
import { User } from '@/types';

@Component
export default class BaseHeader extends Vue {
  @Inject('user')
  user!: User;
  private promise: Promise<object> = new Promise<object>((resolve, reject) => {
    return {
      resolve,
      reject,
    };
  });
  private async handleCommand(commond: string): Promise<boolean> {
    switch (commond) {
      case '1':
        this.user.hello!('admin');
        break;
      case '2':
        const result = await this.user.openLoginPop!();
        break;
      case '3':
        this.$router.push({name: 'login'});
        break;
    }
    return true;
  }
}
</script>

<style scoped lang="scss">
#base-header {
  height:100%;
  display:flex;
  color:#fff;
  background:#3c8dbc;
  .logo{
    width:230px;
    height:100%;
    font-size:20px;
    line-height:50px;
    background:#367fa9;
  }
  .nav {
    display:flex;
    flex-grow:1;
    height:100%;
    justify-content:flex-end;
    padding:0 40px;
    box-sizing:border-box;
    .user {
      color:#fff;
      cursor:pointer;
      &:hover {
        background:rgba(0,0,0,0.1);
      }
      .user-link {
        display:block;
        width:80px;
        height:100%;
        padding:0 20px;
        line-height:50px;
        box-sizing:border-box;
      }
    }
  }
}
  
</style>
