<template>
    <div class="flex flex-col items-start justify-center h-[80dvh] relative">
        <UContainer as="section">
            <div
                class="ring-1 ring-primary-600/25 font-bold py-1 px-4 bg-primary-50 text-primary w-50 rounded-full">
                <small>Human Centric Experience</small>
            </div>
            <div class="relative">
                <h1 class="text-[60px] font-bold leading-[5rem]">
                    Empowering Businesses Through <br />
                    Digital Excellence.
                </h1>
                <img src="/handdraw1.svg" width="400" alt="handdraw1">
            </div>

            <h3 class="text-[2rem] mt-4 mb-8">Your trusted partner in digital transformation.</h3>

            <div class="flex gap-4">
                <app-contact-button size="xl" class="py-[12px] px-[30px]" />
                <UButton variant="outline" class="py-[12px] px-[30px] rounded-full text-gray-800">
                    Learn More
                </UButton>
            </div>
        </UContainer>
    </div>
</template>