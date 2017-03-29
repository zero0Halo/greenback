# Greenback

----
## Introduction

Greenback is a lightweight DOM manipulation tool with jQuery-like syntax. I wanted a DOM manipulation tool that was easy to use and syntactically brief, but without the bloat that comes along with jQuery.

Greenback is written in es6/es2015, but is transpiled via Babel for npm usage.

----
## Installation
    npm install greenback --save-dev

----
## Usage

Lets say for example that I wanted to create a new `section` with the class of `example`.

    let $ = require('greenback');

    let $section = $('section').class('example');

Then later on in my project, I wanted to attach that element to another I created called `$header`...

    $section.append($header);

Like jQuery, DOM nodes can be assigned to variables, also known as caching, then referenced later.

## Invoking

All methods must be used after invoking Greenback, so $.METHOD_NAME won't do much of anything. In addition, there are a few features to note about using it.

**Creating a new DOM node**

Unlike jQuery, Greenback is not designed to blindly grab all tags of a certain type. So this syntax will actually create a new DOM node.

    let $tag = $('TAG_NAME');    // $('div'); would create a new div tag

**Capturing multiple DOM nodes**

One of the points of this library was not to make sweeping changes to DOM elements. If you do want to grab more than one DOM element at once, assign a class to them and invoke Greenback to capture them all.

    let $classElements = $('.EXAMPLE_CLASS_NAME');

**Getting the first element of a set**

But even then there are times when you may just want the first element using that classname. In that case, you can use the pseudo-tag, `first`.

    let $firstElement = $('.EXAMPLE_CLASS_NAME:first');

**Element with multiple classes**

You may want to capture an element with two (or more) classes.

    let $active = $('.EXAMPLE_CLASS_NAME.EXAMPLE_ACTIVE_NAME');

**By ID**

Even though ID's are generally frowned upon, Greenback supports capturing them as well.

    let $myId = $('#EXAMPLE_ID');


## Methods

*All methods are chainable.*

###find(string)

> Finds an element(s) of the given type and returns a new reference to it.

    let $rows = $('.fake-table').find('.row');

### text(string)

> Inserts text into the node

    let $hello = $('div').text('Hello World!');

### html(string)

> Inserts html into the node

    let $goodbye = $('div').html('<strong>Goodbye!</strong>');

### attr(object)

>Assigns attributes to the node. Note that this does not check to see if the attribute(s) is/are valid.

    let $link = $('img').attr({ src: 'image.gif, border: 0});

### class(string)

>Assign a class, or classes, to a node

    let $h1 = $('h1').class('large and-in-charge');

### removeClass(string)

>Removes a given class from a node

    $h1.removeClass('large');

### on(string, function)

>Attaches a given event to the node.

    $link.on('click', e => {
      console.log('I was clicked:', e);
    });

*Be careful! Right now Greenback does not have an `off` method. Events attached this way may lead to memory problems if the node the event is attached to is removed from the DOM*

### append(DOM node or Greenback Object) *updated in 1.2.0*

>Appends a node or Greenback object to the invoked Greenback object.

    $h1.append( $someStuffAtTheBottom );

### prepend(DOM node or Greenback Object) *updated in 1.2.0*

>Prepends a node or Greenback object to the invoked Greenback object.

    $h1.prepend( $someStuffAtTheTop );

### appendTo(DOM node or Greenback Object) *added in 1.2.0*

>Appends the invoked Greenback object to a node or Greenback object.

    $someStuffAtTheBottom.append( $h1 );

### prependTo(DOM node or Greenback Object) *added in 1.2.0*

>Prepends the invoked Greenback object to a node or Greenback object.

    $someStuffAtTheTop.prependTo( $h1 );