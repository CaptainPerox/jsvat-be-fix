var expect = require('chai').expect;
var assert = require('chai').assert;
var VatChecker = require('../dist/jsvat.js');

describe("VatChecker", function () {

    describe("Valid VAT", function () {

        it("Valid VAT", function () {
            expect(VatChecker.checkVATNumber('RO4594917')).to.be.true;
        });

        it("Valid VAT with spaces", function () {
            expect(VatChecker.checkVATNumber('RO 459 491 7')).to.be.true;
        });

        it("Valid VAT with '-'", function () {
            expect(VatChecker.checkVATNumber('RO-459-491-7')).to.be.true;
        });

        it("Valid for UK (9 digits)", function () {
            expect(VatChecker.checkVATNumber(123456789)).to.be.true;
        });
    });

    describe("Invalid VAT", function () {

        it("valid invalid VAT", function () {
            return expect(VatChecker.checkVATNumber('RO459491721323')).to.be.false;
        });

        it("long string number", function () {
            return expect(VatChecker.checkVATNumber('12321323123213456546')).to.be.false;
        });

        it("long digit number", function () {
            return expect(VatChecker.checkVATNumber(1123587867867843562321323123213)).to.be.false;
        });

        it("short digit number", function () {
            return expect(VatChecker.checkVATNumber(1)).to.be.false;
        });

        it("empty value", function () {
            return expect(VatChecker.checkVATNumber()).to.be.false;
        });

        it("empty string value", function () {
            return expect(VatChecker.checkVATNumber("")).to.be.false;
        });

    });


});