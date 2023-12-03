import { Locales } from "@/types/currency";

export const useDate = (locales: Locales = Locales.frCA) => {
	const params = reactive({
		locales: computed(() => locales.toString())
	});

	const defaultOptions: Intl.DateTimeFormatOptions = {
		dateStyle: "long"
	};

	const format = (
		value: Date,
		options: Intl.DateTimeFormatOptions = defaultOptions
	) => {
		return value instanceof Date
			? value.toLocaleDateString(params.locales, options)
			: new Date(value).toLocaleDateString(params.locales, options);
	};

	const getFullYear = (value: Date) => {
		return value instanceof Date
			? value.getFullYear()
			: new Date(value).getFullYear();
	};

	return {
		format,
		getFullYear
	};
};
