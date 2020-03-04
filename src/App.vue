<template>
  <div id="app">
    <div class="main-page">
      <AsidePanel />
      <div class="main-right-content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import AsidePanel from "@/components/AsidePanel.vue";
import firebase from "firebase";
import { LOGIN } from '@/store/actions.type'

export default {
  components: {
    AsidePanel
  },
  created () {
    const database = firebase.database();
    database.ref('users').on('value', snapshot => {
      this.$store.dispatch(LOGIN, snapshot.val());
      console.log(snapshot.val())
    });
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  #app {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #nav {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}
</style>
