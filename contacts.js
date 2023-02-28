let path = require("path");
let fs = require("fs").promises;
const shortid = require("shortid");

const contactsPath = path.resolve("./db/contacts.json");

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath, "utf8");
    const result = JSON.parse(data.toString());
    console.table(result);
    return result;
  } catch (error) {
    console.log(error);
  }
}

console.log("after function=>", listContacts());

function getContactById(contactId) {
  // ...твій код
}

function removeContact(contactId) {
  fs.unlink();
}

// async function addContact(name, email, phone) {
//   const data = await fs.readFile(contactsPath, "utf8");
//   const newContact = { id: shortid.generate(), name, email, phone };
//   await fs.writeFile(contactsPath, newContact, "utf8");
// }

// console.log("after add=>", addContact());

module.exports = { listContacts, getContactById, removeContact };
