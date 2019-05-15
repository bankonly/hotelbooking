<template>
    <div>
        {{gretting}}
    </div>
</template>
<script>
export default {
    data(){
        return{
            gretting:'HELLOOO'
        }
    },
    props:[
        'dataurl',
    ],
    
    mounted(){
        // alert(this.dataurl);
        this.getdata()
        console.log(this.dataurl)
        
    },
    methods: {
        getdata(){
            axios.get('/search?'+this.dataurl).then(res=>{
                console.log(res.data)
            }).catch(er=>{
                console.log(er.res)
            })
        }
    },
    
}
</script>
<style scoped>

</style>
