# HTML Questions

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
    -  tells google which language you are using on a specific page, so the search engine can serve that result to users searching in that language
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

- Semantics: allowing you to describe more precisely what your content is.
- Connectivity: allowing you to communicate with the server in new and innovative ways.
- Offline and storage: allowing webpages to store data on the client-side locally and operate offline more efficiently.
- Multimedia: making video and audio first-class citizens in the Open Web.
- 2D/3D graphics and effects: allowing a much more diverse range of presentation options.
- Performance and integration: providing greater speed optimization and better usage of computer hardware.
- Device access: allowing for the usage of various input and output devices.
- Styling: letting authors write more sophisticated themes.
- Video, Audio, Canvas, SVG, Data Storage, Form Elements
- API: communication, geolocation, webworker

---

## Describe the differences between a cookie, sessionStorage, and localStorage

- cookie: a small piece of data that a server sends to the user's web browser. 
  - Usually used to tell if two requests came from the same browser (keeping a user logged in)
  - It remembers the stateful information for the **stateless** HTTP
    - HTTP is stateless: no link between two requests being sucessively carried out on the same connection.
- sessionStorage: a property accesses session storage object for the current origin.
  - Data in `sessionStorage` is cleared when the page session ends.
  - Page session lasts as long as the browser is open and survives over page reloads and restores
- localStorage: A read-only property that allows you to access a storage object for the document's origin; the stored data is saved across browser sessions.
  - `localStorage` unlike `sessionStorage` has no expiration time
- `sessionStorage` and `localStorage` is **specific** to the protocol of the page

---

## Describe the difference between `<script>`, `<script async>`, and `<script defer>`

- Script: an element used to embed or reference executable code; typically for JS
- Script Async: A script attribute -- if present, then the classic script will be fetched in parallel to parsing and evaluated as soon as it is available.
- Script Defer: A script attribute (boolean) -- indicate that a script is meant to be executed after the document has been parsed, but **before** `DOMContentLoaded`.
  - The defer attribute will prevent the DOMContentLoaded event from firing until the script has loaded and finished evaluating.
  - Scripts with the defer attribute will execute in the order in which they appear in the document.


