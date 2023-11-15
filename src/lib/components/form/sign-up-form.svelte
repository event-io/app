<!-- src/components/SignupForm.svelte -->
<script context="module" lang="ts">
    export type SignupFormData = {
        name: string;
        email: string;
        password: string;
    };
    const dateNow = new Date().getFullYear();
</script>

<script lang="ts">
    import auth from "$lib/api/auth";
    import {goto} from "$app/navigation";
    import { createLabel, melt } from '@melt-ui/svelte';
    import {Loader2} from 'lucide-svelte';

    const {
        elements: { root },
    } = createLabel();

    let name: string = '';
    let email: string = '';
    let password: string = '';
    let isLoading: boolean = false;

    async function handleSignup(event: Event) {
        event.preventDefault();
        const formData: SignupFormData = {name, email, password};
        // Handle signup logic, e.g., send signup request to your server
        console.log('Signup button clicked. Form Data:', formData);
        isLoading = true;
        const {data, error} = await auth.register(formData.email, formData.password, {"name": formData.name})
        console.log(data)
        if (error) {
            isLoading = false;
            console.log(error)
            return;
        }

        if (data.user) {
            goto('/');
        }
    }
</script>
<form on:submit={handleSignup}>
    <div class="loginwrapper">
        <div class="lg-inner-column">
        <div class="left-column relative z-[1]">
            <div class="max-w-[520px] pt-10 ltr:pl-20 rtl:pr-20">
            <a href="/">
                <img src="assets/images/logo/logo.svg" alt="" class="mb-10 dark_logo">
                <img src="assets/images/logo/logo-white.svg" alt="" class="mb-10 white_logo">
            </a>
            </div>
            <div class="absolute left-0 2xl:bottom-[-160px] bottom-[-130px] h-full w-full z-[-1]">
            <img src="assets/images/auth/ils1.svg" alt="" class=" h-full w-full object-contain">
            </div>
        </div>
        <div class="right-column  relative">
            <div class="inner-content h-full flex flex-col bg-white dark:bg-slate-800">
            <div class="auth-box h-full flex flex-col justify-center">
                <div class="mobile-logo text-center mb-6 lg:hidden block">
                <a href="/">
                    <img src="assets/images/logo/logo.svg" alt="" class="mb-10 dark_logo">
                    <img src="assets/images/logo/logo-white.svg" alt="" class="mb-10 white_logo">
                </a>
                </div>
                <div class="text-center 2xl:mb-10 mb-4">
                <span class="font-medium text-4xl">Entra in Event.IO</span>
                <div class="text-slate-500 text-base pt-4">
                    Se ti trovi qui è perché non ci conosci &#128557; <br/>
                    Ma non preoccuparti, rimediamo subito<br/>
                    Dicci chi sei ed entra nel mondo di <span class="font-bold">Event.IO</span>
                </div>
                </div>
                <!-- BEGIN: Login Form -->
                <div class="fromGroup">
                    <label use:melt={$root}
                           data-melt-part="root"
                           class="block capitalize form-label" 
                           for="name">Nome</label>
                    <div class="relative ">
                    <input type="name"
                           id="name" 
                           name="name"
                           class="form-control py-2" 
                           placeholder="Come possiamo chiamarti?" 
                           bind:value={name}
                           required>
                    </div>
                </div>
                <div class="fromGroup pt-5">
                    <label use:melt={$root}
                           data-melt-part="root"
                           class="block capitalize form-label" 
                           for="email">Email</label>
                    <div class="relative ">
                    <input type="email"
                           id="email" 
                           name="email"
                           class="form-control py-2" 
                           placeholder="Non vorrai per caso usare una mail temporanea vero?&#128544;" 
                           bind:value={email}
                           required>
                    </div>
                </div>
                <div class="fromGroup py-5">
                    <label use:melt={$root}
                           data-melt-part="root"
                           class="block capitalize form-label" 
                           for="password">Password</label>
                    <div class="relative">
                    <input type="password" 
                           name="password"
                           id="password"
                           class="form-control py-2"
                           placeholder="Viviamo nel {dateNow}, evita robe tipo: pippo123"
                           bind:value={password}
                           required>
                    </div>
                </div>
                <button class="btn btn-dark w-full text-center my-5 flex items-center justify-center">
                    {#if isLoading}
                    <Loader2 class="animate-spin"/><span class="ps-3"> Solo un attimo...&#129321;</span>
                    {:else}
                        <span>Registrati ora</span>
                    {/if}
                </button>
                <div class="md:max-w-[345px] mx-auto font-normal text-slate-500 dark:text-slate-400 mt-12  text-sm">
                Ehi ma non sarai per caso...&#128562;? <br/>
                Certo che sei tu! Che ci fai qui? <br/>
                Spero tu abbia portato della pizza.
                <a href="/login" class="text-slate-900 dark:text-white font-medium hover:underline">
                    Accedi ora
                    &#128540;
                </a>
                </div>
            </div>
            <div class="auth-footer text-center">
                Copyright {dateNow}, Event.IO All Rights Reserved.
            </div>
            </div>
        </div>
        </div>
    </div>
</form>