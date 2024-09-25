<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout />
  </div>
</template>


<script lang="ts" setup>
import { appConfig } from './config/config';

// Menyediakan konfigurasi untuk diakses di semua komponen
provide('appConfig', appConfig);
</script>