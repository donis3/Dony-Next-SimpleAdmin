"use client";
import { useEffect } from "react";
import useStoredState from "./useStoredState";
import { log } from "./helpers/log";

type useLocaleProps = {
	language?: string;
};

/**
 * Generate helper functions for displaying dates and numbers in users browser locale
 * @param language Initial language setting to override browser locale.
 * Only works initially then the data is locally stored. use the provided changeLocale function to change locale manually after initialization.
 *
 * @returns language, formatCurrency, changeLocale, formatDate
 */
export default function useLocale({ language }: useLocaleProps = {}) {
	const [locale, setLocale] = useStoredState(
		language ?? "en-US",
		"user-locale",
	);
	useEffect(() => {
		// IF a language is not provided, detect browser locale
		if (!language) {
			if (navigator.language) setLocale(navigator.language);
		}
	}, []);

	function isValidLocaleCode(locale: string): boolean {
		// Regular expression to validate BCP 47 language tags
		const localeRegex = /^[a-z]{2}(-[a-zA-Z]{2})?$/;
		return localeRegex.test(locale);
	}

	/**
	 * Change locale language
	 * @param newLocale
	 * @returns
	 */
	function changeLocale(newLocale?: string) {
		//If no locale provided, switch to browser locale
		if (!newLocale) {
			if (navigator.language && navigator.language !== locale) {
				setLocale(navigator.language);
			}
			return;
		}
		if (newLocale !== locale && isValidLocaleCode(newLocale))
			setLocale(newLocale);
	}

	function formatCurrency(amount: number, currency: string) {
		try {
			return new Intl.NumberFormat(locale, {
				style: "currency",
				currency: currency,
			}).format(amount);
		} catch (error: unknown) {
			if (error instanceof Error) log(error.message);
		}
		return `${amount} ${currency}`;
	}

	function formatDate(date?: string | Date): string {
		let givenDate: any;

		if (date && date instanceof Date) {
			givenDate = date;
		} else if (typeof date === "string") {
			givenDate = new Date(date);
		} else {
			givenDate = new Date();
		}

		try {
			return new Intl.DateTimeFormat(locale).format(givenDate);
		} catch (error) {
			if (error instanceof Error) log(error.message);
			return date as string;
		}
	}

	return { language: locale, formatCurrency, changeLocale, formatDate };
}
