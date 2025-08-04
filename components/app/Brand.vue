<template>
    <div class="flex gap-2 cursor-pointer" @click="$router.push('/')">
        <picture>
            <source srcset="/brand-new.webp" type="image/webp">
            <img src="/brand-new.webp" height="32" width="112" alt="brand-logo">
        </picture>
        <!-- <span><b class="font-extrabold text-primary">UTOMO</b>SOLUTIONS</span> -->
    </div>
</template>