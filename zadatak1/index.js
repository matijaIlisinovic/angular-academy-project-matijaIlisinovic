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

function renderReview(review,i) {
    const listItem = document.createElement("li");
    const ratingli = document.createElement("h5");
    const delButton = document.createElement("button");
  
    listItem.textContent = review.text;
    ratingli.textContent = review.rating;
    delButton.textContent = "delete review"

    delButton.name=i;
    
    delButton.addEventListener("click", function (event){
        console.log("click");

        let index = Number.parseInt(delButton.name);

        deleteListItem(listItem, index);

    })

    listItem.appendChild(delButton);
    listItem.appendChild(ratingli);
    
    rListElement.appendChild(listItem);
}

function deleteListItem(item, index){
    
    reviews.splice(index,1);

    item.remove();

    renderAverage();
    resetIndexes();
}

function resetIndexes(){
    let listLI = rListElement.getElementsByTagName("li");
    for(let i=0;i<listLI.length;i++){
        listLI[i].getElementsByTagName("button")[0].name = i;
    }
}

function renderAverage(){
    avgElement.textContent = getAvg();
}

renderAverage();

for (let i = 0; i < reviews.length; i++) {
    renderReview(reviews[i], i);
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
    
    renderReview(review, reviews.length);
    reviews.push(review);

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