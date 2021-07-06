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

const rFormElement = document.querySelector("#review-form");

rFormElement.addEventListener("submit", function (event){
    event.preventDefault();

    const formData = new FormData(rFormElement);
    const rText = formData.get("review");
    console.log(rText);
})