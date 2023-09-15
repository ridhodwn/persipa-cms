<script>
import { mapActions } from 'pinia'
import { usePersipaStore } from '../stores/persipa'
export default {
    props: {
        gallery: Object
    },
    methods: {
        ...mapActions(usePersipaStore, [
            'deleteGalleryById',
            'fetchGalleryById'
        ]),
        deleteGalleryByIdComp(id) {
            this.deleteGalleryById(id)
        },
        buttonAction(id) {
            this.fetchGalleryById(id)
        },
    }
}
</script>

<template>
    <tr>
        <td scope="row" class="fw-bold">{{ gallery.id }}</td>
        <td>{{ gallery.eventName }}</td>
        <td>
            <img :src="gallery.imgUrl1" class="img-fluid rounded-1" />
        </td>
        <td>
            <img :src="gallery.imgUrl2" class="img-fluid rounded-1" />
        </td>
        <td>
            <img :src="gallery.imgUrl3" class="img-fluid rounded-1" />
        </td>
        <td>
            <img :src="gallery.imgUrl4" class="img-fluid rounded-1" />
        </td>
        <td>
            <img :src="gallery.imgUrl5" class="img-fluid rounded-1" />
        </td>
        <td>
            <img :src="gallery.imgUrl6" class="img-fluid rounded-1" />
        </td>
        <td class="text-center">
            <a
                @click.prevent="buttonAction(gallery.id)"
                href=""
                class="bi bi-pencil-fill me-2 text-primary"
            ></a>
            <a
                @click.prevent="deleteGalleryByIdComp(gallery.id)"
                href=""
                class="bi bi-trash-fill text-danger"
            ></a>
        </td>
    </tr>
</template>

<style scped>
tr {
    font-size: 15px;
}
</style>
