export default {
    methods: {
        giveMoney(money){
            this.money-=money
            this.$parent.money+=money
          }
    },
}