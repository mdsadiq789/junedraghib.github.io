function myFunction(contentId) 
   {      
      var arr = document.getElementsByClassName("sem");
      for (var i=0; i<arr.length ;i++) 
      {
          arr[i].style.display="none";    
      }
      var x = document.getElementById(contentId);
      x.style.display = "block";
   }
         


