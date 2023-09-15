<script>
import GalleryForm from '../components/GalleryForm.vue'
export default {
    components: {
        GalleryForm
    }
}
</script>

<template>
    <GalleryForm :gallery="{}" :galleryFormType="'add-gallery'" />
</template>