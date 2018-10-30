<template>
<div id="skills">
    <a id="skills_a"></a>
    <figure class="s_figure">
        <div>
          <img src="assets/html.png" alt="">
        </div>
        <figcaption>
                <h4>HTML</h4>
                <p>Знание логики расположения элементов веб-страницы при помощи языка оформления текста HTML 5, фреймворк Bootstrap.</p>
        </figcaption>
    </figure>
    <figure class="s_figure">
        <div>
          <img src="assets/css.png" alt="">
        </div>
        <figcaption>
                <h4>CSS</h4>
                <p>Работа с каскадными таблицами стилей CSS 3, шаблонизаторами SCSS, Less; знание основ UX / UI дизайна.</p>
        </figcaption>
    </figure>
    <figure class="s_figure">
        <div>
          <img src="assets/javascript.png" alt="">
        </div>
        <figcaption>
                <h4>JAVASCRIPT</h4>
                <p>Язык программирования JavaScript(стандарт ES6), язык программирования TypeScript, фреймворки Angular 5, Angular 6.</p>
        </figcaption>
    </figure>
    <figure class="s_figure">
        <div>
          <img src="assets/git.png" alt="">
        </div>
        <figcaption>
                <h4>GIT</h4>
                <p>Работа с распределенной системой контроля версий Git, набором расширений Git-Flow.</p>
        </figcaption>
    </figure>
</div>
</template>

<script lang="ts">
export default {
    name: 'Skills',
    props: {

    }
}
</script>

<style scoped>
#skills {
    height: 100vh;
    width: 1100px;
    margin: 0 auto;
    padding-top: calc((100vh - 500px)/2);    
}
#skills>figure {
    width: 500px;
    height: 92px;
    display: block;
    clear: both;
    padding: 5px;
    padding-bottom: 20px;
    z-index: 1;
    transition: 0.5s ease-out;
    border: 4px solid transparent;
    cursor: pointer;
    z-index: 5;
}
#skills>figure:hover {
    border: 4px solid #fff;
    border-top-color: transparent;
    border-bottom-color: transparent;
    border-radius: 65px;
    transform: scale(1.1, 1.1);
}
#skills>figure:nth-child(1) {
    margin-left: 125px;
    margin-top: 30px;
}
#skills>figure:nth-child(2) {
    margin-left: 250px;
}
#skills>figure:nth-child(3) {
    margin-left: 375px;
}
#skills>figure:nth-child(4) {
    margin-left: calc(1500px/3);
}
#skills>figure>div {
    width: 100px;
    height: 100px;
    border-radius: 60px;
    border: 4px solid #fff;
    margin-right: 20px;
    float: left;
    transform-origin: center center;
    transform: rotate(-45deg);
    transition: 0.75s ease-out;
}
#skills>figure:nth-child(1)>div {
    border-bottom-color: rgba(255, 255, 255, 0);
}
#skills>figure:nth-child(2)>div {
    border-top-color: rgba(255, 255, 255, 0);
    border-bottom-color: rgba(255, 255, 255, 0);
}
#skills>figure:nth-child(3)>div {
    border-top-color: rgba(255, 255, 255, 0);
    border-bottom-color: rgba(255, 255, 255, 0);
}
#skills>figure:nth-child(4)>div {
    border-top-color: rgba(255, 255, 255, 0);
}

/*#skills>figure:nth-child(1):hover>div {
    border-bottom-color: rgba(255, 255, 255, 1);
}
#skills>figure:nth-child(2):hover>div {
    border-top-color: rgba(255, 255, 255, 1);
    border-bottom-color: rgba(255, 255, 255, 1);
}
#skills>figure:nth-child(3):hover>div {
    border-top-color: rgba(255, 255, 255, 1);
    border-bottom-color: rgba(255, 255, 255, 1);
}
#skills>figure:nth-child(4):hover>div {
    border-top-color: rgba(255, 255, 255, 1);
}*/
#skills>figure:hover>div {
    transform: rotate(-180deg);
    border-top-color: rgba(255, 255, 255, 1);
    border-bottom-color: rgba(255, 255, 255, 0);    
}
#skills>figure:hover>div>img {
    transform: rotate(180deg);
    margin-left: 15px;
    margin-top: 10px;
}
#skills>figure:nth-child(3):hover>div>img {
    margin-left: 1.5px;
    margin-top: 1px;
}
#skills>figure>div>img {
    width: 70px;
    height: 70px;
    margin: 17.5px 12.5px;
    transform-origin: center center;
    transition: 0.75s ease-out;
    transform: rotate(45deg);
}
#skills>figure:nth-child(3)>div>img {
    width: 92px;
    height: 92px;
    margin: 6px 3px;
}
#skills>figure:nth-child(4)>div>img {
    width: 90px;
    height: 90px;
    margin: 4.5px;
}
#skills>figure>figcaption {
    padding-top: 20px;
}
@keyframes Appear-Up {
    from {
        transform: translateY(40px);
        opacity: 0;
    };
    to {
        transform: translateY(0);
        opacity: 1;
    };
}
@keyframes Disappear-Up {
    from {
        transform: translateY(0px);
        opacity: 1;
    };
    to {
        transform: translateY(-40px);
        opacity: 0;
    }
}
@keyframes Appear-Down {
    from {
        transform: translateY(-40px);
        opacity: 0;
    };
    to {
        transform: translateY(0px);
        opacity: 1;
    };
}
@keyframes Disappear-Down {
    from {
        transform: translateY(0px);
        opacity: 1;
    };
    to {
        transform: translateY(40px);
        opacity: 0;
    };
}
</style>




