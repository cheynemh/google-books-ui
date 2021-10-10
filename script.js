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

// button, event listener
const button = document.querySelector("#searchButton");
button.addEventListener("click", async (event) => {
    // get search keyword
    const input = document.querySelector("#searchInput");
    // empty error code
    const keyword = input.value;
    if (!keyword) {
        alert("everybody's looking for something.");
    }

    // get search results
    const books = await searchButton(keyword);
    console.log(books);

    // li elem for search result array
    const listItems = books.map((book) => {
        const info = document.createElement("li");
        const bookImg = document.createElement("img");
        bookImg.src = `${book.volumeInfo.imageLinks.smallThumbnail}`;
        const bookTitle = `${book.volumeInfo.title} by `;
        const bookAuthor = `${book.volumeInfo.authors}`;
        const textTitle = document.createTextNode(bookTitle);
        const textAuthor = document.createTextNode(bookAuthor);
        // const bookDesc = `${book.volumeInfo.description}`;
        // const textDesc = document.createTextNode(bookDesc);

        info.appendChild(bookImg);
        info.appendChild(textTitle);
        info.appendChild(textAuthor);
        // info.appendChild(textDesc);
        return info;

        // const desc = document.createElement("li");
        // const bookDesc = `${book.volumeInfo.description}`;
        // const textDesc = document.createTextNode(bookDesc);
        // desc.appendChild(textDesc);
        // return desc;
    });

    // append search results
    const grid = document.querySelector(".container__grid--books");
    const append = (parent) => (child) => parent.appendChild(child);
    // listItems.forEach(append(grid));
    // refresh results instead of append
    if (grid.innerHTML) {
        grid.innerHTML = "";
        listItems.forEach(append(grid));
    } else {
        listItems.forEach(append(grid));
    }
});

// document.querySelector("#searchInput").addEventListener

// document.querySelector("#txtSearch").addEventListener("keypress", function (e) {
//     if (13 == e.keyCode) {
//         e.preventDefault();
//         document.querySelector("#searchButton").click();
//     }
// });

// event listener for search upon enter
document.querySelector("#searchInput").addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        document.querySelector("#searchButton").click();
    }
});

// const button = document.querySelector("#getResults");
// button.addEventListener("click", async (event) => {
//     const input = document.querySelector("#bookSearch");
// });
