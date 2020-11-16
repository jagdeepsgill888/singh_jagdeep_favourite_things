import { fetchData } from "./modules/DataMiner.js";


(() => {
    

    

console.log('Loaded');

 let menuToggle = document.querySelector("#menuToggle"),
 burgerCon = document.querySelector("#mainNav"),
 lightBox = document.querySelector(".lightbox"),
    lbClose = lightBox.querySelector("span");
// console.log(Team);

// debugger;

//select our user elements and load the content
// let userSection = document.querySelector(".user-section").children;


function handleDataSet(data) {
    // let currentUser = userTemplate.cloneNode(true),
    //   currentUserText = currentUser.querySelector('.user').children;
    
    let userSection =document.querySelector(".user-section"),
    userTemplate = document.querySelector("#tv-template").content;

      debugger;
      for (let user in data) {

        

        let currentUser = userTemplate.cloneNode(true),
        currentUserText = currentUser.querySelector('.user').children;

        currentUserText[1].src = `images/${data[user].poster}`;
        currentUserText[2].textContent = data[user].title;
        currentUserText[3].textContent = data[user].genre;
        currentUserText[4].textContent = data[user].description;
             
             //add this new user to the view
             userSection.appendChild(currentUser);
      }
   

      console.log(data);
      // fetchData('./includes/index.php').then(data => showLightbox ()).catch(err => console.log(err));
 }

function retrieveProjectInfo(event) {
  //test for an id
  //check for an id, and if there isnt one, then dont try the fetch
  //because it'll break ( the PHP will choke)
  if (!event.target.id) { return }

  
  // fetchData(`./includes/index.php?id=${event.target.id}`).then(data => console.log(data)).catch(err => console.log(err));
  fetchData(`./includes/index.php?id=${event.target.id}`).then(data => showLightbox (data)).catch(err => console.log(err));
  
}

 function renderPortfolioThumbnails(thumbs) {
   
  let userSection =document.querySelector(".user-section"),
    userTemplate = document.querySelector("#tv-template").content;

      // debugger;
      for (let user in thumbs) {


        let currentUser = userTemplate.cloneNode(true),
        currentUserText = currentUser.querySelector('.user').children;

        currentUserText[1].src = `images/${thumbs[user].poster}`;
        currentUserText[1].id = thumbs[user].id;
        // currentUserText[0].textContent = data[user].title;
        // currentUserText[3].textContent = data[user].genre;
        // currentUserText[4].textContent = data[user].description;
             
            // add this new user to the view
             userSection.appendChild(currentUser);
 }
 userSection.addEventListener("click", retrieveProjectInfo);
}

 fetchData('./includes/index.php').then(data => renderPortfolioThumbnails(data)).catch(err => console.log(err));
 


//  fetchData("./includes/index.php").then(data => handleDataSet(data)).catch(err => { console.log(err); popErrorBox(err); });
// fetchData('./AnotherDataSet.json').then(data => handleDataSet(data)).catch(err => console.log(err));
 //handleDataSet(Team);


 function showLightbox (data){
  // added a timing event to allow the banner to animate beofre lightbox
  setTimeout(function(){lightBox.classList.add('show-lightbox');}, 800);
   
  let userSectionTwo =document.querySelector(".lightbox"),
  userTemplateTwo = document.querySelector("#tv-template2").content;

  //make a copy of our template here and then
  // populate the children (text element) with
  //the static data from the team object
    // debugger;
    for (let user in data) {

      

      let currentUser = userTemplateTwo.cloneNode(true),
      currentUserText = currentUser.querySelector('.user').children;

      currentUserText[1].src = `images/${data[user].poster}`;
      currentUserText[2].textContent = data[user].title;
      currentUserText[3].textContent = data[user].genre;
      currentUserText[4].textContent = data[user].description;
           
           //add this new user to the view
           userSectionTwo.appendChild(currentUser);
    }
 

    console.log(data);
    // fetchData('./includes/index.php').then(data => handleDataSet(data)).catch(err => console.log(err));
      }
   
 


      
  
          
 function hideLightbox() {
  //  var template = document.getElementById("profs-template2");
  //  template.parentNode.removeChild(template);

  // var template = document.getElementById("profs-template2").children;
  



  // lightBox.classList.remove('user');
  //  currentUserText = currentUser.querySelector('.user').children;

  //     currentUserText[1].src = "";
  //     currentUserText[2].textContent = "";
  //     currentUserText[3].textContent = "";
  //     currentUserText[4].textContent = "";

  // userTemplateTwo = document.querySelector("#profs-template2").content;
//   template[1].textContent.src = "";
//   template[2].textContent = "";
//   template[3].textContent = "";
//   template[4].textContent = "";

//   template.parentNode.removeChild(template);
//   lightBox.classList.remove('show-lightbox');

// }



//  removed the thumnail image as well but didn’t remove from lightbox
// function hideLightbox() {
//  let template = document.querySelector('.user').children;
//   template[1].src = "";
//   template[2].textContent = "";
//   template[3].textContent = "";
//   template[4].textContent = "";
//   lightBox.classList.remove('show-lightbox');
// }




// // Doesn’t work, error 
// Uncaught TypeError: Cannot create property 'src' on string ''
//     at HTMLSpanElement.hideLightbox (main.js:150)

//  function hideLightbox() {
// let template = document.querySelector('.user').children;
//   template[1].textContent.src = "";
//   template[2].textContent = "";
//   template[3].textContent = "";
//   template[4].textContent = "";
//   lightBox.classList.remove('show-lightbox');
// }



  lightBox.classList.remove('show-lightbox');
}

  
        


		
		function hamburgerMenu() {
			burgerCon.classList.toggle("slideToggle");
			menuToggle.classList.toggle("expanded");
		}


    menuToggle.addEventListener("click", hamburgerMenu);
    lbClose.addEventListener("click", hideLightbox);

})();