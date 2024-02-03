import { Sunat } from "../src/sunat";

describe("RUC validator", () => {
	it("should return true with valid RUC", () => {
		expect(Sunat.ruc().isValid("20131312955")).toBeTruthy();
	});

	it("should return false when the RUC is not number", () => {
		expect(Sunat.ruc().isValid("asf")).toBeFalsy();
	});
	it("should return false when the RUC have an incorrect length", () => {
		expect(Sunat.ruc().isValid("2013131295")).toBeFalsy();
	});

	it("should return false when the RUC begins with incorrect two digits", () => {
		expect(Sunat.ruc().isValid("14131312955")).toBeFalsy();
	});

	it("should return false when the RUC have an incorrect last digit", () => {
		expect(Sunat.ruc().isValid("20131312951")).toBeFalsy();
	});

	it("creates a fake valid RUC", () => {
		const fakeRuc = Sunat.ruc().fake();

		expect(Sunat.ruc().isValid(fakeRuc)).toBeTruthy();
	});
});
