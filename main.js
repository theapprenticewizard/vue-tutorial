Vue.component('friend-component', {
    props: ['friend'],
    filters: {
        fullName(data) {
            return `${data.firstName} ${data.lastName}`
        }
    },
    methods: {
        incrementAge(friend) {
            friend.age += 1;
        },
        decrementAge(friend) {
            friend.age -= 1;
        }
    },
    template: 
    `
    <div>
            <h2>{{friend | fullName}}</h2>
            <h3>{{friend.age}}</h3>
            <button v-on:click="incrementAge(friend)">+</button>
            <button v-on:click="decrementAge(friend)">-</button>
            <input v-model="friend.firstName"/>
            <input v-model="friend.lastName"/>
    </div>
    `
}) 

const app = new Vue({
    el:"#app",
    data: {
        friends: [
            {
                firstName: "Bob",
                lastName: "Goldstein",
                age: 34
            },
            {
                firstName: "Fred",
                lastName: "Hendricks",
                age: 22
            },
            {
                firstName: "Jim",
                lastName: "Jones",
                age: 55
            }
        ]
    },
    template: 
`
<div>
    <friend-component v-for="item in friends" v-bind:friend="item" />
</div>
`

});

/**
 * When to use methods vs. filters vs. computed values
 * methods: mean there is a side effect occuring
 * filters are for text formatting
 * computed properties can't be shared, so
 * usually they are bests to use for stuff 
 * that is specific to YOUR component
 */