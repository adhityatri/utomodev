<template>
    <div class="flex flex-col items-start justify-center h-[80dvh] relative">
        <UContainer as="section" class="relative">
            <img v-if="!isMobile" class="absolute top-[-4em] left-[-4em] z-[-1]" width="150" height="150" src="/cross.svg" alt="doodle1">
            <div class="ring-1 ring-primary-600/25 font-bold py-1 px-4 bg-primary-50 text-primary w-50 rounded-full" :class="{'mb-4' : isMobile}">
                <small>Human Centric Experience</small>
            </div>
            <div class="relative">
                <h1 class="text-[60px] font-bold leading-[5rem]" :class="{'text-[32px]! leading-[32px]!' : isMobile}">
                    Empowering Businesses Through <br />
                    Digital Excellence.
                </h1>
                <img src="/handdraw1.svg" :width="isMobile ? '200' : '400'" alt="handdraw1">
            </div>

            <h3 class="text-[2rem] mt-4 mb-8" :class="{'text-[1.5rem]!': isMobile}">Your trusted partner in digital transformation.</h3>

            <div class="flex gap-4">
                <app-contact-button size="xl" class="py-[12px] px-[30px]" />
                <UButton variant="outline" class="py-[12px] px-[30px] rounded-full text-gray-800" @click="onLearnMore">
                    Learn More
                </UButton>
            </div>

            <img class="absolute right-0 top-[80%] translate-y-[-40%]" :class="{'top-[100%]!' :isMobile }" :width="isMobile ? '200' : '400'" src="/development.svg" alt="development">
        </UContainer>
    </div>
</template>

<script setup lang="ts">
const onLearnMore = async () => {
    await navigateTo({ hash: '#services', replace: true })
}

const { isMobile } = useDevice();
</script>