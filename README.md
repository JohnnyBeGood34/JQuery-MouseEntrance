JQuery-MouseEntrance
====================

Simple Jquery plug-in that return the side of an element where mouse is entered

HOW TO USE
====================

````javascript
$("#myDiv").bind('mouseenter',function(e){
  //Side can be left,right,bottom or top
  var side = $(this).detectMouseEntrance(e);
});
````
