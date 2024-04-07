<script lang="ts">
	export let form;
</script>

<main class="flex justify-center items-center h-screen w-screen">
	<form
		method="POST"
		class="flex flex-col justify-between items-center gap-10 bg-blue-700 p-6 rounded-xl"
	>
		<!-- Signup form -->

		<div class="text-white text-2xl font-bold">Create your account</div>
		<section class="flex flex-col justify-evenly items-start gap-3">
			<label class="text-gray-200 font-bold" for="teamNumber"> Team Number </label>
			<input type="number" name="teamNumber" id="teamNumber" value={form?.data?.teamNumber ?? ''} />
			<label for="teamNumber">
				{#if form?.errors.teamNumber}
					{#each form.errors.teamNumber as error}
						<span class="text-red-600 font-semibold">{error}</span>
					{/each}
				{/if}
			</label>
		</section>
		<section class="flex flex-col justify-evenly items-start gap-3">
			<label for="name" class="text-gray-200 font-bold">Username</label>
			<input type="text" name="username" id="username" value={form?.data?.username ?? ''} />
			<label for="name">
				{#if form?.errors.username}
					{#each form.errors.username as error}
						<span class="text-red-600 font-semibold">{error}</span>
					{/each}
				{/if}
			</label>
		</section>
		<section class="flex flex-col justify-evenly items-start gap-3">
			<label class=" text-gray-200 font-bold" for="email">Email</label>
			<input type="email" id="email" name="email" value={form?.data?.email ?? ''} />
			<label for="email">
				{#if form?.errors.email}
					{#each form.errors.email as error}
						<span class="text-red-600 font-semibold">{error}</span>
					{/each}
				{/if}
			</label>
		</section>
		<section class="flex flex-col justify-evenly items-start gap-3">
			<label class="text-gray-200 font-bold" for="password">Password</label>
			<input type="password" id="password" name="password" value={form?.data?.password ?? ''} />
			<label for="password">
				{#if form?.errors.password}
					{#each form.errors.password as error}
						<span class="text-red-600 font-semibold">{error}</span>
					{/each}
				{/if}
			</label>
		</section>
		<section class="flex flex-col justify-evenly items-start gap-3">
			<label class="text-gray-200 font-bold" for="confirmPassword">Confirm Password</label>
			<input
				type="password"
				name="confirmPassword"
				id="confirmPassword"
				value={form?.data?.confirmPassword ?? ''}
			/>
		</section>
		<button class="text-white font-extrabold bg-blue-950 rounded-2xl px-3 py-2" type="submit"
			>Sign Up</button
		>
		<section class="flex justify-center">
			<a href="/signin">Already have an account? Sign in</a>
		</section>
	</form>
</main>
