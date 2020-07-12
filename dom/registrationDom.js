const framzo = document.querySelector(".enterReg");
const regButton = document.querySelector(".addBtn");
const dropy = document.querySelector(".dropBox");
const theList = document.getElementById("tello");
const errorMessage = document.querySelector(".error");

/* #####| NOTE |#####

Dom is mostly used to handle your html functionality. This includes getting and displaying data.
Most of your processing should be done in your factory function. Factory functions allow you to 
bundle functionality together and can be called to evaluate things on the front end or to be linked 
together to do some processing in the banckground

*/


// if theres something it will put on local storage or return an array
var data = localStorage.getItem("reg") ? JSON.parse(localStorage.getItem("reg")): [];  

// # Iternary operator (<compare1 == compare2>) ? <what program should do if true> : <what program should do if false>
// # localStorage is data that can be stored on the web browser session. It's built in
// # Json.parse() converts a json string to a javascript object
// # Json.stringify() converts a javascript object to a json string



var lineDataHolder = data

var instance = numberReg(data); // send data to factory function #Note: best to use same parameter names when sending to function 


function addMe() {

  // add/update local storage with localstorage.setItem(<key>:<value>).
  // key would be the way you would access your data later on using localstorage.getItem(<key>)
  // value would be the array you would want to store. You need to store it as a data string so use JSON.stringify(<value>)
  // flow should be get user input => verify => process => store
  // html has some built in functionality to set input length but you can also create your own js to do those checks

  instance.storeArray();
  //alert(framzo.value);
  //if (framzo.value.length == 0 ) {
  //  return 

local();
  //}
  var li = document.createElement("li")
  
  var regNum = framzo.value;
  var townsValue = dropy.value
  var subString = regNum.substring(0,2);

  if (framzo.value === "") { 
    errorMessage.innerHTML= "please do include a registration number..."
    
  }
  

 else if (subString === townsValue) {
    li.innerHTML =regNum 
    li.classList.add("color");
    theList.appendChild(li);
  }
  else if (!framzo.length === 0 && framzo.value) {
   // li.innerHTML = ""
  }

   else {
    errorMessage.innerHTML = "please do select the correct town"

  }



  function local(){
    instance.story;
    //local storage store  , what it should stringify 
    localStorage.setItem("reg", JSON.stringify(lineDataHolder));
  }
  


 

};

regButton.addEventListener("click", addMe);


