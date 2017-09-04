// import Vuex from 'vuex'

var state = {
    greeting:  "hello!",
    customerInfo: {
        firstName: null,
        lastName: null,
        address: null,
        acknowledgement: null
    },
    profiles: {}
}

var mutations = {
    setGreetingMutation: function(state, value) {
        state.greeting = value
    },
    setCustomerInfoMutation: function(state, value) {
        state.customerInfo = value
    }
}

var actions = {
    setGreeting: function(context, value) {
        context.commit("setGreetingMutation", value);
    },
    setCustomerInfo : function(context, value) {
        context.commit("setCustomerInfoMutation", value);
    }
}

var getters = {
    getGreeting: state => {
        return state.greeting
    },
    getCustomerProfile: state => {
        return state.customerInfo
    }
}

export default new Vuex.Store({
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
})