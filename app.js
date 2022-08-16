const app = Vue.createApp({
    // template: '<h3>Vue JS</h3>'
    data() {
        return{
            show: true,
            title: 'vue JS',
            name : 'helen',
            age :  '18',
            x: 0,
            y : 0
        }
    },
    // mouse events
    // methods: {
    //     changeTitle(title) {
    //         // this.title = "hi it's me" 
    //         this.title = title
    //     }
    // },
    methods: {
        showBook() {
            this.show =! this.show
        },
        // handleEvent() {
        //     console.log("hi")
        // }
        handleEvent(e, data) {
            console.log(e, e.type)
            if (data) {
                console.log(data);
            }
        },
        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
        
})

app.mount('#app')