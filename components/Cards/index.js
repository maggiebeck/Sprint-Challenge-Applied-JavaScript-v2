// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardcontainer = document.querySelector(".cards-container");

axios.get("https://lambda-times-backend.herokuapp.com/articles")
  .then(res => {
    const articles = res.data.articles; // Object
    const articleTopic = Object.keys(articles); // Returns an array of all of the object keys

    articleTopic.map(topic => {
      articles[`${topic}`].map(article => {
        cardcontainer.append(createarticlecards(article));
      });
    });
  })
  .catch(err => {
    console.log("error message 2 ", err);
  });

function createarticlecards(data) {
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const authordiv = document.createElement("div");
  const imgdiv = document.createElement("div");
  const img = document.createElement("img");
  const author = document.createElement("span");

  card.classList.add("card");
  headline.classList.add("headline");
  authordiv.classList.add("author");
  imgdiv.classList.add("img-container");

  headline.textContent = data.headline;
  img.src = data.authorPhoto;
  author.textContent = data.authorName;

  card.append(headline);
  card.append(authordiv);
  authordiv.append(imgdiv);
  authordiv.append(author);
  imgdiv.append(img);

  return card;
}
