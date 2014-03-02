/**
 * Created by serkansipahi on 27.02.14.
 */
function setUpHTMLFixture(){

    var d              = document,
        bodyNode       = d.getElementsByTagName('body')[0],
        testDivFixture = d.createElement('div');

    testDivFixture.id = 'test-id';
    testDivFixture.className = 'test-class';
    testDivFixture.innerHTML =

    '<div class="main-outer-wrapper">'+
        '<div id="some-id">Im id</div>'+
        '<div class="other-class">Im class</div>'+
        '<div class="some-class" data-test="foo">Im class with attribute [data-test="foo"]</div>'+
        '<div id="some-class" data-test="foo">Im id with attribute [data-test="foo"]</div>'+
        '<div id="some-class-2" data-test-1="foo" data-test-2="boo">Im id with attribute 2 x [data-test="foo"]</div>'+
        '<div class="some-wrapper-class" data-wrapper="true">'+
            '<div id="inner-wrapper">'+
                '<div class="some-class" data-kind="liya">im liya</div>'+
                '<div id="some-class-5" data-vater="serkan">im serkan</div>'+
                '<div class="some-class-3" data-mutter="serkan">im goekcen</div>'+
            '</div>'+
        '</div>'+
    '</div>';

    bodyNode.appendChild(testDivFixture);

}