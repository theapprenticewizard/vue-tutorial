const app = new Vue({
    el:"#app",
    data: { friends: [
        "Fred",
        "George",
        "Samantha"
    ],
        bobby: {
            first_name: "Bobby",
            last_name: "Cunningham",
            age: 35
        },
        john: {
            name: "John",
            age: 33
        }
    },
    computed: {
        full_name() {
            return `${this.bobby.first_name} ${this.bobby.last_name}` 
        }
    },
    methods: {
        korean_age: function (age) {
            return age + 1;
        }
    },
    filters: {
        full_name_filter(data) {
            return `${data.first_name} ${data.last_name}`
        }
    },
    template: `
        <div>
            <ul>
                <li>
                <h1>{{john.name}}</h1>
                <h2>I am {{john.age}}</h2>
                </li>
                <li>
                <h1>{{bobby | full_name_filter}}</h1>
                <h2>I am {{korean_age(bobby.age)}}</h2>
                </li>
            </ul>
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