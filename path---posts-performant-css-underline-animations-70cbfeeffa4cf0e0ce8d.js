webpackJsonp([0xbfbed94173c3],{398:function(e,t){e.exports={data:{markdownRemark:{html:"<p>With CSS, there's plenty of ways to do an underline. Borders, box shadows, pseudo elements... The list goes on and on. But is any one method better than another? Let's take a look at a few methods of doing a simple animated underline, then we'll dig a bit deeper into the differences between them.</p>\n<h3>Animating the border.</h3>\n<p>The first method involves animating the border of an element. </p>\n<iframe height='265' scrolling='no' title='Performant underline animation__border-animation' src='//codepen.io/FracturedLoop/embed/RBrxJm/?height=265&theme-id=dark&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/FracturedLoop/pen/RBrxJm/'>Performant underline animation__border-animation</a> by Josiah Nunemaker (<a href='https://codepen.io/FracturedLoop'>@FracturedLoop</a>) on <a href='https://codepen.io'>CodePen</a>.\n</iframe>\n<p>It's probably the simplest method, but it comes with a few downfalls. Probably first on the problem list is that fact that it modifies the element's box model, which causes the entire element to repaint. In most cases, this is probably not an issue, but if you had a large element using this, things could get a little laggy. The second issue with this method is probably more important than the first. As you probably noticed, this animation isn't exactly the smoothest animation. This is because most browsers round to the nearest pixel when rendering things to increase performance. As a result, the animation jumps when it's size is animating. Finally, because we are animating the element's border, this method won't work if you are using the border already (well, it <em>would</em> work, but it would probably look horrible).</p>\n<h3>A pseudo element</h3>\n<p>This method has a similar result to the first method, but has a slight increase in performance.</p>\n<iframe height='265' scrolling='no' title='Performant underline animation__pseudo-element' src='//codepen.io/FracturedLoop/embed/ZjQvPv/?height=265&theme-id=dark&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/FracturedLoop/pen/ZjQvPv/'>Performant underline animation__pseudo-element</a> by Josiah Nunemaker (<a href='https://codepen.io/FracturedLoop'>@FracturedLoop</a>) on <a href='https://codepen.io'>CodePen</a>.\n</iframe>\n<p>This method is relatively straightforward. Instead of using the elements border as an underline, this method uses a pseudo element. (If you don't know what pseudo elements are, MDN covers it pretty well <a href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements\">here</a>.) There's a few advantages to using this method. Firstly, you can use it on an element that has an existing border. What's probably more important, however, is the fact that you are using CSS transforms, which greatly speeds up the animation. Also, the underline is a completely seperate element, so you could style it however you want (Rounded corners, anyone?), and also enables the use of relative sizes for the underline, like percentages.</p>\n<p>As you may have noticed, though, there's still the issue with rounding and glitchy animation in some cases, but overall, performance is a lot better. Another potential issue is that it requires a pseudo element, so you can't be using both :before and :after pseudo elements. Probably the largest issue (or potentially greatest benefit) is that it only places one underline under the entire element, even if there are multiple lines. With the border method, there will be an underline on every line.</p>\n<h3>A smoother solution</h3>\n<p>So what can we do about the glitchy animation? Well, there's a relatively simple solution. </p>\n<iframe height='265' scrolling='no' title='Performant underline animation__scaled-pseudo-element' src='//codepen.io/FracturedLoop/embed/EpPQYe/?height=265&theme-id=dark&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/FracturedLoop/pen/EpPQYe/'>Performant underline animation__scaled-pseudo-element</a> by Josiah Nunemaker (<a href='https://codepen.io/FracturedLoop'>@FracturedLoop</a>) on <a href='https://codepen.io'>CodePen</a>.\n</iframe>\n<p>Boom. That's a lot smoother isn't it? By sizing up the element up, then using CSS transforms to shrink it back down, the browser will be rendering the whole-number values, but shrink the entire element down. This results in smoother animation because it is rendering the interpolated values of the animation. The difference between the animtaions becomes really obvious when you <a href=\"https://developers.google.com/web/tools/chrome-devtools/inspect-styles/animations#inspect\">slow down the animation</a> using devtools. <a href=\"https://codepen.io/FracturedLoop/full/pZgdGv/\">Here's</a> a link if you want to compare the three methods. It also has the same benefits as the other method using the pseudo-element.</p>\n<p>So are there any cons? Sadly, yes. This suffers the same issues as the previous method, with the exception of the jittery animation. But for most instances the benefits greatly outweigh the cons, as you rarely deal with multiple pseudo elements anyway.</p>\n<p>This is only a few methods of animating an underline, and there's many more methods out there. For the most part though, one of these methods will work well, and greatly simplify things compared to more complex methods.</p>",frontmatter:{date:"July 15, 2018",path:"/posts/performant-css-underline-animations",title:"Performant CSS Underline animations",tags:["tutorial","performance","css","animation"]}}},pathContext:{}}}});
//# sourceMappingURL=path---posts-performant-css-underline-animations-70cbfeeffa4cf0e0ce8d.js.map