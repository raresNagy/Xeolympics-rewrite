import type { Actions } from "./$types";

export const actions = {
	default: async (event) => {
		const formData = Object.fromEntries(await event.request.formData());
		console.table(formData);
	},
} satisfies Actions;
