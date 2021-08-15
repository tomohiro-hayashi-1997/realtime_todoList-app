const app = new Vue({
  el: '#app',
  data() {
    return {
      inputText: '',
      lists: [
        {
          name: 'ネギを買う',
          isDone: false
        }
      ],
      min: 59,
      sec: 59,
      timerOn: false,
      timerObj: null,
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
    
    count: function() {
      if (this.sec <= 0 && this.min >= 1) {
        this.min --;
        this.sec = 59;
      } else if(this.sec <= 0 && this.min <= 0) {
        this.complete();
      } else {
        this.sec --;
      }
    },

    start: function() {
      let self = this;
      this.timerObj = setInterval(function() {self.count()}, 1000)
      this.timerOn = true; //timerがONであることを状態として保持
    },

    stop: function() {
      clearInterval(this.timerObj);
      this.timerOn = false; //timerがOFFであることを状態として保持
    },

    complete: function() {
      clearInterval(this.timerObj)
    }
  },

  computed: {
    formatTime: function() {
      let timeStrings = [
        this.min.toString(),
        this.sec.toString()
      ].map(function(str) {
        if (str.length < 2) {
          return "0" + str
        } else {
          return str
        }
      })
      return timeStrings[0] + ":" + timeStrings[1]
    }
  }
});