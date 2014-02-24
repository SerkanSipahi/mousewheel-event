(function(document, window, undefined){

    'use strict';

    var Mousewheel = Classy('Mousewheel', {

        __constructor : function(){
            var args = arguments;
            this.init();
        },

        prop_1 : null,
        prop_2 : null,

        init : function(){

        }

    });

    new Mousewheel('#some-element', function(event){
        //do something
    });


}(document, this, void(0)));