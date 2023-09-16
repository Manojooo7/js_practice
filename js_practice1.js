// const rect = document.querySelector('.center')

// rect.addEventListener("mousemove", function(details){
//     // console.log('hey');
//     let rectangleLocation = rect.getBoundingClientRect();

// let insideRectVal = details.clientX - rectangleLocation.left;

// const rectWH = rectangleLocation.width/2;
// const rectW = rectangleLocation.width;

// if(insideRectVal<rectWH){
//     // console.log('left')
//     let redColor = gsap.utils.mapRange(
//         0,rectWH,255,0,insideRectVal
//         )
//     gsap.to(rect,{
//         backgroundColor: `rgb(${redColor}, 0, 0)`,
//         ease: Power4,
//     })
// }else{
//     // console.log('right')
//     let bluecolor = gsap.utils.mapRange(
//         rectWH,rectW,0,255,insideRectVal
//         )
//     gsap.to(rect,{
//         backgroundColor: `rgb(0, 0, ${bluecolor})`,
//         ease: Power4,
//     })
    
// }
// });

// rect.addEventListener("mouseleave", function(){
//     gsap.to(rect,{
//         backgroundColor: `white`
//     })
// })




// JS PRACTICE 2



window.addEventListener("mousemove", function(details){
    const rect = document.querySelector('.rect');
    // console.log(details.clientX);
    let xval = gsap.utils.mapRange(
        0,
        window.innerWidth, 
        100+rect.getBoundingClientRect().width/2, 
        window.innerWidth - (100+rect.getBoundingClientRect().width/2),
        details.clientX);

//

        gsap.to(rect, {
        left: xval,
        ease: Power3
    });
});