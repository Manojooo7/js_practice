const rect = document.querySelector('.center')

rect.addEventListener("mousemove", function(details){
    // console.log('hey');
    let rectangleLocation = rect.getBoundingClientRect();

let insideRectVal = details.clientX - rectangleLocation.left;

const rectWH = rectangleLocation.width/2;
const rectW = rectangleLocation.width;

if(insideRectVal<rectWH){
    // console.log('left')
    let redColor = gsap.utils.mapRange(
        0,rectWH,255,0,insideRectVal
        )
    gsap.to(rect,{
        backgroundColor: `rgb(${redColor}, 0, 0)`,
        ease: Power4,
    })
}else{
    // console.log('right')
    let bluecolor = gsap.utils.mapRange(
        rectWH,rectW,0,255,insideRectVal
        )
    gsap.to(rect,{
        backgroundColor: `rgb(0, 0, ${bluecolor})`,
        ease: Power4,
    })
    
}
});

rect.addEventListener("mouseleave", function(){
    gsap.to(rect,{
        backgroundColor: `white`
    })
})

