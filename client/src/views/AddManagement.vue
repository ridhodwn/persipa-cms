<script>
import ManagementForm from '../components/ManagementForm.vue'
export default {
    components: {
        ManagementForm
    }
}
</script>

<template>
    <ManagementForm :management="{}" :managementFormType="'add-management'" />
</template>