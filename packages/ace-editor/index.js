import AceEditor from './ace-editor'

// 为组件提供 install 安装方法，供按需引入
AceEditor.install = function (Vue) {
    Vue.component(AceEditor.name, AceEditor)
};
// 默认导出组件
export default AceEditor


