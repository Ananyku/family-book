var images = [
  "TheFamilyBook.jpg.crdownload",
  "father.jpg",
  "mother.jpg",
  "son.png"];
  
  var i = 0;
  function nextslide(){
    
    if(i == 4)
      {
        i=0;
      }
  document.getElementById("album").src = images[i];
  i++;
  }