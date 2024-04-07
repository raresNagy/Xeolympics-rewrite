import type { Actions } from "./$types";
import { ZodError, z } from "zod";

const registerSchema = z.object({
	teamNumber: z
		.number({ required_error: "Team number is required" })
		.min(1, "Team number is required")
		.max(5, { message: "Team number must not be longer than 5 characters" })
		.positive({ message: "Team number must pe positive" })
		.finite({ message: "Team number should be a finite number" })
		.safe({ message: "Team number should be a safe integer" }),
	username: z
		.string({ required_error: "Name is required" })
		.min(1, { message: "Username must contain at least one character" })
		.max(64, { message: "Username must not have more than 64 characters" })
		.trim(),
	email: z
		.string({ required_error: "E-mail address is required" })
		.min(1, { message: "E-mail address is required" })
		.email({ message: "Not a valid E-mail address" }),
	password: z
		.string({ required_error: "Password is required" })
		.min(8, { message: "Password should be at least 8 characters long" })
		.trim(),
	confirmPassword: z
		.string()
		.min(8, { message: "Password should be at least 8 characters long" })
		.trim(),
});

export const actions = {
	default: async (event) => {
		const formData = Object.fromEntries(await event.request.formData());
		try {
			const result = registerSchema.parse(formData);
			console.log("SUCCESS");
			console.table(result);
		} catch (error) {
			const { fieldErrors: errors } = (error as ZodError).flatten();
			const { password, passwordConfirm, ...rest } = formData;
			console.table(formData);
			console.error((error as ZodError).flatten());

			return {
				data: rest,
				errors,
			};
		}
	},
} satisfies Actions;
