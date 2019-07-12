// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


const tabspage = document.querySelector(".tabs");

axios
    .get("https://lambda-times-backend.heroukuapp.com/topics");
    .then(reply => {
        console.log("testing:", reply);
        console.log("tabbed", response.data);

        const tabs = reply.data;
        const newtabs = querySelector('.tabs');
        tabspage.appendChild(newtabs);
})
   
.catch(error => {
        console.log ("error message","error");
    });

function Tabs (Topics){
    const tabs = document.createElement('div');
    const tab = document.createElement('div');
    const topics = document.createElement('div');
    const titles = document.createElement('span')

    tabs.appendChild(tab);
    tab.appendChild(topics, titles);

    return tabs
}
