
setUpHTMLFixture();

describe("Type Testing:", function() {

    //Fixtures
    var instance        = {},
        ObjectFixture   = {},
        ArrayFixture    = [],
        FunctionFixture = function(){},
        StringFixture   = '',
        NULLFixture     = null;

    beforeEach(function() {
        //init
        instance = new Mousewheel('#test-id', function(e){

        });
    });
    afterEach(function() {
        //destroy
        instance = {};
    });

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

describe("selector match Testing:", function() {


    //testen

    // > instance._$('body')
    // > instance._$('some-id')
    // > instance._$('some-class')
    // > instance._$('body[id="foo"]')

});


describe("eventHandler Testing:", function() {

    /*
    var t = document.getElementById('test-id');
    t.addEventListener('click', function(){
       console.log('im clicked');
    });
    */

    YUI().use('node-event-simulate', function(Y) {
        Y.one("#test-id").simulate("click");
    });

    it("is an Object", function() {
        expect(true).toBe(true);
    });
});

