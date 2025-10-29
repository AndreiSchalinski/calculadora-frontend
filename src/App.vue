<template>
  <v-container fluid><v-form v-model="valid" style="width: 100%;">
    <v-container fluid>
      <v-row>
        <v-col>
          <v-btn @click="enviarDados">Calcular</v-btn>
        </v-col>
      </v-row>
    </v-container>

  </v-form>

  <v-data-table
    :headers="headers"
    :items="tabela"
  ></v-data-table>
  </v-container>
</template>
<script setup>
import axios from '../src/plugins/axios'; 
import { ref } from 'vue';

const headers = ref([
    {
      title: 'Data competência',
      align: 'start',
      sortable: false,
      key: 'dataInicial',
    },
    // { title: 'Valor de empréstimo', key: 'calories' },
    // { title: 'Saldo devedor', key: 'fat' },
    // { title: 'Consolidada', key: 'carbs' },
    // { title: 'Total', key: 'protein' },
    // { title: 'Amortização', key: 'iron' },
    // { title: 'Saldo', key: 'iron' },
    // { title: 'Provisão', key: 'iron' },
    // { title: 'Acumulado', key: 'iron' },
    // { title: 'Pago', key: 'iron' },
  ])

const tabela = ref([]);
const form = ref({dataInicial:"2024-01-01", dataFinal:"2034-01-01", primeiroPagamento:"2024-02-15", valorEmprestimo:"140000.00", taxaJuros:0.07});

const enviarDados = async () => {
  tabela.value = await axios.post(`/api/calculadora/calcular`,form.value).then(resp => resp.data);
}

</script>
<style scoped>

</style>
