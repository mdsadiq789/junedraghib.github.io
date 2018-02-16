function myFunction(contentId) 
   {      
      var x = document.getElementById(contentId);
      x.style.visibility = "hidden";
      if (x.style.visibility === "hidden") 
      {
        x.style.visibility = "visible";
      }  
}
