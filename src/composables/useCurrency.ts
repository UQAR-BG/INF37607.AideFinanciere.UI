/*  Tout le crédit de l'idée pour la conversion d'un montant en un string 
	affichant le montant formatté selon une certaine devise doit être porté à Joel Olawanle. 
	Date: 3 novembre 2022,
	Repéré à https://www.freecodecamp.org/news/how-to-format-number-as-currency-in-javascript-one-line-of-code/*/

import { Currency, CurrencyStyle, Locales } from "@/types/currency";

export const useCurrency = (
	locales: Locales = Locales.frCA,
	style: CurrencyStyle = CurrencyStyle.Currency,
	currency: Currency = Currency.CAD
) => {
	const params = reactive({
		locales: computed(() => locales.toString()),
		style: computed(() => style.toString()),
		currency: computed(() => currency.toString())
	});

	const formatter = new Intl.NumberFormat(params.locales, {
		style: params.style,
		currency: params.currency
	});

	const format = (value: number | bigint): string => {
		return formatter.format(value);
	};

	return {
		format
	};
};
