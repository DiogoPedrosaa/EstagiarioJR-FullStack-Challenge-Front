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
      </header>
  
      <main class="content container mt-4">
        <div class="company-description bg-light p-4 rounded shadow-sm">
          <h2>Editar Funcionário</h2>
          <form @submit.prevent="handleSubmit">
            <div class="form-group">
              <label for="name">Nome</label>
              <input
                type="text"
                id="name"
                v-model="employee.name"
                class="form-control"
                required
              />
            </div>
  
            <div class="form-group">
              <label for="department">Setor</label>
              <input
                type="text"
                id="department"
                v-model="employee.department"
                class="form-control"
                required
              />
            </div>
  
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                v-model="employee.email"
                class="form-control"
                required
              />
            </div>
  
            <button type="submit" class="btn btn-primary mt-3">Salvar alterações</button>
          </form>
        </div>
      </main>
  
      <footer class="footer bg-dark text-white text-center py-3 mt-4">
        © 2025 | Secretaria Municipal Da Fazenda De Maceió
      </footer>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from "vue";
  import { useRoute, useRouter } from "vue-router";
  import axios from "axios";

  export default defineComponent({
    setup() {
      const route = useRoute();
      const router = useRouter();
      const employee = ref({
        name: "",
        department: "",
        email: "",
      });

      const fetchEmployee = async () => {
        const id = route.params.id as string; 
        const token = localStorage.getItem('authToken');  

        try {
          const response = await axios.get(`http://localhost:80/api/employees/${id}/`, {
            headers: {
              Authorization: `Bearer ${token}` 
            }
          });
          employee.value = response.data;
        } catch (error) {
          console.error("Erro ao buscar os dados do funcionário:", error);
        }
      };

      onMounted(fetchEmployee);

      const handleSubmit = async () => {
        const id = route.params.id as string;
        const token = localStorage.getItem('authToken');  

        try {
          await axios.put(`http://localhost:80/api/employees/update/${id}/`, employee.value, {
            headers: {
              Authorization: `Bearer ${token}` 
            }
          });
          router.push({ name: "servidores" });
        } catch (error) {
          console.error("Erro ao atualizar o funcionário:", error);
        }
      };

      return {
        employee,
        handleSubmit,
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
  }
  
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
  
  .footer {
    text-align: center;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    padding: 10px 0;
  }
  
  .company-description {
    background-color: white;
    padding: 20px;
    margin: 20px auto;
    width: 80%;
    max-width: 1000px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    z-index: 1;
  }
  
  .table {
    width: 100%;
    margin-top: 20px;
  }
  
  th, td {
    text-align: center;
    vertical-align: middle;
  }
  
  button {
    margin-right: 5px;
  }
  </style>
  