<script lang="ts">
    import * as Card from "$lib/components/ui/card";
    export let title: string;
    export let href: string;
</script>

<a href={href}>
    <Card.Root>
        <Card.Header>
            <Card.Title>Card Title</Card.Title>
            <Card.Description>Card Description</Card.Description>
        </Card.Header>
        <Card.Content>
            <p>Card Content</p>
        </Card.Content>
        <Card.Footer>
            <p>Card Footer</p>
        </Card.Footer>
    </Card.Root>
</a>
