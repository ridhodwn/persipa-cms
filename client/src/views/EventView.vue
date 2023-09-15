<script>
import TableItemEvent from '../components/TableItemEvent.vue'
import { mapActions, mapWritableState } from 'pinia'
import { usePersipaStore } from '../stores/persipa'
export default {
    components: {
        TableItemEvent
    },
    methods: {
        ...mapActions(usePersipaStore, ['fetchEvents']),
        addAction() {
            this.$router.push(`/add-event`)
        }
    },
    computed: {
        ...mapWritableState(usePersipaStore, ['eventsObj'])
    },
    created() {
        this.fetchEvents()
    }
}
</script>

<template>
    <section class="ms-2 me-3 px-3 mt-5">
        <div class="mt-4 d-flex justify-content-between mb-2">
            <h2 class="m-0">EVENTS</h2>
            <button
                @click.prevent="addAction"
                type="button"
                class="btn btn-success rounded-lg"
            >
                Add Event
            </button>
        </div>
        <hr />
        <div class="tbl-container border border-secondary border-opacity-25">
            <table class="table table-hover table-responsive">
                <thead>
                    <tr>
                        <th scope="col" class="text-center">#</th>
                        <th scope="col" width="120px">Name</th>
                        <th scope="col" width="200px" class="text-center">Image</th>
                        <th scope="col" width="150px" class="text-center">Date</th>
                        <th scope="col" width="300px">Overview</th>
                        <th scope="col" class="text-center">Start Time</th>
                        <th scope="col" class="text-center">Break Time</th>
                        <th scope="col" class="text-center">End Time</th>
                        <th scope="col" class="text-center">Venue</th>
                        <th scope="col" class="text-center">Organizer</th>
                        <th scope="col" width="100px" class="text-center"></th>
                    </tr>
                </thead>
                <tbody v-for="event in eventsObj.events" :key="event.id">
                    <TableItemEvent :event="event" />
                </tbody>
            </table>
        </div>
    </section>
</template>

<style scoped>
h2 {
    font-family: 'Oswald', sans-serif;
    font-weight: 600;
}

button {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
}

.tbl-container {
    border-radius: 6px;
    overflow: hidden;
}

th {
  vertical-align: middle;
}
</style>
