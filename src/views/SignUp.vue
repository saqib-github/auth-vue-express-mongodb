<template>
<div class="column is-half is-offset-one-quarter">
  <form class="box" background="blue">
    <div class="field">
      <label class="label">Email</label>
      <div class="control">
        <input class="input" v-model="email" type="email" placeholder="e.g. alex@example.com" />
      </div>
    </div>

    <div class="field">
      <label class="label">Password</label>
      <div class="control">
        <input class="input" v-model="password" type="password" placeholder="********" />
      </div>
    </div>

    <button class="button is-primary" @click.prevent="signup">Sign up</button>
  </form>
</div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    signup() {
      console.log("email", this.email);
      console.log("password", this.password);
      if(!this.email || !this.password) {
        this.$buefy.dialog.alert({
                    title: 'Error',
                    message: 'Please Enter all required values.',
                    type: 'is-danger',
                    hasIcon: true,
                    icon: 'times-circle',
                    iconPack: 'fa',
                    ariaRole: 'alertdialog',
                    ariaModal: true
                })
      }
    }
  }
};
</script>
