
function renderHeading(msg) {
    todoList.innerHTML = `
    <h1 class="heading-error">${msg}</h1>
    `;
  }



function renderBooks(){
    const tableBody = document.getElementById('books-list');
    if (book.length>0){        
        book.forEach(book => {
            tableBody.innerHTML+=`
            <tr>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.year}</td>
            <td>${book.genre}</td>
            </tr>`;             
        });
   } else{
       renderHeading('Knygų sąrašas tuščias')
   }

}
renderBooks();
