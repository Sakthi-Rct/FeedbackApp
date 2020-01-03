<template>
  <div class="aside-section">
    <div class="aside-container">
      <div class="feedback-logo">
        <a href="/">
          <img src="../assets/logo.svg" alt="Feedback Logo" />
        </a>
      </div>
      <ProfileInfo v-if="userProfile" 
        :img="this.profileImg"
        :firstName="this.firstName"
        :lastName="this.lastname"
        />
      <MembersList />
      <button @click="clickme">clickme</button>
    </div>
  </div>
</template>

<script>
import ProfileInfo from "@/components/ProfileInfo.vue";
import MembersList from "@/components/MembersList.vue";
import firebase from 'firebase';
    
export default {
  name: "AsidePanel",
  components: {
    ProfileInfo,
    MembersList
  },
  data: function() {
    return {
      userProfile: this.$store.state.userProfile,
      profileImg: '',
      firstName: 'sakthi',
      lastname: 'ravi'
    }
  },
  methods: {
    clickme: function(e) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push("/login");
          this.$store.state.currentUser = '';
        });
      e.preventDefault();
      this.$store.state.userProfile = false;
    }
  },
  computed: {
    
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
  }
}

@media (min-width: 1500px) {
  .aside-section {
    width: 20%;
  }
}
</style>
