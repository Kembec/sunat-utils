import { Sunat } from "../src/sunat";

describe("DNI validator", () => {
	it("should return true with valid DNI", () => {
		expect(Sunat.dni().isValid("20463726")).toBeTruthy();
	});

	it("should return false when the DNI is not number", () => {
		expect(Sunat.dni().isValid("asf")).toBeFalsy();
	});

	it("should return false when the DNI have an incorrect length", () => {
		expect(Sunat.dni().isValid("2046372")).toBeFalsy();
	});

	it("creates a fake valid DNI", () => {
		const fakeDni = Sunat.dni().fake();

		expect(Sunat.dni().isValid(fakeDni)).toBeTruthy();
	});
});
