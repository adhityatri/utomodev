<template>
  <UApp class="flex flex-col">
    <NuxtRouteAnnouncer />
    <div class="flex flex-col flex-1">
      <app-top-bar />
      <div class="flex flex-col flex-1">
        <NuxtPage />
      </div>
      <app-footer />
    </div>
  </UApp>
</template>
