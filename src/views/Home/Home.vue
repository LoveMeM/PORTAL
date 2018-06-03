<template>
    <div class="root">
        <navbar></navbar>
    </div>
</template>
<script>
import navbar from "components/layout/navbar.vue";
import CommonService from "common/common.js";
import { mapGetters, mapActions } from "vuex";
export default {
  date() {},
  components: {
    navbar
  },
  computed: {
    ...mapGetters(["currentUser"])
  },
  methods: {
    ...mapActions(["updateUser"])
  },
  mounted() {
    let ranNumber = CommonService.getRanNumber();
    if (!this.currentUser.isRegister && !this.currentUser.UserName) {
      let user = $.extend({}, this.currentUser);
      user.UserName = ranNumber;
      this.updateUser(user);
    }
  }
};
</script>
<style scoped>
</style>

