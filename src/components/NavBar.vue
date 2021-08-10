<template>
  <b-navbar shado= true type="is-info">
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }"> </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item href="/" to="/">
        Home
      </b-navbar-item>
    
    </template>

    <template #end>
      <b-navbar-item tag="div">
        <div class="buttons">
          <router-link to="/signup">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a></router-link>
          <router-link to="/">
          <a class="button is-light" to="/">
            Log in
          </a>
          </router-link>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
