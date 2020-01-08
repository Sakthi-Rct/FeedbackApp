<template>
  <div>
    <form class="feedback-form">
      <textarea v-model="pros" 
          placeholder="What is wrong" class="text-area">
      </textarea>
      <textarea v-model="cons" 
          placeholder="What could be improved" class="text-area">
      </textarea>
      <button @click="feedbackSubmit" class="button">Submit</button>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "FeedbackForm",
  data: function() {
    return {
      pros: "",
      cons: ""
    };
  },
  methods: {
    feedbackSubmit(e) {
      const database = firebase.database()
      database.ref('users').child('Jy5qtC5yW0a8VlAlO0ZBS0CraFE3').update({pros: this.pros, cons: this.cons})
      console.log('submitform', this.pros, this.cons)
      console.log('currentUser', this.getCurrentUser)
      e.preventDefault();
    }
  },
  computed: {
    getCurrentUser() {
      return this.$store.state.profile.currentUser
    }
  }
};
</script>

<style lang="scss">
  .feedback-form {
    width: 80%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;

    .text-area {
      border: none;
      border-bottom: 1px solid #ccc;
      width: 100%;
      font-size: 14px;
      margin-bottom: 40px;
      resize: none;
      outline: none;
      line-height: 20px;
    }
  }
</style>
