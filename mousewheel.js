(function(d, w, u){

    'use strict';

    Classy('Mousewheel', {

        __constructor : function(){
            this._init.apply(this, arguments);
        },

        /**
         * @default options
         */
        _defaults : {

        },

       /**
        * @selector matcher
        * _$('#test-id) <--- get domNode
        */
        _$ : null,

        /**
         * @detect featues
         *
         */
        _feature : {
            addEventListener : !!Element.prototype.addEventListener,
            preventDefault   : !!Event.prototype.preventDefault,
            stopPropagation  : !!Event.prototype.stopPropagation,
            querySelectorAll : !!document.querySelectorAll,
            functionBind     : !!Function.prototype.bind,
            // >= IE8, Chrome, Safari, Opera ansonsten 'DOMMouseScroll'
            mousewheel       : !!('onmousewheel' in d.createElement('div'))
        },

        /**
         * @_c = Alisas prefix for constructor
         */
        _cElement  : null,
        _cFunction : null,
        _cArgs     : null,

        /**
         * its depends to _initQuerySelector
         */
        _eventListeners : [],
        _addEventListener : null,
        _removeEventListener : null,

        /**
         * detected mousewheel type
         */
        _mousewheelType : 'mousewheel',

        /**
         * @Helper functions
         */
        _is : function(typeName, value){
            return {}.toString.apply(value) === '[object ' + typeName + ']';
        },
        _isDomNode : function(obj){
            return obj.nodeType > 0;
        },
        _elementExists : function(value){

            var res = true;

            if(this._is('String', value)){

            } else if(this._isDomNode(value) && this._is('Object', value)) {

            }
            return res;
        },

        /**
         * Custom exceptions
         */
        _Exception : function(name, message){
            this.name = name+'Exception';
            this.message = message || 'Default Message';
        },
        _initCustomErrorExceptions : function(){
            this._Exception.prototype = new Error();
            this._Exception.prototype.constructor = this._NullException;
        },

        /**
         * @core logic
         * private methods
         **/
        _init : function(){

            this._initCustomErrorExceptions();

            /*
             * prepare constructor vars
             */
            this._cArgs     = [].slice.apply(arguments) || null;
            this._cElement  = this._cArgs[0] || null;
            this._cFunction = this._cArgs[1] || null;

            if(this._cElement===null && this._cFunction===null) {
                throw new this._Exception('Null', 'do not pass any arguments ( constructor )');
            } else if(this._cFunction===null){
                throw new this._Exception('Null', 'you forget to pass the callback function ( constructor )');
            }

            /**
             * return if we already have instantiated the element
             */
            if(this._isElementInstantiated()){ return; }

            if(!this._elementExists(this._cElement)){
                throw new this._Exception('Exists', 'Element not exists on dom tree');
            }
            if(!this._is('Function', this._cFunction)){
                throw new this._Exception('Exists', 'Could not find callback function');
            }

            this._initEventListener();
            this._initQuerySelector();
            this._mapEventListenersToOnOff();
            this._initMousewheelEventType();

        },
        _initMousewheelEventType : function(){
            if(!this._feature.mousewheel){
                this._mousewheelType = 'DOMMouseScroll';
            }
        },
        _initQuerySelector : function(){

            if(this._feature.querySelectorAll && this._feature.functionBind){
                this._$ = d.querySelectorAll.bind(d);
            } else {
                // > simulate querySelectorAll for ie7, ie8
                // > http://www.codecouch.com/2012/05/adding-document-queryselectorall-support-to-ie-7/
                var s = d.createStyleSheet();
                d.querySelectorAll = function(r, c, i, j, a) {
                    a=d.all, c=[], r = r.replace(/\[for\b/gi, '[htmlFor').split(',');
                    for (i=r.length; i--;) {
                        s.addRule(r[i], 'k:v');
                        for (j=a.length; j--;) { a[j].currentStyle.k && c.push(a[j]); }
                        s.removeRule(0);
                    }
                    return c;
                };
                // > simulate functionBind for ie7, ie8
                // > https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
                Function.prototype.bind = function (oThis) {
                    if (typeof this !== 'function') {
                        throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
                    }
                    var aArgs = Array.prototype.slice.call(arguments, 1),
                        fToBind = this,
                        fNOP = function () {},
                        fBound = function () {
                            return fToBind.apply(this instanceof fNOP && oThis ? this : oThis,
                                aArgs.concat(Array.prototype.slice.call(arguments)));
                        };

                    fNOP.prototype = this.prototype;
                    fBound.prototype = new fNOP();

                    return fBound;
                };
                this._$ = d.querySelectorAll.bind(d);
            }
        },
        _mapEventListenersToOnOff : function(){

            var addEventListener    = Element.prototype.addEventListener,
                removeEventListener = Element.prototype.removeEventListener;

            Element.prototype.on  = addEventListener;
            Element.prototype.off = removeEventListener;

            if (Window) {
                Window.prototype.on  = addEventListener;
                Window.prototype.off = removeEventListener;
            }
        },
        _isElementInstantiated : function(){

        },
        _initEventListener : function(){

            if(!this._feature.preventDefault){
                Event.prototype.preventDefault=function(){
                    this.returnValue=false;
                };
            }
            if(!this._feature.stopPropagation){
                Event.prototype.stopPropagation=function(){
                    this.cancelBubble=true;
                };
            }

            if(!this._feature.addEventListener){

                var context = this;

                this._eventListeners=[];
                this._addEventListener=function(type, listener){

                    var self=this,
                        wrapper=function(e){

                            if(!e) { e = w.event;}

                            e.target= e.srcElement;
                            e.currentTarget=self;
                            if(listener.handleEvent){
                                listener.handleEvent(e);
                            } else {
                                listener.call(self, e);
                            }
                        };

                    this.attachEvent('on'+type, wrapper);
                    context._eventListeners.push({object:this, type:type, listener:listener, wrapper:wrapper});

                };
                this._removeEventListener=function(type, listener){

                    var counter=0,i= 0,eListener;
                    for(i=0,counter=context._eventListeners.length;i<counter;i++){
                        eListener=context._eventListeners[i];
                        if(eListener.object!==this && eListener.type!==type && eListener.listener!==listener){
                            continue;
                        }
                        this.detachEvent('on'+type, eListener.wrapper); delete context._eventListeners[i];
                    }
                };

                Element.prototype.addEventListener=this._addEventListener;
                Element.prototype.removeEventListener=this._removeEventListener;

                if (Window) {
                    Window.prototype.addEventListener=this._addEventListener;
                    Window.prototype.removeEventListener=this._removeEventListener;
                }

            }

        },

        /*
         * public methods
         * detach event or destroy instance
         **/
        destroy : function(){

        }

    }, true);

}(document, this, void(0)));