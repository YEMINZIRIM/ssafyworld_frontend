<template>
  <!-- 드래그 금지 설정 -->
  <div ondragstart = "return false">
    
    <!-- router 설정 -->
    <router-view></router-view>
    <div>
      <LoginView/>
    </div>
    <!-- Footer -->
    <div class="setting-footer">
      <FooterView />
    </div>

  </div>
</template>

<script>
import FooterView from '@/components/common/FooterView.vue'
import LoginView from '@/views/member/LoginView.vue'

export default {
  name: 'App',
  components: {
    FooterView,
    LoginView,
  }
}
</script>

<style>
  body {
    margin: 0;
    overflow: hidden;
  }

  .setting-footer {
    width: 100%;
    /* 하단에 고정 */
    position: absolute;
    bottom: 0;
  }
  
</style>
