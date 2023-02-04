<script setup lang="ts">
const { signOut, isLoggedIn } = useAuth();
</script>

<template>
  <nav>
    <ul>
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/myprofile">Profile</NuxtLink>
      </li>
      <li v-if="isLoggedIn()" class="logout" @click="signOut">Logout</li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  background: black;
  height: 10vh;
}

ul {
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0 5rem;
}

li {
  color: white;
  margin-right: 2rem;
}

.logout {
  margin-left: auto;
  cursor: pointer;
}
</style>
