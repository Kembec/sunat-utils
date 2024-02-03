import { Dni } from "./modules/documents/dni";
import { Ruc } from "./modules/documents/ruc";
import { Currency } from "./modules/operations/currency";
import { Igv } from "./modules/operations/igv";

export class Sunat {
	public static ruc(): Ruc {
		return new Ruc();
	}

	public static dni(): Dni {
		return new Dni();
	}

	public static igv(): Igv {
		return new Igv();
	}

	public static currency(): Currency {
		return new Currency();
	}
}
