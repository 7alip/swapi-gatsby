module.exports = {
  "*.js": ["eslint", "jest --findRelatedTests"],
  "*.+(js|jsx|json|css|scss)": ["prettier --write"],
}
