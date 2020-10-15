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
                                   programming. You can find some of them on the projects page. I also have a page 
                                   detailing some concepts and algorithms I find interesting on the blog portion of
                                   the website. If you're interested in more information I've uploaded my resume
                                   and contact information on their resp. pages.
                                   </p>
                 </div>
               </div>`,
    data() {
	return {}
    }
})

Vue.component('projects', {
    props: {
    },
    template: `
               <div class="projects"> 
                 <div class="jumbotron">
                   <h1 class="display4"> Dual Login System & Collabrative Filtering</h1>
                   <p class="lead"> Dates: Summer 2018 </p>

                   <p class="lead"> Android: 
                     <a href="https://play.google.com/store/apps/details?id=com.hawque.client&hl=en_US"> https://play.google.com/store/apps/details?id=com.hawque.client&hl=en_US </a>
                   </p>

                   <p class="lead"> IOS: 
                     <a href="https://apps.apple.com/us/app/hawque/id1326054805"> https://apps.apple.com/us/app/hawque/id1326054805 </a>
                   </p>

                   <p class="lead"> Website: 
                     <a href="https://www.hawque.com/"> https://www.hawque.com/ </a>
                   </p>

                   <hr class="my-4">
                   </p>
                     At my internship at Hawque I was tasked with developing a dual login system, were the second authentication 
                     was facial recognition. Hawque is a security start-up where trained guards, off-duty policeman, etc. are available
                     for users to pay for protection/patrolling. One possible problem is that there would be no way to ensure that the
                     guards would be at a location, or that they didn't pay someone else to do it, so my goal was to use facial recognition
                     technology to authenticate the provider. I was able to use Keras, opencv, and android studio to develop this, hosting
                     the facial recognition model I developed on AWS. This was implemented in used in production on the Beta version of the
                     app.
                   </p>
                   <p>
                     At the same internship, I developed a user-based collabrative filtering algorithm in python and MySQL. This was used to
                     help match the users of the app with providers.
                   </p>
                 </div>

                 <div class="jumbotron">
                   <h1 class="display4"> Reconfigurable Computer </h1>
                   <p class="lead"> Dates: 2013-2014 </p>
                   <p class="lead">
                     Project Page
                     <a href="https://upverter.com/design/shs2017/59aae0b5aaab0e8d/reconfigurable-computer/">
                       https://upverter.com/design/shs2017/59aae0b5aaab0e8d/reconfigurable-computer/
                     </a>
                   </p>
                   <p class="lead">
                     Featured on Upverter Blog:
                     <a href="https://blog.upverter.com/2013/08/16/design-of-the-week-4-reconfigurable-computer/">
                       https://blog.upverter.com/2013/08/16/design-of-the-week-4-reconfigurable-computer/ 
                     </a>
                   </p>

                   <hr class="my-4">
                   <p>
                     After learning about what FPGA were, I became very interested in the idea of a reconfigurable
                     computer. If you are unfamilar with this term you can read about more in detail 
                     <a href="https://en.wikipedia.org/w/index.php?title=Reconfigurable_computing&oldid=976381120">
                       here
                     </a>, but essentially a reconfigurable takes the idea of software being run on fixed hardware,
                     and turns it into the hardware itself but adaptively programmed. This has many future potentials
                     such as better virtualization, faster training of neural networks, etc. There are several existing
                     forks of my project and it is licensed under GPL so feel free to modify it or contribute to the
                     original. The cad files are hosted on Upverter and can be found at the top of this project. This
                     project was also one of the earliest projects to be featured on the Upverter Blog whose link you
                     can also find above.
                   </p>
                 </div>

                 <div class="jumbotron">
                   <h1 class="display4"> Petri Dish Colony Counter </h1>
                   <p class="lead"> Dates: Summer 2020 (Over the period of one week) </p>
                   <p class="lead"> Website: <a href="https://tang111111.github.io/ColonyCountingML/"> https://tang111111.github.io/ColonyCountingML/ </a> </p>
                   <p class="lead"> Github: <a href="https://github.com/zhangui/ColonyCountingML"> https://github.com/zhangui/ColonyCountingML </a> </p>
                   <hr class="my-4">
                   <p>
                     In this project, my team and I combined a convolutional neural network (CNN) with KMeans 
                     with boosting to predict the number of colonies on a petri dish. To help train the CNN
                     we developed an image generator for the colonies as well as an image preprocessor to make
                     the results from both algorithms better. We obtained very good results when the number of 
                     colonies was law, however, due to the limited the time
                     frame we failed to achieve better results when the number of colonies exceeded 100. For a
                     more detailed explanation of our implementation and results check out the website or code
                     linked above.
                   </p>
                 </div>

                 <div class="jumbotron">
                   <h1 class="display4"> MARTA Simulator </h1>
                   <p class="lead"> Summer 2018 </p>
                   <p class="lead"> Github: To be uploaded </p>
                   <hr class="my-4">
                   <p>
                     This was a class project, where a group and I planned, designed, and developed a simulator
                     for the MARTA train system. The goal of this class was to teach us agile software development
                     as well as give us valuable experience in working in a team. This project was implemented in 
                     Java and used JavaFX for the graphics. Data was stored using MySQL.
                   </p>
                 </div>

                 <div class="jumbotron">
                   <h1 class="display4"> Gameboy Advance Game </h1>
                   <p class="lead"> Summer 2018 </p>
                   <p class="lead"> Github: To be uploaded </p>
                   <hr class="my-4">
                   <p>
                     One of the most fun projects that a computer science GT undergrad 
                     is given is to develop a gameboy advanced game. My game can be
                     found on the github page above and if you would like to play it 
                     dowload it and follow the instructions on the github page.
                   </p>
                 </div>


                 <div class="jumbotron">
                   <h1 class="display4"> Photo/Video Blemish Remover </h1>
                   <p class="lead"> Dates: Summer 2017 </p>
                   <p class="lead"> Proprietary </p>
                   <hr class="my-4">
                   <p>
                     During my second internship, I was tasked with developing a tool that would recognize faces
                     and within those faces find blemishes and acne. I was able to do this using Tensorflow, OpenCV, and a
                     convolutional neural network-based facial recognizer. This tool then applied a few photo
                     operations, such as smooth to reduce the amount that the blemishes and acne were visible.
                     This was used as a filter for photos.
                   </p>
                 </div>


                 <div class="jumbotron">
                   <h1 class="display4"> Hobby Operating System </h1>
                   <hr class="my-4">
                   <p class="lead"> Dates: 2012-2013 </p>
                   <p class="lead">
                     <a href="https://github.com/shs2017/HarmonsOS">
                       https://github.com/shs2017/HarmonsOS
                     </a>
                   </p>

                   <hr class="my-4">
                   <p>
                     After learning to programming and developing a few hobby video games,
                     I became very interested in how computers work, so I decided to develop
                     a simple operating system to learn. I started off with the 16 bit operating
                     system with a bootloader written for floppy disks, although they can also 
                     be used on CDs, and a simple command line. I then progressed to going into 
                     32 bit mode and implemented read/write support for a harddrive. This was 
                     written in a combination of x86 assembly (bootloader) and C (the kernel).
                   </p>
                 </div>

                 <div class="jumbotron">
                   <h1 class="display4"> Video Games </h1>
                   <hr class="my-4">
                   <p class="lead"> Dates: 2012-2013 </p>
                   <p class="lead"> Github: To be uploaded </p>
                   <p>
                     These include my earliest programming projects. Several of these
                     were school projects and other were done in my free time. They 
                     are a collection of video games I designed in Unity 3D when Javascript
                     was still supported; actually the programming language Boo was supported
                     then as well. Sadly, I have not been able to collect of my projects 
                     so some might be lost to time. Please note that these projects were
                     implemented when I was in elementary and middle school so they do not
                     reflect my current coding skills, but rather are to show my path of 
                     learning.
                   </p>
                 </div>
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
	page: 'home',
    },
    methods: {
	switchColorTheme: function () {
	    this.lightMode = !this.lightMode
	},
    }
})
