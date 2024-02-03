import { Document } from "./document";

export class Ruc implements Document {
	private isNumeric(value: string): boolean {
		return /^-?\d+$/.test(value);
	}

	private haveCorrectLength(value: string): boolean {
		if (value.length !== 11) {
			return false;
		}

		return true;
	}

	private verifyRucType(value: string): boolean {
		const rucType = value.substring(0, 2);

		if (!["10", "15", "17", "20"].includes(rucType)) {
			return false;
		}

		return true;
	}

	private verifyLastDigit(value: string): boolean {
		const weights = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
		let sum = 0;
		for (let i = 0; i < 10; i++) {
			sum += parseInt(value.charAt(i), 10) * weights[i];
		}

		const checkDigit = (11 - (sum % 11)) % 10;
		const lastDigit = parseInt(value.charAt(10), 10);

		return checkDigit === lastDigit;
	}

	public isValid(value: string): boolean {
		return (
			this.isNumeric(value) &&
			this.haveCorrectLength(value) &&
			this.verifyRucType(value) &&
			this.verifyLastDigit(value)
		);
	}

	public fake(): string {
		const types = ["10", "15", "17", "20"];
		const selectedType = types[Math.floor(Math.random() * types.length)];
		let fakeRuc = selectedType;

		for (let i = 2; i < 10; i++) {
			fakeRuc += Math.floor(Math.random() * 10).toString();
		}

		const weights = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
		let sum = 0;
		for (let i = 0; i < 10; i++) {
			sum += parseInt(fakeRuc.charAt(i), 10) * weights[i];
		}
		const checkDigit = (11 - (sum % 11)) % 10;
		fakeRuc += checkDigit.toString();

		return fakeRuc;
	}
}
