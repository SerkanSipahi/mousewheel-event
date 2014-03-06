describe("Initialize Helper/Crossbrowser functions...", function() {

    //Fixtures
    var instance        = {},
        ObjectFixture   = {},
        ArrayFixture    = [],
        FunctionFixture = function(){},
        StringFixture   = '',
        NULLFixture     = null;

    setUpHTMLFixture();

    instance = new Mousewheel('#test-id', function(e){
        console.log(e);
    });

    describe('Type Testing:', function(){

        it("is an Object", function() {
            expect(instance._is('Object', ObjectFixture)).toBe(true);
        });
        it("is a Function", function() {
            expect(instance._is('Function', FunctionFixture)).toBe(true);
        });
        it("is an Array", function() {
            expect(instance._is('Array', ArrayFixture)).toBe(true);
        });
        it("is an String", function() {
            expect(instance._is('String', StringFixture)).toBe(true);
        });
        // > not working on IE8
        it("is a Null", function() {
            expect(instance._is('Null', NULLFixture)).toBe(true);
        });


    });

    describe("check constructor vars", function() {

        it("...", function() {
            //....
        });
    });

    //works fine with ie8,9,10,11
    describe("selector match Testing:", function() {

        var result = null;

        it("body tag", function() {
            result = instance._$('body')[0].innerHTML;
            expect(result).not.toBeUndefined();
            expect(result).toMatch(/im liya/);
        });
        it("class", function() {
            result = instance._$('.other-class')[0].innerHTML;
            expect(result).not.toBeUndefined();
            expect(result).toMatch(/Im class/);
        });
        it("class with dataset attribute", function() {
            result = instance._$('.some-class[data-test="foo"]')[0].innerHTML;
            expect(result).not.toBeUndefined();
            expect(result).toMatch(/Im class with attribute \[data-test="foo"\]/);
        });
        it("id 2 x datasets", function() {
            result = instance._$('#some-class-2[data-test-1="foo"][data-test-2="boo"]')[0].innerHTML;
            expect(result).not.toBeUndefined();
            expect(result).toMatch(/Im id with attribute 2 x \[data-test="foo"\]/);
        });
        it("simple nested selector query", function() {
            result = instance._$('.main-outer-wrapper .some-wrapper-class #some-class-5')[0].innerHTML;
            expect(result).not.toBeUndefined();
            expect(result).toMatch(/im serkan/);
        });
        it("simple nested selector query + datasets attributes", function() {
            result = instance._$('.main-outer-wrapper .some-wrapper-class[data-wrapper="true"] .some-class-3')[0].innerHTML;
            expect(result).not.toBeUndefined();
            expect(result).toMatch(/im goekcen/);
        });

        it("multiple selector matching", function() {
            result = instance._$('#some-id, .other-class, #some-class-5');
            expect(3).toEqual(result.length);
        });

    });

    describe("addEventHandler Testing( single item ):", function() {

        it("click test", function() {

            //attach event
            instance._$('#some-id')[0].on('click', function(e){
                console.log('Hello World');
            });

            // > YUI click not working on IE8
            // > but tested manuell on index.html and its work!

            YUI().use('node-event-simulate', function(Y) {
                Y.one("#some-id").simulate("click");
            });

        });
    });

    describe("removeEventHandler Testing( single item ):", function() {

        it("click test", function() {

            //attach event
            var customFunction = function(e){
                console.log('Hello World');
            };

            instance._$('#some-id')[0].on('click', customFunction)
                                      .off('click', customFunction);

            // > YUI click not working on IE8
            // > but tested manuell on index.html and its work!

            YUI().use('node-event-simulate', function(Y) {
                Y.one("#some-id").simulate("click");
                instance = {};
            });

        });
    });

});

describe("Adjust Mousewheel event values...", function() {

    //Fixtures
    var instance = {};

    it("click test", function() {

        new Mousewheel('#some-id', function(e){
            console.log(e);
        });

        YUI().use('node-event-simulate', function(Y) {
            Y.one("#some-id").simulate("scroll");
            instance = {};
        });

    });



});

