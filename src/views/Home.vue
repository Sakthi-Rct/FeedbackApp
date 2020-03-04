<template>
    <PlaceHolder />
</template>

<script>
import PlaceHolder from "@/components/PlaceHolder.vue"

export default {
  name: "Home",
  components: {
    PlaceHolder
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