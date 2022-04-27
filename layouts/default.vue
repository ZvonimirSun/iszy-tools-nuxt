<script lang="ts" setup>
import { Return } from '@icon-park/vue-next'
const fullScreenStatus = ref(false)
const _user = ref({
  profile: {
    nickName: '',
    avatar: '',
  },
})
</script>

<template>
  <a-layout>
    <a-layout-header v-show="!fullScreenStatus">
      <div class="header">
        <NuxtLink to="/">
          ISZY工具集合
        </NuxtLink>
      </div>
      <div
        v-if="$route.path === '/'"
        class="desc"
      >
        一个轻量的工具集合<template v-if="_user.profile.nickName">
          · <NuxtLink to="/settings">
            {{ _user.profile.nickName }}
          </NuxtLink>
        </template>
      </div>
      <div
        v-else
        class="desc"
      >
        <NuxtLink to="/">
          <Return theme="outline" />返回首页
        </NuxtLink><template v-if="_user.profile.nickName">
          · <NuxtLink to="/settings">
            {{ _user.profile.nickName }}
          </NuxtLink>
        </template>
      </div>
    </a-layout-header>
    <a-layout-content>Content</a-layout-content>
    <a-layout-footer v-show="!fullScreenStatus">
      <span>© 2021&nbsp;</span>
      <a-typography-link
        href="https://www.iszy.cc"
        target="_blank"
      >
        随遇而安Blog
      </a-typography-link>
      <br>
      <a-typography-link
        href="https://beian.miit.gov.cn/#/Integrated/recordQuery"
        target="_blank"
      >
        苏ICP备18047890号-2
      </a-typography-link>
    </a-layout-footer>
  </a-layout>
</template>

<style scoped lang="scss">
.ant-layout {
  background: transparent;
  height: 100%;
  width: 100%;
  font-size: 1.4rem;
  overflow: hidden;

  &-header,
  &-layout,
  &-footer {
    background: transparent;
  }

  &-header {
    padding: 1.6rem 0 0.8rem;
    text-align: center;
    height: 8.4rem;
    line-height: unset;

    .header {
      height: 3.2rem;
      line-height: 3.2rem;
      font-size: 2.4rem;
      color: #333333;
      font-weight: 600;

      a {
        color: #333333;
      }
    }

    .desc {
      height: 2.2rem;
      font-size: 1.4rem;
      line-height: 2.2rem;
      margin-top: 0.8rem;
      color: #999999;
    }
  }

  &-content {
    width: 100%;
    margin: 0 auto;
    padding: 0 1.6rem 1.6rem;
    overflow-y: auto;
  }

  &-footer {
    font-size: 1.4rem;
    line-height: 2.2rem;
    padding: 0.8rem 0;

    height: 6rem;
    text-align: center;

    * {
      height: 2.2rem;
    }
  }
}
</style>
