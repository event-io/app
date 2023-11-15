<!-- src/components/LoginForm.svelte -->
<script context="module" lang="ts">
    export type LoginFormData = {
        email: string;
        password: string;
    };
</script>

<script lang="ts">
    import auth from "$lib/api/auth";
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
        const { data, error } = await auth.login(email, password);
        if (error) {
            isLoading = false;
            return;
        }
        if (data.session && data.user) {
            console.log(data.session)
            dispatch('logged')
            goto('/hub/events')
        }
    }
    const dateNow = new Date().getFullYear();
</script>

<form on:submit={handleLogin}>
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
                <span class="font-medium text-4xl">Accedi</span>
                <div class="text-slate-500 text-base pt-4">
                    Benvenut* o bentornat*, qui siamo tutti amici &#128540; <br/>Accedi con il tuo account e facci sapere chi sei.
                </div>
                </div>
                <!-- BEGIN: Login Form -->
                <div class="fromGroup">
                    <label use:melt={$root}
                           data-melt-part="root"
                           class="block capitalize form-label" 
                           for="email">email</label>

                    <div class="relative ">
                    <input type="email"
                           id="email" 
                           name="email"
                           class="form-control py-2" 
                           placeholder="email@example.com" 
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
                           placeholder="Inserire una password"
                           bind:value={password}
                           required>
                    </div>
                </div>
                <!-- Remember me  -->
                <!--
                <div class="flex justify-between py-4">
                    <label class="flex items-center cursor-pointer">
                    <input type="checkbox" class="hiddens pe-10"> 
                    <span class="text-slate-500 dark:text-slate-400 text-sm leading-6 capitalize ps-2"> Resta connesso</span>
                    </label>
                    <a class="text-sm text-slate-800 dark:text-slate-400 leading-6 font-medium" href="forget-password-one.html">Password dimenticata</a>
                </div> -->
                <button class="btn btn-dark w-full text-center my-5 flex items-center justify-center">
                    {#if isLoading}
                    <Loader2 class="animate-spin"/> <span class="ps-3">Controllo la lista &#129488;</span>
                    {:else}
                        <span>Accedi</span>
                    {/if}
                </button>
                <!-- END: Login Form -->
                <!--#region Accedi con  -->
                <!--                 
                <div class="relative border-b-[#9AA2AF] border-opacity-[16%] border-b pt-6">
                <div class="absolute inline-block bg-white dark:bg-slate-800 dark:text-slate-400 left-1/2 top-1/2 transform -translate-x-1/2 px-4 min-w-max text-sm text-slate-500 font-normal">
                    Accedi con
                </div>
                </div>
                <div class="max-w-[242px] mx-auto mt-8 w-full"> -->

                <!-- BEGIN: Social Log in Area -->
                <!-- <ul class="flex">
                    <li class="flex-1">
                    <a href="#" class="inline-flex h-10 w-10 bg-[#1C9CEB] text-white text-2xl flex-col items-center justify-center rounded-full">
                        <img src="assets/images/icon/tw.svg" alt="">
                    </a>
                    </li>
                    <li class="flex-1">
                    <a href="#" class="inline-flex h-10 w-10 bg-[#395599] text-white text-2xl flex-col items-center justify-center rounded-full">
                        <img src="assets/images/icon/fb.svg" alt="">
                    </a>
                    </li>
                    <li class="flex-1">
                    <a href="#" class="inline-flex h-10 w-10 bg-[#0A63BC] text-white text-2xl flex-col items-center justify-center rounded-full">
                        <img src="assets/images/icon/in.svg" alt="">
                    </a>
                    </li>
                    <li class="flex-1">
                    <a href="#" class="inline-flex h-10 w-10 bg-[#EA4335] text-white text-2xl flex-col items-center justify-center rounded-full">
                        <img src="assets/images/icon/gp.svg" alt="">
                    </a>
                    </li>
                </ul>
            </div> -->
            <!-- END: Social Log In Area -->
            <!--#endregion Accedi con  -->
                <div class="md:max-w-[345px] mx-auto font-normal text-slate-500 dark:text-slate-400 mt-12 uppercase text-sm">
                Non sei dei nostri?
                <a href="/signup" class="text-slate-900 dark:text-white font-medium hover:underline">
                    Registrati allora
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