<!-- src/components/SignupForm.svelte -->
<script context="module" lang="ts">
    export type SignupFormData = {
        name: string;
        email: string;
        password: string;
    };
</script>

<script lang="ts">
    import auth from "$lib/auth.ts";
    import {goto} from "$app/navigation";
    import { createLabel, melt } from '@melt-ui/svelte';

    const {
        elements: { root },
    } = createLabel();

    let name = '';
    let email = '';
    let password = '';

    async function handleSignup(event: Event) {
        event.preventDefault();
        const formData: SignupFormData = {name, email, password};
        // Handle signup logic, e.g., send signup request to your server
        console.log('Signup button clicked. Form Data:', formData);
        const {data, error} = await auth.register(formData.email, formData.password, {"name": formData.name})
        console.log(data)
        if (error) {
            console.log(error)
            return;
        }

        if (data.user) {
            goto('/');
        }
    }
</script>

<form on:submit={handleSignup}>
    <div class="flex flex-col items-start justify-center text-text mb-5">
        <label
                use:melt={$root}
                for="name"
                class="mb-0.5 font-medium text-magnum-900"
                data-melt-part="root"
        >
            <span>Name</span>
        </label>
        <input
                type="text"
                id="name"
                class="h-10 w-[240px] rounded-md px-3 py-2 text-magnum-700 shadow"
                placeholder="John Doe"
                bind:value={name}
                required
        />
    </div>
    <div class="flex flex-col items-start justify-center text-text mb-5">
        <label
                use:melt={$root}
                for="email"
                class="mb-0.5 font-medium text-magnum-900"
                data-melt-part="root"
        >
            <span>Email</span>
        </label>
        <input
                type="text"
                id="email"
                class="h-10 w-[240px] rounded-md px-3 py-2 text-magnum-700 shadow"
                placeholder="email@eventio.com"
                bind:value={email}
                required
        />
    </div>
    <div class="flex flex-col items-start justify-center text-text mb-5">
        <label
                use:melt={$root}
                for="email"
                class="mb-0.5 font-medium text-magnum-900"
                data-melt-part="root"
        >
            <span>Password</span>
        </label>
        <input
                type="password"
                id="password"
                class="h-10 w-[240px] rounded-md px-3 py-2 text-magnum-700 shadow"
                bind:value={password}
                required
        />
    </div>
    <!-- #TODO: make the button a global class!! -->
    <button type="submit" class="font-bold px-4 py-2 rounded bg-accent text-background">
        Sign Up
    </button>
</form>

<div class="text-text font-medium">
    <p>
        Have an account already? <a class="text-accent" href="/login">👉 Login</a>
    </p>
</div>
