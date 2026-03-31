# Frontend Mentor - Advice Generator App Solution

This is my solution to the [Advice Generator App challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon


### Links

- Solution URL: [GitHub Repository](https://github.com/KosiAmam/Advice-generator.git)
- Live Site URL: [Live Site](https://advice-generator-snowy-rho.vercel.app/)

## My process

### Built with

- Semantic HTML5
- CSS Flexbox
- Mobile-first responsive design
- Vanilla JavaScript (Async/Await)
- [Advice Slip API](https://api.adviceslip.com)
- [Manrope](https://fonts.google.com/specimen/Manrope) - Google Fonts

### What I learned

**Semantic HTML over divs** — I was intentional about using the right element for the right job. The card is an `<article>` because it's self-contained content. The advice is a `<blockquote>` since it's genuinely a quote. The button uses `<button type="button">` with an `aria-label` for accessibility since it only contains an image.

**Fetch API with Async/Await** — I used `async/await` over `.then()` chaining for readability. I also learned that `fetch()` only rejects on network failures — a 404 or 500 still resolves — so I check `response.ok` explicitly and throw manually.

**Cache busting** — The Advice Slip API caches responses. Appending `?timestamp=${Date.now()}` to the URL makes every request unique, ensuring fresh advice on every click.

**UX and accessibility during loading** — I disable the button during fetch to prevent race conditions from rapid clicks, and use `aria-busy="true"` to communicate the loading state to assistive technologies. The `finally` block always re-enables the button whether the request succeeds or fails.


### Useful resources

- [Advice Slip API Docs](https://api.adviceslip.com) - The API used to generate random advice
- [MDN — Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) - Helped me understand how fetch, response.ok, and async/await work together
- [MDN — CSS position](https://developer.mozilla.org/en-US/docs/Web/CSS/position) - Useful reference for understanding relative and absolute positioning
- [CSS Tricks — A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - Reliable flexbox reference throughout the project

## Author

- Frontend Mentor - [@KosiA](https://www.frontendmentor.io/profile/KosiAmam)
- GitHub - [@KosiA](https://github.com/KosiAmam)