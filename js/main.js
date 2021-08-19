const app = new Vue({
  el: '#app',
  data() {
    return {
      inputText: '',
      number:'',
      lists: [
        {
          name: 'ネギを買う',
          time: '50',
          isDone: false
        },
        
      ],
      
      sec: '',
      timerOn: false,
      timerObj: null,
    };
  },
  methods: {
    onAdd () {
      if (this.inputText) {
        this.lists.push({
          name: this.inputText,
          time: this.number,
          isDone: false,
        });
        this.sec = this.number; 
        this.inputText = '';
        this.number = '';
      }
    },
    onDelete (index) {
      this.lists.splice(index, 1);
    },
    
    count: function() {
      if (this.sec <= 0) {
        this.complete();
      }else {
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
        this.sec.toString()
      ].map(function(str) {
        if (str.length < 2) {
          return "0" + str
        } else {
          return str
        }
      })
      return timeStrings[0] + "sec"
    }
  }
});