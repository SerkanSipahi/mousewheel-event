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
        _$      : null,
        _$$     : null,
        _$id    : null,
        _$class : null,
        _$tag   : null,

        /*
         * @detect featues
         *
         */
        feature : {
            addEventListener : !!Element.prototype.addEventListener,
            querySelectorAll : !!document.querySelectorAll,
            functionBind     : !!Function.prototype.bind,
            // >= IE8, Chrome, Safari, Opera ansonsten 'DOMMouseScroll'
            mousewheel       : !!('onmousewheel' in document.createElement('div'))
        },

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
            return true;
        },
        _isDomElement : function(value){
            //http://stackoverflow.com/questions/384286/javascript-isdom-how-do-you-check-if-a-javascript-object-is-a-dom-object
        },
        _elementExists : function(value){
            if(this._isDomElement(value)){

            } else {

            }
            return true;
        },

        /*
         * Custom exceptions
         */
        _NullException : function(message){
            this.message = message;
            this.name = 'NullException';
        },
        _ExistsException : function(message){
            this.message = message;
            this.name = 'ExistsException';
        },

        /*
         * @core logic
         * private methods
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
             * return if we already have instantiated the element
             */
            if(this._isElementInstantiated()){ return; }

            /*
             * check constructor vars
             */
            if(!this._elementExists(this._cElement)){
                throw new this._ExistsException('Element not exists on dom tree');
            }
            if(!this._isFunction(this._cFunction)){
                throw new this._ExistsException('Could not find callback function');
            }

            /*
             * detect features
             */
            if(this.feature.querySelectorAll && this.feature.functionBind){
                this._initFeatureFunction('native');
            } else {
                this._initFeatureFunction('fallback');
            }

            /*
             * prepare event listener
             */

            this._prepareEventListener();


        },
        _initFeatureFunction : function(value){
            if(value==='native'){
                console.log('native Feature');
                this._$      = d.querySelectorAll.bind(d);
                this._$$     = d.querySelector.bind(d);
                this._$id    = d.getElementById.bind(d);
                this._$class = d.getElementsByClassName.bind(d);
                this._$tag   = d.getElementsByTagName.bind(d);
            } else if(value==='fallback'){
                console.log('fallback Feature');
                console.log('$', this._$);
                this._$      = w.$ || null;
            }
        },
        _isElementInstantiated : function(){

        },
        _prepareEventListener : function(){

        },

        /*
         * public methods
         * detach event or destroy instance
         **/
        destroy : function(){

        }

    }, true);

}(document, this, void(0)));