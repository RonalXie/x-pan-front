<template>
  <div>
    <a-row :gutter="16">
      <a-col :span="4" v-for="i in 24" :key="i">
        <a-dropdown :trigger="['contextmenu']">
          <div style="margin-bottom: 24px;text-align: center" class="itemCard">
            <img src="@/assets/images/dic.png" width="120">
            <div>
              文件夹
            </div>
            <div>
              <span style="font-size: 12px;color: grey">2023-07-26</span>
            </div>
          </div>
          <a-menu slot="overlay">
            <a-menu-item key="1">
              1st menu item
            </a-menu-item>
            <a-menu-item key="2">
              2nd menu item
            </a-menu-item>
            <a-menu-item key="3">
              3rd menu item
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </a-col>
    </a-row>
  </div>
</template>
<script>
export default {
  name: "FileView"
}
</script>
<style scoped>
.itemCard{
  border-radius: 8px;
  cursor:pointer;
}
.itemCard:hover{
  background-color: #efefef;
}
</style>
