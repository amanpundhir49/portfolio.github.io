function loa()
{
    document.getElementById('des-h1').style.marginLeft='0px';
    document.getElementById('des-h2').style.marginLeft='0px';
    // document.getElementById('hero-section').style.backgroundPositionY='13vh';
    document.getElementById('navs').style.top='0px';
    document.getElementById('navbar').style.top='0px';
}

document.getElementById('switch').addEventListener("click",f1)
    function f1(){
        var mains= document.getElementById('main').style.backgroundColor;
        document.getElementById('main').classList.toggle('color-slide');
        document.getElementById('slide').classList.toggle('slide-on');
        document.getElementById('main').classList.toggle('bg-color');
        document.getElementById('navbar').classList.toggle('bg-color');
        document.getElementById('span-h1').classList.toggle('color-slide1');
        document.getElementById('span-h1').classList.toggle('color-switch');
        document.getElementById('hr-hr').classList.toggle('hr-switch');
        document.getElementById('hr-hr2').classList.toggle('hr-switch');
        document.getElementById('hr-hr3').classList.toggle('hr-switch');
        document.getElementById('hr-hr4').classList.toggle('hr-switch');
        document.getElementById('hr-hr1').classList.toggle('hr-switch');
        document.getElementById('project-box1').classList.toggle('project-box1-slide');
        document.getElementById('navbar').classList.toggle('project-box1-slide');
        document.getElementById('big-box1').classList.toggle('project-box1-slide');
        
        // if(mains !== 'rgb(141, 209, 245)'){
        //     localStorage.setItem('maincolor', 'changed');
        // }
        // else{
        //     localStorage.removeItem('maincolor');
        // } 
        // if(localStorage.getItem('maincolor') !== 'changed'){
        //     document.getElementById('main').style.backgroundColor = "rgb(6, 4, 18)";
        // }
        // else if(localStorage.getItem('maincolor') === 'changed'){
        //     document.getElementById('main').style.backgroundColor = "rgb(141, 209, 245)";
        
        // }
    }
    function menu(){
        document.getElementById('menu-nav').classList.toggle('menu-nav-slide');
    }
    function back(){
        document.getElementById('menu-nav').classList.toggle('menu-nav-slide');
    }
    document.getElementById('btn').addEventListener("click", f2)
    function f2(){
        document.getElementById('btn-div').style.display="none";
        document.getElementById('btn-div1').style.display="block";
        const a =document.querySelectorAll('.hidden');
        for(i=0;i<a.length;i++)
        {
            a[i].style.display="block";
            a[i].style.display="flex";
        }
    }
    document.getElementById('btn1').addEventListener("click", f3)
    function f3(){
        document.getElementById('btn-div').style.display="block";
        document.getElementById('btn-div1').style.display="none";
        const a =document.querySelectorAll('.hidden');
        for(i=0;i<a.length;i++)
        {
            a[i].style.display="none";
            a[i].style.display="flex";
        }
    }
    document.getElementById('btn-project').addEventListener("click", f4)
    function f4(){
        // alert('ggg');
        document.getElementById('project-box1').style.height='auto';
        document.getElementById('btn-project').style.display='none';
        document.getElementById('btn1-project').style.display='block';
    }
    document.getElementById('btn1-project').addEventListener("click", f5)
    function f5(){
        // alert('ggg');
        document.getElementById('project-box1').style.height='205vh';
        document.getElementById('btn-project').style.display='block';
        document.getElementById('btn1-project').style.display='none';
        
    }

    window.addEventListener("scroll", scrolltop);
    function scrolltop() {
        const scrollButton = document.getElementById("scroll");
        if (window.scrollY >= 200) { 
            scrollButton.style.display = "block";
        } 
        else {
            scrollButton.style.display = "none";
        }
    }

    /*var prevscroll=0;

    window.onscroll = function(){
        var currentscroll= window.pageYOffset;

        if(prevscroll < currentscroll)
        {
            document.getElementById('navbar').style.top="-100px";
        }
        else{
            document.getElementById('navbar').style.top="0px";
        }
        prevscroll=currentscroll;
    }*/

    /*const aboutmyself= document.querySelector('.about-myself');

    document.querySelector('.about-link').addEventListener("click", () => {
        aboutmyself.scrollIntoView({ behavior: "smooth" });
    }); */

    function f12(){
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }