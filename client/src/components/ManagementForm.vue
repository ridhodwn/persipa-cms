<script>
import { mapActions } from 'pinia'
import { usePersipaStore } from '../stores/persipa'

export default {
    props: {
        management: Object,
        managementFormType: String
    },
    data() {
        return {
            managementForm: {
                id: this.management.id ? this.management.id : 0,
                name: this.management.name ? this.management.name : '',
                imageUrl: this.management.imageUrl ? this.management.imageUrl : '',
                position: this.management.position ? this.management.position : '',
                nationality: this.management.nationality ? this.management.nationality : '',
                flagUrl: this.management.flagUrl ? this.management.flagUrl : '',
                currentTeam: this.management.currentTeam ? this.management.currentTeam : '',
                pastTeam: this.management.pastTeam ? this.management.pastTeam : '',
                age: this.management.age ? this.management.age : 0,
            },
        }
    },
    methods: {
        ...mapActions(usePersipaStore, ['addManagement', 'editManagement']),
        submitHandler() {
            if (this.managementFormType === 'add-management') {
                this.addManagement({
                    name: this.managementForm.name,
                    imageUrl: this.managementForm.imageUrl,
                    position: this.managementForm.position,
                    nationality: this.managementForm.nationality,
                    flagUrl: this.managementForm.flagUrl,
                    currentTeam: this.managementForm.currentTeam,
                    pastTeam: this.managementForm.pastTeam,
                    age: this.managementForm.age,
                })
            } else {
                this.editManagement(
                    {
                        name: this.managementForm.name,
                        imageUrl: this.managementForm.imageUrl,
                        position: this.managementForm.position,
                        nationality: this.managementForm.nationality,
                        flagUrl: this.managementForm.flagUrl,
                        currentTeam: this.managementForm.currentTeam,
                        pastTeam: this.managementForm.pastTeam,
                        age: this.managementForm.age,
                    },
                    this.managementForm.id
                )

                this.managementForm.name = ''
                this.managementForm.imageUrl = ''
                this.managementForm.position = ''
                this.managementForm.nationality = ''
                this.managementForm.flagUrl = ''
                this.managementForm.currentTeam = ''
                this.managementForm.pastTeam = ''
                this.managementForm.age = 0
            }
        },
        cancelAction() {
            this.$router.push(`/managements`)

            this.managementForm.name = ''
            this.managementForm.imageUrl = ''
            this.managementForm.position = ''
            this.managementForm.nationality = ''
            this.managementForm.flagUrl = ''
            this.managementForm.currentTeam = ''
            this.managementForm.pastTeam = ''
            this.managementForm.age = 0
        },
    }
}
</script>

<template>
    <section class="ms-2 me-3 px-3 mt-5">
        <form @submit.prevent="submitHandler">
            <div v-if="managementFormType === 'add-management'" class="my-3">
                <h2 class="m-0">Add New Management</h2>
                <hr />
            </div>
            <div v-if="managementFormType === 'edit-management'" class="my-3">
                <h2 class="m-0">Edit Management</h2>
                <hr />
            </div>
            <div class="d-flex col-12 mt-4 px-4">
                <div class="col-6 ps-2 pe-2">
                    <div
                        class="d-flex align-items-center justify-content-center mb-3 col-12 mx-auto"
                    >
                        <label for="managementName" class="form-label col-3 m-0">Name</label>
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="managementForm.name"
                                type="text"
                                class="form-control"
                                id="managementName"
                            />
                        </div>
                    </div>
                    <div
                        class="d-flex align-items-center justify-content-center mb-3 col-12 mx-auto"
                    >
                        <label for="managementImgUrl" class="form-label col-3 m-0"
                            >Image URL</label
                        >
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="managementForm.imageUrl"
                                type="text"
                                class="form-control"
                                id="managementImgUrl"
                            />
                        </div>
                    </div>
                    <div
                        class="d-flex align-items-center justify-content-center mb-3 col-12 mx-auto"
                    >
                        <label for="managementPosition" class="form-label col-3 m-0">Position</label>
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="managementForm.position"
                                type="text"
                                class="form-control"
                                id="managementPosition"
                            />
                        </div>
                    </div>
                    <div
                        class="d-flex align-items-center justify-content-center mb-3 col-12 mx-auto"
                    >
                        <label for="managementAge" class="form-label col-3 m-0">Age</label>
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="managementForm.age"
                                type="number"
                                class="form-control input-right"
                                id="managementAge"
                            />
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="d-flex align-items-center justify-content-left mb-3 col-12 mx-auto">
                        <label for="managementNationality" class="form-label col-3 m-0"
                            >Nationality</label
                        >
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="managementForm.nationality"
                                type="text"
                                class="form-control"
                                id="managementNationality"
                            />
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-left mb-3 col-12 mx-auto">
                        <label for="managementflagUrl" class="form-label col-3 m-0"
                            >Flag Image URL</label
                        >
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="managementForm.flagUrl"
                                type="text"
                                class="form-control"
                                id="managementflagUrl"
                            />
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-left mb-3 col-12 mx-auto">
                        <label for="managementCurrentTeam" class="form-label col-3 m-0"
                            >Current Team</label
                        >
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="managementForm.currentTeam"
                                type="text"
                                class="form-control"
                                id="managementCurrentTeam"
                            />
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-left mb-3 col-12 mx-auto">
                        <label for="managementPastTeam" class="form-label col-3 m-0"
                            >Past Team</label
                        >
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="managementForm.pastTeam"
                                type="text"
                                class="form-control"
                                id="managementPastTeam"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-center mt-3 me-5">
                <button
                    @click.prevent="cancelAction"
                    type="button"
                    class="btn btn-secondary me-2 btn-action"
                >
                    CANCEL
                </button>
                <button type="submit" class="btn btn-primary ms-2 me-2 btn-action">SUBMIT</button>
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

.input-right {
    text-align: right;
}

.btn-add-pa {
    height: 45px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    color: white;
    letter-spacing: 0.25px;
    margin-top: 11px;
}

.btn-action {
    font-family: 'Oswald', sans-serif;
    font-weight: 500;
    letter-spacing: 1.2px;
    width: 170px;
}

.form-header {
    padding-right: 68px;
}
</style>
