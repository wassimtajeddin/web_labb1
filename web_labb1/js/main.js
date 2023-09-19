const dataContainer = document.getElementById('dataContainer');

fetch('database/books.json')
  .then((res) => res.json())
  .then((data) => {
 
    const booksToDisplay = data


    booksToDisplay.forEach((book, index) => {
      const cardDiv = document.createElement('div');
      cardDiv.classList.add('card');

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