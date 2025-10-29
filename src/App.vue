<template>
  <v-form v-model="valid" style="width: 100%;">
    <v-container fluid>
      <v-row>
        <v-col>
          <v-btn @click="enviarDados">Calcular</v-btn>
        </v-col>
      </v-row>
    </v-container>
    {{ tabela }}
  </v-form>
</template>
<script setup>
import axios from '../src/plugins/axios'; 
import { ref } from 'vue';

const tabela = ref([]);
const form = ref({dataInicial:"2024-01-01", dataFinal:"2034-01-01", primeiroPagamento:"2024-02-15", valorEmprestimo:"140000.00", taxaJuros:0.07});

const enviarDados = async () => {
  tabela.value = await axios.post(`/api/calculadora/calcular`,form.value).then(resp => resp);
}

</script>
<style scoped>

</style>
