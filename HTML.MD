https://github.com/Devinterview-io/html5-interview-questions

HTML

https://www.interviewbit.com/html-interview-questions/

https://www.toptal.com/html5/interview-questions

https://hackr.io/blog/best-html5-interview-questions

https://www.tutorialspoint.com/html5/html5_quick_guide.htm

https://github.com/adwaitya/html5-interview-questions

https://github.com/learning-zone/html-basics

https://github.com/Saran-pariyar/100_Days_Of_Frontend_Interview_Questions

1. **What is HTML?**
   - **Explanation:** HTML stands for HyperText Markup Language. It is the standard markup language used to create web pages. HTML defines the structure and content of a web page, using a set of elements and tags.
   - **Example:**
     ```html
     <!DOCTYPE html>
     <html>
       <head>
         <title>My Web Page</title>
       </head>
       <body>
         <h1>Hello, World!</h1>
         <p>This is a sample HTML page.</p>
       </body>
     </html>
     ```
2. **Define `<!DOCTYPE html>`, `<html>`, `<head>`, `<body>` tag**
   - **Explanation:** These are essential HTML elements:
     - `<!DOCTYPE html>` declares the document type and version.
     - `<html>` encloses the entire HTML document.
     - `<head>` contains metadata and links to external resources.
     - `<body>` contains the visible content of the web page.
3. **Difference between HTML and HTML5**
   - **Explanation:** HTML5 is the latest version of HTML, introducing new elements, attributes, and features like improved multimedia support and enhanced semantics.
4. **What is boilerplate in HTML?**
   - **Explanation:** HTML5 Boilerplate is a front-end template designed to give developers a starting point for building HTML5 websites. It includes a set of best practices and default code structure.
5. **What are Attributes in HTML?**
   - **Explanation:** HTML attributes provide additional information about an element. They are defined within the element's start tag.
   - **Example:** `<img src="image.jpg" alt="Image Description">`
6. **Are HTML tags and elements the same thing?**
   - **Explanation:** HTML tags are used to define the beginning and end of an element, while elements consist of the opening tag, content, and closing tag. An element includes the tags and the content they enclose.
7. **Inline vs Block element**
   - **Explanation:** Inline elements do not start on a new line and only take up as much width as necessary, whereas block elements start on a new line and take up the full width available.
   - **Example:** `<span>Inline</span>` vs. `<div>Block</div>`
8. **What is the meaning of case-sensitive?**
   - **Explanation:** HTML is case-sensitive, meaning that tag and attribute names must be written with the correct letter case. For example, `<div>` is not the same as `<Div>`.
9. **Examples of Inline and Block elements**
   - **Explanation:** Inline elements include `<span>`, `<a>`, and `<strong>`. Block elements include `<div>`, `<p>`, and `<h1>`.
10. **What are Semantic Elements?**
    - **Explanation:** Semantic elements in HTML provide meaning to the structure of a web page. They help describe the content's purpose, making it more accessible and search engine-friendly. Examples include `<header>`, `<footer>`, and `<nav>`.
11. **Why do we use the `<label>` tag?**
    - **Explanation:** The `<label>` tag is used to associate a label with an input element, making the form more accessible and user-friendly.
    - **Example:**
      ```html
      <label for="username">Username:</label>
      <input type="text" id="username" />
      ```
12. **What is the purpose of `<!DOCTYPE html>`?**
    - **Explanation:** `<!DOCTYPE html>` specifies the document type and version of HTML being used. It ensures the browser renders the page correctly.
13. **What if we do not use `<!DOCTYPE>` in our HTML document?**
    - **Explanation:** Without `<!DOCTYPE>`, the browser may use "quirks mode" rendering, which can lead to inconsistent display and compatibility issues with modern web standards.
14. **What is quirks mode?**
    - **Explanation:** Quirks mode is a rendering mode where a web browser emulates the behavior of older, non-standard versions of HTML to maintain compatibility with legacy web content.
15. **Difference between `<strong>`, `<b>` and `<em>`, `<i>` tags?**
    - **Explanation:** `<strong>` and `<em>` are semantic tags used for emphasizing text, while `<b>` and `<i>` are presentational tags for bold and italic styling. Semantic tags are preferred for accessibility and SEO.
16. **Meta tag in HTML?**
    - **Explanation:** The `<meta>` tag is used to provide metadata about the HTML document, such as character set, author, and keywords.
    - **Example:**
      ```html
      <meta charset="UTF-8" />
      <meta name="author" content="John Doe" />
      ```
17. **Define Comments and how to comment in HTML?**
    - **Explanation:** Comments in HTML are used to add notes for developers. They are not displayed in the browser.
    - **Example:** `<!-- This is a comment -->`
18. **HTML is case sensitive?**
    - **Explanation:** Yes, HTML is case-sensitive. Tag and attribute names must be written with the correct letter case.
19. **Difference Between Absolute URL and Relative URL?**
    - **Explanation:** Absolute URLs include the full web address (e.g., `https://example.com/page.html`), while relative URLs specify the path relative to the current page (e.g., `./images/image.jpg`).
20. **What is viewport in HTML?**
    - **Explanation:** The viewport meta tag (`<meta name="viewport">`) controls how a web page is displayed on mobile devices, specifying the initial scale, width, and more.
21. **What is `<pre>` vs `<p>` tag in HTML?**
    - **Explanation:** `<pre>` is used for preformatted text and preserves line breaks and white spaces. `<p>` is for paragraphs and doesn't preserve white spaces.
22. **What is List and Types in HTML?**
    - **Explanation:** HTML provides ordered lists (`<ol>`), unordered lists (`<ul>`), and definition lists (`<dl>`) to create lists with different types of items.
23. **What is the anchor tag?**
    - **Explanation:** The `<a>` (anchor) tag is used to create hyperlinks. It can link to other web pages, files, or locations within the same page.
    - **Example:** `<a href="<https://www.example.com>">Visit Example.com</a>`
24. **What is an iframe?**
    - **Explanation:** An `<iframe>` is an HTML element used to embed another web page or document within the current page. It creates a frame or inline window for the content.
    - **Example:**
      ```html
      <iframe src="<https://www.example.com>"></iframe>
      ```

Feel free to ask if you need further clarification or have additional questions on any of these topics.

# HTML5 Interview Questions and Answers

## Q. **_What is the WHATWG??_**

- The Web Hypertext Application Technology Working Group (WHATWG) is a community of people interested in evolving the web through standards and tests.
- The WHATWG was founded by individuals of Apple, the Mozilla Foundation, and Opera Software in 2004, after a W3C workshop. Apple, Mozilla and Opera were becoming increasingly concerned about the W3C’s direction with XHTML, lack of interest in HTML, and apparent disregard for the needs of real-world web developers. So, in response, these organisations set out with a mission to address these concerns and the Web Hypertext Application Technology Working Group was born

## Q. **_What is an iframe and how it works?_**

- An iframe is an HTML document which can be embedded inside another HTML page \*_Example:_

```
<iframe src="https://github.com" height="300px" width="300px"></iframe>
```

## Q. **_How do you set language in HTML?_**

There are multiple ways to set language in HTML

- By setting content-language in headers for language of the page
- By setting accept-language in headers for list of language that a page accept
- Setting lang attribute in html tag

**Example:**

```
<!DOCTYPE html><html lang="en">
<head>
  <title>Document Title</title>
</head>
<body>

</body>
</html>
```

## Q. **_What is the DOM? How does the DOM work?_**

**_The W3C Document Object Model (DOM) is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document._**

Confused? Let me make that simple. Imagine that, every web page is a document and every element( be it text or image or table) inside that webpage is stored in that document as an object in a tree format, which can be manipulated later with a scripting language such as JavaScript.

!https://github.com/adwaitya/html5-interview-questions/raw/master/assets/dom1.png

Now, when a web page is loaded, the browser creates such a document every time which is called, Document Object Model (DOM) of the page.

The DOM represents the document as nodes and objects so that programs can change the document structure, style, and content. In that hat way, programming languages connect to the webpage.

[**↥ back to top**](https://github.com/adwaitya/html5-interview-questions#)

## Q. **_How does the browser rendering engine work?_**

In order to render content the browser has to go through a series of steps:

- Document Object Model(DOM)
- CSS object model(CSSOM)
- Render Tree
- Layout
- Paint

!https://github.com/adwaitya/html5-interview-questions/raw/master/assets/layers.png

[**↥ back to top**](https://github.com/adwaitya/html5-interview-questions#)

## Q. **_What does a `<DOCTYPE html>` do?_**

Doctype is the abbreviation for the “Document type”. The very first line in every web document should contain a declaration.

The purpose of DOCTYPE is to tell the browser what type of HTML you are writing. It is not valid to omit the DOCTYPE. There is no “Standard” format. The browser will just try to parse HTML as best it can. But not all elements will be displayed correctly. DOCTYPE is a required part of all HTML documents.

To render a HTML4.01 document, use this code at the very top of your document:

```
<!DOCTYPE HTML PUBLIC “-//W3C//DTD HTML 4.01//EN” “http://www.w3.org/TR/html4/strict.dtd">
```

To render a HTML5 document, include this code instead:

<!doctype html>

The Doctype declaration informs the web browser about the type and version of HTML used in building the web document (e.g. HTML5, HTML4.0, XHTML1.0)\

[**↥ back to top**](https://github.com/adwaitya/html5-interview-questions#)

## Q. **_What happens when DOCTYPE is not given?_**

The web page is rendered in quirks mode. The web browsers engines use quirks mode to support older browsers which does not follow the **W3C specifications**. In quirks mode CSS class and id names are case insensitive. In standards mode they are case sensitive.

[**↥ back to top**](https://github.com/adwaitya/html5-interview-questions#)

## Q. **_What are the building blocks of HTML5?_**

- **Semantics**: allowing you to describe more precisely what your content is.
- **Connectivity**: allowing you to communicate with the server in new and innovative ways.
- **Offline and storage**: allowing webpages to store data on the client-side locally and operate offline more efficiently.
- **Multimedia**: making video and audio first-class citizens in the Open Web.
- **2D/3D graphics and effects**: allowing a much more diverse range of presentation options.
- **Performance and integration**: providing greater speed optimization and better usage of computer hardware.
- **Device access**: allowing for the usage of various input and output devices.
- **Styling**: letting authors write more sophisticated themes.

## Q. **_Describe the difference between a `cookie`, `sessionStorage` and `localStorage`?_**

**localStorage:** localStorage is a way to store data on the client’s computer. It allows the saving of key/value pairs in a web browser and it stores data with no expiration date. localStorage can only be accessed via JavaScript, and HTML5. However, the user has the ability to clear the browser data/cache to erase all localStorage data.

**SessionStorage:** stores data only for a session, meaning that the data is stored until the browser (or tab) is closed.

**cookie:** Stores data that has to be sent back to the server with subsequent XHR requests. Its expiration varies based on the type and the expiration duration can be set from either server-side or client-side .

|                                        | `cookie`                                                 | `localStorage` | `sessionStorage` |
| -------------------------------------- | -------------------------------------------------------- | -------------- | ---------------- |
| Initiator                              | Client or server. Server can use `Set-Cookie` header     | Client         | Client           |
| Expiry                                 | Manually set                                             | Forever        | On tab close     |
| Persistent across browser sessions     | Depends on whether expiration is set                     | Yes            | No               |
| Sent to server with every HTTP request | Cookies are automatically being sent via `Cookie` header | No             | No               |
| Capacity (per domain)                  | 4kb                                                      | 5MB            | 5MB              |
| Accessibility                          | Any window                                               | Any window     | Same tab         |

_Note: If the user decides to clear browsing data via whatever mechanism provided by the browser, this will clear out any `cookie`, `localStorage`, or `sessionStorage` stored. It's important to keep this in mind when designing for local persistance, especially when comparing to alternatives such as server side storing in a database or similar (which of course will persist despite user actions)._

[**↥ back to top**](https://github.com/adwaitya/html5-interview-questions#)

## Q. **_What are the Benefits of Server Side Rendering (SSR) Over Client Side Rendering (CSR)?_**

- We are using server side rendering for two reasons:
  - performance benefit for our customers
  - Consistent SEO performance
- The main difference is that for SSR your server’s response to the browser is the HTML of your page that is ready to be rendered, while for CSR the browser gets a pretty empty document with links to your javascript. That means for SSR your browser will start rendering the HTML from your server without having to wait for all the JavaScript to be downloaded and executed.
- for SSR, the user can start viewing the page while all of that is happening. For the CSR world, you need to wait for all of the above to happen and then have the virtual dom moved to the browser dom for the page to be viewable.

## Q. **_What is the difference between a `<span>` and a `<div>`?_**

- `<div>` is a block level element which means it will render it on it's own line with a width of a 100% of the parent element.
- `<span>` is an inline element which means it will render on the same line as the previous element, if it is also an inline element, and it's width will be determined by it's content.

## Q. **_Name 5 common block-level and inline HTML elements?_**

- block elements `<h1>, <p>, <ul>, <ol>, <li>`,
- inline elements `<span>, <a>, <strong>, <i>, <img>`

[**↥ back to top**](https://github.com/adwaitya/html5-interview-questions#)

## Q. **_What are semantic and non-semantic elements?_**

- **Semantic elements**: clearly describes its meaning to both the browser and the developer. For example: `<form>`, `<table>`, `<article>`, `<aside>`, `<details>`, `<figcaption>`, `<figure>`, `<footer>`, `<header>`, `<main>`, `<mark>`, `<nav>`, `<section>`, `<summary>`, `<time>` clearly defines its content.
- **Non-semantic elements**: `<div>` and `<span>` tells nothing about its content.

## Q. **_What is the purpose of `main` element?_**

The HTML `<main>` element represents the dominant content of the `<body>` of a document. The main content area consists of content that is directly related to or expands upon the central topic of a document, or the central functionality of an application.

```
<main role="main">
    <p>Geckos are a group of usually small, usually nocturnal lizards.
       They are found on every continent except Australia.</p>
    <p>Many species of gecko have adhesive toe pads which enable them to climb walls and even windows.</p>
</main>
```

_Note: A document mustn't have more than one `<main>` element that doesn't have the hidden attribute specified._

[**↥ back to top**](https://github.com/adwaitya/html5-interview-questions#)

## Q. **_Define semantic markup. What are the semantic meanings for `<section>, <article>, <aside>, <nav>, <header>, <footer>` and when/how should each be used in structuring html markup?_**

- `<header>` is used to contain introductory and navigational information about a section of the page. This can include the section heading, the author’s name, time and date of publication, table of contents, or other navigational information.
- `<article>` is meant to house a self-contained composition that can logically be independently recreated outside of the page without losing it’s meaining. Individual blog posts or news stories are good examples.
- `<section>` is a flexible container for holding content that shares a common informational theme or purpose.
- `<footer>` is used to hold information that should appear at the end of a section of content and contain additional information about the section. Author’s name, copyright information, and related links are typical examples of such content.

## Q. **_When should you use `section`, `div` or `article`?_**

- `<section>`, group of content inside is related to a single theme, and should appear as an entry in an outline of the page. It’s a chunk of related content, like a subsection of a long article, a major part of the page (eg the news section on the homepage), or a page in a webapp’s tabbed interface. A section normally has a heading (title) and maybe a footer too.
- `<article>`, represents a complete, or self-contained, composition in a document, page, application, or site and that is, in principle, independently distributable or reusable, e.g. in syndication. This could be a forum post, a magazine or newspaper article, a blog entry, a user-submitted comment, an interactive widget or gadget, or any other independent item of content.
- `<div>`, on the other hand, does not convey any meaning, aside from any found in its class, lang and title attributes.

[**↥ back to top**](https://github.com/adwaitya/html5-interview-questions#)

## Q. **_What is Character Encoding?_**

Character encoding is a method of converting bytes into characters. To validate or display an HTML document properly, a program must choose a proper character encoding. This is specified in the tag:

```
<meta charset="utf-8"/>
```

- **UTF-8**: A Unicode Translation Format that comes in 8-bit units that is, it comes in bytes. A character in UTF8 can be from 1 to 4 bytes long, making UTF8 variable width.

## Q. **_What is the purpose of meta tags?_**

The META elements can be used to include name/value pairs describing properties of the HTML document, such as author, expiry date, a list of keywords, document author etc.

```
<!DOCTYPE html><html>
  <head>
        <!--Recommended Meta Tags-->
        <meta charset="utf-8">
        <meta name="language" content="english">
        <meta http-equiv="content-type" content="text/html">
        <meta name="author" content="Author Name">
        <meta name="designer" content="Designer Name">
        <meta name="publisher" content="Publisher Name">
        <meta name="no-email-collection" content="name@email.com">
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>

        <!--Search Engine Optimization Meta Tags-->
        <meta name="description" content="Project Description">
        <meta name="keywords" content="Software Engineer,Product Manager,Project Manager,Data Scientist">
        <meta name="robots" content="index,follow">
        <meta name="revisit-after" content="7 days">
        <meta name="distribution" content="web">
        <meta name="robots" content="noodp">

        <!--Optional Meta Tags-->
        <meta name="distribution" content="web">
        <meta name="web_author" content="">
        <meta name="rating" content="">
        <meta name="subject" content="Personal">
        <meta name="title" content=" - Official Website.">
        <meta name="copyright" content="Copyright 2020">
        <meta name="reply-to" content="">
        <meta name="abstract" content="">
        <meta name="city" content="Bangalore">
        <meta name="country" content="INDIA">
        <meta name="distribution" content="">
        <meta name="classification" content="">

        <!--Meta Tags for HTML pages on Mobile-->
        <meta name="format-detection" content="telephone=yes"/>
        <meta name="HandheldFriendly" content="true"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="apple-mobile-web-app-capable" content="yes" />

        <!--http-equiv Tags-->
        <meta http-equiv="Content-Style-Type" content="text/css">
        <meta http-equiv="Content-Script-Type" content="text/javascript">

    <title>HTML5 Meta Tags</title>
  </head>
  <body>
       ...
  </body>
</html>
```

[**↥ back to top**](https://github.com/adwaitya/html5-interview-questions#)

## Q. **_What does CORS stand for and what issue does it address?_**

Cross-Origin Resource Sharing (CORS) is a W3C spec that allows cross-domain communication from the browser. By building on top of the XMLHttpRequest object, CORS allows developers to work with the same idioms as same-domain requests. CORS gives web servers cross-domain access controls, which enable secure cross-domain data transfers.

## Q. **_What does async and defer refer in script tag? Describe the difference between `<script>`, `<script async>` and `<script defer>`_**

- **Async**: Downloads the script file during HTML parsing and will pause the HTML parser to execute it when it has finished downloading.
- **Defer**: Defer downloads the script file during HTML parsing and will only execute it after the HTML parser has completed. Not all browsers support this.

The async attribute is used to indicate to the browser that the script file can be executed asynchronously. The HTML parser does not need to pause at the point it reaches the script tag to fetch and execute, the execution can happen whenever the script becomes ready after being fetched in parallel with the document parsing.

The defer attribute tells the browser to only execute the script file once the HTML document has been fully parsed.

[**↥ back to top**](https://github.com/adwaitya/html5-interview-questions#)

## Q. **_Ways to improve website performance_**

- Minimize HTTP Requests
  - Sites are mainly slow because of too many (or too large) HTTP requests. We can eliminate unnecessary request;
    - combined files: js to a file, css to a file
    - CSS sprites: CSS Sprites are the preferred method for reducing the number of image requests. Combine your background images into a single image and use the CSS background-image and background-position properties to display the desired image segment.
- Use a Content Delivery Network CDN
  - A CDN is essentially many optimized servers around the world that deliver web content to users based on their geographic location. This means big performance improvements for site users. Because, say, if a person accessing your site in India, they will be retrieving web content from a server nearby
- Optimize Images:
  - image sizes make a huge difference to site speed. The larger content/images, the slower the site. we could:
    - Changing the resolution: reducing the “quality” of the image (and thereby the file size)
    - Compressing the picture: increasing the efficiency of image data storage
    - Cropping the picture: when cropping, you are cutting out unneeded areas and thus making the image smaller in size
- Put Scripts at the Bottom:
  - Javascript files can load after the rest of your page. The simplest solution is to place your external Javascript files at the bottom of your page, just before the close of your body tag. Now more of your site can load before your scripts. Another method that allows even more control is to use the defer or async attributes when placing external .js files on your site.
    - Async tags load the scripts while the rest of the page loads, but this means scripts can be loaded out of order. Basically, lighter files load first. This might be fine for some scripts, but can be disastrous for others.
    - The defer attribute loads your scripts after your content has finished loading. It also runs the scripts in order. Just make sure your scripts run so late without breaking your site.
- Add an Expires or a Cache-Control Header
  - Web page designs are getting richer and richer, which means more scripts, stylesheets, images, and Flash in the page. A first-time visitor to your page may have to make several HTTP requests, but by using the Expires header you make those components cacheable. This avoids unnecessary HTTP requests on subsequent page views. Expires headers are most often used with images, but they should be used on all components including scripts, stylesheets, and Flash components.
- Gzip Components
  - Compression reduces response times by reducing the size of the HTTP response. Gzipping generally reduces the response size by about 70%.
- Put Stylesheets at the Top:
  - This is because putting stylesheets in the HEAD allows the page to render progressively.
- Avoid CSS Expressions
- Use GET for AJAX Requests:
  - Ajax is that it provides instantaneous feedback to the user because it requests information asynchronously from the backend web server
- Make JavaScript and CSS External:
  - Using external files in the real world generally produces faster pages because the JavaScript and CSS files are cached by the browser. JavaScript and CSS that are inlined in HTML documents get downloaded every time the HTML document is requested. This reduces the number of HTTP requests that are needed, but increases the size of the HTML document. On the other hand, if the JavaScript and CSS are in external files cached by the browser, the size of the HTML document is reduced without increasing the number of HTTP requests.
- Use get to ajax request:
  - POST is implemented in the browsers as a two-step process: sending the headers first, then sending data. So it's best to use GET, which only takes one TCP packet to send (unless you have a lot of cookies).
- No 404s:
  - HTTP requests are expensive so making an HTTP request and getting a useless response (i.e. 404 Not Found) is totally unnecessary and will slow down the user experience without any benefit.
- Reduce Cookie Size:
  - HTTP cookies are used for a variety of reasons such as authentication and personalization. Information about cookies is exchanged in the HTTP headers between web servers and browsers. It's important to keep the size of cookies as low as possible to minimize the impact on the user's response time.
- Reduce DNS Lookups
- Minify JavaScript and CSS
- Avoid Redirects
- Remove Duplicate Scripts
- Configure Etags
- Make Ajax Cacheable
- Post-load Components
- Preload Components
- Reduce the Number of DOM Elements
- Minimize the Number of iframes
- Minimize DOM Access
- Optimize CSS Sprites
- Don't Scale Images in HTML
- Make favicon.ico Small and Cacheable
- Avoid Empty Image src

[**↥ back to top**](https://github.com/adwaitya/html5-interview-questions#)

## Q. **_Comparison of browsers engines like Chrome, Firefox, Internet explorer, Safari?_**

- Chrome:
  - Layout rendering engine **Webkit**.
  - JavaScript engine **V8**
- Firefox:
  - Layout rendering engine **Gecko**.
  - JavaScript engine **Spider monkey**
- Internet explorer:
  - Layout rendering engine **Trident**.
  - JavaScript engine **Chakra**
- Safari:
  - Layout rendering engine **Webkit**.
  - JavaScript engine JavascriptCore i.e **Nitro**

## Q. **_What are `data-` attributes good for?_**

- The HTML5 data attribute lets you assign custom data to an element. When we want to store more information/data about the element when no suitable HTML5 element or attribute exists

## Q. **_Explain the difference between layout, painting and compositing?_**

!https://github.com/adwaitya/html5-interview-questions/raw/master/lib/img/frame-full.jpg

- **JavaScript**: Typically JavaScript is used to handle work that will result in visual changes, whether it’s jQuery’s animate function, sorting a data set, or adding DOM elements to the page. It doesn’t have to be JavaScript that triggers a visual change, though: CSS Animations, Transitions, and the Web Animations API are also commonly used.
- **Style calculations**: This is the process of figuring out which CSS rules apply to which elements based on matching selectors, for example, .headline or .nav > .nav\_\_item. From there, once rules are known, they are applied and the final styles for each element are calculated.
- **Layout**: Once the browser knows which rules apply to an element it can begin to calculate how much space it takes up and where it is on screen. The web’s layout model means that one element can affect others, for example the width of the element typically affects its children’s widths and so on all the way up and down the tree, so the process can be quite involved for the browser.
- **Paint**: Painting is the process of filling in pixels. It involves drawing out text, colors, images, borders, and shadows, essentially every visual part of the elements. The drawing is typically done onto multiple surfaces, often called layers.
- **Compositing**: Since the parts of the page were drawn into potentially multiple layers they need to be drawn to the screen in the correct order so that the page renders correctly. This is especially important for elements that overlap another, since a mistake could result in one element appearing over the top of another incorrectly.

[**↥ back to top**](https://github.com/adwaitya/html5-interview-questions#)

## Q. **_Explain about HTML Layout Engines used by browsers?_**

| Engine   | Status       | Embedded in                                                                          |
| -------- | ------------ | ------------------------------------------------------------------------------------ |
| WebKit   | Active       | Safari browser, plus all browsers hosted on the iOS App Store                        |
| Blink    | Active       | Google Chrome and all other Chromium-based browsers like Opera and Microsoft Edge    |
| Gecko    | Active       | Firefox browser and Thunderbird email client, plus forks like SeaMonkey and Waterfox |
| KHTML    | Discontinued | Konqueror browser                                                                    |
| Presto   | Discontinued | formerly in the Opera browser                                                        |
| EdgeHTML | Discontinued | formerly in the Microsoft Edge browser                                               |
| Trident  | Discontinued | Internet Explorer browser and Microsoft Outlook email client                         |
