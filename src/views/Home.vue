<template>
  <div class="main-page">
    <AsidePanel />
    <div class="main-right-content">
      <h1>Provide Feedback</h1>
      <FeedbackForm />
    </div>
  </div>
</template>

<script>
import AsidePanel from "@/components/AsidePanel.vue";
import FeedbackForm from "@/components/FeedbackForm.vue";

export default {
  name: "Home",
  components: {
    AsidePanel,
    FeedbackForm
  },
  data: function() {
    return {};
  },
  methods: {
  }
};
</script>

<style lang="scss">
.main-page {
  display: flex;

  .main-right-content {
    width: 75%;
  }
}
</style>