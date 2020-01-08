<template>
  <div class="aside-section">
    <div class="aside-container">
      <div class="feedback-logo">
        <a href="/">
          <img src="../assets/logo.svg" alt="Feedback Logo" />
        </a>
      </div>
<button @click="signOut">Log Out</button>
      <ProfileInfo v-if="userProfile" 
        :img="this.getProfileImage"
        :firstName="this.getUserName.first_name"
        :lastName="this.getUserName.last_name"
        :displaySignout="true"
        />
      <div class="members-list" v-if="userProfile">
        <h3>Your Teammates</h3>
        <ul>
          <li v-for="member in membersList" :key="member.id" >
            <ProfileInfo 
              :img="member.profile_picture"
              :firstName="member.name.first_name"
              :lastName="member.name.last_name"
              v-if="member.email !== getCurrentUserMail"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileInfo from "@/components/ProfileInfo.vue"
import firebase from "firebase"
import { CLEAR_USER, HIDE_PROFILE } from '@/store/actions.type'

export default {
  name: "AsidePanel",
  components: {
    ProfileInfo
  },
  data: function() {
    return {
      userProfile: this.$store.state.profile.userProfile,
      currentUser: null,
      membersList: null
    }
  },
  methods: {
    signOut(e) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push("/login");
          this.$store.dispatch(CLEAR_USER, this.currentUser);
          this.$store.dispatch(HIDE_PROFILE, this.showUserProfile)
        });
      e.preventDefault();
    }
  },
  created: function() {
    this.membersList = this.$store.state.profile.usersList
    console.log('created', this.$store.state.profile.usersList)
  },
  computed: {
    getUserName() {
      return this.$store.state.profile.currentUser.name
    },
    getAllUsers() {
      return this.$store.state.profile.usersList
    },
    getCurrentUserMail() {
      return this.$store.state.profile.currentUser.email
    },
    getProfileImage() {
      return this.$store.state.profile.currentUser.profile_picture
    }
  }
};
</script>

<style lang="scss">
.aside-section {
  width: 25%;
  height: 100vh;
  background: #22282D;

  .aside-container {
    width: 70%;
    margin: 50px auto;

    .feedback-logo {
      justify-content: left;
      align-items: center;
      display: flex;
    }

    .profile-wrap {
      margin-top: 50px;
      display: flex;
      align-items: center;

      .profile-photo {
        width: 48px;
        height: 48px;
        border-radius: 50px;
        overflow: hidden;
        margin-right: 15px;
        border: 2px solid #fff;

        img {
          width: 100%;
        }
      }

      .profile-details {
        text-align: left;
        color: #ffffff;

        p {
          font-size: 16px;
          font-weight: 400;
          margin: 0 0 5px;
          text-transform: capitalize;
        }

        button {
          background: none;
          border: none;
          font-size: 12px;
          color: #ffffff;
          padding: 0;
          font-weight: 500;
          cursor: pointer;
        }
      }
    }

    .members-list {
      margin-top: 50px;

      h3 {
        font-size: 14px;
        color: #A7A9AB;
        text-align: left;
        text-transform: uppercase;
        margin-bottom: 30px;
        font-weight: 500;
      }

      ul {
        margin: 0;
        padding: 0;
        list-style: none;

        li {
          cursor: pointer;
          margin-bottom: 30px;

          .user-name {
            font-size: 14px;
            font-weight: 500;
          }
        }
      }

      .profile-wrap {
        margin: 0;
      }
    }
  }
}

@media (min-width: 1500px) {
  .aside-section {
    width: 20%;
  }
}
</style>
