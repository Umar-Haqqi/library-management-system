import { Book } from "../models/book.js";

// Function to handle errors
const handleError = (res, err) => {
  console.error(err.message);
  res.status(500).json({ response: err.message });
};

// Register a new book
const registerBook = async (req, res) => {
  try {
    const { title, ISBN, publishYear, coverPrice } = req.body;
    if (!title || !ISBN || !publishYear || !coverPrice)
      throw new Error("Please provide all necessary book information.");
    await Book.create({ title, ISBN, publishYear, coverPrice });
    res.json({});
  } catch (err) {
    handleError(res, err);
  }
};

// Get all books
const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    handleError(res, err);
  }
};

// Get a specific book by ID
const getBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) throw new Error("Book not found.");
    res.json(book);
  } catch (err) {
    handleError(res, err);
  }
};

// Check in a book
const checkin = async (req, res) => {
  try {
    const bookId = req.params.id;
    if (!bookId) throw new Error("Please provide the book id.");
    const book = await Book.findById(bookId);
    if (!book) throw new Error("Book not found.");
    if (book.available) throw new Error("Book is already available");
    book.available = true;
    book.checkoutBy = {};
    await book.save();
    res.json({});
  } catch (err) {
    handleError(res, err);
  }
};

// Check out a book
const checkout = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, phoneNumber, nationalId, checkOutDate, returnDate } = req.body;
    if (!name || !id) throw new Error("Please provide valid data.");
    
    const book = await Book.findById(id);
    if (!book) throw new Error("Book not found.");
    if (!book.available) throw new Error("Book isn't available.");
    book.available = false;
    book.checkoutBy = { name, phoneNumber, nationalId, checkOutDate, returnDate };
    await book.save();
    res.json({});
  } catch (err) {
    handleError(res, err);
  }
};

export { registerBook, getBooks, getBook, checkout, checkin };

