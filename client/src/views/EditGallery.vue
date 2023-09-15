<script>
import GalleryForm from '../components/GalleryForm.vue'
import { mapWritableState } from 'pinia'
import { usePersipaStore } from '../stores/persipa'

export default {
    components: {
        GalleryForm
    },
    computed: {
        ...mapWritableState(usePersipaStore, ['gallery'])
    }
}
</script>

<template>
    <GalleryForm :gallery="gallery" :galleryFormType="'edit-gallery'"/>
</template>