<template>
  <div class="main-table">
      <table class="table">
          <thead class="table-header">
              <th>Цена</th>
              <th>Количество</th>
              <th>Скидка %</th>
              <th>Итого</th>
          </thead>
            <TableRow
            v-for="row in table_data" :key="row.id"
            :row_data = "row"  :onChange='onCount'>
            </TableRow>
          <tbody>

          </tbody>
      </table>
  </div>
</template>

<script>
import TableRow from './table-row';

export default {
    name: "main-table",
    components: {
        TableRow
    },
    props: {
        table_data: {
            type: Array,
            default: () => {
                return [];
            }
        },
    },

    computed: {},

    data() {
        return {
            counts: []
        }
    },

    methods: {
        onCount(row, count) {            
            this.counts[row.id] = count;
            console.log(this.counts);
        }
    }

}
</script>

<style>
    .main-table {
        max-width: 900px;
        margin: 0 auto;
    }

    table {
        margin: 0 auto;
        width: 60%;
        font-size: 18px;
    }

    .table-header {
        width: 100%;
        padding: 10px 0;
    }
</style>