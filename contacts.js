let path = require("node:path");
let fs = require("node:fs/promises");
const shortid = require("shortid");

const contactsPath = path.resolve("./db/contacts.json");

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath, "utf8");
    const result = JSON.parse(data);
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function getContactById(contactId) {
  try {
    const data = await listContacts();
    const contId = data.find((el) => el.id === String(contactId));
    return contId || null;
  } catch (error) {
    console.log(error);
  }
}
async function addContact({ name, email, phone }) {
  try {
    const data = await listContacts();
    const newCont = { name, email, phone, id: shortid.generate() };
    data.push(newCont);
    await fs.writeFile(contactsPath, JSON.stringify(data, null, "\t"));
    return newCont;
  } catch (error) {
    console.log(error);
  }
}

async function removeContact(contactId) {
  try {
    const data = await listContacts();
    const newContArray = data.filter((el) => el.id !== contactId);
    await fs.writeFile(contactsPath, JSON.stringify(newContArray, null, "\t"));
    return data;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
};
