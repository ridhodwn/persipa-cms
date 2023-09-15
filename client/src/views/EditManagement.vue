<script>
import ManagementForm from '../components/ManagementForm.vue'
import { mapWritableState } from 'pinia'
import { usePersipaStore } from '../stores/persipa'

export default {
    components: {
        ManagementForm
    },
    computed: {
        ...mapWritableState(usePersipaStore, ['management'])
    }
}
</script>

<template>
    <ManagementForm :management="management" :managementFormType="'edit-management'"/>
</template>