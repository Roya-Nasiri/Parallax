gsap.registerPlugin(ScrollTrigger) 

window.addEventListener("pageshow", () => {
  window.scrollTo(0, 0);
  ScrollTrigger.clearScrollMemory("manual");

  requestAnimationFrame(() => {
    window.scrollTo(0, 0);
    ScrollTrigger.refresh();
  });
});


const progressBar = document.getElementById('progress')
const progressContainer = document.querySelector("#progress").parentElement;
const main = document.querySelector("main")
const enText = document.getElementById('enText')
const pText = document.getElementById('pText')
const navSocial = document.querySelectorAll('.nav, .social')
const word = document.querySelectorAll('.word')

const mainImg = document.getElementsByClassName('backmain')
const bacBlack = document.getElementsByClassName('bac')
const firstBack = document.getElementsByClassName('firstBack')
const firstpWord = document.getElementsByClassName('firstpWord')
const secP = document.getElementsByClassName('secP')
const lux = document.getElementsByClassName('lux')
const logoText = document.getElementsByClassName('iconText')
const logo = document.getElementsByClassName('logo')
const textSec = document.getElementsByClassName('textsec')
const buttons = document.querySelectorAll("button");


//////

enText.addEventListener('click', () => {

    const tl = gsap.timeline()

   
    tl.to(firstpWord, {
        opacity:0,
    })
    tl.to(enText, {
        opacity:0,
    })
 

    tl.to(pText, {
        opacity:0,
    })
    
    tl.to(logoText, {
        opacity:1,
        duration:1,
    })
    tl.fromTo(mainImg, {
        opacity:0,
        z:-60,
        filter:'blur(.9)',
        
        transformPerspective: 800,
       
    },{
        opacity:1,
         z:0,
         filter:'blur(0)',
        duration:1.3,
        transformPerspective:800,
      
        
    })

    
    tl.to(navSocial, {
        opacity:1,
        stagger: 0.08
    }) 

     tl.fromTo(word, {
         opacity:0,
         scale:1,
     },
        {
        opacity:1,
        scale:3,
        stagger: 0.2
    })
     tl.to(lux, {
         opacity:1,
     }, "-=.4")
////////scrolll//////
        tl.add(() => {
  gsap.fromTo(word,
    {
      scale: 3,
      opacity: 1,
    },
    {
      scale: 9,
      opacity: 0,
       stagger: 0.2,
      scrollTrigger: {
        trigger: "main",
        start: "top top",
        end: "+=450",
        scrub: true,
        
        invalidateOnRefresh: true,
      },
    }
  );

 gsap.fromTo(
  logoText,
  { y: 0, opacity: 1 },
  {
    y: -10,
    opacity: 0,
    scrollTrigger: {
      trigger: ".backmain",
      start: "top top",
      end: "+=550",
      scrub: true,
      invalidateOnRefresh: true,
    },
  }
);

  gsap.fromTo(lux,
    {
      opacity: 1,
    },
    {
      opacity: 0,
      scrollTrigger: {
        trigger: ".lux",
        start: "top-=100 center",
        end: "+=450",
        scrub: true,
        invalidateOnRefresh: true,
      },
    }
  );
  //////
  gsap.fromTo(mainImg,
    {
       scale:1,
       opacity: 1,
    
    },
    {
     scale:3,
     opacity: 0,
      scrollTrigger: {
        trigger: ".backmain",
        start: "top top",
        end: "+=1550",
        scrub: true,
        invalidateOnRefresh: true,
      },
    }
  );
  

/////bacblack

  gsap.fromTo(bacBlack,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      
      scrollTrigger: {
        trigger: ".backmain",
        start: "bottom-=250 top",
        end: "+=400",
        scrub: true,
        invalidateOnRefresh: true,
      },
    }
  );
  


gsap.fromTo(textSec,
    {
      opacity: 0,
       scale:.8,
    },
    {
       scale:1.6,
      opacity: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".backmain",
        start: "center+=300 top",
        end: "+=650",
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    gsap.set(".secScroll", { display: "none" });

gsap.fromTo('.imgbac',
  {
    opacity: 0,
    scale: .1,
  },
  {
    scale: 1,
    opacity: 1,
    scrollTrigger: {
      trigger: '.imgbac',
      start: 'center+=1200 top',
      end: '+=800',
      scrub: true,
      invalidateOnRefresh: true,

      onEnter: () => {
        gsap.set(".secScroll", {
          display: "block",
          opacity: 1,
        });
      },

      onLeaveBack: () => {
        gsap.set(".secScroll", {
          display: "none",
        });
      },
    }
  }
);


////movetext////
gsap.fromTo(
  ".movetext",
  { xPercent: 0 },
  {
    xPercent: -50,
    duration: 20,
    ease: "none",
    repeat: -1,
    repeatRefresh: true
  }
);



//////////sec scrol

gsap.to(".bac", {
  yPercent: -100,

  scrollTrigger: {
    trigger: ".bac",
    start: "bottom+=2100 top",
     end: "+=100",
       scrub: 3,

    onEnter: () => {
      gsap.set("main", {
        pointerEvents: "none",
      });
    },

    onLeaveBack: () => {
      gsap.set("main", {
        pointerEvents: "auto",
      });
    },
  },
});


//////////secimg 
gsap.set(".secimg", {
  opacity: 1,
  scale: 1,
  zIndex: 1,
});

gsap.fromTo(
  ".secimg2",
  {

    scale: 0,
  },
  {
    scale: 1,
    scrollTrigger: {
      trigger: ".bac",
      start: "bottom+=2600 top",
      end: "+=500",
      scrub: 2,
      invalidateOnRefresh: true,
    },
  }
);
gsap.to(".secright", {
  y: -800,
  opacity: 0,
  scrollTrigger: {
    trigger: ".bac",
    start: "bottom+=2600 top",
    end: "+=450",
    scrub: 2,
    invalidateOnRefresh: true,
  },
});

gsap.fromTo(
  ".secright2",
  {
    y: 800,
    opacity:0,
  },
  {
     y:-10,
    opacity:1,
    scrollTrigger: {
      trigger: ".bac",
      start: "bottom+=2600 top",
      end: "+=500",
      scrub: 3,
      invalidateOnRefresh: true,
    },
  }
);

gsap.to(".secright2", {
  y: -800,
  opacity: 0,
  scrollTrigger: {
    trigger: ".bac",
    start: "bottom+=3300 top",
    end: "+=550",
    scrub: 3,
    invalidateOnRefresh: true,
  },
});

gsap.fromTo(
  ".secright3",
  {

    y: 800,
    opacity:0,
  },
  {
     y:-10,
    opacity:1,
    scrollTrigger: {
      trigger: ".bac",
      start: "bottom+=3300 top",
      end: "+=500",
      scrub: 5,
      invalidateOnRefresh: true,
    },
  }
);
///hover btn 
buttons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    gsap.to(button, {
      scale: 1.04,
      y: -5,
     backgroundColor: "rgba(15, 15, 15, 0.85)",
      duration: 0.3,
      ease: "power2.out",
    });
  });

  button.addEventListener("mouseleave", () => {
    gsap.to(button, {
      scale: 1,
      y: 0,
      backgroundColor: "rgba(0, 0, 0, 0.3)",
      duration: 0.3,
      ease: "power2.out",
    });
  });
});
/////

gsap.fromTo(
  ".secimg3",
  {
  
    scale: 0,
  },
  {
    scale: 1,
   
   
    scrollTrigger: {
      trigger: ".bac",
      start: "bottom+=3300 top",
      end: "+=500",
      scrub: 2,
      invalidateOnRefresh: true,
    },
  }
);



////third///
gsap.to(".secScroll", {
  yPercent: -100,
  scrollTrigger: {
    trigger: ".bac",
    start: "bottom+=4400 top",
    end: "+=700",
    scrub: 2,
    invalidateOnRefresh: true,
  },
});

gsap.set(".thirdScroll", {
  display: "none",
  yPercent: 100,
  opacity: 1,
});

gsap.fromTo(
  ".thirdScroll",
  { yPercent: 100 },
  {
    yPercent: 0,
    scrollTrigger: {
      trigger: ".bac",
      start: "bottom+=4000 top",
      end: "+=800",
      scrub: 3,
      invalidateOnRefresh: true,
      onEnter: () => gsap.set(".thirdScroll", { display: "block" }),
      
    },
  }
);
////thirdimg
gsap.set(".img", {
  opacity: 1,
  scale: 1,
  zIndex: 3,
});

gsap.fromTo(
  ".img2",
   {
    y:1300,
     scale: 1.4,
     
  },
  {
    y: 0,
    scale: 1,
    
    scrollTrigger: {
      trigger: ".bac",
      start: "bottom+=5000 top",
      end: "+=500",
      scrub: 2,
      invalidateOnRefresh: true,
    },
  }
);

gsap.fromTo(
  ".left",
  {

    y: -10,
    opacity:1,
  },
  {
     y:-600,
    opacity:0,
   
   
    scrollTrigger: {
      trigger: ".bac",
      start: "bottom+=5000 top",
      end: "+=800",
      scrub: 1,
      invalidateOnRefresh: true,
    },
  }
);
gsap.fromTo(
  ".left2",
  {
    y: 600,
    opacity:0,
  },
  {
     y:-10,
    opacity:1,
 
    scrollTrigger: {
      trigger: ".bac",
      start: "bottom+=5000 top",
      end: "+=900",
      scrub: 1,
      invalidateOnRefresh: true,
    },
  }
);

gsap.to(".left2", {
  y: -600,
  opacity: 0,
 
  scrollTrigger: {
    trigger: ".bac",
    start: "bottom+=5800 top",
    end: "+=900",
    scrub: 1,
    invalidateOnRefresh: true,
  },
});

gsap.fromTo(
  ".left3",
  {

    y: 600,
    opacity:0,
  },
  {
     y:-10,
    opacity:1,
  
    scrollTrigger: {
      trigger: ".bac",
      start: "bottom+=5750 top",
      end: "+=900",
      scrub: 1,
      invalidateOnRefresh: true,
    },
  }
);

gsap.to(".left3", {
  y: 600,
  opacity: 0,
  
  scrollTrigger: {
    trigger: ".bac",
    start: "bottom+=6500 top",
    end: "+=900",
    scrub: 1,
    invalidateOnRefresh: true,
  },
});

gsap.fromTo(
  ".left4",
  {

    y: 600,
    opacity:0,
  },
  {
     y:-10,
    opacity:1,
   
    scrollTrigger: {
      trigger: ".bac",
      start: "bottom+=6450 top",
      end: "+=800",
      scrub: 1,
      invalidateOnRefresh: true,
    },
  }
);


gsap.fromTo(
  ".img3",
   {
     scale: 1.4,
     y:1300,
  },
  {
    y: 0,
    scale: 1,

   
    scrollTrigger: {
      trigger: ".bac",
      start: "bottom+=5700 top",
      end: "+=500",
      scrub: 2,
      invalidateOnRefresh: true,
    },
  }
);
gsap.fromTo(
  ".img4",
  {
     y:1300,
     scale: 1.4,
  },
  {
    y: 0,
    scale: 1,
    scrollTrigger: {
      trigger: ".bac",
      start: "bottom+=6400 top",
      end: "+=500",
      scrub: 2,
      invalidateOnRefresh: true,
    },
  }
);


////beforforth
tl.set(".beforforth", { opacity: 0, display: 'none' })

gsap.fromTo(
  ".thirdScroll",
  { yPercent: 0,
   },
  {
    yPercent: -100,
    scrollTrigger: {
     trigger: ".thirdScroll",
      start: "bottom+=7400 top",
      end: "+=900",
       scrub: 3,
      invalidateOnRefresh: true,
      onEnter: () => tl.set(".beforforth", { opacity: 1, display: "block" }, "+=.01"),
      onLeaveBack: () => tl.set(".beforforth", { opacity: 0, display: 'none' },"+=1"),
    },
  }
);
gsap.fromTo(
  ".befortext",
  { yPercent: -70,
   },
  {
    yPercent: 20,
    scrollTrigger: {
     trigger: ".thirdScroll",
      start: "bottom+=7500 top",
      end: "+=700",
       scrub: 3,
      invalidateOnRefresh: true,
    },
  }
);
gsap.to(
  ".befortext",
  
  {
    opacity:0,
    scrollTrigger: {
     trigger: ".thirdScroll",
      start: "bottom+=8500 top",
      end: "+=400",
       scrub: 3,
      invalidateOnRefresh: true,
    },
  }
);

////.... forth///

gsap.fromTo(
  ".fourthScroll",
  { yPercent: 100,
   opacity: 0,
   },
  {
    yPercent: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".thirdScroll",
      start: "bottom+=8400 top",
      end: "+=700",
      scrub: 2,
      invalidateOnRefresh: true,
      onEnter: () => gsap.set(".fourthScroll", { display: "block" }),
      
      onLeaveBack: () => gsap.set(".fourthScroll", { display: "none" }),
     
    },
  }
);
gsap.fromTo(
  ".imgup2",
  { yPercent: 1,
  
   },
  {
    yPercent: -300,
    scrollTrigger: {
      trigger: ".thirdScroll",
      start: "bottom+=9300 top",
      end: "+=3500",
      scrub: 5,
      invalidateOnRefresh: true,
  
    },
  }
);
gsap.fromTo(
  ".imgup1",
  { yPercent: 1,
  
   },
  {
    yPercent: -300,
    
    scrollTrigger: {
      trigger: ".thirdScroll",
      start: "bottom+=9100 top",
      end: "+=3400",
      scrub: 5,
      invalidateOnRefresh: true,

    },
  }
);

gsap.fromTo(
  ".uptext",
  {   opacity: 1, 
  
   },
  {
      opacity: 0,
    
    scrollTrigger: {
      trigger: ".thirdScroll",
      start: "bottom+=9400 top",
      end: "+=300",
      scrub: 3,
      invalidateOnRefresh: true,
   
    },
  }
);
gsap.fromTo(
  ".uptext2",
  {   opacity: 0, 
    scale: .8,
    y: 10,
  
   },
  {
    y: 40,
      opacity: 1,
      scale: 1.3,
    
    scrollTrigger: {
      trigger: ".thirdScroll",
      start: "bottom+=9900 top",
      end: "+=400",
      scrub: 2,
      invalidateOnRefresh: true,
    },
  }
);


//// end ///

gsap.fromTo(
  ".end",
  { yPercent: 100,
    opacity: .8,
   },
  {
    yPercent: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".thirdScroll",
      start: "bottom+=10400 top",
      end: "+=900",
      scrub: 3,
      invalidateOnRefresh: true,
      onEnter: () => gsap.set(".end", { display: "block" }),
      onLeaveBack: () => gsap.set(".end", { display: "none" }),
    },
  }
);

gsap.fromTo(
  ".endtext",
  {   
    scale: .5,
   },
  {
      scale: 1.3,
    scrollTrigger: {
      trigger: ".thirdScroll",
      start: "bottom+=10600 top",
      end: "+=500",
      scrub: 3,
      invalidateOnRefresh: true,
    },
  }
);
////////
// last
gsap.fromTo(
  ".last",
  { yPercent: 100,
    opacity: 0,
    scale:1.2,
   },
  {
    yPercent: 0,
    opacity: 1,
    scale:1,
    scrollTrigger: {
      trigger: ".thirdScroll",
      start: "bottom+=11700 top",
      end: "+=900",
      scrub: 3,
      invalidateOnRefresh: true,
    
    },
  }
);


gsap.to(".lasttxt span", {
  color: "white",
  stagger: 0.1,
  scrollTrigger: {
  trigger: ".thirdScroll",
      start: "bottom+=12900 top",
      end: "+=1900",
    scrub: true,
  }
});

  gsap.fromTo(logoText,
    {
      
      opacity: 0,
      y:-10,
      
    },
    {
      y:0,
      duration:.4,
      opacity: 1,
      immediateRender: false,
      scrollTrigger: {
      trigger: ".thirdScroll",
      start: "bottom+=14800 top",
      end: "+=500",
        scrub: true,
        invalidateOnRefresh: true,
      },
    }
  );
/////mypic
gsap.fromTo(
  ".mypic",
  {
   xPercent: 100,
   opacity: 0,

   },
  {
   xPercent: 40,
    opacity: 1,
    scrollTrigger: {
      trigger: ".thirdScroll",
      start: "bottom+=15300 top",
      end: "+=500",
      scrub: 2,
      invalidateOnRefresh: true,
   
    },
  }
);

////////////
    document.body.style.overflow = "auto"
  ScrollTrigger.refresh();
});
})





const tll = gsap.timeline()

tll.fromTo(progressContainer,{
   opacity:0,
   
},{
    opacity:1
}, "+=.4")

.to(progressBar, {
     width:"100%",
    duration: .5,
}, "-=.5")

.to(progressContainer, {
  opacity: 0,
  duration: 0.5,
})
.fromTo(firstpWord, {
   opacity: 0,
   
},{
   opacity: 1,
    stagger: 0.2,
    duration:1.5,
}, "-=.9")

.fromTo(enText, {
    y:-30,
    opacity:0,

},{
    y:-80,
    opacity:1,
    duration:1,
    
},"-=.4")


.fromTo(pText, {
    y:-10,
    opacity:0,
},{
    y:-30,
    opacity:1,
    duration:1,
})





