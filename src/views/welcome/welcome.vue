<template>
    <div id="welcome">
        <div class="style-wrapper">
            <div class="style-code" v-show="false" :html="styleCodeTag"></div>
            <pre :html="highlightCode"></pre>
        </div>
        <div class="resume-wrapper">
            <div :html="resumeContent" v-if="enabledHTML"></div>
            <pre class="resume-markdown" v-else>{{ resumeContent }}</pre>
        </div>
    </div>
</template>
<script>
    import { styles, resume } from '../../resource/welcome'
    import Prism from 'prismjs'
    import marked from 'marked'
    export default {
        data(){
            return {
                styleCode:"",
                enabledHTML:false,
                markdown:"",
                delay:60,
                timer:null
            }
        },
        computed:{
            styleCodeTag:function(){
                return `<style>${this.styleCode}</style>`
            },
            highlightCode:function(){
                return Prism.highlight(this.styleCode,Prism.languages.css)
            },
            resumeContent:function(){
                return this.enabledHTML ? marked(this.markdown) : this.markdown
            }
        },
        mounted(){

        },
        methods:{
            showStyles(num,callback){
                let style = styles[num]
                let prevLength = 0,length = 0
                if(!style) return
                length = styles.filter((item,i)=>i<=num).reduce((result,item)=>{
                    result += item.length
                    return result
                },0)
                prevLength = length - style.length
                clearInterval(this.timer)
                this.timer = setInterval(()=>{
                    let start = this.styleCode.length - prevLength
                    let char = style.substring(start, start + 1) || ''
                    this.styleCode += char
                    if(this.styleCode.length === length ){
                        clearInterval(this.timer)
                        callback && callback()
                    }
                    else{

                    }
                },this.delay)
            },
            goBottom(){
                
            }
        }
    }
</script>
