// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/chris/chris-davis.tech/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-post-js": preferDefault(require("/Users/chris/chris-davis.tech/src/templates/post.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/chris/chris-davis.tech/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/chris/chris-davis.tech/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/chris/chris-davis.tech/src/pages/about.js")),
  "component---src-pages-blogs-js": preferDefault(require("/Users/chris/chris-davis.tech/src/pages/blogs.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/chris/chris-davis.tech/src/pages/index.js")),
  "component---src-pages-page-3-js": preferDefault(require("/Users/chris/chris-davis.tech/src/pages/page-3.js"))
}

exports.json = {
  "layout-index.json": require("/Users/chris/chris-davis.tech/.cache/json/layout-index.json"),
  "second-post.json": require("/Users/chris/chris-davis.tech/.cache/json/second-post.json"),
  "first-post.json": require("/Users/chris/chris-davis.tech/.cache/json/first-post.json"),
  "dev-404-page.json": require("/Users/chris/chris-davis.tech/.cache/json/dev-404-page.json"),
  "404.json": require("/Users/chris/chris-davis.tech/.cache/json/404.json"),
  "about.json": require("/Users/chris/chris-davis.tech/.cache/json/about.json"),
  "blogs.json": require("/Users/chris/chris-davis.tech/.cache/json/blogs.json"),
  "index.json": require("/Users/chris/chris-davis.tech/.cache/json/index.json"),
  "page-3.json": require("/Users/chris/chris-davis.tech/.cache/json/page-3.json"),
  "404-html.json": require("/Users/chris/chris-davis.tech/.cache/json/404-html.json")
}