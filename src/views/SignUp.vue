<template>
  <div class="login-page">
    <AsidePanel />
    <div class="login-form-section">
      <div class="login-wrap">
        <div class="login">
          <h1>Sign up to provide a feedback</h1>
          <form>
            <div class="form-field">
              <input
                type="text"
                class="text-box"
                v-model="email"
                placeholder="Email"
              />
              <!-- <label for="email">Email</label> -->
            </div>
            <div class="form-field">
              <input
                type="password"
                class="text-box"
                v-model="password"
                placeholder="Password"
              />
              <!-- <label for="password">Password</label> -->
            </div>
            <button class="button" @click="signUp">Sign Up</button>
            <p class="register-link">
              If you have a account?
              <router-link to="/login">Sign In</router-link>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AsidePanel from "@/components/AsidePanel.vue";
import firebase from "firebase";

export default {
  name: "SignUp",
  components: {
    AsidePanel
  },
  data: function() {
    return {
      email: "",
      password: "",
      authUser: null
    };
  },
  methods: {
    signUp: function(e) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            this.$router.push("/home");
            alert("hey" + user);
          },
          err => {
            alert(err.message);
          }
        );
      e.preventDefault();
    }
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      this.authUser = user;
    });
  }
};
</script>

<style lang="scss"></style>
