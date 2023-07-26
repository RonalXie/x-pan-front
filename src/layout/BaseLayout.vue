<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible width="260">
      <div class="logo" />
      <base-sider/>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <div style="height: 100%;width: 100%;display: flex;justify-content: space-between">
          <div>
            <a-icon
                class="trigger"
                :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                @click="() => (collapsed = !collapsed)"
            />
          </div>
          <div style="padding: 0 24px">
            <a-space>
              <a-input-search style="width: 200px"/>
              <a-dropdown :trigger="['click']">
                <a-button type="primary" shape="circle" icon="plus" />
                <a-menu slot="overlay">
                  <a-menu-item>
                    <a href="javascript:;">上传文件</a>
                  </a-menu-item>
                  <a-menu-item>
                    <a href="javascript:;">上传文件夹</a>
                  </a-menu-item>
                  <a-menu-item>
                    <a href="javascript:;">新建文件夹</a>
                  </a-menu-item>
                </a-menu>
              </a-dropdown>
            </a-space>
          </div>

        </div>

      </a-layout-header>
      <a-layout-content
          :style="{ padding: '24px', background: '#fff', minHeight: '280px'}"
      >
        <router-view/>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import BaseSider from "@/layout/bar/BaseSider.vue";

export default {
  components: {BaseSider},
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
  height: 100%;
}

.ant-layout.ant-layout-has-sider{
  height: 100%;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
