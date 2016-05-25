describe('app', function ()
{
    'use strict';

    var app = window.app;

    describe('reverseNumber', function () {
        it('should reverse the number', function () {
            expect(app.reverseNumber(1234)).toEqual(4321);
            expect(app.reverseNumber(8543)).toEqual(3458);
        });
        it('should reverse the number from "number string"', function () {
            expect(app.reverseNumber('3334433')).toBe(3344333);
        });
        it('should not return a string', function () {
            expect(app.reverseNumber(1234)).not.toBe('4321');
            expect(app.reverseNumber(8543)).not.toBe('3458');
        });
        it('should not accept not number as an argument', function () {
            expect(app.reverseNumber([])).not.toEqual(false);
        });
        it('should return single number', function () {
            expect(app.reverseNumber(5)).toBe(5);
            expect(app.reverseNumber(8)).toBe(8);
        });
    });
});
