let running = true;
let option, entry;
let phoneBook = [];
let searchResult;
while (running) {
  option = prompt("Add / Search / Exit").toLowerCase();
  switch (option) {
    case 'add':
      const item = {};
      entry = prompt("Enter user name");
      item.name = entry;
      entry = prompt("Enter user phone number");
      item.number = entry;
      phoneBook.push(item);
      alert("Added successfully");
      break;
    case 'search':
      entry = prompt("Search by a user name or phone book");
      searchResult = phoneBook.filter(elem => elem.name.toLowerCase() === entry.toLowerCase() || elem.number === entry);
      if (searchResult.length > 0) {
        alert("User name: " + searchResult[0].name + ", phone number: " + searchResult[0].number);
      } else {
        alert("No matching contact found");
      }
      break;
    case 'exit':
      running = false;
      break;
    default:
      alert("Invalid operation");
      break;
  }
}
