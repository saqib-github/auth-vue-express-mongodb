<template>
<div class="column is-half is-offset-one-quarter">
  <form class="box" background="blue">
    <div class="field">
      <label class="label">Email</label>
      <div class="control">
        <input class="input" type="email" placeholder="e.g. alex@example.com" />
      </div>
    </div>

    <div class="field">
      <label class="label">Password</label>
      <div class="control">
        <input class="input" type="password" placeholder="********" />
      </div>
    </div>

    <button class="button is-primary">Login</button>
  </form>
</div>
</template>

<script>
export default {
  data() {
    return {
      name: "John Silver",
      email: "",
    };
  },
};
</script>
