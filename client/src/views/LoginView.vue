<script>
import { mapActions } from 'pinia';
import { usePersipaStore } from '../stores/persipa';
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        ...mapActions(usePersipaStore, ['loginHandler']),
        loginHandlerComponent() {
            this.loginHandler({
                email: this.email,
                password: this.password
            });
        }
    }
}
</script>

<template>
    <form @submit.prevent="loginHandlerComponent" class="login-form mt-5">
        <div class="my-3">
            <h2>LOG IN</h2>
            <hr>
        </div>
        <div class="mb-3">
            <label for="InputEmail" class="form-label">Email Address</label>
            <input v-model="email" type="email" class="form-control" id="InputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
            <label for="InputPassword" class="form-label">Password</label>
            <input v-model="password" type="password" class="form-control" id="InputPassword1">
        </div>
        <button type="submit" class="btn btn-primary">SUBMIT</button>
    </form>
</template>

<style scoped>
form {
    font-family: 'Oswald', sans-serif;
}

.login-form {
    width: 300px;
    margin: 0 auto;
    border: 2px;
    border-color: black;
}
</style>