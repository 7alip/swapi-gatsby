const slugify = require("slugify")

exports.slug = text =>
  slugify(text, {
    replacement: "-",
    strict: true,
    lower: true,
  })
