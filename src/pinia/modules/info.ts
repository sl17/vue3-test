import { defineStore } from "pinia";

let useInfoStore = defineStore("info", {
    state:()=>{
        return {
            count: 1000,
            arr:[1,2,4,5,6,7,8,9]
        }
    },
    actions:{
        updateNum(a:number, b:number){
            this.count+=a
        }
    },
    getters:{
        total(){
            return this.arr.reduce((pre:number,next:number)=>pre+next,0)
        }
    }
})

export default useInfoStore;