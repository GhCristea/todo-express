const { writeFile, readFile } = require("fs").promises;
const path = require("path");

const getJsonData = async (filePath) => {
  let data = null;
  try {
    data = await readFile(path.join(__dirname, filePath), "utf8");
    return JSON.parse(data);
  } catch (e) {
    console.error(e.message);
  }
};

const getJsonTodos = () => getJsonData("../data.json");

module.exports.writeData = async (data) => {
  let oldData = null;
  try {
    oldData = await getJsonTodos();
  } catch (e) {
    console.error(e.message);
  }
  console.log("oldData", oldData);

  if (oldData) {
    try {
      writeFile(
        path.join(__dirname, "../data.json"),
        JSON.stringify(Array.from(oldData).concat(data))
      );
    } catch (e) {
      console.error(e.message);
    }
  }
};

module.exports.getJsonTodos = getJsonTodos;
