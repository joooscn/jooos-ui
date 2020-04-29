<template>
  <Page
    :current="current"
    :total="total"
    :pageSize="pageSize"
    :pageSizeOpts="pageSizeOpts"
    :placement="placement"
    :size="size"
    :simple="simple"
    :showTotal="showTotal"
    :showElevator="showElevator"
    :showSizer="showSizer"
    :class="className"
    :styles="styles"
    :transfer="transfer"
    :prevText="prevText"
    :nextText="nextText"
    :disabled="disabled"
    @on-change="onPage"
    @on-page-size-change="onPageSize"
  />
</template>

<script>
export default {
  name: "JUI4page",
  props: {
    // 当前页码
    current: {
      type: Number
    },
    // 数据总数
    total: {
      type: Number
    },
    // 每页条数
    pageSize: {
      type: Number,
      default: 10
    },
    // 每页条数切换配置
    pageSizeOpts: {
      type: Array,
      default: () => {
        [10, 20, 30, 50];
      }
    },
    // 条数切换弹窗的展开方向，可选值为 bottom 和 top
    placement: {
      type: String,
      default: "bottom"
    },
    // 可选值为small（迷你版）或不填（默认）
    size: {
      type: String
    },
    // 简洁版
    simple: {
      type: Boolean,
      default: false
    },
    // 显示总数
    showTotal: {
      type: Boolean,
      default: false
    },
    // 显示电梯，可以快速切换到某一页
    showElevator: {
      type: Boolean,
      default: false
    },
    // 显示分页，用来改变page-size
    showSizer: {
      type: Boolean,
      default: false
    },
    // 自定义 class 名称
    className: {
      type: String
    },
    // 自定义 style 样式
    styles: {
      type: Object
    },
    // 是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果
    transfer: {
      type: Boolean,
      default: false
    },
    // 替代图标显示的上一页文字
    prevText: {
      type: String
    },
    // 替代图标显示的下一页文字
    nextText: {
      type: String
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false
    }
  },
  /**
   * Events
   * @on-page 返回值 {Int} ：当前页码
   * @on-page-size 返回值 {Int} ：每页条数
   */
  data() {
    return {
      name: "我是分页组件"
    };
  },
  computed: {},
  methods: {
    localStorage(typeName, pageAsPageSize) {
      // 存储页码 每页条数
      let { sysPrefix } = this.$store.getters;
      let { name } = this.$route;
      let appName = `${sysPrefix}_${typeName}_`;
      if (name) localStorage.setItem(`${appName + name}`, pageAsPageSize);
    },
    onPage(page) {
      // 页码
      this.localStorage("page", page);
      this.$emit("on-page", { page });
    },
    onPageSize(size) {
      // 每页条数
      this.localStorage("pageSize", size);
      this.$emit("on-page", { size });
    }
  },
  mounted() {},
  watch: {
    page() {
      this.localStorage("page", this.page);
    },
    size() {
      this.localStorage("page", this.size);
    }
  }
};
</script>
