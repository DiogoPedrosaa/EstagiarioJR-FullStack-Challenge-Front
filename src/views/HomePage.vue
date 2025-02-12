<template>
  <div>
    
    <header class="header">
      <div class="top-bar d-flex justify-content-between align-items-center px-3 py-2">
        <img
          src="https://maceioalgovbr.dhost.cloud/assets/images/logo_prefeitura_de_maceio.svg"
          alt="Prefeitura de Maceió"
          class="maceio-logo"
        />
      </div>
      <div class="blue-line d-flex justify-content-start align-items-center py-2">
        
        <button type="button" class="btn btn-primary ml-2" @click="goToLogin">
          Go to Login
        </button>
      
      </div>
    </header>

    
    <main class="content container mt-4">
      <div id="conteudo"></div>
      <div class="company-description bg-light p-4 rounded shadow-sm">
        <h2>Sobre a Empresa</h2>
        <p>
          Somos uma empresa dedicada a fornecer os melhores serviços para nossos clientes. Nossa missão é...
        </p>
      </div>
      <img
        src="https://maceioalgovbr.dhost.cloud/assets/images/maceio_topo.svg"
        class="imagem-fundo img-fluid mt-3"
        
      />
        </main>

        <footer class="footer bg-dark text-white text-center py-3 mt-4">
      © 2025 | CTIT - Secretaria municipal da fazenda de maceio
        </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  
  setup() {
    const router = useRouter();

    const goToLogin = () => {
      router.push({ name: "login" }); 
    };

    return {
      goToLogin,
    };
  },
});


</script>

<style scoped>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background-color: #9e9e9e;
  position: relative;
  z-index: 3;
}

.header {
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bolder;
}

.top-bar {
  background-color: #e07d1f;
  color: white;
  margin-bottom: 30px;
}

.top-bar h1 {
  font-size: 1.25rem;
  font-weight: bold;
}

.icon {
  width: 24px;
  height: 24px;
}

.sub-bar {
  background-color: #edf1f6;
}

.maceio-logo {
  height: 100%;
  margin-right: 0;
}

.imagem-fundo {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
  opacity: 0.8;
  z-index: 1; 
}

.blue-line {
  background-color: #003366;
  height: 60px;
  width: 100%;
  margin-top: -30px;
  position: relative;
  justify-content: center;
}

.logo-ti {
  position: relative;
  width: 25%;
  margin-bottom: 0;
  margin-left: 730px;
  background-color: #c0c0c0;
}

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5); 
  color: #fff;
  padding: 10px 0;
  font-size: 14px;
  z-index: 2; 
}

.company-description {
  background-color: white;
  padding: 20px;
  margin: 20px auto;
  width: 80%;
  max-width: 800px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: center;
}

.company-description h2 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.company-description p {
  font-size: 1rem;
  line-height: 1.5;
}

</style>
