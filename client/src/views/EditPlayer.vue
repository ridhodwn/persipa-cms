<script>
import PlayerForm from '../components/PlayerForm.vue'
import { mapWritableState } from 'pinia'
import { usePersipaStore } from '../stores/persipa'

export default {
    components: {
        PlayerForm
    },
    computed: {
        ...mapWritableState(usePersipaStore, ['player'])
    }
}
</script>

<template>
    <PlayerForm :player="player" :playerFormType="'edit-player'"/>
</template>
