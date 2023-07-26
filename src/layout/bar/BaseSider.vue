<template>
  <a-menu  theme="dark" mode="inline" :default-selected-keys="['/']"  @click="menuClick">
    <a-menu-item key="/">
      <a-icon type="dashboard" />
      <span>DashBoard</span>
    </a-menu-item>
    <a-menu-item key="/file">
      <a-icon type="file" />
      <span>文件</span>
    </a-menu-item>
    <a-menu-item key="2">
      <a-icon type="picture" />
      <span>相册</span>
    </a-menu-item>
    <a-menu-item key="3">
      <a-icon type="heart" />
      <span>收藏夹</span>
    </a-menu-item>
    <a-menu-item key="4">
      <a-icon type="delete" />
      <span>回收站</span>
    </a-menu-item>
  </a-menu>
</template>
<script>
export default {
  name: "BaseSider",
  methods:{
    menuClick({item, key, keyPath}) {
      // 获取到当前的key,并且跳转
      console.log(item, keyPath)
      if (this.$route.path === key) {
        //当前路径中不包括本path就执行
        return;
      }
      this.$router.push({
        path: key
      })
    },
  }
}
</script>

<style scoped>

</style>
