// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-post-js": require("gatsby-module-loader?name=component---src-templates-post-js!/Users/chris/projects/chris-davis.tech/src/templates/post.js"),
  "component---cache-dev-404-page-js": require("gatsby-module-loader?name=component---cache-dev-404-page-js!/Users/chris/projects/chris-davis.tech/.cache/dev-404-page.js"),
  "component---src-pages-404-js": require("gatsby-module-loader?name=component---src-pages-404-js!/Users/chris/projects/chris-davis.tech/src/pages/404.js"),
  "component---src-pages-about-js": require("gatsby-module-loader?name=component---src-pages-about-js!/Users/chris/projects/chris-davis.tech/src/pages/about.js"),
  "component---src-pages-blogs-js": require("gatsby-module-loader?name=component---src-pages-blogs-js!/Users/chris/projects/chris-davis.tech/src/pages/blogs.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/Users/chris/projects/chris-davis.tech/src/pages/index.js"),
  "component---src-pages-page-3-js": require("gatsby-module-loader?name=component---src-pages-page-3-js!/Users/chris/projects/chris-davis.tech/src/pages/page-3.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/Users/chris/projects/chris-davis.tech/.cache/json/layout-index.json"),
  "first-post.json": require("gatsby-module-loader?name=path---first-post!/Users/chris/projects/chris-davis.tech/.cache/json/first-post.json"),
  "second-post.json": require("gatsby-module-loader?name=path---second-post!/Users/chris/projects/chris-davis.tech/.cache/json/second-post.json"),
  "dev-404-page.json": require("gatsby-module-loader?name=path---dev-404-page!/Users/chris/projects/chris-davis.tech/.cache/json/dev-404-page.json"),
  "404.json": require("gatsby-module-loader?name=path---404!/Users/chris/projects/chris-davis.tech/.cache/json/404.json"),
  "about.json": require("gatsby-module-loader?name=path---about!/Users/chris/projects/chris-davis.tech/.cache/json/about.json"),
  "blogs.json": require("gatsby-module-loader?name=path---blogs!/Users/chris/projects/chris-davis.tech/.cache/json/blogs.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/Users/chris/projects/chris-davis.tech/.cache/json/index.json"),
  "page-3.json": require("gatsby-module-loader?name=path---page-3!/Users/chris/projects/chris-davis.tech/.cache/json/page-3.json"),
  "404-html.json": require("gatsby-module-loader?name=path---404-html!/Users/chris/projects/chris-davis.tech/.cache/json/404-html.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/Users/chris/projects/chris-davis.tech/.cache/layouts/index.js")
}