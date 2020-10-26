import JUQrCode from "./qr-code";

// 为组件提供 install 安装方法，供按需引入
JUQrCode.install = function (Vue) {
    Vue.component(JUQrCode.name, JUQrCode)
};
// 默认导出组件
export default JUQrCode
