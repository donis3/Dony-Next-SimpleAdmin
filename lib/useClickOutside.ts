import { useEffect, useRef } from "react";

/**
 * Listen for mouse events and call cb if mouse click was outside the referenced element.
 * Use generic T to specify the subject element type
 * @param cb callback function
 * @param additionalElementsQuery A css selector string to add as additional click allowed objects. Ex: #navbar or Ex: header
 * @returns a useRef object. Assign it to the subject element using ref={ref}
 */
export default function useClickOutside<T>(
	cb?: () => void,
	additionalElementsQuery?: string | undefined,
) {
	const ref = useRef<T>(null);
	let additionalElements: HTMLElement | null = null;

	/**
	 * Determine if the mouse event target was inside the ref.current html element.
	 * Call the callback (cb) function if target was outside the ref.
	 * @param e
	 * @returns
	 */
	const handleClickOutside = (e: MouseEvent) => {
		if (!cb || !ref.current) return;
		if (
			ref.current instanceof HTMLElement &&
			!ref.current.contains(e.target as Node)
		) {
			//Check other
			if (
				additionalElements instanceof HTMLElement &&
				additionalElements.contains(e.target as Node)
			) {
				//console.log("Clicked in additional elements! Wont execute callback!");
				return;
			}
			cb?.();
		}
	};

	//On mount, add event listener, on unmount remove event listener
	useEffect(() => {
		//If a query string was provided, try and select it
		if (additionalElementsQuery)
			additionalElements = document.querySelector(
				additionalElementsQuery,
			);

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);
	return ref;
}
