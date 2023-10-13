<!-- src/components/LoginForm.svelte -->
<script context="module" lang="ts">
    export type LoginFormData = {
        email: string;
        password: string;
    };
</script>

<script lang="ts">
    import auth from "$lib/auth.ts";
    import {goto} from "$app/navigation";
    import { createLabel, melt } from '@melt-ui/svelte';
    import {createEventDispatcher} from "svelte";
    import {Loader2} from 'lucide-svelte';

    const {
        elements: { root },
    } = createLabel();

    let email = '';
    let password = '';
    let isLoading: boolean = false;

    const dispatch = createEventDispatcher();

    async function handleLogin(event: Event) {
        event.preventDefault();
        isLoading = true;
        const formData: LoginFormData = {email, password};
        const { data, error } = await auth.login(formData);
        if (error) {
            isLoading = false;
            return;
        }
        if (data.session && data.user) {
            console.log(data.session)
            dispatch('logged')
            // loginSuccessful()
            // console.log(await auth.setSession(data.session.access_token, data.session.refresh_token));
            goto('/events')
        }
    }
</script>

<form on:submit={handleLogin}>
    <div class="flex flex-col items-start justify-center mb-5">
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
    <div class="flex flex-col items-start justify-center mb-5">
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
    <button type="submit" class="font-bold px-4 py-2 rounded bg-accent text-background">
        {#if isLoading}
            <Loader2 class="animate-spin"/>
        {:else}
            <span>Login</span>
        {/if}
    </button>
</form>
<div class="font-medium">
    <p>
        Don't have an account yet? <a class="text-accent" href="/signup">👉 Signup</a>
    </p>
</div>
