<script>
import { mapActions } from 'pinia'
import { usePersipaStore } from '../stores/persipa'

export default {
    data() {
        return {
            adminForm: {
                username: '',
                password: '',
                email: ''
            }
        }
    },
    methods: {
        ...mapActions(usePersipaStore, ['addAdmin']),
        submitHandler() {
            this.addAdmin({
                username: this.adminForm.username,
                password: this.adminForm.password,
                email: this.adminForm.email
            })
        },
        cancelAction() {
            this.$router.push(`/`)
            this.adminForm.username = ''
            this.adminForm.password = ''
            this.adminForm.email = ''
        }
    }
}
</script>

<template>
    <section class="ms-2 me-3 px-3 mt-5">
        <form @submit.prevent="submitHandler">
            <div class="my-3">
                <h2 class="m-0">Add Admin</h2>
                <hr />
            </div>
            <div class="d-flex col-12 mt-4 px-4">
                <div class="col-6 ps-2 pe-2">
                    <div
                        class="d-flex align-items-center justify-content-center mb-3 col-12 mx-auto"
                    >
                        <label for="username" class="form-label col-3 m-0">Username</label>
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="adminForm.username"
                                type="text"
                                class="form-control"
                                id="username"
                            />
                        </div>
                    </div>
                    <div
                        class="d-flex align-items-center justify-content-center mb-3 col-12 mx-auto"
                    >
                        <label for="password" class="form-label col-3 m-0">Password</label>
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="adminForm.password"
                                type="password"
                                class="form-control"
                                id="password"
                            />
                        </div>
                    </div>
                    <div
                        class="d-flex align-items-center justify-content-center mb-3 col-12 mx-auto"
                    >
                        <label for="email" class="form-label col-3 m-0">Email</label>
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="adminForm.email"
                                type="email"
                                class="form-control"
                                id="email"
                            />
                        </div>
                    </div>
                    <div class="d-flex justify-content-end mt-5 me-5">
                        <button
                            @click.prevent="cancelAction"
                            type="button"
                            class="btn btn-secondary me-2 btn-action"
                        >
                            CANCEL
                        </button>
                        <button type="submit" class="btn btn-primary ms-2 me-2 btn-action">
                            SUBMIT
                        </button>
                    </div>
                </div>
            </div>
        </form>
    </section>
</template>

<style scoped>
h2 {
    font-family: 'Oswald', sans-serif;
    font-weight: 600;
}

label {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
}

.colon {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
}

.btn-action {
    font-family: 'Oswald', sans-serif;
    font-weight: 500;
    letter-spacing: 1.2px;
    width: 170px;
}
</style>
