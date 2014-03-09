#### Mousewheel-Eventhandler - Alpha Release 1

#### Usage

````js
var instance = new Mousewheel('#some-id', function(e){
    e.preventDefault();
    // > console.dir for log objects in IE8(Browsermode) --> IE10 Dev-Tool
    console.dir(e);
    // > or log e.__mousewheel__
    // collection of useful mousewheel properties
    console.dir(e.__mousewheel__);
});
````

#### Features

- Tablet/Smartphone Support
- AMD, CommonJs Support( requirejs, nodejs  )
- no dependencies( Vanillajs, plain Javascript )

#### Browser Support
- Crossbrowser Support
    - Chrome, Firefox, Opera, Safari, IE8, 9, 10, 11

#### Notes

Copyright (c) 2014 Serkan Sipahi <serkan.sipahi@yahoo.de>

Licensed under the MIT license
