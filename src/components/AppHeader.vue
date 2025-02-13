<template>
    <header class="header">
      <div class="top-bar d-flex justify-content-between align-items-center px-3 py-2">
        <img
          src="@/assets/images/logo_prefeitura_de_maceio.svg"
          alt="Prefeitura de Maceió"
          class="maceio-logo"
        />
      </div>
      <div class="blue-line d-flex justify-content-start align-items-center py-2">
        <button type="button" class="btn btn-primary ml-2" @click="goToHome">Retornar</button>
        <button 
          v-if="isAuthenticated"
          type="button"
          class="btn btn-danger ml-2"
          @click="logout"
        >
          Deslogar
        </button>
      </div>
    </header>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  import { useRouter } from "vue-router";
  
  export default defineComponent({
    props: {
      isAuthenticated: {
        type: Boolean,
        required: true,
      },
    },
    setup(_, { emit }) {
      const router = useRouter();
  
      const goToHome = () => {
        router.push({ name: "home" });
      };
  
      const logout = () => {
        emit("logout");
      };
  
      return {
        goToHome,
        logout,
      };
    },
  });
  </script>
  
  <style scoped>
  .header {
    width: 100%;
  }
  
  .top-bar {
    background-color: #e07d1f;
    color: white;
  }
  
  .blue-line {
    background-color: #003366;
    height: 60px;
    width: 100%;
  }
  </style>
  