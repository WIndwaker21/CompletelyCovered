<template>
    <div>
        <p class="homeTitle">Home page</p>
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

    }
}
</script>

<style>
.homeTitle {
    color: red;
}
</style>
