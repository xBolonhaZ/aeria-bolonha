<script setup lang="ts">
import { ref } from 'vue';
import type{CollectionItemWithId} from '@aeriajs/types'
definePage({
    meta: {
        title: 'Dashboard C'
    }
});
    const document = ref('');
    const checkins = ref<Checkin[]>([]);
    const errorMessage = ref('');

    const searchCheckins = async () => {

        const { error, result } = await aeria.list.checkins.GET({
          document: document.value,
        });

        if (error) {
          errorMessage.value = 'Erro ao buscar check-ins.';
          console.error(error);
          return;
        }

        checkins.value = result;
        errorMessage.value = ''; // Limpa a mensagem de erro, caso haja sucesso.

    };


type Checkin = CollectionItemWithId <'checkin'>

/* {
    _id: string;
    animal: {
        _id: string;
        name: string;
        age: number;
    }[];
    weight: number;
    temperature: number;
    type: string;
    reason: string;
    created_at: string;
    updated_at: string;
}; */

</script>

<template>

  <div class="tw-max-w-md tw-mx-auto tw-p-4 tw-text-center">
    <h2>Pesquisar Documento</h2>
    <input v-model="document" placeholder="Digite o CPF ou CNPJ" class="tw-w-full tw-p-2 tw-mb-4 tw-text-lg tw-border tw-border-gray-300 tw-rounded" />
    <button @click="searchCheckins" class="tw-bg-orange-500 tw-hover:bg-orange-400 tw-text-white tw-font-bold tw-py-2 tw-px-4 tw-rounded">Pesquisar</button>

    <div v-if="checkins.length" class="tw-mt-4 tw-text-left">
      <h3>Resultados de Check-ins:</h3>
      <ul>
        <li v-for="checkin in checkins" :key="checkin._id">
          Checkin feito em {{ checkin.created_at }} - Animal: {{ checkin.animal.name }} - Peso: {{ checkin.weight }}kg - Temperatura: {{ checkin.temperature }}ºC - Motivo: {{ checkin.reason }}
        </li>
      </ul>
    </div>
    <div v-if="errorMessage" class="tw-text-red-500 tw-mt-4">
      {{ errorMessage }}
    </div>
  </div>
</template>


