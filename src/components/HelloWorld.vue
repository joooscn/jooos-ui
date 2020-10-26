<template>
  <div class="hello">
    <JUQrCode></JUQrCode>
    <JUAceEditor
      ref="jsEditor"
      :name="`jsEditor`"
      :editorData.sync="jsEditorData"
      :lang="`javascript`"
      :editorHead="jsEditorHead"
      @upEditorData="upEditorData"
    >
      <template slot="rightSlot">
        <!-- <a href="javascript:;" class="qzy_plr5">语法说明</a> -->
        <Fullscreen v-model="isFullscreen" :id="`jsEditor`">{{isFullscreen?'退出全屏':'全屏预览'}}</Fullscreen>
      </template>
    </JUAceEditor>
    <JUI4page :total="100" showTotal :current="2" :pageSize="pageSize"></JUI4page>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      pageSize: 10
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
