let rectDiv = document.querySelector("#center");

rectDiv.addEventListener("mousemove", function(det) {
    let rectPos = rectDiv.getBoundingClientRect();
    let insidePos = det.clientX - rectPos.left;
    let redColor = gsap.utils.mapRange(0, rectPos.width/2, 255, 0, insidePos);
    let blueColor = gsap.utils.mapRange(rectPos.width/2, rectPos.width, 0, 255, insidePos);

    if (insidePos < rectPos.width/2) {
        gsap.to(rectDiv, {
            backgroundColor: `rgb(${redColor}, 0, 0)`,
            ease: Power4,
        });
    } else {
        gsap.to(rectDiv, {
            backgroundColor: `rgb(0, 0, ${blueColor})`,
            ease: Power4,
        });
    }
});

