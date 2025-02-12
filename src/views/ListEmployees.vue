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

    <main class="content container mt-4">
      <div class="company-description bg-light p-4 rounded shadow-sm">
        <h2>Servidores da Secretaria Municipal da Fazenda</h2>

        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Setor</th>
              <th>Email</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="employee in employees" :key="employee.id">
              <td>{{ employee.name }}</td>
              <td>{{ getDepartmentName(employee.department) }}</td>
              <td>{{ employee.email }}</td>
              <td>
                <button v-if="isAuthenticated" class="btn btn-warning btn-sm" @click="editEmployee(employee.id)">Editar</button>
                <button v-if="isAuthenticated" class="btn btn-danger btn-sm" @click="deleteEmployee(employee.id)">Excluir</button>
              </td>
            </tr>
          </tbody>
        </table>

        <div v-if="!isAuthenticated" class="mt-4 text-center">
          <p>Para alterar dados dessa tabela por favor realize o login.</p>
          <button class="btn btn-primary" @click="goToLogin">Login</button>
        </div>
        <button 
          v-if="isAuthenticated"
          type="button"
          class="btn btn-primary ml-2 regist-btn"
          @click="goToAdd"
        >
          Registrar Funcionario
        </button>
      </div>
    </main>

    <footer class="footer bg-dark text-white text-center py-3 mt-4" style="position: fixed; bottom: 0; width: 100%;">
      © 2025 | Secretaria Municipal Da Fazenda De Maceió
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import apiClient from "@/services/axios"; 

export default defineComponent({
  setup() {
    const router = useRouter();
    const employees = ref<Array<any>>([]);
    const departments = ref<Array<any>>([]);
    const isAuthenticated = ref(false);


    const getDepartmentName = (id: number) => {
      const dept = departments.value.find(department => department.id === id);
      return dept ? dept.name : 'Desconhecido';
    };

    const goToHome = () => {
      router.push({ name: "home" });
    };

    const goToLogin = () => {
      router.push({ name: "login" });
    };

    const goToAdd = () => {
      router.push({ name: "adicionar" });
    };

    const fetchEmployees = async () => {
      try {
        const response = await apiClient.get("/employees/"); 
        employees.value = response.data;
      } catch (error) {
        console.error("Erro ao buscar funcionários:", error);
      }
    };

    const fetchDepartments = async () => {
      try {
        const response = await apiClient.get("/departments/");
        departments.value = response.data;
      } catch (error) {
        console.error("Erro ao buscar departamentos:", error);
      }
    };

    const editEmployee = (id: number) => {
      router.push({ name: "edit-employee", params: { id } });
    };

    const deleteEmployee = async (id: number) => {
      try {
        await apiClient.delete(`/employees/delete/${id}/`); 
        fetchEmployees();
      } catch (error) {
        console.error("Erro ao excluir o funcionário:", error);
      }
    };

    const checkAuthStatus = () => {
      const token = localStorage.getItem("authToken");
      isAuthenticated.value = !!token;
    };

    const logout = () => {
      localStorage.removeItem("authToken");
      isAuthenticated.value = false;
      router.push({ name: "login" });
    };

    onMounted(() => {
      checkAuthStatus();
      fetchEmployees();
      fetchDepartments();
    });

    return {
      goToHome,
      goToLogin,
      employees,
      isAuthenticated,
      editEmployee,
      deleteEmployee,
      logout,
      goToAdd,
      getDepartmentName, 
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

  .regist-btn {
    margin-top: 20px;
    background-color: #e07d1f;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
  }
  </style>
  