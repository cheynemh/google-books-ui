// https://www.googleapis.com/books/v1/volumes?q=search+terms
// bookSearch = #input
// getResults = #button

const GOOGLEBOOKS_URL = "https://www.googleapis.com/books/v1/volumes";

const searchButton = async (keyword) => {
    const response = await fetch(
        `${GOOGLEBOOKS_URL}?q=${keyword}&maxResults=9`
    );
    const data = await response.json();
    // console.log(data);
    return data.items;
};

// getResults();

// button, event listener, error code
const button = document.querySelector("#searchButton");
button.addEventListener("click", async (event) => {
    // get search keyword
    const input = document.querySelector("#searchInput");
    const keyword = input.value;
    if (!keyword) {
        alert("everybody's looking for something.");
    }

    // get search results
    const books = await searchButton(keyword);
    console.log(books);
    // li elem for search result array
    const listItems = books.map((book) => {
        const element = document.createElement("li");
        const bookImg = document.createElement("img");
        bookImg.src = `${book.volumeInfo.imageLinks.thumbnail}`;
        const bookText = `${book.volumeInfo.title} by ${book.volumeInfo.authors}`;
        const textNode = document.createTextNode(bookText);

        element.appendChild(bookImg);
        element.appendChild(textNode);
        return element;
    });

    // append search results
    const grid = document.querySelector(".container__grid--books");
    const append = (parent) => (child) => parent.appendChild(child);
    listItems.forEach(append(grid));
});

// const button = document.querySelector("#getResults");
// button.addEventListener("click", async (event) => {
//     const input = document.querySelector("#bookSearch");
// });
