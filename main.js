Vue.component('home', {
    props: {
    },
    template: `<div class="home"> 
                 <div class="jumbotron">
                   <h1 class="display4">About Me</h1>
                   <p class="lead">I'm a 4th year undergraduate computer science major at Georgia Tech. 
                                   My course specializations have are in CS theory and artificial intelligence. I
                                   expect to graduate in the Spring of 2021. I began programming when I was around
                                   12 or 13 and have created projects in various areas from data science to low-level
                                   programming. You can find some of them on the projects page.
                                   </p>
                 </div>
               </div>`,
    data() {
	return {}
    }
})


Vue.component('project', {
    props: ['imgUrl', 'title', 'dates', 'website', 'ios', 'android', 'github', 'featured', 'description'],
    template: `
                 <div class="card">
                   <img class="card-img-top" :src=imgUrl alt="Card image cap" style="width:300px;height:300px;">
                   <div class="card-body">
                   <h5 class="card-title"> {{ title }} </h5>
                   <h6 v-if="dates" class="card-subtitle mb-2 text-muted"> Dates: {{ dates }} </h6>
                   <h6 v-if="android" class="card-subtitle mb-2 text-muted">
                      Android: 
                     <a :href=android> {{ android }} </a>
                   </h6>

                   <h6 v-if="ios" class="card-subtitle mb-2 text-muted">
                      IOS: 
                     <a :href=ios> {{ ios }} </a>
                   </h6>

                   <h6 v-if="website" class="card-subtitle mb-2 text-muted">
                      Website: 
                     <a :href=website> {{ website }} </a>
                   </h6>

                   <h6 v-if="github" class="card-subtitle mb-2 text-muted">
                      Github: 
                     <a :href=github> {{ github }} </a>
                   </h6>

                   <h6 v-if="featured" class="card-subtitle mb-2 text-muted">
                      Featured on: 
                     <a :href=featured> {{ featured }} </a>
                   </h6>

                   <hr class="my-4">

                   </p>
                     {{ description }}
                   </p>
                   </div>
                 </div>

              `
})



Vue.component('projects', {
    props: {
    },
    data() {
	return {
	    myProjects: [
		{
		    id: 0,
		    imgUrl: './assets/hawque.png',
		    title: 'Dual Login System & Collabrative Filtering',
		    dates: 'Summer 2018',
		    website: 'https://www.hawque.com/',
		    ios: 'https://apps.apple.com/us/app/hawque/id1326054805',
		    android: 'https://play.google.com/store/apps/details?id=com.hawque.client&hl=en_US',
		    description: `At my internship at Hawque I was tasked with developing a dual login 
                                  system, were the second authentication was facial recognition. Hawque 
                                  is a security start-up where trained guards, off-duty policeman, etc. 
                                  are available for users to pay for protection/patrolling. One possible 
                                  problem is that there would be no way to ensure that the 
                                  guards would be at a location, or that they didn't pay someone else  
                                  to do it, so my goal was to use facial recognition technology to 
                                  authenticate the provider. I was able to use Keras, opencv, and 
                                  android studio to develop this, hosting the facial recognition 
                                  model I developed on AWS. This was implemented in used in production 
                                  on the Beta version of the app.`
		},
		{
		    id: 1,
		    imgUrl: './assets/phi_kappa_psi.png',
		    title: 'Fraternity Chapter Website',
		    dates: '2017-2018',
		    website: 'https://www.gtphipsi.com',
		    description: `I helped lead the development of my local fraternity's website. 
                                  We used a combination of tools ranging from bootstrap and react 
                                  to PHP, during this time. The main goal was to develop a 
                                  responsive website that would help attract new recruits as 
                                  well as provide them with information about our rush schedule. 
                                  This proved to be very valuable, as we have increased our 
                                  recruits in recent years.`
		},
		{
		    id: 2,
		    imgUrl: './assets/upverter.png',
		    title: 'Reconfigurable Computer',
		    dates: '2013-2014',
		    website: 'https://upverter.com/design/shs2017/59aae0b5aaab0e8d/reconfigurable-computer/',
		    featured: 'https://blog.upverter.com/2013/08/16/design-of-the-week-4-reconfigurable-computer/',
		    description: `After learning about what FPGA were, I became very interested in 
                                  the idea of a reconfigurable computer. If you are unfamilar with 
                                  this term you can read about more in detail on its wikipedia page
                                  but essentially a reconfigurable takes the idea of software being 
                                  run on fixed hardware, and turns it into the hardware itself but adaptively programmed. 
                                  This has many future potentials such as better virtualization, 
                                  faster training of neural networks, etc. There are several existing 
                                  forks of my project and it is licensed under GPL so feel free to 
                                  modify it or contribute to the original. The cad files are hosted 
                                  on Upverter and can be found at the top of this project. This 
                                  project was also one of the earliest projects to be featured on 
                                  the Upverter Blog whose link you can also find above.`,
		},
		{
		    id: 3,
		    imgUrl: './assets/colony.png',
		    title: 'Petri Dish Colony Counter',
		    dates: 'Summer 2020',
		    website: 'https://tang111111.github.io/ColonyCountingML/',
		    github: 'https://github.com/zhangui/ColonyCountingML',
		    description: `In this project, my team and I combined a convolutional neural 
                                  network (CNN) with KMeans with boosting to predict the number of colonies
                                  on a petri dish. To help train the CNN we developed an image generator for 
                                  the colonies as well as an image preprocessor to make the results from both 
                                  algorithms better. We obtained very good results when the number of 
                                  colonies was low, however, due to the limited the time frame of the class we failed to 
                                  achieve better results when the number of colonies exceeded 100. For a 
                                  more detailed explanation of our implementation and results check out the 
                                  website or code linked above.`,
		},	
		{
		    id: 4,
		    imgUrl: './assets/marta.png',
		    title: 'MARTA Simulator (To be uploaded)',
		    dates: 'Summer 2018',
		    description: `This was a class project, where a group and I planned, designed, and 
                                  developed a simulator for the MARTA train system. The goal of this class 
                                  was to teach us agile software development as well as 
                                  give us valuable experience in working in a team. This project was 
                                  implemented in Java and used JavaFX for the graphics. Data was stored using
                                   MySQL.`,
		},
		{
		    id: 5,
		    imgUrl: './assets/gba.jpg',
		    title: 'Gameboy Advanced Game (To be uploaded))',
		    dates: 'Summer 2018',
		    description: `One of the most fun projects that a computer science GT undergrad 
                                  is given is to develop a gameboy advanced game. My game can be
                                  found on the github page above and if you would like to play it 
                                  dowload it and follow the instructions on the github page.`,
		},
		{
		    id: 6,
		    imgUrl: './assets/litely.png',
		    title: 'Photo/Video Blemish Remover (proprietary)',
		    dates: 'Summer 2017',
		    description: `During my second internship, I was tasked with developing a 
                                  tool that would recognize faces and within those faces 
                                  find blemishes and acne. I was able to do this using 
                                  Tensorflow, OpenCV, and a convolutional neural network-based 
                                  facial recognizer. This tool then applied a few photo 
                                  operations, such as smooth to reduce the amount that the
                                  blemishes and acne were visible. This was used as a 
                                  filter for photos.`,
		},
		{
		    id: 7,
		    imgUrl: './assets/OS++.png',
		    title: 'Hobby Operating System',
		    dates: '2012-2013',
		    github: 'https://github.com/shs2017/HarmonsOS',
		    description: ` After learning to programming and developing a few hobby video games,
                                   I became very interested in how computers work, so I decided to develop
                                   a simple operating system to learn. I started off with the 16 bit operating
                                   system with a bootloader written for floppy disks, although they can also 
                                   be used on CDs, and a simple command line. I then progressed to going into 
                                   32 bit mode and implemented read/write support for a harddrive. This was 
                                   written in a combination of x86 assembly (bootloader) and C (the kernel).`,
		},
		{
		    id: 8,
		    imgUrl: './assets/game.png',
		    title: 'Video Games',
		    dates: '2012-2013',
		    website: 'https://drive.google.com/drive/folders/0B5Ga8Lu2vLsCOXJxa2czRm5oQms?usp=sharing',
		    description: `These include my earliest programming projects. Several of these
                                  were school projects and other were done in my free time. They 
                                  are a collection of video games I designed in Unity 3D when Javascript
                                  was still supported; actually the programming language Boo was supported
                                  then as well. Sadly, I have not been able to collect of my projects 
                                  so some might be lost to time. Please note that these projects were
                                  implemented when I was in elementary and middle school so they do not
                                  reflect my current coding skills, but rather are to show my path of 
                                  learning.`,
		},
	    ]
	}
    },

    props: ['imgUrl', 'title', 'dates', 'website', 'ios', 'android', 'github', 'featured', 'description'],
    template: `<div class="projects"> 
                 <project v-for="cur in myProjects" :key="cur.id"
                          :imgUrl="cur.imgUrl"
                          :title="cur.title"
                          :dates="cur.dates"
                          :website="cur.website"
                          :ios="cur.ios"
                          :android="cur.android"
                          :github="cur.github"
                          :featured="cur.featured"
                          :description="cur.description" />
               </div>`,
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

Vue.component('blog', {
    props: {
    },
    template: `<div class="blog"> 
                 This is the blog page
               </div>`,
    data() {
	return {}
    }

})


var app = new Vue({
    el: '#app',
    data: {
	lightMode: true,
	page: 'projects',
    },
    methods: {
	switchColorTheme: function () {
	    this.lightMode = !this.lightMode
	},
    }
})
