<template>
  <div>
    
    <AppHeader :isAuthenticated="isAuthenticated" @logout="handleLogout" />

    <main class="content container mt-4">
      <div id="conteudo"></div>
      <div class="company-description bg-light p-4 rounded shadow-sm">
        <h2>A Secretaria Municipal da Fazenda</h2>
        A Secretaria Municipal de Fazenda de Maceió é responsável por planejar e executar as políticas fiscal, tributária, orçamentária e financeira do município. Suas principais atribuições incluem a arrecadação de tributos municipais, como o Imposto Predial e Territorial Urbano (IPTU) e o Imposto Sobre Serviços (ISS), além de gerenciar o orçamento municipal e implementar medidas de desburocratização fiscal para promover o desenvolvimento econômico local.
        <p></p>
        Para facilitar o acesso dos contribuintes aos serviços oferecidos, a Sefaz disponibiliza o portal de serviços online a plataforma permite a emissão de guias de pagamento, certidões, consultas e abertura de processos administrativos, entre outros serviços.
        <p></p>
        Com a modernização dos serviços e a implementação de novas tecnologias, a Sefaz busca promover a transparência e a eficiência na gestão fiscal do município, contribuindo para o desenvolvimento econômico e social de Maceió.
        <div class="text-center mt-4">
          <button class="btn btn-primary btn-func" @click="goToEmployees">
            Conheça nossos funcionários
          </button>
        </div>
      </div>
    </main>
    
    <div class="imagem-fundo"></div>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import AppHeader from "@/components/AppHeader.vue";

export default defineComponent({
  components: {
    AppHeader,
  },

  setup() {
    const router = useRouter();
    const isAuthenticated = ref(false);

    
    const checkAuthStatus = () => {
      const token = localStorage.getItem("authToken");
      isAuthenticated.value = !!token;
    };

    
    const handleLogout = () => {
      localStorage.removeItem("authToken");
      isAuthenticated.value = false;
      router.push({ name: "login" });
    };

    const goToHome = () => {
      router.push({ name: "home" });
    };

    const goToEmployees = () => {
      router.push({ name: "servidores" });
    };


    checkAuthStatus();

    return {
      isAuthenticated,
      goToHome,
      goToEmployees,
      handleLogout,
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
  background-image: url('@/assets/images/maceio_topo.svg');
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat; 
  width: 100%;
  height: 300px; 
  margin-top: 20px;
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
  width: 100%;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 10px 0;
  font-size: 14px;
  margin-top: 0;
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
  z-index: 1;
}

.company-description p {
  font-size: 1rem;
  line-height: 1.5;
  z-index: 1;
}

.btn-func{
  background: #e07d1f;
  color: white;
  border: none;
}

.btn-func:hover {
  background: #a05917;
}


</style>
