<template>
    <div>
        a single user {{ $route.params.id }}
    </div>
</template>

<script>
export default {
    validate(data) {
        console.log(data);
        return data.params.id == 1
    }
}
</script>
