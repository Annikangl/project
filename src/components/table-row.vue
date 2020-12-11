<template>

  <tr class="table-row">
    <td>
        <p type="number" id="item-price">{{ price }}</p>
    </td>
    <td>
        <input type="number" id="item-count" min="0" v-model.number="count" @change="sendCount()">
    </td>
    <td>
        <input type="number" min="0" id="item-sale"
          v-model="percent">
    </td>
    <td>
          {{ totalStr }}
    </td>
  </tr>

</template>

<script>

export default {
    name: 'tableRow',
    props: {
        row_data: {
            type: Object,
            default: () => {
                return {};
            }
        },
        onChange : {}
    },


    data() {
        return {
            price: this.row_data.price,
            percent: this.row_data.sale,
            count_: this.row_data.count,

            
            get count() { return this.count_ > 0 ? this.count_: ""; },
            set count(v) { return this.count_ = Math.max(Math.min(v, 500), 0); },
        }
    },

    methods: {
        sendCount() {
            this.onChange(this.row_data, this.count_);
        },

    },

    computed: {
        total() {
            return this.row_data.price * this.count * (1.0-this.percent*0.01);
        },

        totalStr() { 
            return this.total>0 ? this.total.toFixed(2) : "";
        }
    },

}

</script>

<style>

    input {
        font-size: 18px;
    }

    #item-price {
        text-align: center;
        border: 0;
    }

    #item-sale {
        width: 50px;
        border: 0;
    }

    #item-count {
        width: 60px;
        height: 25px;
        border: 1px solid lightgrey;
        box-shadow: none;
    }
</style>