<script lang="ts">
	import * as Avatar from "$lib/components/ui/avatar";


	import * as DropdownMenu from "$lib/components/ui/dropdown-menu";

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
            <DropdownMenu.Label>My Account</DropdownMenu.Label>
            <DropdownMenu.Separator />
            <DropdownMenu.Item>Profile</DropdownMenu.Item>
            <DropdownMenu.Item>Billing</DropdownMenu.Item>
            <DropdownMenu.Item>Team</DropdownMenu.Item>
            <DropdownMenu.Item>Subscription</DropdownMenu.Item>
          </DropdownMenu.Group>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
</div>
