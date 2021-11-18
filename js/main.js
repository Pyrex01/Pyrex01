let aboutMecontainer = document.getElementsByClassName("content-about-me");
aboutMecontainer[0].addEventListener("click",function(){
    let navElement = document.getElementsByName("aboutMeElement");
    const hoverEvent = new Event('hover');
    navElement[0].dispatchEvent(hoverEvent);
}
)