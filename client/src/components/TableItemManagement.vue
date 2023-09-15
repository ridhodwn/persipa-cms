<script>
import { mapActions } from 'pinia'
import { usePersipaStore } from '../stores/persipa'
export default {
    props: {
        management: Object
    },
    methods: {
        ...mapActions(usePersipaStore, [
            'deleteManagementById',
            'fetchManagementById',
        ]),
        deleteManagementByIdComp(id) {
            this.deleteManagementById(id)
        },
        buttonAction(id) {
            this.fetchManagementById(id)
        },
    },
}
</script>

<template>
    <tr>
        <td scope="row" class="fw-bold">{{ management.id }}</td>
        <td>{{ management.name }}</td>
        <td>
            <img :src="management.imageUrl" class="img-fluid rounded-1" />
        </td>
        <td class="text-center">{{ management.position }}</td>
        <td class="text-center">
            {{ management.nationality }}<br /><img
                :src="management.flagUrl"
                class="img-fluid rounded-1 flag-img mt-1"
            />
        </td>
        <td class="text-center">{{ management.currentTeam }}</td>
        <td class="text-center">{{ management.pastTeam }}</td>
        <td class="text-center">{{ management.age }}</td>
        <td class="text-center">
            <a
                @click.prevent="buttonAction(management.id)"
                href=""
                class="bi bi-pencil-fill me-2 text-primary"
            ></a>
            <a
                @click.prevent="deleteManagementByIdComp(management.id)"
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

.activity-btn {
    font-size: 15px;
}

.about-cell {
    height: 250px;
    overflow: auto;
}

.add-act-btn {
    font-size: 14px;
    font-weight: 500;
    color: white;
}

.flag-img {
    height: 20px;
    border: 1px solid #989898;
}
</style>
