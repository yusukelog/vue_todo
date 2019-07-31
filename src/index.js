import Vue from 'vue'
// Bootstrapのスタイルシート側の機能を読み込む
import "bootstrap/dist/css/bootstrap.min.css"
// BootstrapのJavaScript側の機能を読み込む
import "bootstrap"

new Vue({
    el:'#app',
    data(){
        return{
            newItem:'',
            todos:[],
            validate:false,
            message:'',
            fsh:false
        }
    },
    methods:{
        addItem(){
            if(this.newItem === ''){
                this.alertValite('何か文字を入力してね！')
                return
            }
            for(let key of Object.keys(this.todos)) {
                if(this.newItem === this.todos[key].item){
                    this.alertValite('すでに登録してますけど...')
                    return
                }
            }
            var todo = {
                item:this.newItem,
                isDone:false,
            }
            this.todos.push(todo)
            this.flushMessage()
            this.newItem = ''
            this.validate = false
        },
        delItem(i){
            this.todos.splice(i,1)
        },
        alertValite(message){
            this.validate = true
            this.message = message
        },
        allRemove(){
            this.todos = []
        },
        flushMessage(){
            this.fsh = true
            setTimeout(() => {
                this.fsh = false
            }, 1000);
        }
    }
})