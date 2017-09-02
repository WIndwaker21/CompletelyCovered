<template>
    <div>
        <p>Quote page</p>
        <button @click="goTo('confirmation')">Go To Confirmation Page</button>
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