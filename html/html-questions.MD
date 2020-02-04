# HTML Questions

Solutions to the questions found [here](https://h5bp.org/Front-end-Developer-Interview-Questions/questions/html-questions/)

---

## Table of Contents

- [HTML Questions](#html-questions)
  - [Table of Contents](#table-of-contents)
  - [What does a doctype do?](#what-does-a-doctype-do)
  - [How do you serve a page with content in multiple languages?](#how-do-you-serve-a-page-with-content-in-multiple-languages)
  - [What kind of things must you be wary of when design or developing for mutilingual sites?](#what-kind-of-things-must-you-be-wary-of-when-design-or-developing-for-mutilingual-sites)
  - [What are data-attributes good for?](#what-are-data-attributes-good-for)
  - [Consider HTML5 as an open web platform. What are the building blocks of HTML5?](#consider-html5-as-an-open-web-platform-what-are-the-building-blocks-of-html5)
  - [Describe the differences between a cookie, sessionStorage, and localStorage](#describe-the-differences-between-a-cookie-sessionstorage-and-localstorage)
  - [Describe the difference between `<script>`, `<script async>`, and `<script defer>`](#describe-the-difference-between-script-script-async-and-script-defer)
  - [Why is it generally a good idea to position CSS `link`s between `<head></head>` and JS `<script>`s just before `</body>`? Do you know any exceptions?](#why-is-it-generally-a-good-idea-to-position-css-links-between-headhead-and-js-scripts-just-before-body-do-you-know-any-exceptions)
  - [What is progressive rendering?](#what-is-progressive-rendering)
  - [Why you would use `srcset` attribute in an image tag? Explain the process the browser uses when evaluating the content of this attribute.](#why-you-would-use-srcset-attribute-in-an-image-tag-explain-the-process-the-browser-uses-when-evaluating-the-content-of-this-attribute)
  - [Have you ever used different HTMl templating languages before?](#have-you-ever-used-different-html-templating-languages-before)

---

## What does a doctype do?

- The doctype is the required preamble found at the top of all documents.

- It's purpose is to prevent a browser from switching into "quirks mode". It will enable **full standards mode**.
  
  - **Quirks mode** is a layout that emulates nonstandard behavior in Navigator 4 (Netscape) and Internet Explorer 5
  - There is also an **almost standards mode** (few quirks implemented).

---

## How do you serve a page with content in multiple languages?

- There is a `Accept-Language` request HTTP header that advertises which language the client is able to understand.

```HTML
Accept-Language: <language>
Accept-Language: *

// Multiple types, weighted with the quality value syntax:
Accept-Language: fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5
```

---

## What kind of things must you be wary of when design or developing for mutilingual sites?

- Don't concatenate translated strings.
- Date formatting.
- Aware of culture, color, content organization.
- SEO
- hreflang
  - Tells google which language you are using on a specific page, so the search engine can serve that result to users searching in that language
  - `rel="alternate" hreflang="es"`

---

## What are data-attributes good for?

- Data attributes allow us to store extra information on standard, semantic HTML elements

- Do not store content that should be visible and accessible in data attributes, because assistive technology may not access them. In addition, search crawlers may not index data attributes' values.

```HTML
<!-- CSS Access -->
<style>
  article::before {
    content: attr(data-parent);
  }
  article[data-columns='3'] {
  width: 400px;
  }
</style>

<article
  id="electric-cars"
  data-columns="3"
  data-index-number="12314"
  data-parent="cars">
...
</article>

<!-- JS Access -->
<script>
  const article = document.querySelector('#electric-cars');

  article.dataset.columns // "3"
  article.dataset.indexNumber // "12314"
  article.dataset.parent // "cars"
</script>
```

---

## Consider HTML5 as an open web platform. What are the building blocks of HTML5?

- **Semantics**: allowing you to describe more precisely what your content is.
- **Connectivity**: allowing you to communicate with the server in new and innovative ways.
- **Offline and storage**: allowing webpages to store data on the client-side locally and operate offline more efficiently.
- **Multimedia**: making video and audio first-class citizens in the Open Web.
- **2D/3D graphics and effects**: allowing a much more diverse range of presentation options.
- **Performance and integration**: providing greater speed optimization and better usage of computer hardware.
- **Device access**: allowing for the usage of various input and output devices.
- **Styling**: letting authors write more sophisticated themes.
- **API**: communication, geolocation, webworker
- Video, Audio, Canvas, SVG, Data Storage, Form Elements

---

## Describe the differences between a cookie, sessionStorage, and localStorage

- **cookie**: a small piece of data that a server sends to the user's web browser. 
  - Usually used to tell if two requests came from the same browser (keeping a user logged in)
  - It remembers the stateful information for the **stateless** HTTP
    - HTTP is stateless: no link between two requests being successively carried out on the same connection.
- **sessionStorage**: a property accesses session storage object for the current origin.
  - Data in `sessionStorage` is cleared when the page session ends.
  - Page session lasts as long as the browser is open and survives over page reloads and restores
- **localStorage**: A read-only property that allows you to access a storage object for the document's origin; the stored data is saved across browser sessions.
  - `localStorage` unlike `sessionStorage` has no expiration time
- `sessionStorage` and `localStorage` is **specific** to the protocol of the page

---

## Describe the difference between `<script>`, `<script async>`, and `<script defer>`

- **Script**: an element used to embed or reference executable code; typically for JS
- **Script Async**: A script attribute -- if present, then the classic script will be fetched in parallel to parsing and evaluated as soon as it is available.
- **Script Defer**: A script attribute (boolean) -- indicate that a script is meant to be executed after the document has been parsed, but **before** `DOMContentLoaded`.
  - The defer attribute will prevent the *DOMContentLoaded* event from firing until the script has loaded and finished evaluating.
  - Scripts with the defer attribute will execute in the order in which they appear in the document.

---

## Why is it generally a good idea to position CSS `link`s between `<head></head>` and JS `<script>`s just before `</body>`? Do you know any exceptions?

- CSS goes between head because it is declared before the body. This means that your styles are loaded in before the body.
  - If styles are found in the body, the browser will re-render the page when the styles declared have been parsed. (avoid reflows/repaints + poor separation of concerns)
- Scripts go before the closing `<body>` tag in order for your page to display as soon as possible. Then you can have the scripts load in and make everything work.
  - This is because HTML loads everything from top to bottom.
    - If your JS alters HTML, it won't be able to cause HTML elements aren't available.
    - If you have a lot of JS, it will visibly slow down the loading of the page.

---

## What is progressive rendering?

- The name given to techniques used to render content for display as quickly as possible.
  - **Lazy Loading:** a techinque where javascript will load an image when it comes into the browser's viewport instead of loading all images at page load
  - **Priotizing Visible Content** (above the fold rendering): where you include only the minimum css/contents/scripts necessary for the amount of page that would be rendered in the users browser first to display as quickly as possible, you acn then used *deferred javascript* (domready/load) to load in other resources and content.

---

## Why you would use `srcset` attribute in an image tag? Explain the process the browser uses when evaluating the content of this attribute.

- `srcset` defines the set of images we will allow the browser to choose between, and what size each image is. Each set of image information is separated from the previous one by a comma. For each one, we write:
  - n image filename (elva-fairy-480w.jpg)
  - A space
  - The image's intrinsic width in pixels (480w)
- The main purpose is to serve different images to users depending on their device display width -- serve higher quality images to devices with retina display (boost UX)

```HTML
<img srcset="elva-fairy-320w.jpg,
             elva-fairy-480w.jpg 1.5x,
             elva-fairy-640w.jpg 2x"
     src="elva-fairy-640w.jpg" alt="Elva dressed as a fairy">
```

---

## Have you ever used different HTMl templating languages before?

- Yes -- Pug.js (formerly Jade), Handlebars, Nunjucks, etc. There are various features that can make building your page more dynamic. Using templates may lead to rapid development, code consistency, standards compliance, etc.