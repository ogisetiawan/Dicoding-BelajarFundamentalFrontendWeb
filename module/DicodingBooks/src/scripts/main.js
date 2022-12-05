function main() {
  const baseUrl = "https://books-api.dicoding.dev";

  //~ XHRAjax
  const getBook = () => {
    // tuliskan kode di sini!
    //? membuat instance dari XMLHttpRequest
    const xhr = new XMLHttpRequest();

    //? menetapkan callback jika response sukses dan error
    xhr.onload = function () {
      const responseJson = JSON.parse(this.responseText);

      if (responseJson.error) {
        showResponseMessage(responseJson.message);
      } else {
        renderAllBooks(responseJson.books); //? render to content
      }
    };

    xhr.onerror = function () {
      showResponseMessage();
    };

    //? Membuat GET request dan menetapkan target URL
    xhr.open("GET", `${baseUrl}/list`);

    //? Mengirimkan request
    xhr.send();
  };

  //~ Async/await
  async function getBook1() {
    try {
      const response = await fetch(`${baseUrl}/list`);
      const responseJson = await response.json();
      renderAllBooks(responseJson.books);
    } catch (error) {
      console.log(error);
    }
  }

  //~ Fetch
  const getBook2 = (arg) => {
    fetch(`${baseUrl}/list`) //? call request
    /// promise
      .then((response) => {
        return response.json(); //? change object to JSON
      })
      .then((responseJson) => { //? var json is bentuk object to json dari promise sblmnya
        if (responseJson.error) {
          showResponseMessage(responseJson.message);
        } else {
          renderAllBooks(responseJson.books);
        }
      })
      .catch((error) => {
        showResponseMessage(error);
      });
  };

  //~ xhrPost
  const insertBook = (book) => {
    // Membuat instance dari XMLHttpRequest
    const xhr = new XMLHttpRequest();

    //menetapkan callback jika response sukses dan error
    xhr.onload = function () {
      const responseJson = JSON.parse(this.responseText);
      showResponseMessage(responseJson.message);
      getBook();
    };

    xhr.onerror = function () {
      showResponseMessage();
    };

    // Membuat POST request dan menetapkan target URL
    xhr.open("POST", `${baseUrl}/add`);

    // Mementapkan properti Content-Type dan X-Auth-Token pada Header request
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("X-Auth-Token", "12345");

    // Mengirimkan request dan menyisipkan JSON.stringify(book) pada body
    xhr.send(JSON.stringify(book));
  };

  //~ fetchPost
  const insertBook2 = (book) => {
    fetch(`${baseUrl}/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": "12345",
      },
      body: JSON.stringify(book),
    })
    .then((response) => {
      return response.json(); //? change object to JSON
    })
    .then((responseJson) => {
      showResponseMessage(responseJson.message);
      getBook2();
    })
    .catch((error) => {
      showResponseMessage(error);
    });
  };

  //~ async/Await Post
  const insertBook3 = async (book) => {
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Auth-Token': '12345'
        },
        body: JSON.stringify(book)
      };
   
      const response = await fetch(`${baseUrl}/add`, options);
      const responseJson = await response.json();
      showResponseMessage(responseJson.message);
      getBook();
    } catch (error) {
      showResponseMessage(error);
    }
  };
  
  const updateBook = (book) => {
    fetch(`${baseUrl}/edit/${book.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': '12345'
      },
      body: JSON.stringify(book)
    }).then(response => {
      return response.json();
    }).then(responseJson => {
      showResponseMessage(responseJson.message);
      getBook();
    }).catch(error => {
      showResponseMessage(error);
    });
  };

  const removeBook = (bookId) => {
    fetch(`${baseUrl}/delete/${bookId}`, {
      method: 'DELETE',
      headers: {
        'X-Auth-Token': '12345'
      }
    }).then(response => {
      return response.json();
    }).then(responseJson => {
      showResponseMessage(responseJson.message);
      getBook();
    }).catch(error => {
      showResponseMessage(error);
    });
  };

  const renderAllBooks = (books) => {
    const listBookElement = document.querySelector("#listBook");
    listBookElement.innerHTML = "";

    books.forEach((book) => {
      listBookElement.innerHTML += `
        <div class="col-lg-4 col-md-6 col-sm-12" style="margin-top: 12px;">
          <div class="card">
            <div class="card-body">
              <h5>(${book.id}) ${book.title}</h5>
              <p>${book.author}</p>
              <button type="button" class="btn btn-danger button-delete" id="${book.id}">Hapus</button>
            </div>
          </div>
        </div>
      `;
    });

    const buttons = document.querySelectorAll(".button-delete");
    buttons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const bookId = event.target.id;

        removeBook(bookId);
      });
    });
  };

  const showResponseMessage = (message = "Check your internet connection") => {
    alert(message);
  };

  document.addEventListener("DOMContentLoaded", () => {
    const inputBookId = document.querySelector("#inputBookId");
    const inputBookTitle = document.querySelector("#inputBookTitle");
    const inputBookAuthor = document.querySelector("#inputBookAuthor");
    const buttonSave = document.querySelector("#buttonSave");
    const buttonUpdate = document.querySelector("#buttonUpdate");

    buttonSave.addEventListener("click", function () {
      const book = {
        id: Number.parseInt(inputBookId.value),
        title: inputBookTitle.value,
        author: inputBookAuthor.value,
      };

      // insertBook(book);
      insertBook2(book);
    });

    buttonUpdate.addEventListener("click", function () {
      const book = {
        id: Number.parseInt(inputBookId.value),
        title: inputBookTitle.value,
        author: inputBookAuthor.value,
      };

      updateBook(book);
    });
    // getBook();
    getBook2();
  });
}

export default main;
