(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const g=()=>{new Swiper(".mySwiper",{slidesPerView:1,spaceBetween:30,loop:!0,breakpoints:{499:{slidesPerView:2,spaceBetweenSlides:30},999:{slidesPerView:3,spaceBetweenSlides:30}},autoplay:{delay:4e3,disableOnInteraction:!1}}),new Swiper(".mySwiper2",{loop:!0,autoplay:{delay:7e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0}})},c=[{id:1,name:"Johnny Drille",sliderAttr:{imageI:"../src/assets/img/Johnny/john.jpg",imageII:"../src/assets/img/Johnny/john1.jpg",imageIII:"../src/assets/img/Johnny/john2.jpg",arrow:"../src/assets/img/arrow2.png",logo:"../src/assets/img/logo.png"},nameEmoji:"../src/assets/img/Johnny/john1.jpg",lastImg:"../src/assets/img/bayanni/bay5.jpg",ProjectNo:["Project 01","Project 02"],Projects:[{projectNo:"01",projectName:"TA TA TA REMIX",projectFilm:"https://www.youtube.com/embed/13ZpLcGc-Tk?si=h2xTLAxeGpNOOgut",ourVisionHead:"STYLE DIRECTION AND COSTUME DESIGN FOR JOHNNY DRILLE",ourVisionBody:`Develop a stage look that enhances performance, leaving a lasting impression on fans and industry professionals. We leverage fashion to shape artists' unique identities, fuelling fan devotion and inspiring subcultures.
		  `,ourVisionImages:["../src/assets/img/Johnny/john6.jpg","../src/assets/img/Johnny/john5.jpg","../src/assets/img/Johnny/john6.jpg","../src/assets/img/Johnny/john7.jpg"],ourVisionStatement:"We integrate cohesive fashion and style that directly integrates seamlessly into the personal style and vision for the music videos and content, reinforcing brand identity through visuals.",credits:[{creditSubhead:"Styling & Costume Designs",creditAns:"HeadBorn Studios"}],projectImages:{imageI:"../src/assets/img/Johnny/john4.jpg",imageII:"../src/assets/img/Johnny/john.jpg",projectName:{subName1:"HOME EP",subName2:"HOME EP SHOOT"}},trendsBody:"We integrate cohesive fashion and style that directly integrates seamlessly into the personal style and vision for the music videos and content, reinforcing brand identity through visuals.",trendsImages:["../src/assets/img/Johnny/john1.jpg","../src/assets/img/Johnny/john2.jpg","../src/assets/img/Johnny/john2.jpg"]},{projectNo:"02",projectName:"Photo Shoot",projectFilm:"https://www.youtube.com/embed/1Bit6xiJiJc?si=_DcuJFllfGyPWqsS",ourVisionHead:"BRAND REINFORCEMENT AND VISION ALIGNMENT",ourVisionBody:`Fashion serves as a powerful tool for reinforcing brand identity. The consistent use of a specific style or signature fashion elements in visuals helps in creating a strong and recognizable brand image. This, in turn, contributes to audience recall and loyalty. The fashion and style has to align with the artistic vision for the music. Whether it's conveying a specific emotion, storytelling, or creating a particular atmosphere, the wardrobe choices play a vital role in translating vision into a tangible and immersive experience.
		  `,ourVisionImages:["../src/assets/img/Johnny/john11.jpg","../src/assets/img/Johnny/john8.jpg","../src/assets/img/Johnny/john12.jpg","../src/assets/img/Johnny/john7.jpg"],ourVisionStatement:"We integrate cohesive fashion and style that directly integrates seamlessly into the personal style and vision for the music videos and content, reinforcing brand identity through visuals.",credits:[{creditSubhead:"Styling & Costume Designs",creditAns:"HeadBorn Studios"}],projectImages:{imageI:"../src/assets/img/Johnny/john2.jpg",imageII:"../src/assets/img/Johnny/john1.jpg",projectName:{subName1:"EVENTS",subName2:"PHOTOSHOOT"}},trendsBody:"We integrate cohesive fashion and style that directly integrates seamlessly into the personal style and vision for the music videos and content, reinforcing brand identity through visuals.",trendsImages:["../src/assets/img/Johnny/john1.jpg","../src/assets/img/Johnny/john2.jpg","../src/assets/img/Johnny/john2.jpg"]},{projectNo:"03",projectName:"MAVIN AT 10",projectFilm:"https://www.youtube.com/embed/DJ6y5BDVvmo?si=EKzkfBhlBt2H4nrs",ourVisionHead:"COSTUME DESIGN AND STYLE DIRECTION FOR JOHNNY DRILLE BAYANNI & MAGIXX",ourVisionBody:`Develop a stage look that enhances performance, leaving a lasting impression on fans and industry professionals. We leverage fashion to shape artists' unique identities, fuelling fan devotion and inspiring subcultures.
		  `,ourVisionImages:["../src/assets/img/bayanni/mavin1.jpeg","../src/assets/img/bayanni/mavin2.jpeg","../src/assets/img/bayanni/mavin1.jpeg","../src/assets/img/Johnny/john7.jpg"],ourVisionStatement:"We integrate cohesive fashion and style that directly integrates seamlessly into the personal style and vision for the music videos and content, reinforcing brand identity through visuals.",credits:[{creditSubhead:"Styling & Costume Designs",creditAns:"HeadBorn Studios"}],projectImages:{imageI:"../src/assets/img/Johnny/john13.jpg",imageII:"../src/assets/img/bayanni/bayanni15.jpg",projectName:{subName1:"MAVIN AT 10",subName2:"PHOTOSHOOT"}},trendsBody:"We integrate cohesive fashion and style that directly integrates seamlessly into the personal style and vision for the music videos and content, reinforcing brand identity through visuals.",trendsImages:["../src/assets/img/Johnny/john1.jpg","../src/assets/img/Johnny/john2.jpg","../src/assets/img/Johnny/john2.jpg"]},{projectNo:"04",projectName:"Believe Me",projectFilm:"https://www.youtube.com/embed/FVcW9Aj5R2g?si=N-WTniRY_7qadLw3",ourVisionHead:"STYLE DIRECTION AND COSTUME DESIGN FOR JOHNNY DRILLE",ourVisionBody:`Develop a stage look that enhances performance, leaving a lasting impression on fans and industry professionals. We leverage fashion to shape artists' unique identities, fuelling fan devotion and inspiring subcultures.
		  `,ourVisionImages:["../src/assets/img/Johnny/john15.jpg","../src/assets/img/Johnny/john14.jpg","../src/assets/img/Johnny/john15.jpg","../src/assets/img/Johnny/john7.jpg"],ourVisionStatement:"We integrate cohesive fashion and style that directly integrates seamlessly into the personal style and vision for the music videos and content, reinforcing brand identity through visuals.",credits:[{creditSubhead:"Styling & Costume Designs",creditAns:"HeadBorn Studios"},{creditSubhead:"Directed by",creditAns:"AbdulRasaq Babalola"},{creditSubhead:"Produced by",creditAns:"Femi Dapson"}],projectImages:{imageI:"../src/assets/img/Johnny/john14.jpg",imageII:"../src/assets/img/Johnny/john15.jpg",projectName:{subName1:"BELIEVE ME",subName2:"MUSIC FILM"}},trendsBody:"We integrate cohesive fashion and style that directly integrates seamlessly into the personal style and vision for the music videos and content, reinforcing brand identity through visuals.",trendsImages:["../src/assets/img/Johnny/john1.jpg","../src/assets/img/Johnny/john2.jpg","../src/assets/img/Johnny/john2.jpg"]}],slider2Images:["../src/assets/img/bayanni/bayanni2.jpg","../src/assets/img/bayanni/bayanni3.jpg","../src/assets/img/bayanni/bayanni4.jpg","../src/assets/img/bayanni/bayanni9.jpg"]},{id:2,name:"Bayanni",sliderAttr:{imageI:"../src/assets/img/bayanni/bayanni1.jpg",imageII:"../src/assets/img/bayanni/bayanni2.jpg",imageIII:"../src/assets/img/bayanni/bayanni3.jpg",arrow:"../src/assets/img/arrow2.png",logo:"../src/assets/img/logo.png"},nameEmoji:"../src/assets/img/bayanni/bay5.jpg",lastImg:"../src/assets/img/bayanni/bay5.jpg",ProjectNo:["Project 01","Project 02"],Projects:[{projectNo:"01",projectName:"TA TA TA REMIX",projectFilm:"https://www.youtube.com/embed/DJ6y5BDVvmo?si=EKzkfBhlBt2H4nrs",ourVisionHead:"STYLE DIRECTION AND COSTUME DESIGN FOR BAYANNI",ourVisionBody:`Develop a stage look that enhances performance, leaving a lasting impression on fans and industry professionals. We leverage fashion to shape artists' unique identities, fuelling fan devotion and inspiring subcultures.
		  `,ourVisionImages:["../src/assets/img/bayanni/bayanni2.jpg","../src/assets/img/bayanni/bayanni3.jpg","../src/assets/img/bayanni/bayanni4.jpg","../src/assets/img/bayanni/bayanni9.jpg"],ourVisionStatement:"We integrate cohesive fashion and style that directly integrates seamlessly into the personal style and vision for the music videos and content, reinforcing brand identity through visuals.",credits:[{creditSubhead:"Styling & Costume Designs",creditAns:"HeadBorn Studios"},{creditSubhead:"Photography",creditAns:"Dara Banjo"},{creditSubhead:"Directed by",creditAns:"DIR. K"}],projectImages:{imageI:"../src/assets/img/bayanni/bayanni7.jpg",imageII:"../src/assets/img/bayanni/bayanni1.jpg",projectName:{subName1:"TA TA TA REMIX",subName2:"MUSIC FILM"}},trendsBody:"While staying true to your personal style, being adaptable to current fashion trends ensures that your visuals remain relevant and engaging. it allows you to infuse freshness into your content while retaining the core elements of your brand identity.",trendsImages:["../src/assets/img/bayanni/bayanni7.jpg","../src/assets/img/bayanni/bayanni1.jpg","../src/assets/img/bayanni/bayanni4.jpg"]},{projectNo:"02",projectName:"Photo Shoot",projectFilm:"https://www.youtube.com/watch?v=DJ6y5BDVvmo&feature=youtu.be",ourVisionHead:"BRAND REINFORCEMENT AND VISION ALIGNMENT",ourVisionBody:`Fashion serves as a powerful tool for reinforcing brand identity. The consistent use of a specific style or signature fashion elements in visuals helps in creating a strong and recognizable brand image. This, in turn, contributes to audience recall and loyalty. The fashion and style has to align with the artistic vision for the music. Whether it's conveying a specific emotion, storytelling, or creating a particular atmosphere, the wardrobe choices play a vital role in translating vision into a tangible and immersive experience.
		  `,ourVisionImages:["../src/assets/img/bayanni/bayanni19.jpg","../src/assets/img/bayanni/bayanni18.jpg","../src/assets/img/bayanni/bayanni19.jpg","../src/assets/img/bayanni/bayanni8.jpg","../src/assets/img/bayanni/bayanni8.jpg"],ourVisionStatement:"We integrate cohesive fashion and style that directly integrates seamlessly into the personal style and vision for the music videos and content, reinforcing brand identity through visuals.",credits:[{creditSubhead:"Styling & Costume Designs",creditAns:"HeadBorn Studios"},{creditSubhead:"Photography",creditAns:"Chuchu Ojekwe"},{creditSubhead:"Directed by",creditAns:"Chuchu Ojekwe"}],projectImages:{imageI:"../src/assets/img/bayanni/bay5.jpg",imageII:"../src/assets/img/bayanni/bay.jpg",projectName:{subName1:"PHOTO SHOOT",subName2:"PHOTOSHOOT"}},trendsBody:"We integrate cohesive fashion and style that directly integrates seamlessly into the personal style and vision for the music videos and content, reinforcing brand identity through visuals.",trendsImages:["../src/assets/img/bayanni/bayanni5.jpg","../src/assets/img/bayanni/bayanni18.jpg","../src/assets/img/bayanni/bayanni5.jpg"]},{projectNo:"03",projectName:"MAVIN AT 10",projectFilm:"https://www.youtube.com/embed/DJ6y5BDVvmo?si=EKzkfBhlBt2H4nrs",ourVisionHead:"COSTUME DESIGN AND STYLE DIRECTION FOR BAYANNI JOHNNY DRILLE & MAGIXX",ourVisionBody:`Develop a stage look that enhances performance, leaving a lasting impression on fans and industry professionals. We leverage fashion to shape artists' unique identities, fuelling fan devotion and inspiring subcultures.
		  `,ourVisionImages:["https://res.cloudinary.com/dkcbvgmcr/image/upload/c_scale,w_auto,q_auto,f_auto/v1714340588/images/ma1f1itesapenbmzdevq.jpg","https://res.cloudinary.com/dkcbvgmcr/image/upload/v1714340600/c_scale,w_auto,q_auto,f_auto/images/knpdwb8rysprlgyyvvw9.jpg","https://res.cloudinary.com/dkcbvgmcr/image/upload/v1714340588/c_scale,w_auto,q_auto,f_auto/images/ma1f1itesapenbmzdevq.jpg","../src/assets/img/bayanni/bayanni8.jpg"],ourVisionStatement:"We integrate cohesive fashion and style that directly integrates seamlessly into the personal style and vision for the music videos and content, reinforcing brand identity through visuals.",credits:[{creditSubhead:"Styling & Costume Designs",creditAns:"HeadBorn Studios"}],projectImages:{imageI:"../src/assets/img/bayanni/bayanni11.jpg",imageII:"../src/assets/img/bayanni/bayanni15.jpg",projectName:{subName1:"MAVIN AT 10",subName2:"PHOTOSHOOT"}},trendsBody:"While staying true to your personal style, being adaptable to current fashion trends ensures that your visuals remain relevant and engaging. it allows you to infuse freshness into your content while retaining the core elements of your brand identity.",trendsImages:["../src/assets/img/bayanni/bayanni7.jpg","../src/assets/img/bayanni/bayanni1.jpg","../src/assets/img/bayanni/bayanni4.jpg"]}],slider2Images:["../src/assets/img/bayanni/bayanni2.jpg","../src/assets/img/bayanni/bayanni3.jpg","../src/assets/img/bayanni/bayanni4.jpg","../src/assets/img/bayanni/bayanni9.jpg"]},{id:3,name:"Mr Eazi",sliderAttr:{imageI:"../src/assets/img/mrEazi/eazi3.jpg",imageII:"../src/assets/img/mrEazi/eazi2.jpg",imageIII:"../src/assets/img/mrEazi/eazi1.jpg",arrow:"../src/assets/img/arrow2.png",logo:"../src/assets/img/logo.png"},nameEmoji:"../src/assets/img/mrEazi/eazi9.jpg",lastImg:"../src/assets/img/mrEazi/eazi1.jpg",ProjectNo:["Project 01","Project 02"],Projects:[{projectNo:"01",projectName:"PERSONAL BABY",projectFilm:"https://res.cloudinary.com/dkcbvgmcr/video/upload/q_auto,f_auto,vc_auto,w_auto/v1710670734/Videos/personalBaby.mp4",ourVisionHead:"STYLE DIRECTION AND COSTUME DESIGN FOR MR EAZI",ourVisionBody:`Develop a stage look that enhances performance, leaving a lasting impression on fans and industry professionals. We leverage fashion to shape artists' unique identities, fuelling fan devotion and inspiring subcultures.
		  `,ourVisionImages:["../src/assets/img/mrEazi/eazi2.jpg","../src/assets/img/mrEazi/eazi7.jpg","../src/assets/img/mrEazi/eazi6.jpg","../src/assets/img/mrEazi/eazi5.jpg"],ourVisionStatement:"We integrate cohesive fashion and style that directly integrates seamlessly into the personal style and vision for the music videos and content, reinforcing brand identity through visuals.",credits:[{creditSubhead:"Styling & Costume Designs",creditAns:"HeadBorn Studios & Pat Ada Eze"},{creditSubhead:"Directed by",creditAns:"Ademola Falomo"},{creditSubhead:"Producer",creditAns:"Deniyi Mayowa"}],projectImages:{imageI:"../src/assets/img/mrEazi/eazi4.jpg",imageII:"../src/assets/img/mrEazi/eazi3.jpg",projectName:{subName1:"PERSONAL BABY",subName2:"MUSIC FILM"}},trendsBody:"We integrate cohesive fashion and style that directly integrates seamlessly into the personal style and vision for the music videos and content, reinforcing brand identity through visuals.",trendsImages:["../src/assets/img/Johnny/john1.jpg","../src/assets/img/Johnny/john2.jpg","../src/assets/img/Johnny/john2.jpg"]}],slider2Images:["../src/assets/img/bayanni/bayanni2.jpg","../src/assets/img/bayanni/bayanni3.jpg","../src/assets/img/bayanni/bayanni4.jpg","../src/assets/img/bayanni/bayanni9.jpg"]},{id:4,name:"Remy",sliderAttr:{imageI:"../src/assets/img/remy/remy.jpg",imageII:"../src/assets/img/remy/remy1.jpg",imageIII:"../src/assets/img/remy/remy2.jpg",arrow:"../src/assets/img/arrow2.png",logo:"../src/assets/img/logo.png"},nameEmoji:"../src/assets/img/remy/remy4.jpg",lastImg:"../src/assets/img/remy/remy4.jpg",ProjectNo:["Project 01","Project 02"],Projects:[{projectNo:"01",projectName:"Birdie",projectFilm:"https://www.youtube.com/watch?v=DJ6y5BDVvmo&feature=youtu.be",ourVisionHead:"STYLE DIRECTION AND COSTUME DESIGN FOR REMY",ourVisionBody:`Develop a stage look that enhances performance, leaving a lasting impression on fans and industry professionals. We leverage fashion to shape artists' unique identities, fuelling fan devotion and inspiring subcultures.
		  `,ourVisionImages:["../src/assets/img/remy/remy7.jpg","../src/assets/img/remy/remy6.jpg","../src/assets/img/remy/remy7.jpg","../src/assets/img/remy/remy.jpg"],ourVisionStatement:"We integrate cohesive fashion and style that directly integrates seamlessly into the personal style and vision for the music videos and content, reinforcing brand identity through visuals.",credits:[{creditSubhead:"Styling & Costume Designs",creditAns:"HeadBorn Studios"},{creditSubhead:"Photography",creditAns:"Ruby Okoro"}],projectImages:{imageI:"../src/assets/img/remy/remy2.jpg",imageII:"../src/assets/img/remy/remy1.jpg",projectName:{subName1:"Birdie",subName2:"MUSIC FILM"}},trendsBody:`We integrate cohesive fashion and style that directly integrates seamlessly into the personal style and vision for the music videos and content, reinforcing brand identity through visuals.
  (N)`,trendsImages:["../src/assets/img/Johnny/john1.jpg","../src/assets/img/Johnny/john2.jpg","../src/assets/img/Johnny/john2.jpg"]}],slider2Images:["../src/assets/img/bayanni/bayanni2.jpg","../src/assets/img/bayanni/bayanni3.jpg","../src/assets/img/bayanni/bayanni4.jpg","../src/assets/img/bayanni/bayanni9.jpg"]},{id:5,name:"Pretty-boydo",sliderAttr:{imageI:"../src/assets/img/prettyboydo/prettyboydo.jpg",imageII:"../src/assets/img/prettyboydo/prettyboydo1.jpg",imageIII:"../src/assets/img/prettyboydo/prettyboydo2.jpg",arrow:"../src/assets/img/arrow2.png",logo:"../src/assets/img/logo.png"},nameEmoji:"../src/assets/img/prettyboydo/pb17.jpg",lastImg:"../src/assets/img/prettyboydo/pb5.jpg",ProjectNo:["Project 01","Project 02"],Projects:[{projectNo:"01",projectName:"TA TA TA REMIX",projectFilm:"https://player.cloudinary.com/embed/?cloud_name=dkcbvgmcr&public_id=videos/wys&quality=auto&format=auto&video_codec=auto",ourVisionHead:"STYLE DIRECTION AND COSTUME DESIGN FOR PRETTYBOYDO",ourVisionBody:`Develop a stage look that enhances performance, leaving a lasting impression on fans and industry professionals. We leverage fashion to shape artists' unique identities, fuelling fan devotion and inspiring subcultures.
		  `,ourVisionImages:["../src/assets/img/prettyboydo/prettyboydo.jpg","../src/assets/img/prettyboydo/prettyboydo1.jpg","../src/assets/img/prettyboydo/prettyboydo.jpg","../src/assets/img/prettyboydo/pb5.jpg"],ourVisionStatement:"We integrate cohesive fashion and style that directly integrates seamlessly into the personal style and vision for the music videos and content, reinforcing brand identity through visuals.",credits:[{creditSubhead:"Styling & Costume Designs",creditAns:"HeadBorn Studios"},{creditSubhead:"Photography",creditAns:"Thompson Ekong"},{creditSubhead:"Directed by",creditAns:"Thompson Ekong & Seyi(ua.x)"}],projectImages:{imageI:"../src/assets/img/prettyboydo/pb1.jpg",imageII:"../src/assets/img/prettyboydo/prettyboydo2.jpg",projectName:{subName1:"WETIN YOU SMOKE",subName2:"ViSUALIZER"}},trendsBody:"We integrate cohesive fashion and style that directly integrates seamlessly into the personal style and vision for the music videos and content, reinforcing brand identity through visuals.",trendsImages:["../src/assets/img/prettyboydo/prettyboydo.jpg","../src/assets/img/prettyboydo/prettyboydo1.jpg","../src/assets/img/prettyboydo/prettyboydo.jpg"]},{projectNo:"02",projectName:"Photo Shoot",projectFilm:"https://www.youtube.com/watch?v=DJ6y5BDVvmo&feature=youtu.be",ourVisionHead:"BRAND REINFORCEMENT AND VISION ALIGNMENT",ourVisionBody:`Fashion serves as a powerful tool for reinforcing brand identity. The consistent use of a specific style or signature fashion elements in visuals helps in creating a strong and recognizable brand image. This, in turn, contributes to audience recall and loyalty. The fashion and style has to align with the artistic vision for the music. Whether it's conveying a specific emotion, storytelling, or creating a particular atmosphere, the wardrobe choices play a vital role in translating vision into a tangible and immersive experience.
		  `,ourVisionImages:["../src/assets/img/prettyboydo/pb13.jpg","../src/assets/img/prettyboydo/pb10.jpg","../src/assets/img/prettyboydo/pb13.jpg","../src/assets/img/prettyboydo/pb14.jpg","../src/assets/img/prettyboydo/pb4.jpg"],ourVisionStatement:"We integrate cohesive fashion and style that directly integrates seamlessly into the personal style and vision for the music videos and content, reinforcing brand identity through visuals.",credits:[{creditSubhead:"Styling & Costume Designs",creditAns:"HeadBorn Studios"},{creditSubhead:"Photography",creditAns:"Thompson Ekong"},{creditSubhead:"Style Direction",creditAns:"Prettyboydo & Tokyo James"},{creditSubhead:"Directed by",creditAns:"Thompson Ekong & Seyi(ua.x)"}],projectImages:{imageI:"../src/assets/img/prettyboydo/pb9.jpg",imageII:"../src/assets/img/prettyboydo/pb11.jpg",projectName:{subName1:"LOVE IS WAR",subName2:"ALBUM"}},trendsBody:"We integrate cohesive fashion and style that directly integrates seamlessly into the personal style and vision for the music videos and content, reinforcing brand identity through visuals.",trendsImages:["../src/assets/img/Johnny/john1.jpg","../src/assets/img/Johnny/john2.jpg","../src/assets/img/Johnny/john2.jpg"]}],slider2Images:["../src/assets/img/bayanni/bayanni2.jpg","../src/assets/img/bayanni/bayanni3.jpg","../src/assets/img/bayanni/bayanni4.jpg","../src/assets/img/bayanni/bayanni9.jpg"]},{id:6,name:"Toni Dada",sliderAttr:{imageI:"../src/assets/img/toniDada/toni1.jpg",imageII:"../src/assets/img/toniDada/toni2.jpg",imageIII:"../src/assets/img/toniDada/toni3.jpg",arrow:"../src/assets/img/arrow2.png",logo:"../src/assets/img/logo.png"},nameEmoji:"../src/assets/img/toniDada/toni9.jpg",lastImg:"../src/assets/img/toniDada/toni6.jpg",ProjectNo:["Project 01","Project 02"],Projects:[{projectNo:"01",projectName:"TA TA TA REMIX",projectFilm:"https://www.youtube.com/watch?v=DJ6y5BDVvmo&feature=youtu.be",ourVisionHead:"STYLE DIRECTION AND COSTUME DESIGN FOR BAYANNI",ourVisionBody:`Develop a stage look that enhances performance, leaving a lasting impression on fans and industry professionals. We leverage fashion to shape artists' unique identities, fuelling fan devotion and inspiring subcultures.
		  `,ourVisionImages:["../src/assets/img/toniDada/toni4.jpg","../src/assets/img/toniDada/toni5.jpg","../src/assets/img/toniDada/toni4.jpg","../src/assets/img/toniDada/toni7.jpg"],ourVisionStatement:"We integrate cohesive fashion and style that directly integrates seamlessly into the personal style and vision for the music videos and content, reinforcing brand identity through visuals.",credits:[{creditSubhead:"Styling & Costume Designs",creditAns:"HeadBorn Studios"},{creditSubhead:"Photography",creditAns:"Ruby Okoro"}],projectImages:{imageI:"../src/assets/img/toniDada/toni1.jpg",imageII:"../src/assets/img/toniDada/toni3.jpg",projectName:{subName1:"Photo shoot",subName2:"Photoshoot"}},trendsBody:"We integrate cohesive fashion and style that directly integrates seamlessly into the personal style and vision for the music videos and content, reinforcing brand identity through visuals.",trendsImages:["../src/assets/img/toniDada/john1.jpg","../src/assets/img/toniDada/john2.jpg","../src/assets/img/toniDada/john2.jpg"]}],slider2Images:["../src/assets/img/bayanni/bayanni2.jpg","../src/assets/img/bayanni/bayanni3.jpg","../src/assets/img/bayanni/bayanni4.jpg","../src/assets/img/bayanni/bayanni9.jpg"]}],d=()=>{const o=c.map((e,n)=>{var t,s,i,a,r;return`
			  <a href="./projects.html?id=${n}" key="${n}" class="swiper-slide relative block" >
			  <div class="swiper mySwiper2 swiper-inner" >
				  <div class="swiper-wrapper brightness-[70%] " >
					<div class="swiper-slide">
					  <img src="${(t=e==null?void 0:e.sliderAttr)==null?void 0:t.imageI}"  alt=”left-down arrow”>
					</div>
	  
					<div class="swiper-slide">
					  <img src="${(s=e==null?void 0:e.sliderAttr)==null?void 0:s.imageII}"  alt=”left-down arrow”>
					</div>
	  
					<div class="swiper-slide">
					  <img src="${(i=e==null?void 0:e.sliderAttr)==null?void 0:i.imageIII}"  alt=”left-down arrow”>
					</div>
				  </div>
				  <div class="swiper-pagination"></div>
			  </div>
	  
			  <div id="details"  class="absolute w-full h-full top-[2vw] md:top-[1.5vw] left-0 flex justify-end pr-[1.5vw] md:pr-[1vw] z-20">
				  <div class="h-[6vw] w-[6vw] sm:h-[4vw] sm:w-[4vw] md:h-[2.5vw] md:w-[2.5vw]">
					  <img src="${(a=e==null?void 0:e.sliderAttr)==null?void 0:a.logo}" class="h-full w-full object-contain" alt=”brand”>
				  </div>
			  </div>
	  
			  <div class="absolute h-full w-full top-0 left-0 flex items-end z-10" >
				  <div class="projNameAndArr flex justify-between items-center w-full px-[2.1vw] lg:px-[1.3vw] pb-[2vw]">
					  <div class="name-proj ">
						  <h1 class="nameProj1">${e==null?void 0:e.name}</h1>
						  <h1 class="nameProj2 uppercase">Projects</h1>
					  </div>
	  
					  <div class="projArr h-[3vw] w-[3vw] md:h-[1.7vw] md:w-[1.7vw]">
						  <img src="${(r=e==null?void 0:e.sliderAttr)==null?void 0:r.arrow}" class="h-full w-full object-contain" alt=”left-down arrow”>
					  </div>
				  </div>								
			  </div>
		  </a>
			  
			  `});document.querySelector(".swiper-wrapper").innerHTML=o.join("")};d();g();