<script lang="ts">
</script>

<main class="flex justify-center items-center h-screen w-screen bg-blue-950">
	<form
		action="signup"
		method="POST"
		class="flex flex-col justify-between items-center gap-10 bg-blue-700 p-6 rounded-xl"
	>
		<!-- Signup form -->

		<div class="text-white text-2xl font-bold">Create your account</div>
		<section class="flex flex-col justify-evenly items-start gap-3">
			<label class=" text-gray-200 font-bold" for="email">Email:</label>
			<input type="email" id="email" name="email" required />
		</section>
		<section class="flex flex-col justify-evenly items-start gap-3">
			<label class="text-gray-200 font-bold" for="password">Password:</label>
			<input type="password" id="password" name="password" required />
		</section>
		<section class="flex flex-col justify-evenly items-start gap-3">
			<label class="text-gray-200 font-bold" for="confirm-password">Confirm Password</label>
			<input type="password" name="confirm-password" id="confirm-password" />
		</section>
		<button class="text-white font-extrabold bg-blue-950 rounded-2xl px-3 py-2" type="submit"
			>Sign Up</button
		>
		<section class="flex justify-center">
			<a href="/signin">Already have an account? Sign in</a>
		</section>
	</form>
</main>
