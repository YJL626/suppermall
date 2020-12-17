<template>
  <div id="param-container" v-if="itemParams.rule">
    <table id="detail-rule-table">
      <tr>
        <th>{{ itemParams.rule.key }}</th>
      </tr>
      <tr v-for="item in ruleTabArr" :key="item + getRandom()">
        <td v-for="size in item" :key="size + getRandom()">{{ size }}</td>
      </tr>
    </table>
    <p class="disclaimer">{{ itemParams.rule.disclaimer }}</p>
    <table id="detail-info-table">
      <tr>
        <th>{{ itemParams.info.key }}</th>
      </tr>
      <tr v-for="item in infoTabArr" :key="item.key + getRandom()">
        <td class="key">{{ item.key }}</td>
        <td class="value">{{ item.value }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "DetailParams",
  created() {},
  data() {
    return {};
  },
  props: {
    itemParams: {
      default() {
        return {};
      },
    },
  },
  computed: {
    ruleTabArr() {
      if (!this.itemParams.rule) return;
      const table = this.itemParams.rule.tables;
      return table.reduce((acc, arr) => acc.concat(arr), []);
    },
    infoTabArr() {
      if (!this.itemParams.rule) return;
      return this.itemParams.info.set;
    },
  },
  methods: {
    getRandom() {
      return Math.random();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "assets/css/variable.scss";
#param-container {
  padding: 20px 6%;
  border-bottom: 2.88px solid rgba($color: #000000, $alpha: 0.08);
}
#detail-rule-table {
  width: 100%;
  tr {
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-bottom: 1px solid rgba($color: #000000, $alpha: 0.08);
    td {
      flex: 1;
      padding: 10px;
      text-align: center;
    }
    td:nth-child(1) {
      flex-basis: 10%;
      text-align: left;
      padding-left: 0;
    }
    td:last-child {
      text-align: right;
      padding-right: 15px;
    }
  }
  tr:first-child {
    display: flex;
    justify-content: center;
    font-size: 16px;
    padding: 5px;
  }
}
.disclaimer {
  margin: 20px auto;
}
#detail-info-table {
  tr:first-child {
    display: flex;
    justify-content: center;
    font-size: 16px;
    padding: 6px;
    margin-top: 15px;
  }
  tr {
    display: flex;
    width: 100%;
    border-bottom: 1px solid rgba($color: #000000, $alpha: 0.08);

    td {
      padding: 6px 10px 10px 10px;
    }
    .key {
      flex: 1 1 15%;
    }
    .value {
      color: $high-text;
      flex: 1 1 40%;
    }
  }
}
</style>