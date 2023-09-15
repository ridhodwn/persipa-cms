<script>
import { mapActions } from 'pinia'
import { usePersipaStore } from '../stores/persipa'
export default {
    props: {
        event: Object
    },
    methods: {
        ...mapActions(usePersipaStore, ['deleteEventById', 'fetchEventById']),
        deleteEventByIdComp(id) {
            this.deleteEventById(id)
        },
        buttonAction(id) {
            this.fetchEventById(id)
        }
    },
    computed: {
        formatDate() {
            let date = new Date(this.event.date);
            const formattedDate = date.toLocaleString('id-ID', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            })
            return formattedDate
        }
    }
}
</script>

<template>
    <tr>
        <td scope="row" class="fw-bold">{{ event.id }}</td>
        <td>{{ event.name }}</td>
        <td>
            <img :src="event.imgUrl" class="img-fluid rounded-1" />
        </td>
        <td class="text-center">{{ formatDate }}</td>
        <td>
            <div class="about-cell">{{ event.overview }}</div>
        </td>
        <td class="text-center">{{ event.eventStartTime }}</td>
        <td class="text-center">{{ event.eventBreakTime }}</td>
        <td class="text-center">{{ event.eventEndTime }}</td>
        <td class="text-center">
            <button
                type="button"
                class="btn btn-primary activity-btn"
                data-bs-toggle="modal"
                :data-bs-target="`#venueModal${event.id}`"
            >
                See Venue
            </button>
        </td>
        <td class="text-center">
            <button
                type="button"
                class="btn btn-primary activity-btn"
                data-bs-toggle="modal"
                :data-bs-target="`#organizerModal${event.id}`"
            >
                See Organizer
            </button>
        </td>
        <td class="text-center">
            <a
                @click.prevent="buttonAction(event.id)"
                href=""
                class="bi bi-pencil-fill me-2 text-primary"
            ></a>
            <a
                @click.prevent="deleteEventByIdComp(event.id)"
                href=""
                class="bi bi-trash-fill text-danger"
            ></a>
        </td>
    </tr>

    <!-- VENUE MODAL -->
    <div
        class="modal fade"
        :id="`venueModal${event.id}`"
        tabindex="-1"
        aria-labelledby="venueModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="venueModalLabel">{{ event.name }} Venue</h1>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body">
                    <table class="table table-hover mt-4 table-responsive">
                        <thead>
                            <tr>
                                <th scope="col" width="120px">Venue</th>
                                <th scope="col" width="120px">Address</th>
                                <th scope="col" class="text-center">Country</th>
                                <th scope="col" width="300px">Facilities Info</th>
                                <th scope="col" class="text-center" width="200px">
                                    Facilities Image 1
                                </th>
                                <th scope="col" class="text-center" width="200px">
                                    Facilities Image 2
                                </th>
                                <th scope="col" class="text-center"  width="150px">Maps</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="fw-bold">{{ event.venueName }}</td>
                                <td>{{ event.venueAddress }}</td>
                                <td class="text-center">{{ event.venueCountry }}</td>
                                <td>
                                    <div class="about-cell">{{ event.facilitiesInfo }}</div>
                                </td>
                                <td>
                                    <img
                                        :src="event.facilitiesImgUrl1"
                                        class="img-fluid rounded-1"
                                    />
                                </td>
                                <td>
                                    <img
                                        :src="event.facilitiesImgUrl2"
                                        class="img-fluid rounded-1"
                                    />
                                </td>
                                <td class="text-center">
                                    <iframe :src="event.gmapIframe" height="200" width="300" title="googleMap"></iframe>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Close
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- ORGANIZER MODAL -->
    <div
        class="modal fade"
        :id="`organizerModal${event.id}`"
        tabindex="-1"
        aria-labelledby="organizerModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="organizerModalLabel">
                        {{ event.name }} Organizer
                    </h1>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body">
                    <table class="table table-hover mt-4 table-responsive">
                        <thead>
                            <tr>
                                <th scope="col">Organizer Name</th>
                                <th scope="col">Phone Number</th>
                                <th scope="col">Email</th>
                                <th scope="col">Website</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{{ event.organizerName }}</td>
                                <td>{{ event.organizerPhone }}</td>
                                <td>{{ event.organizerEmail }}</td>
                                <td>{{ event.organizerWebsite }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Close
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scped>
th {
  vertical-align: middle;
}

tr {
    font-size: 15px;
}

.activity-btn {
    font-size: 15px;
}

.about-cell {
    height: 250px;
    overflow: auto;
}

.gmap-iframe {
    max-width: 200px;
    overflow: auto;
}
</style>
