<script>
import { mapActions } from 'pinia'
import { usePersipaStore } from '../stores/persipa'

export default {
    props: {
        gallery: Object,
        galleryFormType: String
    },
    data() {
        return {
            galleryForm: {
                id: this.gallery.id ? this.gallery.id : 0,
                eventName: this.gallery.eventName ? this.gallery.eventName : '',
                imgUrl1: this.gallery.imgUrl1 ? this.gallery.imgUrl1 : '',
                imgUrl2: this.gallery.imgUrl2 ? this.gallery.imgUrl2 : '',
                imgUrl3: this.gallery.imgUrl3 ? this.gallery.imgUrl3 : '',
                imgUrl4: this.gallery.imgUrl4 ? this.gallery.imgUrl4 : '',
                imgUrl5: this.gallery.imgUrl5 ? this.gallery.imgUrl5 : '',
                imgUrl6: this.gallery.imgUrl6 ? this.gallery.imgUrl6 : ''
            }
        }
    },
    methods: {
        ...mapActions(usePersipaStore, ['addGallery', 'editGallery']),
        submitHandler() {
            if (this.galleryFormType === 'add-gallery') {
                this.addGallery({
                    eventName: this.galleryForm.eventName,
                    imgUrl1: this.galleryForm.imgUrl1,
                    imgUrl2: this.galleryForm.imgUrl2,
                    imgUrl3: this.galleryForm.imgUrl3,
                    imgUrl4: this.galleryForm.imgUrl4,
                    imgUrl5: this.galleryForm.imgUrl5,
                    imgUrl6: this.galleryForm.imgUrl6
                })
            } else {
                this.editGallery(
                    {
                        eventName: this.galleryForm.eventName,
                        imgUrl1: this.galleryForm.imgUrl1,
                        imgUrl2: this.galleryForm.imgUrl2,
                        imgUrl3: this.galleryForm.imgUrl3,
                        imgUrl4: this.galleryForm.imgUrl4,
                        imgUrl5: this.galleryForm.imgUrl5,
                        imgUrl6: this.galleryForm.imgUrl6
                    },
                    this.galleryForm.id
                )

                this.galleryForm.eventName = ''
                this.galleryForm.imgUrl1 = ''
                this.galleryForm.imgUrl2 = ''
                this.galleryForm.imgUrl3 = ''
                this.galleryForm.imgUrl4 = ''
                this.galleryForm.imgUrl5 = ''
                this.galleryForm.imgUrl6 = ''
            }
        },
        cancelAction() {
            this.$router.push(`/galleries`)

            this.galleryForm.eventName = ''
            this.galleryForm.imgUrl1 = ''
            this.galleryForm.imgUrl2 = ''
            this.galleryForm.imgUrl3 = ''
            this.galleryForm.imgUrl4 = ''
            this.galleryForm.imgUrl5 = ''
            this.galleryForm.imgUrl6 = ''
        }
    }
}
</script>

<template>
    <section class="ms-2 me-3 px-3 mt-5">
        <form @submit.prevent="submitHandler">
            <div v-if="galleryFormType === 'add-gallery'" class="my-3">
                <h2 class="m-0">Add New Gallery</h2>
                <hr />
            </div>
            <div v-if="galleryFormType === 'edit-gallery'" class="my-3">
                <h2 class="m-0">Edit Gallery</h2>
                <hr />
            </div>
            <div class="d-flex col-12 mt-4 px-4">
                <div class="col-6 ps-2 pe-2">
                    <div
                        class="d-flex align-items-center justify-content-center mb-3 col-12 mx-auto"
                    >
                        <label for="eventName" class="form-label col-3 m-0">Event Name</label>
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="galleryForm.eventName"
                                type="text"
                                class="form-control"
                                id="eventName"
                            />
                        </div>
                    </div>
                    <div
                        class="d-flex align-items-center justify-content-center mb-3 col-12 mx-auto"
                    >
                        <label for="galleryImgUrl1" class="form-label col-3 m-0">Image URL 1</label>
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="galleryForm.imgUrl1"
                                type="text"
                                class="form-control"
                                id="galleryImgUrl1"
                            />
                        </div>
                    </div>
                    <div
                        class="d-flex align-items-center justify-content-center mb-3 col-12 mx-auto"
                    >
                        <label for="galleryImgUrl2" class="form-label col-3 m-0">Image URL 2</label>
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="galleryForm.imgUrl2"
                                type="text"
                                class="form-control"
                                id="galleryImgUrl2"
                            />
                        </div>
                    </div>
                    <div
                        class="d-flex align-items-center justify-content-center mb-3 col-12 mx-auto"
                    >
                        <label for="galleryImgUrl3" class="form-label col-3 m-0">Image URL 3</label>
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="galleryForm.imgUrl3"
                                type="text"
                                class="form-control"
                                id="galleryImgUrl3"
                            />
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="d-flex align-items-center justify-content-left mb-3 col-12 mx-auto">
                        <label for="galleryImgUrl4" class="form-label col-3 m-0">Image URL 4</label>
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="galleryForm.imgUrl4"
                                type="text"
                                class="form-control"
                                id="galleryImgUrl4"
                            />
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-left mb-3 col-12 mx-auto">
                        <label for="galleryImgUrl5" class="form-label col-3 m-0">Image URL 5</label>
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="galleryForm.imgUrl5"
                                type="text"
                                class="form-control"
                                id="galleryImgUrl5"
                            />
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-left mb-3 col-12 mx-auto">
                        <label for="galleryImgUrl6" class="form-label col-3 m-0">Image URL 6</label>
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="galleryForm.imgUrl6"
                                type="text"
                                class="form-control"
                                id="galleryImgUrl6"
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

.btn-action {
    font-family: 'Oswald', sans-serif;
    font-weight: 500;
    letter-spacing: 1.2px;
    width: 170px;
}
</style>
