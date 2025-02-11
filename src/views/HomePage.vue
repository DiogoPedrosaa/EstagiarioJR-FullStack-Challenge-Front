<template>
    <div class="container">
      <h1>Bem-vindo ao Maceió IN</h1>
      <p>Gerencie os funcionários da Secretaria de Fazenda de Maceió de forma simples e eficiente.</p>
      <button @click="goToLogin">Acessar</button>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const goToLogin = () => {
    router.push('/login');
  };
  </script>
  
  <style scoped>
  .container {
    text-align: center;
    margin-top: 100px;
  }
  
  h1 {
    font-size: 2rem;
    margin-bottom: 10px;
  }
  
  p {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
  
  button {
    padding: 10px 20px;
    font-size: 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  