# Greenback Changelog

----
## v1.2.3

* First implementation of tests, which for now only cover DOM element creation and getting

* minified version of greenback now in the dist folder as greenback.min.js


## v1.2.0

* Fixed a bug where prepend() simply wasn't working

* prepend() and append() now work like jQuery's methods

* added new methods, prependTo() and appendTo(), which work like jQuery's methods

* prepend(), append(), prependTo() and appendTo() can now accept a DOM element reference, or a greenback object

  * a new helper method was added, _getDomElement(), which does a quick check to see what was passed and returns a DOM element

## v1.1.2

* Added sourcemaps to the build process