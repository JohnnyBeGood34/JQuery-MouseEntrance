JQuery-MouseEntrance
====================

Simple Jquery plug-in that return the side of a DOM element where mouse is entered.

INSTALLATION
====================

```html
  <script src="./path/to/Jquery-mouseEntrance.js">
```

HOW TO USE
====================

```javascript
$("#myDiv").bind('mouseenter',function(e){
  //Side can be left,right,bottom or top
  var side = $(this).detectMouseEntrance(e);
});
```

That's all !!!
