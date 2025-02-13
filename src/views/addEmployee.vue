<template>
    <AppHeader :isAuthenticated="isAuthenticated" @logout="logout" />
    <div class="container mt-4">
      <h2>Adicionar Novo Funcionário</h2>
      <form @submit.prevent="addEmployee">
        <div class="form-group">
          <label for="name">Nome:</label>
          <input
            id="name"
            v-model="employee.name"
            type="text"
            class="form-control"
            placeholder="Digite o nome"
            required
          />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input
            id="email"
            v-model="employee.email"
            type="email"
            class="form-control"
            placeholder="Digite o email"
            required
          />
        </div>
        <div class="form-group">
          <label for="department">Setor:</label>
          <select
            id="department"
            v-model="employee.department"
            class="form-control"
            required
          >
            <option v-for="dept in departments" :key="dept.id" :value="dept.id">
              {{ dept.name }}
            </option>
          </select>
        </div>
        <div class="form-group">
          <label for="description">Descrição:</label>
          <textarea
            id="description"
            v-model="employee.description"
            class="form-control"
            placeholder="Digite uma descrição (opcional)"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary btn-add">Adicionar Funcionário</button>
      </form>
    </div>
    <footer class="footer bg-dark text-white text-center py-3 mt-4" style="position: fixed; bottom: 0; width: 100%;">
        © 2025 | Secretaria Municipal Da Fazenda De Maceió
      </footer>
  </template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import apiClient from "@/services/axios";
import AppHeader from "@/components/AppHeader.vue";


export default defineComponent({
  components: {
    AppHeader,
  },
  name: "AddEmployee",
  setup() {
    const router = useRouter();
    const employee = ref({
      name: "",
      email: "",
      department: "",
      description: "",
    });
    const departments = ref<Array<any>>([]);
    const error = ref("");
    const isAuthenticated = ref(false);


    const fetchDepartments = async () => {
      try {
        const response = await apiClient.get("/departments/");
        departments.value = response.data;
      } catch (err: any) {
        console.error("Erro ao buscar departamentos:", err);
      }
    };


    const addEmployee = async (): Promise<void> => {
      try {
        await apiClient.post("/employees/create/", employee.value);
        alert("Funcionário adicionado com sucesso");
        router.push({ name: "servidores" });
      } catch (err) {
        const errorResponse = (err as any)?.response?.data?.error || "Erro ao adicionar funcionário";
        error.value = errorResponse;
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

    
    const goToHome = () => {
      router.push({ name: "home" });
    };

    onMounted(() => {
      checkAuthStatus();
      fetchDepartments();
    });

    return {
      employee,
      departments,
      addEmployee,
      isAuthenticated,
      logout,
      goToHome,
      error,
      AppHeader,
    };
  },
});
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: auto;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
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

.btn-add {
    background-color: #e07d1f;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
}
.btn-add:hover {
    background-color: #a05917;
}
</style>
