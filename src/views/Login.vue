<template>
  <div class="login-page">
    <AsidePanel />
    <div class="login-form-section">
      <div class="login-wrap">
        <div class="login">
          <h1>Log in to provide a feedback</h1>
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
            <a href="">Forgot Password?</a>
            <p>length is {{ getAllUsersLength }}</p>
            <button @click="login" class="button">Log In</button>
            <p class="register-link">
              Don't have an account?
              <router-link to="/sign-up">Register</router-link>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AsidePanel from "@/components/AsidePanel.vue"
import firebase from "firebase"
import { CURRENT_USER } from '@/store/actions.type'

export default {
  name: "Login",
  components: {
    AsidePanel
  },
  data: function() {
    return {
      email: "",
      password: "",
      loggedUser: null
    };
  },
  methods: {
    login: function(e) {
      firebase.auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            for (var i = 0; i < this.getAllUsersLength; i++) {
              if (this.getAllUsers[i].email == user.email) {
                this.loggedUser = this.getAllUsers[i];
                this.$store.dispatch(CURRENT_USER, this.loggedUser)
                break;
              }
            }
            this.$router.push("/home");
          },
          err => {
            console.log(err.message);
            this.loggedUser = null;
            this.$store.dispatch(CURRENT_USER, this.loggedUser)
          }
        ).catch(
          err => {
            console.log(err.message);
            this.loggedUser = null;
            this.$store.dispatch(CURRENT_USER, this.loggedUser)
            alert('there was an error')
          }
        );
      e.preventDefault();
    }
  },
  computed: {
    getAllUsers() {
      return this.$store.state.profile.usersList
    },
    getAllUsersLength() {
      return this.$store.state.profile.usersList.length
    }
  },
  created() {
  }
};
</script>

<style lang="scss">
.login-page {
  display: flex;
  justify-content: left;
}
.login-form-section {
  width: 75%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .login-wrap {
    width: 380px;
    margin-top: -15px;

    h1 {
      font-size: 48px;
      font-weight: 300;
      color: #4e5357;
      text-align: left;
      line-height: 63px;
      margin: 0 0 40px;
    }

    .text-box {
      background: none;
      border: none;
      width: 100%;
      font-size: 16px;
      font-weight: 300;
      line-height: 21px;
      padding-bottom: 4px;
      z-index: 9;
      border-bottom: 2px solid #d3d4d5;

      &:focus {
        outline: none;
      }
    }
    form {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;

      .form-field {
        position: relative;
        margin-bottom: 30px;
        width: 100%;

        label {
          position: absolute;
          top: 0;
          left: 0;
          z-index: -1;
          opacity: 0.4;
          font-size: 16px;
          transition: 0.2s;
        }

        .text-box:focus + label {
          margin-top: -20px;
          opacity: 1;
          font-size: 14px;
        }
      }

      .button {
        color: #ffffff;
        font-size: 14px;
        line-height: 20px;
        font-weight: 500;
        background: #ec1940;
        border-radius: 2px;
        border: none;
        text-transform: uppercase;
        padding: 10px 50px;
        cursor: pointer;

        &:hover {
          background: #d80c32;
        }
      }
      .register-link {
        display: flex;
        width: 100%;
        justify-content: flex-end;
        font-size: 14px;
        margin-top: 25px;
      }
    }
  }
}
</style>
