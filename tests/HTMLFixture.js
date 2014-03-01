/**
 * Created by serkansipahi on 27.02.14.
 */
function setUpHTMLFixture(){

    console.log('setUpHTMLFixture...');

    var d              = document,
        bodyNode       = d.getElementsByTagName('body')[0],
        testDivFixture = d.createElement('div');

    testDivFixture.id = 'test-id';
    testDivFixture.className = 'test-class';
    testDivFixture.innerHTML = 'Hello World!';

    bodyNode.appendChild(testDivFixture);

}