<script>
import TableItemGallery from '../components/TableItemGallery.vue'
import { mapActions, mapWritableState } from 'pinia'
import { usePersipaStore } from '../stores/persipa'
export default {
    components: {
        TableItemGallery
    },
    methods: {
        ...mapActions(usePersipaStore, ['fetchGalleries']),
        addAction() {
            this.$router.push(`/add-gallery`)
        }
    },
    computed: {
        ...mapWritableState(usePersipaStore, ['galleriesObj'])
    },
    created() {
        this.fetchGalleries()
    }
}
</script>

<template>
    <section class="ms-2 me-3 px-3 mt-5">
        <div class="mt-4 d-flex justify-content-between mb-2">
            <h2 class="m-0">GALLERIES</h2>
            <button
                @click.prevent="addAction"
                type="button"
                class="btn btn-success rounded-lg"
            >
                Add Gallery
            </button>
        </div>
        <hr />
        <div class="tbl-container border border-secondary border-opacity-25">
            <table class="table table-hover table-responsive">
                <thead>
                    <tr>
                        <th scope="col" class="text-center">#</th>
                        <th scope="col" width="150px">Event Name</th>
                        <th scope="col" width="200px" class="text-center">Image 1</th>
                        <th scope="col" width="200px" class="text-center">Image 2</th>
                        <th scope="col" width="200px" class="text-center">Image 3</th>
                        <th scope="col" width="200px" class="text-center">Image 4</th>
                        <th scope="col" width="200px" class="text-center">Image 5</th>
                        <th scope="col" width="200px" class="text-center">Image 6</th>
                        <th scope="col" width="100px" class="text-center"></th>
                    </tr>
                </thead>
                <tbody v-for="gallery in galleriesObj.galleries" :key="gallery.id">
                    <TableItemGallery :gallery="gallery" />
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