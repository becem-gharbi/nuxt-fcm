<template>
    <div>
        <h2>Registration token</h2>
        <p>{{ $fcm.registrationToken }}</p>

        <h2 v-if="message">New message</h2>
        <p>{{ message }}</p>

        <button @click="() => subscribe(topic)">Subscribe</button>

        <button @click="() => unsubscribe(topic)">Unsubscribe</button>

        <button @click="sendMessage">Send</button>

    </div>
</template>
  
<script setup>
import { useNuxtApp, ref, useFcmTopic } from '#imports';

const message = ref("")

const topic = ref("topic_2")

const { send, subscribe, unsubscribe } = useFcmTopic()

const { $fcm } = useNuxtApp()

$fcm.onMessage((payload) => message.value = payload)

async function sendMessage() {
    send(topic.value, {
        notification: {
            title: "From client"
        },
        data: {
            "ok": "true"
        }
    })
}

</script>
  