<template>
    <div class="login-container d-flex justify-content-center align-items-center vh-100">
      <div class="card shadow-lg p-4 login-card">
        <h1 class="text-center text-primary mb-4">Maceió-IN</h1>
        <form @submit.prevent="handleRegister">
          
          <div class="mb-3">
            <input
              type="text"
              id="username"
              class="form-control"
              v-model="username"
              placeholder="Usuário"
              required
            />
          </div>
          
         
          <div class="mb-3">
            <input
              type="email"
              id="email"
              class="form-control"
              v-model="email"
              placeholder="Email"
              required
            />
          </div>
  
         
          <div class="mb-3 position-relative">
            <input
              :type="showPassword ? 'text' : 'password'"
              id="password"
              class="form-control"
              v-model="password"
              placeholder="Senha"
              required
            />
            <span
              class="toggle-password"
              @click="togglePasswordVisibility"
            >
              <i :class="showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'"></i>
            </span>
          </div>
  
          
          <div class="mb-3 position-relative">
            <input
              :type="showPassword ? 'text' : 'password'"
              id="confirmPassword"
              class="form-control"
              v-model="confirmPassword"
              placeholder="Repita a Senha"
              required
            />
            <span
              class="toggle-password"
              @click="togglePasswordVisibility"
            >
              <i :class="showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'"></i>
            </span>
          </div>
  
         
          <button
            type="submit"
            class="btn btn-primary w-100 fw-bold login-btn"
          >
            Registrar
          </button>
  
         
          <div
            v-if="error"
            class="alert alert-danger mt-3 error-message animate__animated animate__fadeIn"
          >
            {{ error }}
          </div>
        </form>
  
     
        <router-link to="/login" class="btn btn-secondary w-100 fw-bold mt-3">
          Já tem uma conta? Faça login
        </router-link>
      </div>
    </div>
  </template>
  
  
  <script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import apiClient from "@/services/axios";

export default defineComponent({
  name: "RegisterUser",
  setup() {
    const username = ref("");
    const email = ref("");
    const password = ref("");
    const confirmPassword = ref("");
    const error = ref("");
    const showPassword = ref(false);
    const router = useRouter();

    const togglePasswordVisibility = () => {
      showPassword.value = !showPassword.value;
    };

    const handleRegister = async () => {
      if (password.value !== confirmPassword.value) {
        error.value = "As senhas não coincidem!";
        setTimeout(() => {
          error.value = ""; 
        }, 3000);
        return;
      }

      try {
        const response = await apiClient.post("/register/", {
          username: username.value,
          email: email.value,  
          password: password.value,
          password_confirm: confirmPassword.value,  
        });
        console.log(response.data);
        
        router.push({ name: "login" });
      } catch (err: any) {
        error.value = err.response?.data?.error || "Erro ao registrar, por favor note que é necessario pelo menos uma letra Maiuscula e oito caracteres";
        setTimeout(() => {
          error.value = ""; 
        }, 3000);
      }
    };

    return {
      username,
      email,  
      password,
      confirmPassword,
      error,
      showPassword,
      togglePasswordVisibility,
      handleRegister,
    };
  },
});
</script>
  
  <style scoped>
  .login-container {
    background: linear-gradient(to bottom right, #003366, #e07d1f);
  }
  
  .login-card {
    border-radius: 15px;
    background: white;
    max-width: 400px;
    width: 100%;
    animation: fadeIn 1.5s ease-in-out;
  }
  
  .login-card h1 {
    font-size: 2rem;
  }
  
  .login-btn {
    background: #e07d1f;
    border: none;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  
  .login-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  }
  
  .error-message {
    border: 1px solid #dc3545;
    border-radius: 8px;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .position-relative {
    position: relative;
  }
  
  .toggle-password {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    cursor: pointer;
    font-size: 1.2rem;
    color: #e07d1f;
    transition: color 0.3s ease;
  }
  
  .toggle-password:hover {
    color: #003366;
  }
  
  </style>
  