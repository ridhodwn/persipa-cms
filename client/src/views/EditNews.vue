<script>
import NewsForm from '../components/NewsForm.vue'
import { mapWritableState, mapActions } from 'pinia'
import { usePersipaStore } from '../stores/persipa'

export default {
    components: {
        NewsForm
    },
    methods: {
        ...mapActions(usePersipaStore, ['fetchCategories', 'fetchTags']),
    },
    computed: {
        ...mapWritableState(usePersipaStore, ['news', 'categoriesObj', 'tagsObj'])
    },
    created() {
        this.fetchCategories()
        this.fetchTags()
    }
}
</script>

<template>
    <NewsForm :news="news" :newsFormType="'edit-news'" :categoriesObj="categoriesObj" :tagsObj="tagsObj"/>
</template>