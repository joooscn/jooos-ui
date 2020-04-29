import JUAceEditor from './ace-editor'

// 为组件提供 install 安装方法，供按需引入
JUAceEditor.install = function (Vue) {
    Vue.component(JUAceEditor.name, JUAceEditor)
};
// 默认导出组件
export default JUAceEditor


