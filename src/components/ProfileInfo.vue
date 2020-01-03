<template>
  <div>
    <div class="profile-wrap">
      <div class="profile-photo">
        <img src="img" alt="user profile" />
      </div>
      <div class="profile-details">
        <p class="user-name">
          {{ firstName + ' ' + lastName }}
        </p>
        <button @click="signOut">Log Out</button>
      </div>
    </div>
    <p>profile info component</p>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "ProfileInfo",
  props: {
    firstName: {
      type: String
    },
    lastName: {
      type: String
    },
    img: {
      type: String
    }
  },
  data: function() {
    return {
      // firstName: this.$store.state.currentUser.name.first_name,
      // lastName: this.$store.state.currentUser.name.last_name,
      // profilePicture: this.$store.state.currentUser.profile_picture
    };
  },
  methods: {
    signOut(e) {
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
  }
};
</script>

<style lang="scss">
</style>