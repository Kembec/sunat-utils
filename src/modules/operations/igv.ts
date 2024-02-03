export class Igv {
	private igvRate: number = 0.18;
	private roundDecimals: number = 2;
	private total: number = 0;
	private base: number = 0;
	private igv: number = 0;

	private round(value: number): number {
		const factor = Math.pow(10, this.roundDecimals);

		return Math.round(value * factor) / factor;
	}

	public setIgvRate(value: number): Igv {
		this.igvRate = Math.abs(value) / 100;

		return this;
	}

	public setRound(value: number): Igv {
		this.roundDecimals = Math.abs(value);

		return this;
	}

	public fromBase(base: number): Igv {
		this.base = Math.abs(base);
		this.igv = this.base * this.igvRate;
		this.total = this.base + this.igv;

		return this;
	}

	public fromTotal(total: number): Igv {
		this.total = Math.abs(total);
		this.base = this.total / (1 + this.igvRate);
		this.igv = this.total - this.base;

		return this;
	}

	public getRate(): number {
		return this.igvRate * 100;
	}

	public getTotal(): number {
		return this.round(this.total);
	}

	public getBase(): number {
		return this.round(this.base);
	}

	public getIgv(): number {
		return this.round(this.igv);
	}
}
