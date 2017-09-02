<template>
    <div>
        <p>Bumper page</p>
        <button @click="goTo('quote')">Go To Quote Page</button>
    </div>
</template>

<script>
module.exports = {
    data: function() {
        return {
        }
    },
    methods: {
        goTo: function(route) {
            this.$router.push(route)
        }
    }
}
</script>

<style>

</style>