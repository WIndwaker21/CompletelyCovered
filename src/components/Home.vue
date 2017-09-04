<template>
    <div>
        <p class="homeTitle">Home page</p>
        <button @click="goTo('bumper')">Go To Bumper</button>
        <button @click="getGreeting()">Get Greeting</button>
        <button @click="setGreeting()">Set Greeting to Spanish</button>
    </div>
</template>

<script>
module.exports = {
    data: function() {
        return {
        }
    },
    methods: {
        getGreeting: function() {
            var greeting = this.$store.getters.getAltGreeting
            console.log(greeting)
        },
        setGreeting: function() {
            this.$store.dispatch("setGreeting", "hola!")
        }
    }
}
</script>

<style>
.homeTitle {
    color: red;
}
</style>
