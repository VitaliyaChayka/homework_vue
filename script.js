new Vue({
    el: '#vue',
    data: {
      counter: ''

    },
    methods: {
      add() {
      this.counter++;
    },

    minus() {
      this.counter--;

  },

    clean(){
      this.counter = '';
    }
    }
})

