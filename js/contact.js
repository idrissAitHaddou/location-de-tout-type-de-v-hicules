

window.onload=function(){
    if(window.innerWidth<=780){
        this.document.querySelector("nav").style.display="none";
        this.document.querySelector("header").style.backgroundColor="#40A92F";
    }
}





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





function clearModel(vr)
{
    if(vr==0)
    {
        document.querySelector(".model").style.display="none";
    }
    else if(vr==1)
    {
        document.querySelector(".model").style.display="block";
        document.querySelector(".Modelnom").textContent=document.querySelector("#nom").value;
        document.querySelector(".Modelemail").textContent=document.querySelector("#email").value;
        document.querySelector(".Modelsujet").textContent=document.querySelector("#sujet").value;
        document.querySelector(".Modelmessage").textContent=document.querySelector("#message").value;

    }
}

