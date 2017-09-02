<template>
    <div>
        <p>Customer Info page</p>
        <button @click="goTo('bumper')">Go To Bumper</button>
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
p {
    font-size: 14px
}
</style>
