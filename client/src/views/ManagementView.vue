<script>
import TableItemManagement from '../components/TableItemManagement.vue'
import { mapActions, mapWritableState } from 'pinia'
import { usePersipaStore } from '../stores/persipa'
export default {
    components: {
        TableItemManagement
    },
    methods: {
        ...mapActions(usePersipaStore, ['fetchManagements']),
        addAction() {
            this.$router.push(`/add-management`)
        }
    },
    computed: {
        ...mapWritableState(usePersipaStore, ['managementsObj'])
    },
    created() {
        this.fetchManagements()
    }
}
</script>

<template>
    <section class="ms-2 me-3 px-3 mt-5">
        <div class="mt-4 d-flex justify-content-between mb-2">
            <h2 class="m-0">MANAGEMENTS</h2>
            <button
                @click.prevent="addAction"
                type="button"
                class="btn btn-success rounded-lg"
            >
                Add Management
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
                        <th scope="col" class="text-center">Position</th>
                        <th scope="col" class="text-center">Nationality</th>
                        <th scope="col" width="140px" class="text-center">Current Team</th>
                        <th scope="col" width="140px" class="text-center">Past Team</th>
                        <th scope="col" class="text-center">Age</th>
                        <th scope="col" width="100px" class="text-center"></th>
                    </tr>
                </thead>
                <tbody v-for="management in managementsObj.managements" :key="management.id">
                    <TableItemManagement :management="management" />
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