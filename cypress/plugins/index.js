import prettier from "prettier";
import cypressEslint from "cypress-eslint-preprocessor";

module.exports = (on) => {
  on("file:preprocessor", prettier());
  on("file:preprocessor", cypressEslint());
};
