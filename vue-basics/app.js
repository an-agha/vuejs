const app = Vue.createApp({
    // template: '<h3>Vue JS</h3>'
    data() {
        return{
            show: true,
            count:0,
            title: 'vue JS',
            name : 'helen',
            age :  '18',
            x: 0,
            y : 0,
            books: [
                {title:'akskk', author: 'ahqbeuhb', img:'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg', isFav:true},
                {title:'akskk', author: 'ahqbeuhb', img:'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg', isFav:false},
                {title:'akskk', author: 'ahqbeuhb', img:'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg', isFav:true},
            ],
            message: "hi"
        }
    },
    // mouse events
    methods: {
        changeTitle(title) {
            // this.title = "hi it's me" 
            this.title = title
        },
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
        },
        // toggle class
        toggleFav(item) {
            item.isFav =! item.isFav
        }
    }
    
        
})

app.mount('#app')