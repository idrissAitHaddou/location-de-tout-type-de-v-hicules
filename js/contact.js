
// **--------------------- WHEN WINDOW LOADING ---------------------------

window.onload=function(){
    if(window.innerWidth<=780){
        this.document.querySelector("header").style.backgroundColor="#40A92F";
    }
}


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




// **--------------------- FUNCTION TO HIDE MODEL ---------------------------

function clearModel(vr)
{
    if(vr==0)
    {
        document.querySelector(".model").style.display="none";
    }
    else if(vr==1)
    {
        if(document.querySelector("#nom").value==""
           || document.querySelector("#email").value==""
           || document.querySelector("#sujet").value==""
           || document.querySelector("#message").value==""){
            document.querySelector("#title").textContent="les informations sont vide !!!!";
            document.querySelector("#title").style.fontSize="17px";
            document.querySelector(".model").style.display="block";
            document.querySelector(".Modelnom").parentNode.style.color="red";
            document.querySelector(".Modelemail").parentNode.style.color="red";
            document.querySelector(".Modelsujet").parentNode.style.color="red";
            document.querySelector(".Modelmessage").parentNode.style.color="red";
        } else{
            document.querySelector(".model").style.display="block";
            document.querySelector(".Modelnom").textContent=document.querySelector("#nom").value;
            document.querySelector(".Modelemail").textContent=document.querySelector("#email").value;
            document.querySelector(".Modelsujet").textContent=document.querySelector("#sujet").value;
            document.querySelector(".Modelmessage").textContent=document.querySelector("#message").value;

            document.querySelector("#title").style.fontSize="17px";
            document.querySelector("#title").textContent="Thank you for contact with us";

            document.querySelector(".Modelnom").parentNode.style.color="black";
            document.querySelector(".Modelemail").parentNode.style.color="black";
            document.querySelector(".Modelsujet").parentNode.style.color="black";
            document.querySelector(".Modelmessage").parentNode.style.color="black";
        }
        

    }
}
