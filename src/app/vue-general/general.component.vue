<template>
    <div id="general">
    <a id="main_a"></a>
    <div>
      <div>
      <img id="fadeImg" src="assets/img1.jpg">
    </div>
    <div id="fadeText">
      <h1>Веб-разработчик <span>Максим Горюнов</span></h1>
      <p>Помогаю с созданием одностраничных сайтов.</p>
      <div>
        <p>Санкт-Петербург, +7(921)872-37-29</p>
        <p>maximthehedgehog@yandex.ru
          <a href="https://github.com/MaxGoryunov" >Страница GitHub: MaxGoryunov</a>
        </p>
      </div>
    </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
    name: 'General',
    props: {

    }
}
</script>

<style scoped>
div#general {
    height: 100vh;
    width: 1100px;
    margin: 0 auto;
    padding-top: 105px;
    
}
@keyframes fadeImg {
    from {
        opacity: 0;
        transform:translateX(-30px);
    }
    to {
        opacity: 1;
        transform:translateX(0px);
    }
}
@keyframes fadeText {
    from {
        opacity: 0;
        transform:translateX(30px);
    }
    to {
        opacity: 1;
        transform:translateX(0px);
    }
}
div#general>div>div:first-of-type>img {
    padding: 10px;
    float: left;
    background: #fff;
    border-radius: 15px;
    width: 300px;
    height: auto;
    margin: 40px 30px 0;
    transition: 0.75s ease-out;
    animation: fadeImg 0.75s ease-out;
}
div#general>div>div:last-of-type {
    transition: 0.75s ease-out;
    animation: fadeText 0.75s ease-out;    
}
div#general>div {
    width: 75%;
    height: 430px;
    margin: 0 auto;
    margin-top: calc((100vh - 600px)/2);
}
div#general>div>div:last-of-type>h1 {
    padding-top: 120px;
    font-size: 2.5em;
    color: #fff;
}
div#general>div>div:last-of-type>h1>span {
    display: block;
    margin-top: -10px;
    font-size: 1.25em;
}
div#general>div>div:last-of-type>h1+p {
    color: #fff;
    font-style: italic;
    margin: 10px 0;
}
div#general>div>div:last-of-type>div>p {
    font-size: 1.1em;
    color: #fff;
}
div#general>div>div:last-of-type>div>p>a {
    display: block;
    color: #fff;
    text-decoration: none;
    transition: 0.5s ease-out;
}
div#general>div>div:last-of-type>div>p>a:hover {
    text-decoration: underline;
}
a#main_a {
    position: absolute;
    top: 0px;
}
</style>




