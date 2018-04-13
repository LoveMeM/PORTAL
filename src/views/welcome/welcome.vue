<template>
    <div id="welcome">
        <div class="styles-wrap">
            <div class="style-code" v-show="false" v-html="styleCodeTag"></div>
            <pre v-html="highlightCode"></pre>
        </div>
        <div class="resume-wrap"  :class="{htmlMode:enabledHTML}">
            <div v-html="resumeContent" v-if="enabledHTML"></div>
            <pre class="resume-markdown" v-else>{{ resumeContent }}</pre>
        </div>
    </div>
</template>
<script>
import { styles, resume } from "../../resource/welcome.js";
import Prism from "prismjs";
import marked from "marked";
export default {
  data() {
    return {
      styleCode: "",
      enabledHTML: false,
      markdown: "",
      delay: 60,
      timer: null
    };
  },
  computed: {
    styleCodeTag: function() {
      return `<style>${this.styleCode}</style>`;
    },
    highlightCode: function() {
      return Prism.highlight(this.styleCode, Prism.languages.css);
    },
    resumeContent: function() {
      return this.enabledHTML ? marked(this.markdown) : this.markdown;
    }
  },
  mounted() {
    this.showStyles(0, () => {
      this.showResume(() => {
        this.showStyles(1, () => {
          this.enabledHTML = true;
          this.showStyles(2);
        });
      });
    });
  },
  methods: {
    showStyles(num, callback) {
      let style = styles[num];
      let prevLength = 0,
        length = 0;
      if (!style) return;
      length = styles.filter((item, i) => i <= num).reduce((result, item) => {
        result += item.length;
        return result;
      }, 0);
      prevLength = length - style.length;
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        let start = this.styleCode.length - prevLength;
        let char = style.substring(start, start + 1) || "";
        this.styleCode += char;
        if (this.styleCode.length === length) {
          clearInterval(this.timer);
          callback && callback();
        } else {
          this.goBottom("styles-wrap");
        }
      }, this.delay);
    },
    showResume(callback) {
      let start = 0;
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        this.markdown += resume.substring(start, start + 1) || "";
        if (this.markdown.length === resume.length) {
          clearInterval(this.timer);
          callback && callback();
        } else {
          start++;
          this.goBottom("resume-wrap");
        }
      }, this.delay);
    },
    goBottom(className) {
      let wrapHeight = $(this.$el).find(`.${className}`).height()
      let wrapMargin = $(this.$el).find(`.${className}`).css("padding-top").replace("px", "")
      let preHeight = $(this.$el).find(`.${className} pre`).height() + parseFloat(wrapMargin)
      let gap = preHeight - wrapHeight;
      if (gap > 0)$(this.$el).find(`.${className}`).scrollTop(gap);
    }
  }
};
</script>
<style scoped>
#welcome {
  width: 100%;
  height: 100%;
}
</style>
