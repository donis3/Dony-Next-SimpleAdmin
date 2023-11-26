export function log(...params: any[]) {
	if (process.env.build_mode === "development") console.log(...params);
}
