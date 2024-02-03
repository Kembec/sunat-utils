import { Sunat } from "../src/sunat";

describe("Currency Test", () => {
	it("creates a currency in PEN", () => {
		const currency = Sunat.currency().formatSoles(121314);

		expect(currency).toBe("S/ 121,314.00");
	});

	it("creates a currency in USD", () => {
		const currency = Sunat.currency().formatDollars(142123);

		expect(currency).toBe("$142,123.00");
	});
});
