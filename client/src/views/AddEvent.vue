<script>
import EventForm from '../components/EventForm.vue'
export default {
    components: {
        EventForm
    }
}
</script>

<template>
    <EventForm :event="{}" :eventFormType="'add-event'" />
</template>