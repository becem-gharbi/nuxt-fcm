<template>
  <div>
    <h2>Registration token</h2>
    <p>{{ registrationToken }}</p>

    <h2 v-if="message">
      New message
    </h2>
    <p>{{ message }}</p>

    <button @click="() => subscribe({ topic })">
      Subscribe
    </button>

    <button @click="() => unsubscribe({ topic })">
      Unsubscribe
    </button>

    <button @click="sendMessage">
      Send
    </button>
  </div>
</template>

<script setup>
import { ref, useFcmTopic, useFcm } from '#imports'

const message = ref('')

const topic = ref('topic_2')

const { send, subscribe, unsubscribe } = useFcmTopic()

const { onMessage, getToken } = useFcm()

const registrationToken = await getToken()

onMessage(payload => message.value = payload)

async function sendMessage() {
  send({
    topic:
            topic.value,
    payload: {
      notification: {
        title: 'From client',
      },
      data: {
        ok: 'true',
      },
    },
    authorization: 'Bearer 123',
  })
}
</script>
