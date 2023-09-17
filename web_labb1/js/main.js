const dataContainer = document.getElementById('dataContainer');

fetch('database/books.json')
  .then((res) => res.json())
  .then((data) => {
    // Display the first 8 books (or less if there are fewer than 8)
    const booksToDisplay = data.slice(0, 8);

    // Iterate over the books to display data in the HTML structure
    booksToDisplay.forEach((book, index) => {
      const cardDiv = document.createElement('div');
      cardDiv.classList.add('card');

      // Populate the card with book data
      cardDiv.innerHTML = `
        <img src="${book.imageUrl !== undefined ? book.imageUrl : "/images/book-undefined.jpg" }" alt="Book Image" class="card-image">
        <div class="card-title">
          <h2>${book.title}</h2>
          <p>${book.author}</p>
        </div>
        <div class="card-footer">
          <p>$${book.price}</p>
        </div>
      `;

      dataContainer.appendChild(cardDiv);
    });
  })
  .catch((error) => console.error('Error fetching data:', error));
