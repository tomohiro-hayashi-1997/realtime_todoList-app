const app = new Vue({
  el: '#app',
  data() {
    return {
      inputText: '',
      lists: [
        {
          name: 'XX作業',
          isDone: false
        }
      ]
    };
  },
  methods: {
    onAdd () {
      if (this.inputText) {
        this.lists.push({
          name: this.inputText,
          isDone: false,
        });
        this.inputText = '';
      }
    },
    onDelete (index) {
      this.lists.splice(index, 1);
    },
  },

});