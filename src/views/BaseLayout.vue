<template>
  <div id="base-layout">
    <el-container class="base-container">
      <el-header class="base-header" height="50px">
        <base-header />
      </el-header>
      <el-container class="content-container">
        <el-aside width="230px" class="aside">
          <base-aside />
        </el-aside>
        <el-main class="main">
          <router-view/>
        </el-main>
      </el-container>
      <el-dialog title="提示" :visible.sync="user.dialogVisible" width="30%">
        <el-form ref="form" :model="user" label-width="80px" class="form">
          <el-form-item label="用户名">
            <el-col :span="20">
              <el-input placeholder="请输入用户名" v-model="user.name"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="密码">
            <el-col :span="20">
              <el-input placeholder="请输入密码" v-model="user.password" show-password></el-input>
            </el-col>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="user.dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="handleClose">确 定</el-button>
        </span>
      </el-dialog>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide, Prop } from 'vue-property-decorator';
import BaseHeader from '@/components/BaseHeader.vue';
import BaseAside from '@/components/BaseAside.vue';
import { User, PromiseHandle } from '@/types';
import { Message } from 'element-ui';

@Component({
  components: {
    BaseHeader,
    BaseAside,
  },
})
export default class BaseLayout extends Vue {
  @Provide('user')
  user: User = {
    name : 'admin',
    password : '123456',
    dialogVisible : false,
    hello : (name: string) => {
      Message(`你好！ ${name}`);
    },
    openLoginPop : (): Promise<object> => {
      this.user.dialogVisible = true;
      return new Promise<object>((resolve, reject) => {
        this.loginPopResult = {
          resolve,
          reject,
        };
      });
    },
  };
  loginPopResult!: PromiseHandle;
  handleClose: () => void = () => {
    if (this.user.name === 'admin' && this.user.password === '123456') {
      Message('登录成功');
    } else {
      Message('用户名或密码错误');
    }
    this.user.dialogVisible = false;
    this.loginPopResult.resolve({name: this.user.name, password: this.user.password});
  }
}
</script>
<style scoped lang="scss">
#base-layout {
  .base-header {
    padding:0;
  }
  .base-container {
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    .content-container {
      .aside {
        background: #222d32;
      }
      .main {
        height:100%;
      }
    }
  }
}
</style>
