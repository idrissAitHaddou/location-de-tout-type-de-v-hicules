
// **--------------------- WHEN WINDOW LOADING ---------------------------

window.onload=function(){
    if(window.innerWidth<=780){
        this.document.querySelector("header").style.backgroundColor="#40A92F";
    }
}


// **--------------------- WHEN WINDOW SCROLLING ---------------------------

window.addEventListener("scroll",function(){
    if(window.innerWidth>780)
    {
        if(window.scrollY>=100){
            this.document.querySelector("header").style.backgroundColor="#40A92F";
            this.document.querySelector(".btnSignin").style.border="1px solid white";
        }
        else if(window.scrollY<100){
            this.document.querySelector("header").style.background="none";
            this.document.querySelector(".btnSignin").style.border="1px solid #40A92F";
        }
    }
   
})


// **--------------------- TOP SCROLL ON BODY ---------------------------

function tuUp()
{
    window.scrollTo(0,0);
}



    var cheack=0;
    //** function to show menu
    function showMenu()
    {
    document.querySelector("nav").style.display="block"; 
    cheack=1;
    }
    //** function to hide menu
    function hideMenu()
    {
    document.querySelector("nav").style.display="none"; 
    cheack=0;
    }
    //** function to hide or show menu
    function Menu()
    {
        
        if(cheack==0){
            showMenu();
    }
        else{
            hideMenu();
        }
    }
