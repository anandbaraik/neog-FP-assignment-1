import { findBookWithMoreThan500Pages } from "./findBookWithMoreThan500Pages";

describe("find book with more than 500 pages", () => {
  test("returns the first book object that has more than 500 pages", () => {
    const books = [
      {
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        pageCount: 1178
      },
      { title: "To Kill a Mockingbird", author: "Harper Lee", pageCount: 281 },
      {
        title: "The Hitchhiker's Guide to the Galaxy",
        author: "Douglas Adams",
        pageCount: 193
      },
      {
        title: "The Name of the Wind",
        author: "Patrick Rothfuss",
        pageCount: 662
      }
    ];
    expect(findBookWithMoreThan500Pages(books)).toEqual({
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      pageCount: 1178
    });
  });

  test("returns undefined if there are no books with more than 500 pages", () => {
    const books = [
      { title: "Book with 400 pages", author: "John Doe", pageCount: 400 }
    ];
    expect(findBookWithMoreThan500Pages(books)).toBeUndefined();
  });

  test("returns the first book object with more than 500 pages even if it is not the first one in the array", () => {
    const books = [
      { title: "Book with 300 pages", author: "Jane Doe", pageCount: 300 },
      { title: "Book with 1000 pages", author: "Joe Smith", pageCount: 1000 },
      {
        title: "Book with 600 pages",
        author: "Sarah Johnson",
        pageCount: 600
      }
    ];
    expect(findBookWithMoreThan500Pages(books)).toEqual({
      title: "Book with 1000 pages",
      author: "Joe Smith",
      pageCount: 1000
    });
  });
});
