<script>
import PlayerForm from '../components/PlayerForm.vue'
export default {
    components: {
        PlayerForm
    }
}
</script>

<template>
    <PlayerForm :player="{}" :playerFormType="'add-player'" />
</template>