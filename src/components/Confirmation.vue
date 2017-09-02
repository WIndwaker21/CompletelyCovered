<template>
    <div>
        <p>Confirmation page</p>
        <button @click="goTo('home')">Start Over</button>
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