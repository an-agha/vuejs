const app = Vue.createApp({
    // template: '<h3>Vue JS</h3>'
    data() {
        return{
            show: true,
            title: 'vue JS',
            name : 'helen',
            age :  '18'
        }
    },
    // methods: {
    //     changeTitle(title) {
    //         // this.title = "hi it's me" 
    //         this.title = title
    //     }
    // },
    methods: {
        showBook() {
            this.show =! this.show
        }
    }
    
})

app.mount('#app')