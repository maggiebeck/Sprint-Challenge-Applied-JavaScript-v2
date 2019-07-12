// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const createheader = document.querySelector(".header-container");

.then(function (response){
    console.log(response)
    const header = Header()
    createheader.appendChild(header)
  });

function Header() {

    
        const header= document.createElement("div");
        const headerdate = document.createElement("span");
        const header1 = document.createElement("h1");
        const headertemp = document.createElement("span");
        
        
        header.classList.add("header");
        headerdate.classList.add("date");
        header1.classList.add("h1");
        headertemp.classList.add("temp");

        headerdate.textContent = "SMARCH 28, 2019";
        header1.textContent = "Lambda Times";
        headertemp.textContent = "98°";

        return header; 


}
