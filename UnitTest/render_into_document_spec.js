/*@jsx React.DOM*/
var React = require("react/addons");
var TestUnits = React.addons.TestUnits;

var HelloWorld = require('hello_world');

describe("HelloWorld",function(){
	describe("renderIntoDocument",function(){
		it('should render the component',function(){
			// TestUnits.renderIntoDocument(<helloworld></helloworld>);
		})
	})
})
// 
describe("第一个测试", function () {
    it("test", function () {
        expect(5).toEqual(TT());
    });
});

// describe("test2",function(){
// 	it("test",function(){
// 		expect("abc").toEqual(bb())
// 	})
// })