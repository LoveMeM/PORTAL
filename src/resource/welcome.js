const styles = [
    `
    /*
    * Hello Everyone，I'm Kenith.Q.Wang
    * 在GitHub上看到一个动态简历生成，蛮有意思，然后自己在Vue中仿照做一个。
    * 说做就做，我也来写一份简历！
    */

    /* 首先给页面上所有元素加上过渡效果 */
    * {
        transition: all .3s;
        -webkit-transition: all .3s;
    }
    /* 白色背景太单调了，我们来点背景 */
    body {
        color: rgb(222,222,222); 
        background: rgb(0,43,54); 
    }
    /* 文字离边框太近了 */
    .styles-wrap {
        width: 45vw; 
        height: 90vh;
        padding: .5em;
        border: 1px solid;
        margin: .5em;
        overflow: auto;
    }
    /* 代码高亮 */
    .token.selector{ 
        color: rgb(133,153,0); 
    }
    .token.property{ 
        color: rgb(187,137,0); 
    }
    .token.punctuation{ 
        color: yellow; 
    }
    .token.function{ 
        color: rgb(42,161,152); 
    }

    /* 加点 3D 效果呗 */
    #welcome{
        perspective: 1000px;
        -webkit-perspective: 1000px;
    }
    .styles-wrap {
        position: fixed; 
        left: 1rem; 
        top: 0; 
        transition: .5;
        -webkit-transition: .5; 
        transform: rotateY(10deg) translateZ(-100px);
        -webkit-transform: rotateY(10deg) translateZ(-100px);
    }

    /* 接下来我给自己准备一个编辑器 */
    .resume-wrap{
        width: 48vw; 
        height: 90vh; 
        position: fixed; 
        right: .5rem; 
        top: 0;
        padding: .5em;  
        margin: .5em;
        border: 1px solid;
        background: white; 
        color: #222;
        overflow: auto;
        transition: .5;
        -webkit-transition: .5; 
        transform: rotateY(-10deg) translateZ(-100px);
        -webkit-transform: rotateY(-10deg) translateZ(-100px);
    }
    /* 好了，我开始写简历了 */
    `,
    `
    /* 这个简历好像差点什么
    * 对了，这是 Markdown 格式的，我需要变成对 HR 更友好的格式
    * 简单，用开源工具翻译成 HTML 就行了
    */
    `,
    `
    /* 再对 HTML 加点样式 */
    .resume-wrap h2{
        display: inline-block;
        border-bottom: 1px solid;
        margin: 1em 0 .5em;
    }
    .resume-wrap ul,.resume-wrap ol{
        list-style: none;
    }
    .resume-wrap ul> li::before{
        content: '•';
        margin-right: .5em;
    }
    .resume-wrap ol {
        counter-reset: section;
    }
    .resume-wrap ol li::before {
        counter-increment: section;            
        content: counters(section, ".") " ";  
        margin-right: .5em;
    }
    .resume-wrap blockquote {
        margin: 1em;
        padding: .5em;
        background: #ddd;
    }
    `
]

let resume = `王全明(Kenith.Q.Wang)
----

一只迷途的前端小码农，在前端的世界里慢慢的摸索，渴望成为一名有丢丢厉害的前端工程师

技能
----

* ES6、Angular 2、TypeScript、Vue、CSS3、Webpack Etc
* C#、SqlServer、WCF
* NPM、Git
* 

工作经历
----

1. 任我行软件
2. 新蛋科技(成都)有限责任公司

链接
----

* [GitHub](https://github.com/LoveMeM)

> 如果你喜欢这个效果，Fork [我的项目](https://github.com/LoveMeM/PORTAL)

`


export { styles, resume }