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

const rFormElement = document.querySelector("#review-form");

function renderReview(review) {
    const listItem = document.createElement("li");
    const ratingli = document.createElement("h5");
  
    listItem.textContent = review.text;
    ratingli.textContent = review.rating;
  
    listItem.appendChild(ratingli);
    rListElement.appendChild(listItem);
}

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
        rating: rRating
    }
    

    reviews.push(review);
    renderReview(review);
    
    formData.set("review", "");
    formData.set("rating", "");
})