<template>
  <div class="aceEditor">
    <header class="aceEditor_head" v-if="editorHead.isHead">
      <div class="aceEditor_head_left">
        {{ editorHead.title }}
        <span>{{ editorHead.desc }}</span>
      </div>
      <div class="aceEditor_head_right">
        {{ editorHead.rightDesc }}
        <slot name="rightSlot"></slot>
      </div>
    </header>
    <editor
      class="aceEditor_content"
      v-model="newData"
      @init="editorInit"
      @setCompletions="setCompletions"
      :autoComplete="true"
      :lang="lang"
      :theme="theme"
      :options="options"
      :width="width"
      :height="height"
    ></editor>
  </div>
</template>

<script>
import editor from "vue2-ace-editor";
export default {
  name: "JUAceEditor",
  components: {
    editor
  },
  props: {
    /**
     * @description 顶部
     */
    editorHead: {
      type: Object,
      default: () => ({
        title: "",
        desc: "",
        rightDesc: "",
        isHead: true
      })
    },
    /**
     * @description 唯一name
     */
    name: {
      type: String,
      default: ""
    },
    /**
     * @description 语言
     */
    lang: {
      type: [Number, String],
      default: "javascript"
    },
    /**
     * @description 编辑器主题 chrome monokai
     */
    theme: {
      type: String,
      default: "chrome"
    },
    /**
     * @description 宽度
     */
    width: {
      type: [Number, String],
      default: "100%"
    },
    /**
     * @description 高度
     */
    height: {
      type: [Number, String],
      default: "100%"
    },
    /**
     * @description vue2-ace-editor编辑器配置自动补全等
     */
    options: {
      type: Object,
      default: () => ({
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true /*自动补全*/
      })
    },
    /**
     * @description 自定义语法提示
     * { meta: "mock字段：电话", value: "phone" },
     */
    completionsList: {
      type: Array,
      default: () => []
    },
    /**
     * @description 存储的值
     */
    editorData: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      newData: this.editorData
    };
  },
  created() {
    // this.editorData = this.value;
  },
  computed: {},
  methods: {
    editorInit() {
      // ace编辑器初始化设置需要的模式和主题
      require("vue2-ace-editor/node_modules/brace/ext/language_tools"); //language extension prerequsite...
      require("vue2-ace-editor/node_modules/brace/mode/html");
      require("vue2-ace-editor/node_modules/brace/mode/javascript"); //language
      require("vue2-ace-editor/node_modules/brace/mode/json");
      if (this.theme == "chrome")
        require("vue2-ace-editor/node_modules/brace/theme/chrome");
      require("vue2-ace-editor/node_modules/brace/snippets/javascript"); //snippet
      require("vue2-ace-editor/node_modules/brace/snippets/json"); //snippet
    },
    setCompletions(editor, session, pos, prefix, callback) {
      // ace自定义提示文字列表
      let data = this.completionsList;
      if (prefix.length == 0) {
        return callback(null, []);
      } else {
        return callback(null, data);
      }
    }
  },
  mounted() {
    // this.editorData = this.value;
    // console.log(this);
  },
  watch: {
    newData(val) {
      // console.log("newData");
      this.$emit("upEditorData", this.name, val);
    },
    editorData() {
      this.newData = this.editorData;
    }
  }
};
</script>


<style lang="less" scoped>
.aceEditor {
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 52px;
  &_head {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    background: #f9f9f9;
    border: 1px solid #ebecec;
    border-bottom: 0;
    display: flex;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
    height: 52px;
    &_left {
      display: flex;
      span {
        color: #9b9ea0;
        padding-left: 10px;
      }
    }
    &_right {
      color: #9b9ea0;
    }
  }
  &_content {
    border: 1px solid #ebecec;
  }
}
</style>