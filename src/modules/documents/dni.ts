import { Document } from "./document";

export class Dni implements Document {
	private haveCorrectLength(value: string): boolean {
		return value.length === 8;
	}

	private isNumeric(value: string): boolean {
		return /^-?\d+$/.test(value);
	}

	public isValid(value: string): boolean {
		return this.haveCorrectLength(value) && this.isNumeric(value);
	}

	public fake(): string {
		let fakeDni = "";
		for (let i = 0; i < 8; i++) {
			fakeDni += Math.floor(Math.random() * 10).toString();
		}

		return fakeDni;
	}
}
