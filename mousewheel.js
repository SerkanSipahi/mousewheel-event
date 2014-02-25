(function(d, w, u){

    'use strict';

    Classy('Mousewheel', {

        __constructor : function(){
            this._init.apply(this, arguments);
        },

        /*
         * @default options
         */
        _defaults : {

        },

       /*
        * @collection of useful selector matcher
        */
        _$         : d.querySelector.bind(d),
        _$$        : d.querySelectorAll.bind(d),
        _$id       : d.getElementById.bind(d),
        _$class    : d.getElementsByClassName.bind(d),
        _$tag      : d.getElementsByTagName.bind(d),

        /*
         * @_c = Alisas prefix for constructor
         */
        _cElement  : null,
        _cFunction : null,
        _cArgs     : null,

        /*
         * @Helper functions
         */
        _protoToString : {}.toString,
        _isFunction : function(value){

        },
        _isString : function(value){

        },
        _isDomElement : function(value){
            //http://stackoverflow.com/questions/384286/javascript-isdom-how-do-you-check-if-a-javascript-object-is-a-dom-object
        },
        _elementExists : function(value){

        },

        /*
         * Custom exceptions
         */
        _NullException : function(message){
            this.message = message;
            this.name = 'NullException';
        },

        /*
         * @core logic
         **/
        _init : function(){

            /*
             * prepare constructor vars
             */
            this._cArgs     = [].slice.apply(arguments) || null;
            this._cElement  = this._cArgs[0] || null;
            this._cFunction = this._cArgs[1] || null;

            if(this._cElement===null && this._cFunction===null) {
                throw new this._NullException('do not pass any arguments ( constructor )');
            } else if(this._cFunction===null){
                throw new this._NullException('you forget to pass the callback function ( constructor )');
            }

            /*
             * check constructor vars
             */


            /*
             * prepare event listener
             */

        }

    }, true);

}(document, this, void(0)));