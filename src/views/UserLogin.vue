<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="username">Username:</label>
        <input type="text" v-model="username" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
      <div v-if="error" class="error">{{ error }}</div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import axios from 'axios'

export default defineComponent({
  name: 'UserLogin',
  setup() {
    const username = ref('')
    const password = ref('')
    const error = ref('')

    const handleLogin = async () => {
      try {
        const response = await axios.post('/login/', {
          username: username.value,
          password: password.value
        })
        console.log(response.data)
      } catch (err: any) {
        error.value = err.response?.data?.error || 'Login failed'
      }
    }

    return {
      username,
      password,
      error,
      handleLogin
    }
  }
})
</script>
