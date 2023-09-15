<script>
import MatchForm from '../components/MatchForm.vue'
import { mapWritableState } from 'pinia'
import { usePersipaStore } from '../stores/persipa'

export default {
    components: {
        MatchForm
    },
    computed: {
        ...mapWritableState(usePersipaStore, ['match'])
    }
}
</script>

<template>
    <MatchForm :match="match" :matchFormType="'edit-match'"/>
</template>
