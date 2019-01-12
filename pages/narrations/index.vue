<template>
    <div class="row">
        <div class="col-sm-offset-3 col-sm-6" style="text-align: center">
            <h1> Accessed by Firebase Auth </h1>
            <button class="btn btn-default" @click="logout">Log out</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        methods: {
            logout() {
                this.$store.dispatch('signOut').then(() => {
                    alert('logged out!');
                    this.$router.push('/')
                })
            }
        }
    }
</script>

<style scoped>

</style>