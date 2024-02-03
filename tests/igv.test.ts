import { Sunat } from "../src/sunat";

describe("IGV calculator", () => {
	it("should calculate the total from base amount", () => {
		const total = Sunat.igv().fromBase(14).getTotal();

		expect(total).toBe(16.52);
	});

	it("should calculate the base from total amount", () => {
		const base = Sunat.igv().fromTotal(117).getBase();

		expect(base).toBe(99.15);
	});

	it("should calculate the total from base amount using another tax rate", () => {
		const base = Sunat.igv().setIgvRate(10).fromBase(100).getTotal();

		expect(base).toBe(110);
	});
});
