<template>
    <div>
        <input type="text" v-model="userId">
        <button @click="loadUser()">GO</button>
        <nuxt-child />
    </div>
</template>

<script>
export default {
    data() {
        return {
            userId: ''
        }
    },
    methods: {
        loadUser() {
            this.$router.push(`/users/${this.userId}`)
        }
    }
}
</script>
