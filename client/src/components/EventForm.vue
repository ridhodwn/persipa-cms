<script>
import { mapActions } from 'pinia'
import { usePersipaStore } from '../stores/persipa'

export default {
    props: {
        event: Object,
        eventFormType: String
    },
    data() {
        return {
            eventForm: {
                id: this.event.id ? this.event.id : 0,
                name: this.event.name ? this.event.name : '',
                imgUrl: this.event.imgUrl ? this.event.imgUrl : '',
                date: this.event.date ? this.event.date : '',
                overview: this.event.overview ? this.event.overview : '',
                gmapIframe: this.event.gmapIframe ? this.event.gmapIframe : '',
                facilitiesInfo: this.event.facilitiesInfo ? this.event.facilitiesInfo : '',
                facilitiesImgUrl1: this.event.facilitiesImgUrl1 ? this.event.facilitiesImgUrl1 : '',
                facilitiesImgUrl2: this.event.facilitiesImgUrl2 ? this.event.facilitiesImgUrl2 : '',
                organizerName: this.event.organizerName ? this.event.organizerName : '',
                organizerPhone: this.event.organizerPhone ? this.event.organizerPhone : '',
                organizerEmail: this.event.organizerEmail ? this.event.organizerEmail : '',
                organizerWebsite: this.event.organizerWebsite ? this.event.organizerWebsite : '',
                venueName: this.event.venueName ? this.event.venueName : '',
                venueAddress: this.event.venueAddress ? this.event.venueAddress : '',
                venueCountry: this.event.venueCountry ? this.event.venueCountry : '',
                eventStartTimeHr: this.event.eventStartTime
                    ? this.event.eventStartTime.substring(0, 2)
                    : '00',
                eventStartTimeMn: this.event.eventStartTime
                    ? this.event.eventStartTime.substring(3)
                    : '00',
                eventBreakTimeHr: this.event.eventBreakTime
                    ? this.event.eventBreakTime.substring(0, 2)
                    : '00',
                eventBreakTimeMn: this.event.eventBreakTime
                    ? this.event.eventBreakTime.substring(3)
                    : '00',
                eventEndTimeHr: this.event.eventEndTime
                    ? this.event.eventEndTime.substring(0, 2)
                    : '00',
                eventEndTimeMn: this.event.eventEndTime
                    ? this.event.eventEndTime.substring(3)
                    : '00'
            }
        }
    },
    methods: {
        ...mapActions(usePersipaStore, ['addEvent', 'editEvent']),
        submitHandler() {
            if (this.eventFormType === 'add-event') {
                this.addEvent({
                    name: this.eventForm.name,
                    imgUrl: this.eventForm.imgUrl,
                    date: this.eventForm.date,
                    overview: this.eventForm.overview,
                    gmapIframe: this.eventForm.gmapIframe,
                    facilitiesInfo: this.eventForm.facilitiesInfo,
                    facilitiesImgUrl1: this.eventForm.facilitiesImgUrl1,
                    facilitiesImgUrl2: this.eventForm.facilitiesImgUrl2,
                    organizerName: this.eventForm.organizerName,
                    organizerPhone: this.eventForm.organizerPhone,
                    organizerEmail: this.eventForm.organizerEmail,
                    organizerWebsite: this.eventForm.organizerWebsite,
                    eventStartTime:
                        this.eventForm.eventStartTimeHr + '.' + this.eventForm.eventStartTimeMn,
                    eventBreakTime:
                        this.eventForm.eventBreakTimeHr + '.' + this.eventForm.eventBreakTimeMn,
                    eventEndTime:
                        this.eventForm.eventEndTimeHr + '.' + this.eventForm.eventEndTimeMn,
                    venueName: this.eventForm.venueName,
                    venueAddress: this.eventForm.venueAddress,
                    venueCountry: this.eventForm.venueCountry
                })
            } else {
                this.editEvent(
                    {
                        name: this.eventForm.name,
                        imgUrl: this.eventForm.imgUrl,
                        date: this.eventForm.date,
                        overview: this.eventForm.overview,
                        gmapIframe: this.eventForm.gmapIframe,
                        facilitiesInfo: this.eventForm.facilitiesInfo,
                        facilitiesImgUrl1: this.eventForm.facilitiesImgUrl1,
                        facilitiesImgUrl2: this.eventForm.facilitiesImgUrl2,
                        organizerName: this.eventForm.organizerName,
                        organizerPhone: this.eventForm.organizerPhone,
                        organizerEmail: this.eventForm.organizerEmail,
                        organizerWebsite: this.eventForm.organizerWebsite,
                        eventStartTime:
                            this.eventForm.eventStartTimeHr + '.' + this.eventForm.eventStartTimeMn,
                        eventBreakTime:
                            this.eventForm.eventBreakTimeHr + '.' + this.eventForm.eventBreakTimeMn,
                        eventEndTime:
                            this.eventForm.eventEndTimeHr + '.' + this.eventForm.eventEndTimeMn,
                        venueName: this.eventForm.venueName,
                        venueAddress: this.eventForm.venueAddress,
                        venueCountry: this.eventForm.venueCountry
                    },
                    this.eventForm.id
                )

                this.eventForm.name = ''
                this.eventForm.imgUrl = ''
                this.eventForm.date = ''
                this.eventForm.overview = ''
                this.eventForm.gmapIframe = ''
                this.eventForm.facilitiesInfo = ''
                this.eventForm.facilitiesImgUrl1 = ''
                this.eventForm.facilitiesImgUrl2 = ''
                this.eventForm.organizerName = ''
                this.eventForm.organizerPhone = ''
                this.eventForm.organizerEmail = ''
                this.eventForm.organizerWebsite = ''
                this.eventForm.eventStartTimeHr = '00'
                this.eventForm.eventStartTimeMn = '00'
                this.eventForm.eventBreakTimeHr = '00'
                this.eventForm.eventBreakTimeMn = '00'
                this.eventForm.eventEndTimeHr = '00'
                this.eventForm.eventEndTimeMn = '00'
                this.eventForm.venueName = ''
                this.eventForm.venueAddress = ''
                this.eventForm.venueCountry = ''
            }
        },
        cancelAction() {
            this.$router.push(`/events`)

            this.eventForm.name = ''
            this.eventForm.imgUrl = ''
            this.eventForm.date = ''
            this.eventForm.overview = ''
            this.eventForm.gmapIframe = ''
            this.eventForm.facilitiesInfo = ''
            this.eventForm.facilitiesImgUrl1 = ''
            this.eventForm.facilitiesImgUrl2 = ''
            this.eventForm.organizerName = ''
            this.eventForm.organizerPhone = ''
            this.eventForm.organizerEmail = ''
            this.eventForm.organizerWebsite = ''
            this.eventForm.eventStartTimeHr = '00'
            this.eventForm.eventStartTimeMn = '00'
            this.eventForm.eventBreakTimeHr = '00'
            this.eventForm.eventBreakTimeMn = '00'
            this.eventForm.eventEndTimeHr = '00'
            this.eventForm.eventEndTimeMn = '00'
            this.eventForm.venueName = ''
            this.eventForm.venueAddress = ''
            this.eventForm.venueCountry = ''
        }
    }
}
</script>

<template>
    <section class="ms-2 me-3 px-3 mt-5">
        <form @submit.prevent="submitHandler">
            <div v-if="eventFormType === 'add-event'" class="my-3">
                <h2 class="m-0">Add New Event</h2>
                <hr />
            </div>
            <div v-if="eventFormType === 'edit-event'" class="my-3">
                <h2 class="m-0">Edit Event</h2>
                <hr />
            </div>
            <div class="d-flex col-12 mt-4 px-4">
                <div class="col-6 ps-2 pe-2">
                    <div
                        class="d-flex align-items-center justify-content-center mb-3 col-12 mx-auto"
                    >
                        <label for="eventName" class="form-label col-3 m-0">Name</label>
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="eventForm.name"
                                type="text"
                                class="form-control"
                                id="eventName"
                            />
                        </div>
                    </div>
                    <div
                        class="d-flex align-items-center justify-content-center mb-3 col-12 mx-auto"
                    >
                        <label for="eventImgUrl" class="form-label col-3 m-0">Image URL</label>
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="eventForm.imgUrl"
                                type="text"
                                class="form-control"
                                id="eventImgUrl"
                            />
                        </div>
                    </div>
                    <div
                        class="d-flex align-items-center justify-content-center mb-3 col-12 mx-auto"
                    >
                        <label for="eventDate" class="form-label col-3 m-0">Date</label>
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="eventForm.date"
                                type="date"
                                class="form-control"
                                id="eventDate"
                            />
                        </div>
                    </div>
                    <div class="d-flex justify-content-center mb-3 col-12 mx-auto">
                        <label for="eventOverview" class="form-label col-3 mb-0 mt-2"
                            >Overview</label
                        >
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon align-self-start me-3 mb-0 mt-2">:</div>
                            <textarea
                                v-model="eventForm.overview"
                                class="form-control"
                                id="eventOverview"
                                rows="5"
                            ></textarea>
                        </div>
                    </div>
                    <div
                        class="d-flex align-items-center justify-content-center mb-3 col-12 mx-auto"
                    >
                        <label for="eventStartTime" class="form-label col-3 m-0">Start Time</label>
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <div class="d-flex align-items-end">
                                <select
                                    v-model="eventForm.eventStartTimeHr"
                                    class="form-select"
                                    aria-label="StartTimeHr select"
                                    id="eventStartTime"
                                >
                                    <option value="00">00</option>
                                    <option value="01">01</option>
                                    <option value="02">02</option>
                                    <option value="03">03</option>
                                    <option value="04">04</option>
                                    <option value="05">05</option>
                                    <option value="06">06</option>
                                    <option value="07">07</option>
                                    <option value="08">08</option>
                                    <option value="09">09</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                </select>
                                <div class="colon mx-2 mb-1">.</div>
                                <select
                                    v-model="eventForm.eventStartTimeMn"
                                    class="form-select"
                                    aria-label="StartTimeMn select"
                                    id="eventStartTime"
                                >
                                    <option value="00">00</option>
                                    <option value="15">15</option>
                                    <option value="30">30</option>
                                    <option value="45">45</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div
                        class="d-flex align-items-center justify-content-center mb-3 col-12 mx-auto"
                    >
                        <label for="eventBreakTime" class="form-label col-3 m-0">Break Time</label>
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <div class="d-flex align-items-end">
                                <select
                                    v-model="eventForm.eventBreakTimeHr"
                                    class="form-select"
                                    aria-label="BreakTimeHr select"
                                    id="eventBreakTime"
                                >
                                    <option value="00">00</option>
                                    <option value="01">01</option>
                                    <option value="02">02</option>
                                    <option value="03">03</option>
                                    <option value="04">04</option>
                                    <option value="05">05</option>
                                    <option value="06">06</option>
                                    <option value="07">07</option>
                                    <option value="08">08</option>
                                    <option value="09">09</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                </select>
                                <div class="colon mx-2 mb-1">.</div>
                                <select
                                    v-model="eventForm.eventBreakTimeMn"
                                    class="form-select"
                                    aria-label="BreakTimeMn select"
                                    id="eventBreakTime"
                                >
                                    <option value="00">00</option>
                                    <option value="15">15</option>
                                    <option value="30">30</option>
                                    <option value="45">45</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div
                        class="d-flex align-items-center justify-content-center mb-3 col-12 mx-auto"
                    >
                        <label for="eventEndTime" class="form-label col-3 m-0">End Time</label>
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <div class="d-flex align-items-end">
                                <select
                                    v-model="eventForm.eventEndTimeHr"
                                    class="form-select"
                                    aria-label="EndTimeHr select"
                                    id="eventEndTime"
                                >
                                    <option value="00">00</option>
                                    <option value="01">01</option>
                                    <option value="02">02</option>
                                    <option value="03">03</option>
                                    <option value="04">04</option>
                                    <option value="05">05</option>
                                    <option value="06">06</option>
                                    <option value="07">07</option>
                                    <option value="08">08</option>
                                    <option value="09">09</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                </select>
                                <div class="colon mx-2 mb-1">.</div>
                                <select
                                    v-model="eventForm.eventEndTimeMn"
                                    class="form-select"
                                    aria-label="EndTimeMn select"
                                    id="eventEndTime"
                                >
                                    <option value="00">00</option>
                                    <option value="15">15</option>
                                    <option value="30">30</option>
                                    <option value="45">45</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="mb-4 col-12 mx-auto">
                        <h5>VENUE</h5>
                        <hr class="col-2"/>
                    </div>
                    <div class="d-flex align-items-center justify-content-left mb-3 col-12 mx-auto">
                        <label for="venueName" class="form-label col-3 m-0">Venue</label>
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="eventForm.venueName"
                                type="text"
                                class="form-control input-right"
                                id="venueName"
                            />
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-left mb-3 col-12 mx-auto">
                        <label for="venueAddress" class="form-label col-3 m-0">Address</label>
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="eventForm.venueAddress"
                                type="number"
                                class="form-control input-right"
                                id="venueAddress"
                            />
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-left mb-3 col-12 mx-auto">
                        <label for="venueCountry" class="form-label col-3 m-0">Country</label>
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="eventForm.venueCountry"
                                type="text"
                                class="form-control"
                                id="venueCountry"
                            />
                        </div>
                    </div>
                    <div class="d-flex justify-content-left mb-3 col-12 mx-auto">
                        <label for="facilitiesInfo" class="form-label col-3 mb-0 mt-2"
                            >Facilities Info</label
                        >
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon align-self-start me-3 mb-0 mt-2">:</div>
                            <textarea
                                v-model="eventForm.facilitiesInfo"
                                class="form-control"
                                id="facilitiesInfo"
                                rows="2"
                            ></textarea>
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-left mb-3 col-12 mx-auto">
                        <label for="facilitiesImgUrl1" class="form-label col-3 m-0"
                            >Facilities Img URL 1</label
                        >
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="eventForm.facilitiesImgUrl1"
                                type="text"
                                class="form-control"
                                id="facilitiesImgUrl1"
                            />
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-left mb-3 col-12 mx-auto">
                        <label for="facilitiesImgUrl2" class="form-label col-3 m-0"
                            >Facilities Img URL 2</label
                        >
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="eventForm.facilitiesImgUrl2"
                                type="text"
                                class="form-control"
                                id="facilitiesImgUrl2"
                            />
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-left mb-3 col-12 mx-auto">
                        <label for="gmapIframe" class="form-label col-3 m-0"
                            >Google Map Iframe</label
                        >
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="eventForm.gmapIframe"
                                type="text"
                                class="form-control"
                                id="gmapIframe"
                            />
                        </div>
                    </div>
                    <div class="mb-4 mt-5 col-12 mx-auto">
                        <h5>ORGANIZER</h5>
                        <hr class="col-2"/>
                    </div>
                    <div class="d-flex align-items-center justify-content-left mb-3 col-12 mx-auto">
                        <label for="organizerName" class="form-label col-3 m-0">Name</label>
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="eventForm.organizerName"
                                type="text"
                                class="form-control"
                                id="organizerName"
                            />
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-left mb-3 col-12 mx-auto">
                        <label for="organizerPhone" class="form-label col-3 m-0"
                            >Phone Number</label
                        >
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="eventForm.organizerPhone"
                                type="text"
                                class="form-control"
                                id="organizerPhone"
                            />
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-left mb-3 col-12 mx-auto">
                        <label for="organizerEmail" class="form-label col-3 m-0">Email</label>
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="eventForm.organizerEmail"
                                type="text"
                                class="form-control"
                                id="organizerEmail"
                            />
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-left mb-3 col-12 mx-auto">
                        <label for="organizerWebsite" class="form-label col-3 m-0">Website</label>
                        <div class="col-7 d-flex align-items-center">
                            <div class="colon me-3">:</div>
                            <input
                                v-model="eventForm.organizerWebsite"
                                type="text"
                                class="form-control"
                                id="organizerWebsite"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-center mt-3 me-5 mb-4">
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

h5 {
    font-family: 'Oswald', sans-serif;
    font-weight: 500;
    letter-spacing: 0.5px;
}

.hr-form {
    /* width: 400px */
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

.btn-action {
    font-family: 'Oswald', sans-serif;
    font-weight: 500;
    letter-spacing: 1.2px;
    width: 170px;
}
</style>
