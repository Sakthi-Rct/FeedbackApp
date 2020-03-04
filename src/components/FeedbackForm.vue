<template>
  <div class="form-wrap">
    <h1>Provide Feedback</h1>
    <form class="feedback-form">
      <h4>Personal skills and competences</h4>

      <div v-for="skill in skillData" :key="skill.skillId" class="skill-row">
        <PersonalSkill :skillText="skill.skillName" :skillRow="skill.skillRow" />
      </div>

      <h4>Write a feedback</h4>
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
import PersonalSkill from "@/components/PersonalSkill.vue";

export default {
  name: "FeedbackForm",
  components: {
    PersonalSkill
  },
  data: function() {
    return {
      pros: "",
      cons: "",
      skillData: [
        { skillId: "1", skillName: "Leadership Skills", skillRow: "skillOne" },
        { skillId: "2", skillName: "English language knowledge", skillRow: "skillTwo" },
        { skillId: "3", skillName: "Communication skills", skillRow: "skillThree" },
        { skillId: "4", skillName: "Problem solving", skillRow: "skillFour" },
        { skillId: "5", skillName: "Programming skills", skillRow: "skillFive" },
        { skillId: "6", skillName: "Ability to learning", skillRow: "skillSix" },
        { skillId: "7", skillName: "Workflow behavior", skillRow: "skillSeven" },
        { skillId: "8", skillName: "Sence of humor", skillRow: "skillEight" }
      ]
    };
  },
  methods: {
    feedbackSubmit(e) {
      const database = firebase.database()
      let payload = {};
      payload[this.getMemberId] = {
        email: this.getCurrentUser.email,
        pros: this.pros, 
        cons: this.cons,
        skills: this.skillData
      }
      database.ref('users').child(this.getMemberId).
      update({ feedback_received: payload })
      e.preventDefault();
    }
  },
  computed: {
    getCurrentUser() {
      return this.$store.state.profile.currentUser
    },
    getMemberId() {
      return this.$store.state.profile.memberId
    }
  },
  created() {
    console.log(this.$route);
  }
};
</script>

<style lang="scss">
  .form-wrap {
    width: 80%;
    margin: 50px auto;
    display: flex;
    flex-wrap: wrap;

    h1 {
      font-size: 24px;
      font-weight: 400;
      color: #EC1940;
      text-align: left;
      margin: 0 0 50px;
    }

    .feedback-form {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;

      .skill-row {
        width: 100%;
      }

      h4 {
        font-size: 16px;
        color: #22282D;
        margin-bottom: 30px;
        font-weight: 400;
        width: 100%;
        text-align: left;
      }

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

      .button {
        color: #ffffff;
        font-size: 14px;
        line-height: 20px;
        font-weight: 500;
        background: #ec1940;
        border-radius: 2px;
        border: none;
        text-transform: uppercase;
        padding: 10px 30px;
        cursor: pointer;

        &:hover {
          background: #d80c32;
        }
      }
    }
  }
</style>
