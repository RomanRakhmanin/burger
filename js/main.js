const tl = gsap.timeline() 

tl.fromTo('.welcome__subtitle',{
    x: -400,
    opacity: 0
}, {
    x: 0,
    opacity: 1,
    duraction: 2
}, 
1
).fromTo('.welcome__title',{
    y: 50,
    opacity: 0,
}, {
    y: 0,
    opacity: 1,
    duraction: 1
},
0.4
).fromTo('.welcome__text',
{
    y: 50,
    opacity: 0,
}, {
    y: 0,
    opacity: 1,
    duraction: 1
},
0.6
).fromTo('.btn', 
{
    y: -50,
    opacity: 0,
}, {
    y: 0,
    opacity: 1,
    duraction: 1
},
1.2
).fromTo('.header_logo', 
{
    y: -50,
    opacity: 0,
    scale: 0,
}, {
    y: 0,
    opacity: 1,
    scale: 1,
    duraction: 1
},
1.2
)
.fromTo('.header__link', 
{
    y: -50,
    opacity: 0,
}, {
    y: 0,
    opacity: 1,
    duraction: 1,
    stagger: 0.15
},
1.2
)

gsap.to('.header', {
    scrollTrigger: {
        trigger: '.welcome',
        start: 'top top',
        scrub: true,
    },
    scale: 0,
})
gsap.to('.welcome__content', {
    scrollTrigger: {
        trigger: '.welcome',
        start: 'top top',
        scrub: true,
    },
    yPercent: 20,
    scale: 0.5,
    opacity: 0,
})

gsap.from('.food-list--cart', {
    scrollTrigger: {
        trigger: '.food-list',
        start: '-30%, center',
        end: '+=300',
        scrub: 1,
        duraction: 1,
    },
    scale: 0,
    TransformOrigin: 'left center',
    ease: 'none',
    stagger: 1,
})

gsap.from('.order__img', {
    scrollTrigger: {
        trigger: '.order',
        scrub: true,
        start: '-30% center',
        end: '40% center',
        duraction: 1,
    },
    x: -500,
    opacity: 0,
})
gsap.from('.order__text', {
    scrollTrigger: {
        trigger: '.order',
        scrub: true,
        start: '-30% center',
        end: '50% center',
        duraction: 1,

    },
    x: 500,
    opacity: 0,
})
gsap.from('.product__item', {
    scrollTrigger: {
        trigger: '.product',
        scrub: true,
        start: '-30% center',
        end: '50% center',
        duraction: 1,

    },
    scale: 0,
    opacity: 0,
})
gsap.to('.footer__content', {
    scrollTrigger: {
        trigger: '.footer',
        scrub: true,
        start: '-50% top',
        duraction: 1,
    },
    y: -300,
})