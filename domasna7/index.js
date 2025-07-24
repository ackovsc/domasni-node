const express = require("express");
const { read, write } = require("./read-write"); 

const app = express();


app.use(express.json());


async function checkBookStatus(req, res, next) {
  try {
    const bookId = Number(req.params.id); 
    const books = await read("books.json");
    const book = books.find((b) => b.id === bookId);

    
    if (!book) {
      return res.status(404).send("Книга со тоа ид не е пронајдена.");
    }

    req.book = book;

    
    if (Number(book.publicationDate) < 2000 && book.pageCount > 300) {
    
      console.log(
        `Книгата "${book.title}" е постара од 2000-та и има повеќе од 300 страници.`
      );
    }

    next(); 
  } catch (err) {
    res.status(500).send("Настана грешка во серверот.");
  }
}



app.get("/books", async (req, res) => {
  try {
    const books = await read("books.json");
    res.status(200).json(books);
  } catch (err) {
    res.status(500).send("Грешка при читање на книгите.");
  }
});


app.get("/books/:id", checkBookStatus, (req, res) => {
  res.status(200).json(req.book);
});


app.post("/books", async (req, res) => {
  try {
    const newBookData = req.body;

    
    if (!newBookData.title || !newBookData.author) {
      return res.status(400).send("Полињата 'title' и 'author' се задолжителни.");
    }

    const books = await read("books.json");
    const newId = books.length > 0 ? Math.max(...books.map((b) => b.id)) + 1 : 0;
    newBookData.id = newId;

    books.push(newBookData);
    await write("books.json", books);

    res.status(201).json(newBookData); 
  } catch (err) {
    res.status(500).send("Грешка при зачувување на книгата.");
  }
});


app.put("/books/:id", async (req, res) => {
  try {
    const bookId = Number(req.params.id);
    const updateData = req.body;

    const books = await read("books.json");
    const bookIndex = books.findIndex((b) => b.id === bookId);

    if (bookIndex === -1) {
      return res.status(404).send("Книга со тоа ид не е пронајдена.");
    }

    books[bookIndex] = { ...books[bookIndex], ...updateData };
    await write("books.json", books);

    res.status(200).json(books[bookIndex]);
  } catch (err) {
    res.status(500).send("Грешка при менување на книгата.");
  }
});


app.delete("/books/:id", async (req, res) => {
  try {
    const bookId = Number(req.params.id);
    const books = await read("books.json");

    const newBooksArray = books.filter((b) => b.id !== bookId);

    if (books.length === newBooksArray.length) {
      return res.status(404).send("Книга со тоа ид не е пронајдена за бришење.");
    }

    await write("books.json", newBooksArray);
    res.status(204).send(); е
  } catch (err) {
    res.status(500).send("Грешка при бришење на книгата.");
  }
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});