<template>
    <div class="container">
      <h1>Consultar Histórico de Check-ins de Animais</h1>
      
      <form @submit.prevent="buscarHistorico">
        <div class="form-group">
          <label for="cpf">Insira seu CPF:</label>
          <input
            v-model="cpf"
            type="text"
            id="cpf"
            placeholder="001.234.569.99"
            required
          />
        </div>
        <button type="submit">Buscar</button>
      </form>
  
      <!-- Mostrar resultados -->
      <div v-if="checkins.length > 0">
        <h2>Histórico de Check-ins</h2>
        <ul>
          <li v-for="checkin in checkins" :key="checkin.id">
            Checkin feito em {{ checkin.date }} - Animal: {{ checkin.animalName }} - Peso: {{ checkin.weight }}kg - Temperatura: {{ checkin.temperature }}ºC - Motivo: {{ checkin.reason }}
          </li>
        </ul>
      </div>
  
      <!-- Mostrar mensagem se não houver resultados -->
      <div v-else-if="searched">
        <p>Nenhum check-in encontrado para o CPF informado.</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  
  // Variáveis reativas
  const cpf = ref('');
  const checkins = ref([]);
  const searched = ref(false);
  
  // Função para buscar o histórico de check-ins
  const buscarHistorico = async () => {
    try {
      const response = await axios.post('/api/checkin/search', { cpf: cpf.value });
      checkins.value = response.data.checkins; // Supondo que o backend retorna um array de check-ins
      searched.value = true;
    } catch (error) {
      console.error('Erro ao buscar histórico:', error);
      checkins.value = [];
      searched.value = true;
    }
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }
  .form-group {
    margin-bottom: 20px;
  }
  button {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
  }
  button:hover {
    background-color: #45a049;
  }
  h1, h2 {
    text-align: center;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    margin: 10px 0;
    background-color: #f2f2f2;
    padding: 10px;
    border-radius: 5px;
  }
  </style>