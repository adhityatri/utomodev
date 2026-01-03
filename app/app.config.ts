export default defineAppConfig({
  ui: {
    colors: {
      primary: "customPrimary",
    },
    prose: {
      h1: {
        slots: {
          base: "text-4xl text-highlighted font-bold mb-8 scroll-mt-[calc(45px+var(--ui-header-height))] lg:scroll-mt-(--ui-header-height)",
          link: "inline-flex items-center gap-2",
        },
      },
      h2: {
        slots: {
          base: "text-3xl text-highlighted font-bold mb-8 scroll-mt-[calc(45px+var(--ui-header-height))] lg:scroll-mt-(--ui-header-height)",
          link: "inline-flex items-center gap-2",
        },
      },
      h3: {
        slots: {
          base: "text-2xl text-highlighted font-bold mb-8 scroll-mt-[calc(45px+var(--ui-header-height))] lg:scroll-mt-(--ui-header-height)",
          link: "inline-flex items-center gap-2",
        },
      },
      h4: {
        slots: {
          base: "text-xl text-highlighted font-bold mb-8 scroll-mt-[calc(45px+var(--ui-header-height))] lg:scroll-mt-(--ui-header-height)",
          link: "inline-flex items-center gap-2",
        },
      },
      h5: {
        slots: {
          base: "text-lg text-highlighted font-bold mb-8 scroll-mt-[calc(45px+var(--ui-header-height))] lg:scroll-mt-(--ui-header-height)",
          link: "inline-flex items-center gap-2",
        },
      },
      h6: {
        slots: {
          base: "text-base text-highlighted font-bold mb-8 scroll-mt-[calc(45px+var(--ui-header-height))] lg:scroll-mt-(--ui-header-height)",
          link: "inline-flex items-center gap-2",
        },
      },
    },
  },
});
