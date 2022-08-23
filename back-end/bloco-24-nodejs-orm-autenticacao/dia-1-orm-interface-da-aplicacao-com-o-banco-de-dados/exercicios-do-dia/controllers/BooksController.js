const BooksService = require('../services/BooksService');

const getAll = async (_req, res) => {
  const books = await BooksService.getAll();
  return res.status(200).json(books);
}

module.exports = {
  getAll,
}
