<!-- Referensi https://nurosoft.id/ -->

<template>
    <UContainer ref="process" as="section" class="pt-[6em] pb-[2em] relative overflow-hidden">
        
        <div class="relative overflow-hidden flex gap-4">
            <text-heading class="mb-2!">Our Process</text-heading>
            <img class="" width="20px" src="/triangle-dot.svg" alt="triangle-dot-image" />
        </div>
        <span class="text-[22px]">The Journey from Idea to Impact</span>

        <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-[100px] mb-[50px] gap-4">
            <div class="shadow-lg px-6 py-6 rounded-xl bg-neutral-50 hover:bg-neutral-100">
                <div class="mb-6 rounded-xl bg-primary text-white shadow-lg px-4 relative overflow-hidden">
                    <img src="/circle.svg" alt="circle-image" width="450"
                        class="absolute bottom-[-7em] left-[-4em] opacity-15">
                    <h3 class="font-bold text-[60px] text-right">1</h3>
                </div>
                <p class="text-xl font-bold">Discovery & Requirements Gathering</p>
                <p class="mt-4">The initial phase where we understand your vision, objectives, and gather detailed
                    functional and non-functional requirements to define the project scope.</p>
            </div>
            <div class="shadow-lg px-6 py-6 rounded-xl bg-neutral-50 hover:bg-neutral-100">
                <div class="mb-6 rounded-xl bg-primary text-white shadow-lg px-4 relative overflow-hidden">
                    <img src="/circle.svg" alt="circle-image" width="450"
                        class="absolute bottom-[-7em] left-[-4em] opacity-15">
                    <h3 class="font-bold text-[60px] text-right">2</h3>
                </div>
                <p class="text-xl font-bold">Design & Prototyping</p>
                <p class="mt-4">Transforming requirements into visual concepts, creating wireframes, mockups, and
                    interactive prototypes to define the user experience (UX) and user interface (UI).</p>
            </div>
            <div class="shadow-lg px-6 py-6 rounded-xl bg-neutral-50 hover:bg-neutral-100">
                <div class="mb-6 rounded-xl bg-primary text-white shadow-lg px-4 relative overflow-hidden">
                    <img src="/circle.svg" alt="circle-image" width="450"
                        class="absolute bottom-[-7em] left-[-4em] opacity-15">
                    <h3 class="font-bold text-[60px] text-right">3</h3>
                </div>
                <p class="text-xl font-bold">Development</p>
                <p class="mt-4">The core coding phase where the application's backend infrastructure and frontend user
                    interfaces are built according to the approved designs and specifications.</p>
            </div>
            <div class="shadow-lg px-6 py-6 rounded-xl bg-neutral-50 hover:bg-neutral-100">
                <div class="mb-6 rounded-xl bg-primary text-white shadow-lg px-4 relative overflow-hidden">
                    <img src="/circle.svg" alt="circle-image" width="450"
                        class="absolute bottom-[-7em] left-[-4em] opacity-15">
                    <h3 class="font-bold text-[60px] text-right">4</h3>
                </div>
                <p class="text-xl font-bold">Testing & QA</p>
                <p class="mt-4"> Rigorous testing is conducted to identify and fix bugs, ensure functionality,
                    performance, security, and overall quality, meeting all defined requirements.</p>
            </div>
            <div class="shadow-lg px-6 py-6 rounded-xl bg-neutral-50 hover:bg-neutral-100">
                <div class="mb-6 rounded-xl bg-primary text-white shadow-lg px-4 relative overflow-hidden">
                    <img src="/circle.svg" alt="circle-image" width="450"
                        class="absolute bottom-[-7em] left-[-4em] opacity-15">
                    <h3 class="font-bold text-[60px] text-right">5</h3>
                </div>
                <p class="text-xl font-bold">Deployment and Launch</p>
                <p class="mt-4"> The application is released to the production environment, making it live and
                    accessible to end-users, along with necessary configurations and final checks.</p>
            </div>
            <div class="shadow-lg px-6 py-6 rounded-xl bg-neutral-50 hover:bg-neutral-100">
                <div class="mb-6 rounded-xl bg-primary text-white shadow-lg px-4 relative overflow-hidden">
                    <img src="/circle.svg" alt="circle-image" width="450"
                        class="absolute bottom-[-7em] left-[-4em] opacity-15">
                    <h3 class="font-bold text-[60px] text-right">6</h3>
                </div>
                <p class="text-xl font-bold">Maintenance and Support</p>
                <p class="mt-4">Ongoing activities post-launch, including monitoring, bug fixes, performance
                    optimization, security updates, and providing continuous support and enhancements.</p>
            </div>
        </div>
    </UContainer>
</template>