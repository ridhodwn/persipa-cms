<script>
import { RouterLink } from 'vue-router';
import { mapActions, mapWritableState } from 'pinia';
import { usePersipaStore } from '../stores/persipa';
export default {
  methods: {
    ...mapActions(usePersipaStore, ['logoutHandler']),
  },
  computed: {
    ...mapWritableState(usePersipaStore, ['isLogin'])
  }
}
</script>

<template>
    <nav class="navbar bg-dark border-bottom border-bottom-dark py-3 px-3" data-bs-theme="dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="../assets/persipa-logo.png" alt="" width="55" height="45" class="d-inline-block me-3">
                PERSIPA PATI CMS
            </a>
            <ul v-if="isLogin" class="nav nav-menu flex-row">
                <li>
                    <RouterLink to="/" class="nav-link me-2">Players</RouterLink>
                </li>
                <li>
                    <RouterLink to="/managements" class="nav-link me-2">Managements</RouterLink>
                </li>
                <li>
                    <RouterLink to="/galleries" class="nav-link me-2">Gallery</RouterLink>
                </li>
                <!-- <li>
                    <RouterLink to="/events" class="nav-link me-2">Events</RouterLink>
                </li> -->
                <li>
                    <RouterLink to="/matches" class="nav-link me-2">Match Result</RouterLink>
                </li>
                <li>
                    <RouterLink to="/news" class="nav-link me-2">News</RouterLink>
                </li>
            </ul>
            <RouterLink to="/add-admin" v-if="isLogin" class="nav-link me-4" id="add-admin">
                Add Admin</RouterLink>
            <a v-if="isLogin" @click.prevent="logoutHandler" class="nav-link me-2" href="" id="logout">
                LOGOUT</a>
        </div>
    </nav>
</template>

<style scoped>
.navbar {
    font-family: 'Oswald', sans-serif;
}
.navbar-brand {
    font-size: 30px;
    font-weight: 500;
}

.nav-menu {
    width: 50vw;
    margin: auto;
}

.nav-link {
    font-size: 20px;
    font-weight: 500;
    color: white;
}

#logout {
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 1.3px;
}

#add-admin {
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.6px;
}
</style>