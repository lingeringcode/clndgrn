<template>
  <Layout :show-logo="false">
    <div id="chart"></div>
    <D3ChartCard />
  </Layout>
</template>
<script>
import D3ChartCard from '~/components/D3ChartCard.vue'
import generateData from '~/assets/libs/randomData';

export default {
  name: 'app',
  data() {
    return {
      data: [],
      chartWidth: 0,
      currentValue: null,
      itemCount: 25,
      min: 10,
      max: 100,
    };
  },
  mounted() {
    setInterval(() => {
      this.data = generateData(this.itemCount,
        parseInt(this.min, 10),
        parseInt(this.max, 10));
    }, 2000);
  },
  methods: {
    onSelect(value) {
      this.currentValue = value;
    },
  },
  components: {
    D3ChartCard,
    generateData
  },
};
</script>


<style>
  body {
    font-size: 16px;
    font-family: 'Lato', sans-serif;
    text-align: left;
    cursor: default;
  }
  .area-chart{
    height: 300px}

  .title {
    margin-top: 20px;
    margin-bottom: 10px;
    margin-left: 20px;
    font-size:32px;
    font-family: 'Oswald', sans-serif;
    color: #2B2B2B;
  }
  text.titles {
    font-size: 0.65em;
    text-overflow:ellipsis;
  }

  .texts {
    margin-left: 20px;
    margin-right: 20px;
    line-height: 140%;
  }

  .credit {
    color: #9E9E9E;
    font-size: 10px;
    margin-bottom: 0.5em;
  }

  .notes {
    color: #9E9E9E;
    font-size: 10px;
  }

  .popover {
    pointer-events: none;
  }

  #chart{
    font-size: 16px;
    font-family: 'Lato', sans-serif;
    text-align: center;
    fill: #2B2B2B;
  }

  @media (min-width: 600px) {
    #chart{
      font-size: 20px;
    }
  }

  footer {
    line-height: normal;
  }
</style>
