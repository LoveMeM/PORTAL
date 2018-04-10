<template>
    <div id="welcome">
        <div class="style-wrapper">
            <div class="style-code" :html="styleCodeTag"></div>
            <pre :html="highlightCode"></pre>
        </div>
    </div>
</template>
<script>
    import { styles, resume } from '../../resource/welcome'
    import Prism from 'prismjs'
    export default {
        data(){
            return {
                styleCode:""
            }
        },
        computed:{
            styleCodeTag:function(){
                return `<style>${this.styleCode}</style>`
            },
            highlightCode:function(){
                return Prism.highlight(this.styleCode,Prism.languages.css)
            }
        }
    }
</script>
<style scoped>


</style>
