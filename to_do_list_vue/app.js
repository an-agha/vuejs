const app = Vue.createApp({
	data() {
		return {
			id: 0,
			newItem: "",
			list: []
		}
	},
	methods: {
		addNewItem() {
			this.list.push({
				id: ++this.id,
				text: this.newItem,
				done: false,
			})
			this.newItem = ""
		},
		deleteItem(id) {
			this.list = this.list.filter(item => item.id !== id) 
		}
	},

})



app.mount('#app')