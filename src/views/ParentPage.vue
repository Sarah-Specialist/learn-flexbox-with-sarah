<template>
    <div>
        <p class="advice">* Remember to set "display: flex" and "flex-direction" before setting other properties *</p>
        <ArticlePart 
            heading="Flex"
            description="By setting display to flex, you can access flexbox properties. This property should be set on the parent container."
        />
        <div>
        <img src="../assets/flex2.jpg" alt="flex" class="fleximage2" width=390 height=290>
        <img src="../assets/flex.jpg" alt="flex" class="fleximage" width=390 height=290>
        </div>
    </div>
    <div>
        <span class="options">
            <router-link :to="{name: 'DirectionColPage'}">
                <button class="btn btn-info btn-sm">column</button>
            </router-link>
            <router-link :to="{name: 'DirectionRowPage'}">
                <button class="btn btn-info btn-sm">row</button>
            </router-link>
            <router-link :to="{name: 'DirectionColRevPage'}">
                <button class="btn btn-info btn-sm">column-reverse</button>
            </router-link>
            <router-link :to="{name: 'DirectionRowRevPage'}">
                <button class="btn btn-info btn-sm">row-reverse</button>
            </router-link>
        </span>
        <ArticlePart 
            heading="Flex Direction"
            description="This property dictates the direction that child items are positioned."
        />
        <div>
            <DirectionColPage />
            <router-view />
        </div>
    </div>
    <div>
        <span class="options">
            <router-link :to="{name: 'NowrapPage'}">
                <button class="btn btn-info btn-sm">nowrap</button>
            </router-link>
            <router-link :to="{name: 'WrapPage'}">
                <button class="btn btn-info btn-sm">wrap</button>
            </router-link>
            <router-link :to="{name: 'WrapReversePage'}">
                <button class="btn btn-info btn-sm">wrap-reverse</button>
            </router-link>
        </span>
        <ArticlePart 
            heading="Flex Wrap"
            description="This property controls what happens to child items if they overflow the size of the container."
        />
        <div>
            <NowrapPage />
            <router-view />
        </div>
    </div>
    <div>
        <span class="options">
            <router-link :to="{name: 'JustifyStartPage'}">
                <button class="btn btn-info btn-sm">flex-start</button>
            </router-link>
            <router-link :to="{name: 'JustifyEndPage'}">
                <button class="btn btn-info btn-sm">flex-end</button>
            </router-link>
            <router-link :to="{name: 'JustifyCenterPage'}">
                <button class="btn btn-info btn-sm">center</button>
            </router-link>
            <router-link :to="{name: 'JustifySpaceBetweenPage'}">
                <button class="btn btn-info btn-sm">space-between</button>
            </router-link>
            <router-link :to="{name: 'JustifySpaceAroundPage'}">
                <button class="btn btn-info btn-sm">space-around</button>
            </router-link>
            <router-link :to="{name: 'JustifySpaceEvenlyPage'}">
                <button class="btn btn-info btn-sm">space-evenly</button>
            </router-link>
        </span>
        <ArticlePart 
            heading="Justify Content"
            description="This property defines how child items are aligned along the main axis."
            selector="container"
            property="justify-content : flex;"
        />
        <div>
            <JustifyStartPage />
            <router-view />
        </div>
    </div>
    <div>
        <span class="options">
            <router-link :to="{name: 'AiStartPage'}">
                <button class="btn btn-info btn-sm">flex-start</button>
            </router-link>
            <router-link :to="{name: 'AiEndPage'}">
                <button class="btn btn-info btn-sm">flex-end</button>
            </router-link>
            <router-link :to="{name: 'AiCenterPage'}">
                <button class="btn btn-info btn-sm">center</button>
            </router-link>
            <router-link :to="{name: 'AiStretchPage'}">
                <button class="btn btn-info btn-sm">stretch</button>
            </router-link>
            <router-link :to="{name: 'AiBaselinePage'}">
                <button class="btn btn-info btn-sm">baseline</button>
            </router-link>
        </span>
        <ArticlePart 
            heading="Align Items"
            description="This property defines how child items are aligned along the CROSS axis."
            selector="container"
            property="align-items : flex-start;"
        />
        <div>
            <AiStartPage />
            <router-view />
        </div>
    </div>
    <div>
        <span class="options">
            <router-link :to="{name: 'AcStartPage'}">
                <button class="btn btn-info btn-sm">flex-start</button>
            </router-link>
            <router-link :to="{name: 'AcEndPage'}">
                <button class="btn btn-info btn-sm">flex-end</button>
            </router-link>
            <router-link :to="{name: 'AcCenterPage'}">
                <button class="btn btn-info btn-sm">center</button>
            </router-link>
            <router-link :to="{name: 'AcStretchPage'}">
                <button class="btn btn-info btn-sm">stretch</button>
            </router-link>
            <router-link :to="{name: 'AcSpaceBetweenPage'}">
                <button class="btn btn-info btn-sm">space-between</button>
            </router-link>
            <router-link :to="{name: 'AcSpaceAroundPage'}">
                <button class="btn btn-info btn-sm">space-around</button>
            </router-link>
        </span>
        <ArticlePart 
            heading="Align Content"
            description="When there are multiple lines of child items, this property defines how child items are aligned along the cross axis."
            selector="container"
            property="align-content : flex-start;"
        />
        <div>
            <AcStartPage />
            <router-view />
        </div>
    </div>
        <div>
        <span class="options">
            <router-link :to="{name: 'GapTen'}">
                <button class="btn btn-info btn-sm">10px</button>
            </router-link>
            <router-link :to="{name: 'GapTwenty'}">
                <button class="btn btn-info btn-sm">20px</button>
            </router-link>
        </span>
        <ArticlePart 
            heading="Gap"
            description="This property adds space between child items."
            selector="container"
            property="gap : 10px;"
        />
        <div>
            <GapTen />
            <router-view />
        </div>
    </div>
</template>

<script>
import ArticlePart from '../components/ArticlePart.vue';
import DirectionColPage from '../parentViews/direction/DirectionColPage';
import NowrapPage from '../parentViews/wrap/NowrapPage';
import JustifyStartPage from '../parentViews/justify/JustifyStartPage';
import AiStartPage from '../parentViews/ai/AiStartPage';
import AcStartPage from '../parentViews/ac/AcStartPage';
import GapTen from '../parentViews/gap/GapTen';

export default {
    name: 'ParentPage',
    components: {
        ArticlePart,
        DirectionColPage,
        NowrapPage,
        JustifyStartPage,
        AiStartPage,
        AcStartPage,
        GapTen
    }
}
</script>

<style scoped>
.advice {
    position: absolute;
    top: 250px;
    left: 25vw;
    color: #B379EE;
}

.options {
    position: relative;
    top: 115px;
    padding: 0 10px;
}

.options button {
    margin: 0 10px;
}

.fleximage2 {
    position: absolute;
    top: 345px;
    left: 240px;
}

.fleximage {
    position: absolute;
    top: 345px;
}
</style>