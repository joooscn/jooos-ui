<template>
  <VueQr
    class="bicode"
    :text="text"
    :size="size"
    :margin="margin"
    :colorDark="colorDark"
    :colorLight="colorLight"
  ></VueQr>
  <!-- 
    :bgSrc="bgSrc"
    :gifBgSrc="gifBgSrc"
    :backgroundColor="backgroundColor"
    :backgroundDimming="backgroundDimming"
    :logoSrc="logoSrc"
    :logoMargin="logoMargin"
    :logoBackgroundColor="logoBackgroundColor"
    :logoCornerRadius="logoCornerRadius"
    :whiteMargin="whiteMargin"
   -->
</template>

<script>
import VueQr from "vue-qr";
export default {
  name: "JUQrCode",
  components: {
    VueQr,
  },
  props: {
    // 欲编码的内容
    text: {
      type: String,
      default: "示例",
    },
    // 尺寸, 长宽一致, 包含外边距
    size: {
      type: Number,
      default: 200,
    },
    // 二维码图像的外边距, 默认 20px
    margin: {
      type: Number,
      default: 10,
    },
    // 实点的颜色
    colorDark: {
      type: String,
      default: "#000",
    },
    // 空白区的颜色
    colorLight: {
      type: String,
      default: "#fff",
    },
    // 欲嵌入的背景图地址
    bgSrc: {
      type: String,
    },
    // 欲嵌入的背景图 gif 地址,设置后普通的背景图将失效。设置此选项会影响性能
    gifBgSrc: {
      type: String,
    },
    // 背景色
    backgroundColor: {
      type: String,
      default: "#ffffff",
    },
    // 叠加在背景图上的颜色, 在解码有难度的时有一定帮助
    backgroundDimming: {
      type: String,
      default: "#ff7200",
    },
    // 嵌入至二维码中心的 LOGO 地址
    logoSrc: {
      type: String,
    },
    // 标识周围的空白边框, 默认为0
    logoMargin: {
      type: Number,
      default: 0,
    },
    // 背景色,需要设置 logo margin
    logoBackgroundColor: {
      type: String,
      default: "#ffffff",
    },
    // 标识及其边框的圆角半径, 默认为0
    logoCornerRadius: {
      type: Number,
      default: 0,
    },
    // 若设为 true, 背景图外将绘制白色边框
    whiteMargin: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      name: "我是二维码组件",
    };
  },
  computed: {},
  methods: {},
  mounted() {},
  watch: {},
};
</script>
