<template>
    <article class="article">
        <h1 class="heading">{{heading}}</h1>
        <p class="description">{{description}}</p>
        <div class="container">
            <div class="CodeSection">
            </div>
            <div class="DisplaySection">      
            </div>
        </div>
    </article>
</template>

<script>

export default {
    name: 'ArticlePart',
    props: [
        'heading',
        'description'
    ]
}
</script>

<style scoped>
.article {
    padding: 20px 0;
}

.heading {
    padding: 0 0 60px 0;
}

.description {
    color: #8B81EF;
    font-weight: bold;
    padding: 0 120px;
}

.container {
    display: flex;
    flex-direction: row;
    position: relative;
    left: 12vw;
}

.CodeSection {
    background-color: black;
    width: 400px;
    height: 300px;
    border: 1px solid black;
    border-radius: 2px;
    color: white;
    text-align: left;
    padding: 30px;
    font-family: 'Courier';
}

.property-value {
    margin-left: 20px;
}

.DisplaySection {
    display: flex;
    flex-direction: row;
    background-color: #FFFFFF;
    width: 400px;
    height: 300px;
    border: 3px solid #E8D3FE;
    border-radius: 2px;
    padding: 5px;
}

.box1,
.box2,
.box3,
.box4 {
    width: 50px;
    height: 50px;
}

.box1 {
    background-color: #8B81EF;
}

.box2 {
    background-color: #B379EE;
    border: 2px solid aquamarine;
    align-self: auto;
}

.box3 {
    background-color: #CEA3F9;
}

.box4 {
    background-color: #FED0F5;
}
</style>