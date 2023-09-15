<script>
import EventForm from '../components/EventForm.vue'
import { mapWritableState } from 'pinia'
import { usePersipaStore } from '../stores/persipa'

export default {
    components: {
        EventForm
    },
    computed: {
        ...mapWritableState(usePersipaStore, ['event'])
    }
}
</script>

<template>
    <EventForm :event="event" :eventFormType="'edit-event'"/>
</template>