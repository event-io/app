<script lang="ts">
	import { goto } from "$app/navigation";
	import * as Avatar from "$lib/components/ui/avatar";
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
	import { redirect } from "@sveltejs/kit";
	import { RefreshCcw, UserCircle } from "lucide-svelte";
	import { onMount } from "svelte";

  function switchView() {
    if (window.location.pathname.includes('hub')) goto('/organize/events');
    else goto('/hub/events');
  }

</script>

<div class="header w-full h-12 flex flex-auto items-center px-6 justify-between">
    <a href="/" class="text-2xl font-semibold tracking-tight">event.io</a>

    <DropdownMenu.Root>
        <DropdownMenu.Trigger>
            <div class="flex items-center gap-2 ">
                <Avatar.Root>
                    <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
                    <Avatar.Fallback>CN</Avatar.Fallback>
                </Avatar.Root>
                <span>name surname</span>
            </div>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Group>
            <DropdownMenu.Item on:click={switchView}>
              <RefreshCcw size={20} strokeWidth={1.5} class="mr-2"/>
              {window.location.pathname.includes('hub') ? 'Switch to Organize' : 'Switch to Hub'}
            </DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item>
              <UserCircle size={20} strokeWidth={1.5} class="mr-2"/> <span>Profile</span>
            </DropdownMenu.Item>
          </DropdownMenu.Group>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
</div>
