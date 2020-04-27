import userTest from "./user";

// 为组件提供 install 安装方法，供按需引入
userTest.install = function (Vue) {
    Vue.component(userTest.name, userTest)
};
// 默认导出组件
export default userTest
