# Frontend Mentor - Blogr landing page solution

This is a solution to the [Blogr landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blogr-landing-page-EX2RLAApP). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Links](#links)
- [html, css, js](#built-with)
- [js](#what-i-learned)
- [w3schools](#useful-resources)
- [Webie](#author)

## Overview

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

```js
function product() {
  if (intViewportWidth <= 375) {
    if (navProduct.style.display === "block") {
      titlePro.style.color = "hsl(208, 49%, 24%)";
      navProduct.style.display = "none";
      document.querySelector("#arrow2").style.transform = "rotate(360deg)";
    } else {
      titlePro.style.color = "hsl(240, 2%, 79%)";
      navProduct.style.display = "block";
      document.querySelector("#arrow2").style.transform = "rotate(180deg)";
    }
  } else {
    if (navProduct.style.display === "block") {
      titlePro.style.color = "hsl(240, 2%, 79%)";
      navProduct.style.display = "none";
      document.querySelector("#arrow1").style.transform = "rotate(360deg)";
    } else {
      titlePro.style.color = " hsl(0, 0%, 100%)";
      navProduct.style.display = "block";
      document.querySelector("#arrow1").style.transform = "rotate(180deg)";
    }
  }
}
```

### Useful resources

- [Example w3schools](https://www.w3schools.com/css/css_rwd_mediaqueries.asp) - This is an amazing article which helped me finally understand media queries in css. I'd recommend it to anyone still learning this concept.

## Author

- Frontend Mentor - [@webie](https://www.frontendmentor.io/profile/webie)
