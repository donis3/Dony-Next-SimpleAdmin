"use client";

import { useState } from "react";

export default function ClientComponent() {
	const [count, setCount] = useState(0);

	return (
		<button type="button" onClick={() => setCount((c) => c + 1)} className="p-1 bg-gray-600 rounded-lg text-white">
			Clicked me {count} times!
		</button>
	);
}
