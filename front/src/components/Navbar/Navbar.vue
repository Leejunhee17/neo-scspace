<template>
  <nav class="navbar is-transparent" role="navigation" aria-label="dropdown navigation">
    <div class="navbar-brand">
      <a class="navbar-item">
        학생문화공간위원회
      </a>
      <button @click="toggleMenuVisibility" class="button navbar-burger" :class="{'is-active':mobileMenuVisibility}" style="border-color: transparent">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
    <div class="navbar-menu" :class="{'is-active':mobileMenuVisibility}">
      <div class="navbar-start">
        <template v-for="(spaces, category, index) in categories">

        <div v-if="spaces.length !== 0" :key="index" class="navbar-item has-dropdown is-hoverable">
          <div class="navbar-link">
          {{ category }}
          </div>
          <div class="navbar-dropdown is-boxed">
            <router-link v-for="space in spaces" :key="space" :to="`/${space}`" class="navbar-item">
              {{ space }}
            </router-link>
          </div>
        </div>

        <router-link v-else :to="`/${category}`" class="navbar-item" :key="index">{{ category }}</router-link>

        </template>
      </div>
      <div class="navbar-end">
        <a class="navbar-item">
          로그인
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      mobileMenuVisibility: false,
      categories: {
        '개인 공간': ['피아노실', '개인연습실'],
        '단체 공간': ['세미나실', '다용도실', '무예실', '합주실'],
        '행사 공간': ['울림홀', '미래홀', '오픈 스페이스'],
        책다방: [],
        창작공방: [],
      },
    };
  },
  methods: {
    toggleMenuVisibility() {
      this.mobileMenuVisibility = !this.mobileMenuVisibility;
    },
  },
};
</script>

<style>

</style>
