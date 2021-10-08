# Google Books UI Project

1. Create a page that allows users to search for books
2. Page should include the following: 
    1. - Header section introducing the page 
    2. - Form containing a text input and a submit / search button 
    3. - A grid of books

3. When the submit button is clicked you need the request books from the Google books API using the input value as your query string
    1. - The books that you receive should be rendered in the books grid.
    2. - Each book in the grid should have an image, author, title and description
    3. - The grid should be responsive on different screen sizes
    4. - You should use async / await for your request code, NOT .then

# Styling (required):

- This application should look good, take some time to pick a palette and plan out your design. You can use tools like Figma or wireframe pro to plan what your application is going to look like.
- Styling must use BEM, and each block should have its own SCSS file
- Your palette should use variables

#  Application Design (required):

- You should separate DOM functions and non-DOM functions in different modules
- Write as many non-DOM functions as you can
- Functions should do 1 thing, and should be as pure and reusable as possible
- Always use iterators over loops
- Always parametrize and abstract large pieces of duplicate code.

# Bonus (optional, but highly recommended):
- Give feedback to the user when no book results can be found for the query.
- When a user clicks a book in the grid, a modal should appear with more book information, think about release, publish date, country, languages, etc.
