Vue.component('home', {
    props: {
    },
    template: `<div class="home"> 
                 This is the home page
               </div>`,
    data() {
	return {}
    }
})

Vue.component('projects', {
    props: {
    },
    template: `<div class="projects"> 
                 This is the projects page
               </div>`,
    data() {
	return {}
    }

})

Vue.component('resume', {
    props: {
    },
    template: `<div class="resume"> 
                 This is the resume page
               </div>`,
    data() {
	return {}
    }

})

Vue.component('contact', {
    props: {
    },
    template: `<div class="home"> 
                 This is the contact page
               </div>`,
    data() {
	return {}
    }

})

var app = new Vue({
    el: '#app',
    data: {
	lightMode: true,
	page: 'home',
    },
    methods: {
	switchColorTheme: function () {
	    this.lightMode = !this.lightMode
	},
    },
})
