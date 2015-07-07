'use strict';

describe('Directive: celular', function () {

  // load the directive's module
  beforeEach(module('celularApp'));

  var element, scope, template;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('A single letter is converted to a number: A', inject(function ($compile) {
    scope.valor = 'A';
    element = angular.element('<celular valor="A"></celular>');
    element = $compile(element)(scope);
    scope.$digest();
    expect(element.text()).toMatch('2');
  }));

  it('A single letter is converted to a number: B', inject(function ($compile) {
    scope.valor = 'B';
    element = angular.element('<celular valor="B"></celular>');
    element = $compile(element)(scope);
    scope.$digest();
    expect(element.text()).toMatch('22');
  }));

  it('A single letter is converted to a number: D', inject(function ($compile) {
    scope.valor = 'D';
    element = angular.element('<celular valor="D"></celular>');
    element = $compile(element)(scope);
    scope.$digest();
    expect(element.text()).toMatch('3');
  }));
/*
  it('A single letter is converted to a number: (space)', inject(function ($compile) {
    scope.valor = ' ';
    element = angular.element('<celular valor=" "></celular>');
    element = $compile(element)(scope);
    scope.$digest();
    expect(element.text()).toMatch('0');
  }));
*/
  it('A single letter is converted to a number: Z', inject(function ($compile) {
    scope.valor = 'Z';
    element = angular.element('<celular valor="Z"></celular>');
    element = $compile(element)(scope);
    scope.$digest();
    expect(element.text()).toMatch('9999');
  }));

  it('A single letter is converted to a number: C', inject(function ($compile) {
    scope.valor = 'C';
    element = angular.element('<celular valor="C"></celular>');
    element = $compile(element)(scope);
    scope.$digest();
    expect(element.text()).toMatch('222');
  }));

  it('A single word is converted to numbers', inject(function ($compile) {
    scope.valor = 'ADG';
    element = angular.element('<celular valor="ADG"></celular>');
    element = $compile(element)(scope);
    scope.$digest();
    expect(element.text()).toMatch('234');
  }));

  it('A single spaced word is converted to numbers (OMG) 1/2', inject(function ($compile) {
    scope.valor = 'ADG A';
    element = angular.element('<celular valor="ADG A"></celular>');
    element = $compile(element)(scope);
    scope.$digest();
    expect(element.text()).toMatch('23402');
  }));

  it('A single spaced word is converted to numbers (OMG) 2/2', inject(function ($compile) {
    scope.valor = 'A D G A';
    element = angular.element('<celular valor="A D G A"></celular>');
    element = $compile(element)(scope);
    scope.$digest();
    expect(element.text()).toMatch('2030402');
  }));

  it("should return '77773367_7773302_222337777_777766606660366656667889999_9999555337777' when pass 'SEMPRE ACESSO O DOJOPUZZLES'", inject(function ($compile) {
    scope.valor = 'SEMPRE ACESSO O DOJOPUZZLES';
    element = angular.element('<celular valor="SEMPRE ACESSO O DOJOPUZZLES"></celular>');
    element = $compile(element)(scope);
    scope.$digest();
    expect(element.text()).toMatch('77773367_7773302_222337777_777766606660366656667889999_9999555337777');
  }));

});
