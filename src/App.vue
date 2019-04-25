<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import './assets/css/main.scss';
import { Component, Vue } from 'vue-property-decorator';
import { State, Getter, Mutation } from 'vuex-class';
import { RootState, Person } from '@/types';
import people from '@/mock/random-data';

@Component
export default class App extends Vue {
  @State('token') token;
  @Mutation('SET_PEOPLE') setPeople;
  @Getter('somePeople') somePeople;
  created() {
    this.setPeople(people);
  }
}
</script>
<style lang="scss">
#app {
  width:100%;
  height:100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
