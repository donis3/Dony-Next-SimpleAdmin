"use client";
import { useEffect, useState } from "react";

type StoredState<T> = [state: T | undefined, setState: (v: T) => void];

//Load

export default function useStoredState<T>(
	initialValue: T,
	storageKey: string,
): StoredState<T> {
	const [state, setState] = useState<T>(initialValue);

	useEffect(() => {
		try {
			const currentValue = localStorage.getItem(storageKey) as T;
			if (!currentValue) throw new Error(); //jump to catch block if current value doesn't exist
			if (state !== currentValue) {
				console.log(`Current value is ${currentValue} `);
				setState(currentValue);
			}
		} catch (error) {
			//Storage key doesnt exist. Must be the first run. Save initial value to local
			localStorage.setItem(storageKey, initialValue as string);
		}
	}, [state]);

	const setStoredState = (newValue: T) => {
		localStorage.setItem(storageKey, newValue as string);
		setState(newValue);
	};

	return [state, setStoredState];
}
