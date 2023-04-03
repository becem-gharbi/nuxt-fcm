<template>
  <div>
    <ClientOnly>
      <h2>Registration token</h2>
      <p>{{ $fcm.registrationToken }}</p>

      <h2 v-if="message">New message</h2>
      <p>{{ message }}</p>
    </ClientOnly>
  </div>
</template>

<script setup>
import { useNuxtApp, ref } from '#imports';

const message = ref("")

if (process.client) {
  const { $fcm } = useNuxtApp()

  $fcm.onMessage((payload) => message.value = payload)
}

</script>
