<script>
import TableItemNews from '../components/TableItemNews.vue'
import { mapActions, mapWritableState } from 'pinia'
import { usePersipaStore } from '../stores/persipa'
export default {
    components: {
        TableItemNews
    },
    methods: {
        ...mapActions(usePersipaStore, ['fetchNews', 'fetchTags', 'fetchCategories']),
        addAction() {
            this.$router.push(`/add-news`)
        },
        ctgAction() {
            this.$router.push(`/categories`)
        }
    },
    computed: {
        ...mapWritableState(usePersipaStore, ['newsObj', 'tagsObj'])
    },
    created() {
        this.fetchNews()
        this.fetchTags()
        this.fetchCategories()
    }
}
</script>

<template>
    <section class="ms-2 me-3 px-3 mt-5">
        <div class="mt-4 d-flex justify-content-between mb-2">
            <h2 class="m-0">NEWS</h2>
            <div>
                <button @click.prevent="ctgAction" type="button" class="btn btn-warning rounded-lg me-1 small-button">
                    View Categories & Tags
                </button>
                <button @click.prevent="addAction" type="button" class="btn btn-success rounded-lg">
                    Add News
                </button>
            </div>
        </div>
        <hr />
        <div class="tbl-container border border-secondary border-opacity-25">
            <table class="table table-hover table-responsive">
                <thead>
                    <tr>
                        <th scope="col" class="text-center">#</th>
                        <th scope="col" width="200px">Title</th>
                        <th scope="col" width="150px">Subtitle</th>
                        <th scope="col" class="text-center">Content</th>
                        <th scope="col" class="text-center">Multimedia</th>
                        <th scope="col" class="text-center">Quote</th>
                        <th scope="col" class="text-center">Author</th>
                        <th scope="col" width="150px" class="text-center">Date</th>
                        <th scope="col" class="text-center">Views</th>
                        <th scope="col" class="text-center">Comments</th>
                        <th scope="col" class="text-center">Category</th>
                        <th scope="col" class="text-center">Tags</th>
                        <th scope="col" width="70px" class="text-center"></th>
                    </tr>
                </thead>
                <tbody v-for="newsItem in newsObj.news" :key="newsItem.id">
                    <TableItemNews :newsItem="newsItem" :tagsObj="tagsObj" />
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

.small-button {
  font-size: 13px;
}
</style>
