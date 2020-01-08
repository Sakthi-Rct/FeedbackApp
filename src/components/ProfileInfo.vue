<template>
  <div>
    <div class="profile-wrap">
      <div class="profile-photo">
        <img :src="img" alt="user profile" />
      </div>
      <div class="profile-details">
        <p class="user-name">
          {{ firstName + ' ' + lastName }}
        </p>
        <button @click="signOut" v-if="displaySignout === true">Log Out</button>
      </div>
    </div>
    <!-- <div class="profile-wrap team-members-list">
      <div class="profile-photo">
        <img :src="memberImage" alt="team members" />
      </div>
      <div class="profile-details">
        <p class="user-name">
          {{ memberName }}
        </p>
      </div>
    </div> -->
  </div>
</template>

<script>
import firebase from "firebase"
import { CLEAR_USER, HIDE_PROFILE } from '@/store/actions.type'

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
    },
    displaySignout: {
      type: Boolean
    }
  },
  data: function() {
    return {
      currentUser: null,
      showUserProfile: false
    };
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
  }
};
</script>

<style lang="scss">
</style>