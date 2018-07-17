---
title: "Fixing mobile hover effects"
path: "/fixing-mobile-hover-effects"
date: "2018-07-17T13:34:18Z"
tags:
- optimization
- css
- sass
- mixin
---
One of the worst parts about hover effects is that they often look horrible on mobile devices because they trigger on click... Then don't go away and just sit there (laughing at you I guess). I got irritated, so I began wondering if there is a fix (Spoiler alert: there is). The solution is in CSS media queries. There's a neat little [media feature](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#Media_features) called [`hover`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/hover). I bet you can imagine what it does. Basically, if the _primary_ input method supports hovering, it'll pass, otherwise, the css will be skipped.   An easy way to test this is to use your browser's [mobile device simulator] (https://developers.google.com/web/tools/chrome-devtools/device-mode/). 

<iframe height='265' scrolling='no' title='CSS underline only when supported' src='//codepen.io/FracturedLoop/embed/XBKjNK/?height=265&theme-id=dark&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/FracturedLoop/pen/XBKjNK/'>CSS underline only when supported</a> by Josiah Nunemaker (<a href='https://codepen.io/FracturedLoop'>@FracturedLoop</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

If you did some looking around the MDN page for [media features](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#Media_features), you may have noticed that there's another similar feature called [`any-hover`] (https://developer.mozilla.org/en-US/docs/Web/CSS/@media/any-hover). This is similar to `hover` with the exception that `any-hover` will pass if _any_ of your input devices supports hovering, which could include a mouse or hover-capable touch screens.

### Bonus SCSS Mixin
If you use SCSS, here's a simple mixin to cut out some of the syntax fluff. Enjoy :)

<iframe height='265' scrolling='no' title='SCSS underline only when supported mixin' src='//codepen.io/FracturedLoop/embed/MBebXQ/?height=265&theme-id=dark&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/FracturedLoop/pen/MBebXQ/'>SCSS underline only when supported mixin</a> by Josiah Nunemaker (<a href='https://codepen.io/FracturedLoop'>@FracturedLoop</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>