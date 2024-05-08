# Frontend Mentor - Expenses chart component solution

This is a solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the bar chart and hover over the individual bars to see the correct amounts for each day
- See the current day’s bar highlighted in a different colour to the other bars
- View the optimal layout for the content depending on their device’s screen size
- See hover states for all interactive elements on the page
- **Bonus**: Use the JSON data file provided to dynamically size the bars on the chart

### Screenshot

![screenshot desktop](https://github.com/Lo-Deck/Expenses-chart/blob/main/screenshot/Expenses%20chart%20component-desktop.png).
![screenshot mobile](https://github.com/Lo-Deck/Expenses-chart/blob/main/screenshot/Expenses%20chart%20component-mobile.png).

### Links

- Solution URL: [Repositories](https://github.com/Lo-Deck/Expenses-chart).
- Live Site URL: [Website](https://lo-deck.github.io/Expenses-chart/).


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JS


### What I learned

I learned how to extract data from JSON file using `fetch`. 

```js
fetch('./data.json')
                .then( res => res.json() )
                .then( (file) => {

                    for( data of file )
                    {

                        //console.log(`day : ${data.day}, amount ${data.amount}`);

                        day[i].innerText = `$${data.amount}`; 
                        
                        week[i].style.height = `${data.amount/5}rem`

                        week[whatDay].style.backgroundColor = 'hsl(186, 34%, 60%)';
                        
                        i++;

                    }

                });
```

And then display data when moving pointer over the graph, have the current day display in other color.

```
    week[i].addEventListener('mouseenter', () => {

        //console.log('mouseEnter' + i);

        day[i].classList.add('broadcast');
    
    });
```




### Continued development

Learning from each challenge, I will continue to make website with JS and learning from different challenge from Front-end Mentor.


### Useful resources

- [Mozilla mdn](https://developer.mozilla.org/) - Very useful.


## Author

- Frontend Mentor - [@Lo-deck](https://www.frontendmentor.io/profile/Lo-Deck)


## Acknowledgments

Thanks to Front-end Mentor and its community.