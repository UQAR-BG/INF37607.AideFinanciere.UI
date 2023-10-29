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
		return value.toLocaleDateString(params.locales, options);
	};

	return {
		format
	};
};
