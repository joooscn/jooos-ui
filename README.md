# jooos-ui

## 安装
```
npm install jooos-ui -S
```
## 说明
* JUI4组件基于iview4.0
* JUI3组件基于iview3.0
* 待完善

### 1、JUI4page 翻页组件
```
<JUI4page :current="current" :total="total" :page-size="size" :page-size-opts="pageSizeList" show-sizer show-total show-elevator @on-page="init"></JUI4page>
// 参数说明
current:1,                  // 当前页码
total:11,                   // 总条数
page-size:10,               // 每页条数
page-size-opts:[10,20,50],  // 每页条数配置
show-sizer                  // 显示分页，用来改变page-size
show-total                  // 显示总条数
show-elevator               // 显示电梯，可以快速切换到某一页
@on-page                    // 回调钩子 翻页&每页条数变化触发
```

### 2、JUAceEditor 代码编辑组件
```
<JUAceEditor ref="jsEditor" :name="`jsEditor`" :editorData.sync="jsEditorData" :lang="`javascript`" :editorHead="jsEditorHead" @upEditorData="upEditorData">
	<template slot="rightSlot">
		<!-- <a href="javascript:;" class="qzy_plr5">语法说明</a> -->
		<Fullscreen v-model="isFullscreen" :id="`jsEditor`">全屏预览</Fullscreen>
	</template>
</JUAceEditor>
// 参数说明
editorHead: jsEditorHead,     // 代码编辑显示参数
lang: 'javascript',           // 语言
@upEditorData: upEditorData,  // 更新编辑器内容

isFullscreen: true, // 全屏/退出全屏 此功能需要外部支持，此处只是示例

jsEditorHead: {
	title: "编辑脚本",
	desc: "请在下面的编辑器中编写代码或直接将代码复制到这里",
	rightDesc: "语法：JavaScript",
	isHead: true
},
upEditorData(name, editorData) {
	// 更新编辑器内容
	this[`${name}Data`] = editorData;
},
```

### 3、JUQrCode 二维码组件
```
<VueQr :text="text" :size="size" :margin="margin" :colorDark="colorDark" :colorLight="colorLight"></VueQr>
// 参数说明
text: "示例",        // 欲编码的内容
size: 200,           // 尺寸, 长宽一致, 包含外边距
margin: 10,          // 二维码图像的外边距, 默认 10px
colorDark: "#000",   // 实点的颜色
colorLight: "#fff",  // 空白区的颜色
```

### 版本记录
* 2020-10-26
	- JUQrCode 二维码
* 2020-04-28
	- JUAceEditor 代码编辑
	- JUI4page 翻页
* 2020-04-27
	- 测试调试发布npm包