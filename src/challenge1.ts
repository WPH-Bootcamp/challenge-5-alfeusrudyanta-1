type Book = {
  title: string;
  author: string;
  publicationYear: number;
};

const books: Book[] = [];

const printBook = (book: Book): void => {
  console.log(`- ${book.title} by ${book.author} (${book.publicationYear})`);
};

const addBook = (
  title: string,
  author: string,
  publicationYear: number
): void => {
  books.push({ title, author, publicationYear });
  console.log(`Book added: "${title}" by ${author} (${publicationYear})`);
};

const listBooks = (): void => {
  console.log('All Books:');

  books.forEach(printBook);
};

const searchBook = (title?: string): void => {
  if (!title) {
    console.log('Please provide a title to search.');
    return;
  }

  const filteredBooks: Book[] = books.filter((book: Book): boolean =>
    book.title.includes(title)
  );

  if (filteredBooks.length === 0) {
    console.log(`No books found with title containing "${title}".`);
    return;
  }

  console.log(`Search Results for "${title}":`);
  filteredBooks.forEach(printBook);
};

// Don't delete code bellow and this code must be at the bottom of the file
export { addBook, listBooks, searchBook };
