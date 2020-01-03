<template>
  <div>
    <!-- <ProfileInfo v-for="memeber in membersList" :key="member.id" /> -->
    <p>Memberslist</p>
  </div>
</template>

<script>
// import ProfileInfo from './ProfileInfo';

export default {
  name: 'MembersList',
  components: {
    // ProfileInfo
  },
  data: function () {
    return {
      membersList: this.$store.state.usersList
    }
  }
}
</script>