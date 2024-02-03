export class Currency {
	private fractionDigits: number = 2;

	public setFractionDigits(value: number): Currency {
		this.fractionDigits = Math.abs(value);

		return this;
	}

	public formatSoles(value: number): string {
		const formatter = new Intl.NumberFormat("es-PE", {
			style: "currency",
			currency: "PEN",
			minimumFractionDigits: this.fractionDigits,
		});

		return formatter.format(value);
	}

	public formatDollars(value: number): string {
		const formatter = new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: "USD",
			minimumFractionDigits: this.fractionDigits,
		});

		return formatter.format(value);
	}
}
