/**
 * VueX状态管理
 * @desc 集中管理方便查找
 */
const getters = {
  // 默认配置
  local: state => state.app.local,
  systemSet: state => state.app.systemSet,
  pageSize: state => state.app.pageSize,
  pageSizeList: state => state.app.pageSizeList,
  menuList: state => state.app.menuList,
  staticUrl: state => state.app.staticUrl,
  // 登录
  userId: state => state.login.userId,
  userName: state => state.login.userName,
  userNickName: state => state.login.userNickName,
  userToken: state => state.login.userToken,
  // 用户信息
  userInfo: state => state.login.userInfo,
  // 用户-角色id
  userRoleId: state => state.login.userRoleId,
  // 用户-单位id
  userCompanyId: state => state.login.userCompanyId,
  // 用户-单位信息
  userCompanyInfo: state => state.login.userCompanyInfo,
  // 用户-角色名称
  userRoleName: state => state.login.userRoleName,
  // 用户-角色权限码
  userRoleCode: state => state.login.userRoleCode,
  msgCount: state => state.login.msgCount,
  /**
   * 设备管理
   */
  // 应用
  appList: state => state.device.appList,
  admissionModeList: state => state.device.admissionModeList,
  // 同频异频
  profileList: state => state.device.profileList,
  // 入网模式
  netModelList: state => state.device.netModelList,
  // 平台
  platformList: state => state.device.platformList,
  // 所有产品
  productList: state => state.device.productList,
  // 终端产品
  productTerminalList: state => state.device.productTerminalList,
  // 网关产品
  productGatewayList: state => state.device.productGatewayList,
  // 视频产品
  productVideoList: state => state.device.productVideoList,
  // 表单验证
  ruleDevice: state => state.device.ruleDevice,
  ruleDeviceCommon: state => state.device.ruleDeviceCommon,
  // 设备状态
  deviceStatusList: state => state.device.deviceStatusList,
  /**
   * 权限管理
   */
  sysPermissionTree: state => state.sys_permission.sysPermissionTree,
  sysPermissionState: state => state.sys_permission.sysPermissionState,
  sysPermissionType: state => state.sys_permission.sysPermissionType,
  rulePermission: state => state.sys_permission.rulePermission,
  /**
   * 角色管理
   */
  sysRoleState: state => state.sys_role.sysRoleState,
  sysRoleType: state => state.sys_role.sysRoleType,
  ruleRole: state => state.sys_role.ruleRole,
  roleList: state => state.sys_role.roleList,
  /**
   * 用户管理
   */
  ruleUser: state => state.sys_user.ruleUser,
  userList: state => state.sys_user.userList,
  // 设备消息
  msgStateList: state => state.deviceMsg.msgStateList,
  deviceInfoList: state => state.device.deviceInfoList,
  // 单位管理
  ruleCompany: state => state.tsf_company.ruleCompany,
  pushList: state => state.tsf_company.pushList,
  uidList: state => state.tsf_company.uidList,
  nameTypeList: state => state.tsf_company.nameTypeList,
  levelTypeList: state => state.tsf_company.levelTypeList,
  // 位置管理
  rulePlace: state => state.tsf_place.rulePlace,
  levelList: state => state.tsf_place.levelList,
  placeList: state => state.tsf_place.placeList,
  descText: state => {
    return {
    }
  }
}
export default getters