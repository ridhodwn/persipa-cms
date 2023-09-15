<script>
import TableItemMatch from '../components/TableItemMatch.vue'
import { mapActions, mapWritableState } from 'pinia'
import { usePersipaStore } from '../stores/persipa'
export default {
    components: {
        TableItemMatch
    },
    methods: {
        ...mapActions(usePersipaStore, ['fetchMatches']),
        addAction() {
            this.$router.push(`/add-match`)
        }
    },
    computed: {
        ...mapWritableState(usePersipaStore, ['matchesObj'])
    },
    created() {
        this.fetchMatches()
    }
}
</script>

<template>
    <section class="ms-2 me-3 px-3 mt-5">
        <div class="mt-4 d-flex justify-content-between mb-2">
            <h2 class="m-0">MATCHES</h2>
            <button @click.prevent="addAction" type="button" class="btn btn-success rounded-lg">
                Add Match
            </button>
        </div>
        <hr />
        <div class="tbl-container border border-secondary border-opacity-25">
            <table class="table table-hover table-responsive">
                <thead>
                    <tr>
                        <th scope="col" class="text-center">#</th>
                        <th scope="col" width="200px" class="text-center">Venue</th>
                        <th scope="col" width="300px" class="text-center">Overview</th>
                        <th scope="col" width="100px" class="text-center">Club A</th>
                        <th scope="col" width="100px" class="text-center">Club B</th>
                        <th scope="col" class="text-center">Scores</th>
                        <th scope="col" width="150px" class="text-center">Date</th>
                        <th scope="col" class="text-center">Time</th>
                        <th scope="col" class="text-center">Fulltime</th>
                        <th scope="col" class="text-center">Highlight Link</th>
                        <th scope="col" class="text-center">Insights</th>
                        <th scope="col" class="text-center">Player Activity A</th>
                        <th scope="col" class="text-center">Player Activity B</th>
                        <th scope="col" class="text-center">Trainers</th>
                        <th scope="col" class="text-center">Location Details</th>
                        <th scope="col" width="100px" class="text-center"></th>
                    </tr>
                </thead>
                <tbody v-for="match in matchesObj.matches" :key="match.id">
                    <TableItemMatch :match="match" />
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
    overflow-x: scroll;
}

th {
    vertical-align: middle;
}
</style>
