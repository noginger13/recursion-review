// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  //console.log(document.childNodes[1].childNodes[0].childNodes);
  //When there is a child node, go into child node
  //Compare the class name of child with target class name
  //If match then push to result array
  //return array

  console.log(document.getElementsByClassName(className));

  var targetElements = [];

  var helperFunction = function(children) {
    for (var i = 0; i < children.length; i++) {
      if (typeof(children[i].className) === 'string') {
        var classString = children[i].className;
        if (classString.indexOf(className) !== -1) {
          targetElements.push(children[i]);
        }
      }

      if (children[i].hasChildNodes()) {
        helperFunction(children[i].childNodes);
      }
    }
  };
  helperFunction(document.childNodes);
  return targetElements;
};
