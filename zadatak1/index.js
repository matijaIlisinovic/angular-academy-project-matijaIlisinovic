let reviews = [
    {
        text: "great show, love it",
        rating: 5
    },
    {
        text: "ok show, I like it",
        rating: 3
    },
    {
        text: "bad show, hate it",
        rating: 1
    }
]

const rListElement = document.querySelector("#review-list");
const avgElement = document.querySelector("#average");
const rFormElement = document.querySelector("#review-form");

function renderReview(review) {
    const listItem = document.createElement("li");
    const ratingli = document.createElement("h5");
  
    listItem.textContent = review.text;
    ratingli.textContent = review.rating;
  
    listItem.appendChild(ratingli);
    rListElement.appendChild(listItem);
}

function renderAverage(){
    avgElement.textContent = getAvg();
}

renderAverage();

for (let i = 0; i < reviews.length; i++) {
    renderReview(reviews[i]);
}

rFormElement.addEventListener("submit", function (event){
    event.preventDefault();

    const formData = new FormData(rFormElement);

    const rText = formData.get("review");
    const rRating = formData.get("rating");

    const review = {
        text: rText,
        rating: Number.parseInt(rRating)
    }
    

    reviews.push(review);
    renderReview(review);

    renderAverage();

    formData.set("review", "");
    formData.set("rating", "");
    rFormElement.reset();
})

function getAvg(){
    let sum=0;
    for(let i=0; i<reviews.length; i++){
        sum+=reviews[i].rating;
    }
    if((sum / reviews.length)%1 === 0) return (sum / reviews.length)
    return (sum / reviews.length).toFixed(2);
}