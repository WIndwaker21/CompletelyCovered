<template>
    <div>
        <p class="bumperTitle">Bumper page</p>
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

    }
}
</script>

<style>

.bumperTitle {
    color: green;
}

</style>