<template>
    <div class="navigation">
        <div class="logo">Movies</div>
        <div class="content"></div>
        <div class="pageInfo">
            <div class="feedback">{{ $t('navbar.feedBack') }}</div>
            <div class="language">
                <span>{{ language }}</span>
                <ul>
                    <li v-for="lang in languageList" :key="lang.key" @click="changeLang(lang)" :class="{'font-bold':lang.value === language}">{{ lang.value }}</li>
                </ul>
            </div>
            <div class="userInfo">
                <img :src="currentUser.HeadPortrait" alt="No Found" />
                <a href="javascript:void(0)" @click="signIn" class="color-white font-bold margin-left-10">{{ $t('common.signIn') }}</a> Or 
                <a href="javascript:void(0)" @click="signUp" class="color-white font-bold">{{ $t('common.signUp') }}</a>
                <ul v-if="currentUser.isRegister"></ul>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      language: "English",
      languageList: [
        { key: "en-us", value: "English" },
        { key: "zh-cn", value: "简体中文" },
        { key: "zh-tw", value: "繁體中文" }
      ],
      userAction: []
    };
  },
  computed: {
    ...mapGetters(["currentUser"])
  },
  methods: {
    ...mapActions(["updateUser"]),
    changeLang(lang) {
      this.language = lang.value;
      this.$i18n.locale = lang.key;
    },
    signIn() {
      this.$router.push({ name: "login" });
    },
    signUp() {
      this.$router.push({ name: "register" });
    }
  }
};
</script>

<style scoped>
.navigation {
  position: fixed;
  width: 100%;
  height: 60px;
  line-height: 60px;
  box-shadow: 1px 2px 1px gray;
  background: #1e2736;
}
.navigation .logo {
  color: white;
  margin-left: 2em;
  font-size: 2em;
  position: absolute;
}
.navigation .content {
  margin: 0 auto;
  width: 70%;
}
.navigation .pageInfo {
  position: absolute;
  width: 25%;
  height: 100%;
  right: 0;
  color: #d9dde1;
}
.navigation .pageInfo .feedback,
.navigation .pageInfo .language {
  width: 25%;
  height: 100%;
  border-left: 1px solid gray;
  float: left;
  text-align: center;
  cursor: pointer;
}
.navigation .pageInfo > div:hover {
  background: rgba(255, 255, 255, 0.08);
}
.navigation .pageInfo .language ul {
  list-style-type: none;
  position: absolute;
  width: 25%;
  background: #fff;
  color: black;
  border-radius: 0 0 5px 5px;
  box-shadow: 0 2px 4px 0 rgba(34, 36, 38, 0.12),
    0 2px 10px 0 rgba(34, 36, 38, 0.15);
  transform: scaleY(0);
  transform-origin: 0 0;
}
.navigation .pageInfo .language:hover ul {
  animation: langAnimate 0.15s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0, 0.8, 0.9, 1);
}
.navigation .pageInfo .language ul > li {
  line-height: 40px;
  cursor: pointer;
}
.navigation .pageInfo .language ul > li:hover {
  font-weight: bold;
  background: rgba(34, 36, 38, 0.12);
}

.navigation .pageInfo .userInfo {
  width: 49%;
  border-left: 1px solid gray;
  float: right;
  cursor: pointer;
}

.navigation .pageInfo img {
  border-radius: 50%;
  width: 30px;
  height: 30px;
  position: relative;
  top: 9px;
  left: 5px;
}

@keyframes langAnimate {
  from {
    transform: scaleY(0);
  }
  to {
    transform: scaleY(1);
  }
}
</style>


