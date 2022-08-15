$(document).ready(()=>{
  // search area
  let ainfo = $(".ainfo");
  Array.from(ainfo).forEach((element)=> {
    let h3 = element.getElementsByTagName("h3")[0].innerText;
    console.log(h3);
  });  
  
  // end search area
  // showing profile
  let activeProject = $(".trgproject");
  activeProject.click(()=>{
    let showProject = $(".main-project")
    showAndHide(showProject);
    activeClass(activeProject);
  })
  // showing profile
  let activeProfile = $(".trgprofile");
  activeProfile.click(()=>{
    let showProfile = $(".main-profile")
    showAndHide(showProfile);
    activeClass(activeProfile);
  })
  // showing services
  let activeServices = $(".trgservices")
  activeServices.click(()=>{
    let showServices = $(".main-services")
    showAndHide(showServices);
    activeClass(activeServices);
  })
  // showing profile
  // showing black wall + menu
  $("#menu").click(()=>{
    $(".blackw").fadeIn("slow");
  })
  // hiding black wall
  
  
  let x = window.matchMedia("(max-width: 700px)")
  mediaQ(x) // Call listener function at run time
  
  
  $("body").fadeOut("slow");
    $("body").fadeIn("slow");
    // slide show
  let slides = $('.hero-text');
  let num = 1;
  
  setInterval(() => {
    
      for(let y of slides){
        $(y).fadeOut('slow');
  
      };
       $(slides[num]).fadeIn('slow');
       if(num < slides.length-1){
        num++;
        }
        else{
            num = 0;
        }
        
    
  }, 5000);
  // show contact area
  let show = $(".main-contact");
  let activeContact = $(".trgcontact")
  activeContact.on("click",()=>{
    
    showAndHide(show);
    activeClass(activeContact);
  })
  // end contact area
  // info area
   let showInfo = $(".main-info");
  let activeInfo = $(".trginfo")
  activeInfo.on("click",()=>{
    
    showAndHide(showInfo);
    activeClass(activeInfo);
  })
  // end info area
});
// function
// function for show and hide
function showAndHide(show = ".main-contact"){
    let sections = $(".show-hide");
    for(let sec of sections){
      $(sec).fadeOut('slow');


    };
    $(show).fadeIn("slow");
};
// function for active
function activeClass(active = ".main-contact"){
  let sections = $("li");
  for(let sec of sections){
    $(sec).removeClass("active");


  };
  $(active).addClass("active");
};
// function for adding media query
function mediaQ(x) {
  if (x.matches) { // If media query matches
    $("li").click(() => {
      $(".blackw").fadeOut("slow");
    }); 
  } 
}


