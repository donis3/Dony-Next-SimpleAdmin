"use client";
import { useEffect, useState } from "react";
import { log } from "./helpers/log";

export default function usePersistentState<T>(
	initialValue: T,
	key: string,
): [T, (value: T) => void] {
	const [state, setInternalState] = useState<T>(initialValue);

	useEffect(() => {
		try {
			const value = localStorage.getItem(key);

			if (!value) return;

			setInternalState(JSON.parse(value));
		} catch (error) {
			log("Error saving internal state", error);
		}
	}, [key]);

	const setState = (value: T) => {
		try {
			localStorage.setItem(key, JSON.stringify(value));
		} catch (error) {
			log("Error setting internal state", error);
		}
		//Set app state regardless of storage err
		setInternalState(value);
	};

	return [state, setState];
}
