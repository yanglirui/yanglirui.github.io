{
    const top=document.querySelectorAll(".brand-left-top li");
    const bottom=document.querySelectorAll(".brand-cover li");
    //const masks=document.querySelectorAll(".brand-cover #mask")
        bottom.forEach(function (ele,index) {
            ele.onmouseover=function () {
                top.forEach(function (ele,index) {
                    ele.style.display="none";
                    ele.style.display="none";
                    //masks[index].style.opacity=0;
                })
                top[index].style.zIndex=2;
                top[index].style.display="block";
                //masks[index].style.opacity=1;
            }
        })

}


{
    const nav=document.querySelectorAll(".slider-nav li");
    const img=document.querySelectorAll(".to-banner-img li");
    const banner=document.querySelector(".banner-pirce");
    console.log(nav);
    console.log(img);
    console.log(banner);
    var colorarr=["#E8E8E8","#E8E8E8","#FBD858","#E8E8E8","#FBD858"]
    nav.forEach(function (ele,index) {
        ele.onmouseover=function () {
          for(var i=0; i<nav.length; i++){
              nav[i].classList.remove("active");
              img[i].classList.remove("active");
          }
            nav[index].classList.add("active");
            img[index].classList.add("active");
            banner.style.background=colorarr[index];
            num=index;
        }
    })

    let num=0;
    let move=function () {
        num++;
        if(num==nav.length){
           num=0;
        }
        

        for(var i=0; i<nav.length; i++){
            nav[i].classList.remove("active");
            img[i].classList.remove("active");
        }
        nav[num].classList.add("active");
        img[num].classList.add("active");
        banner.style.background=colorarr[num];
    }
    let str=setInterval(move,3000);
    banner.onmousemove=function () {
        clearInterval(str);
    }
    banner.onmouseout=function () {
        str=setInterval(move,3000);
    }
}


{
    {
        const live=document.querySelector(".live-text div")
        let num=0;
        setInterval(function () {
            num++;
            if(num==2){
                num=0
            }
            live.style.marginTop=-num*30+"px";
        },3000)
    }
}


{
    const banner=document.querySelector(".brand-img");
    const right=document.querySelector(".brand-cover-right")
    const left=document.querySelector(".brand-cover-left")

    console.log(banner);
    console.log(right);
    console.log(left);
    
    let num=0;
    num++;
    let move=function () {
        banner.style.marginLeft="-488px";
    }
    let moves=function () {
        banner.style.marginLeft=0;
    }
    
    right.onclick=function () {
        move();
        //right.style.display="none"
        //left.style.display="block"
    }
    left.onclick=function () {
        moves();
        //right.style.display="block"
        //right.style.display="none"
    }
}

