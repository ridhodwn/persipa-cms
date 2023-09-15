<script>
import MatchForm from '../components/MatchForm.vue'
export default {
    components: {
        MatchForm
    }
}
</script>

<template>
    <MatchForm :match="{}" :matchFormType="'add-match'" />
</template>