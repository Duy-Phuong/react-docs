const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
  publisher: {
    name: "Penguin",
  },
};

const { name: publisherName = "Self-Published" } = book.publisher;

console.log(...publisherName); // Penguin, Self-Published

const user = {
  name: "asas",
  age: 21,
};
console.log({
  ...user,
});
// sẽ gây ra lỗi vì spead chỉ chạy trên main stream => tool
