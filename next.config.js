/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	env: {
		build_mode:
			process.env.NODE_ENV === "development"
				? "development"
				: "production",
	},
};

module.exports = nextConfig;
