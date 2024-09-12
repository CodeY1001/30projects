const bodyEle = document.querySelector("body");

bodyEle.addEventListener("mousemove",(event)=>{

    // console.log("mousemoved");
    const xPos = event.offsetX;       //we get the position of mouse on X coordinate
    const yPos = event.offsetY;       //we get the position of mouse on Y coordinate
    const spanEle = document.createElement("span");  //create a new span every time on mousemove
    spanEle.style.left = xPos + "px"; //Assign the differing positions to the newly created span so that every newly created span will get new position as the mouse coordinates changes
    spanEle.style.top = yPos + "px";       
    bodyEle.appendChild(spanEle);     //Lastly append it to the body.

    const size = Math.random()*100;
    spanEle.style.width=size+"px";
    spanEle.style.height=size+"px";

    //as we are getting the repeat after some time so to avoid it we will remove the spans after some time to do that we use setTimeout function.
    setTimeout(()=>{
        spanEle.remove() ;  

    },3000)        //here 3000 denotes the time i.e 3000 = 3seconds.             

    
})