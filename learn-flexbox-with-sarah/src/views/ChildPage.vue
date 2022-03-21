<template>
    <div>
        <span class="options">
            <router-link :to="{name: 'OrderOne'}">
                <button class="btn btn-info btn-sm">1</button>
            </router-link>
            <router-link :to="{name: 'OrderTwo'}">
                <button class="btn btn-info btn-sm">2</button>
            </router-link>
            <router-link :to="{name: 'OrderThree'}">
                <button class="btn btn-info btn-sm">3</button>
            </router-link>
            <router-link :to="{name: 'OrderFour'}">
                <button class="btn btn-info btn-sm">4</button>
            </router-link>
        </span>
        <ArticlePart 
            heading="Order"
            description="You can use this property to change the order of child items. You should define the order of every child item."
        />
        <div>
            <OrderOne />
            <router-view />
        </div>
    </div>
    <div>
        <span class="options">
            <router-link :to="{name: 'GrowZero'}">
                <button class="btn btn-info btn-sm">0</button>
            </router-link>
            <router-link :to="{name: 'GrowOne'}">
                <button class="btn btn-info btn-sm">1</button>
            </router-link>
            <router-link :to="{name: 'GrowTwo'}">
                <button class="btn btn-info btn-sm">2</button>
            </router-link>
        </span>
        <ArticlePart 
            heading="Flex Grow"
            description="You can use flex-grow to increase the space occupied by a child item. The floating point values are set relative to one another. Thus, you have to set this property on more than one child item to see the difference. Flex-shrink and flex-basis can be used for the adjusting the space occupied."
        />
        <div>
            <GrowZero />
            <router-view />
        </div>
    </div>
    <div>
        <span class="options">
            <router-link :to="{name: 'AsStartPage'}">
                <button class="btn btn-info btn-sm">flex-start</button>
            </router-link>
            <router-link :to="{name: 'AsEndPage'}">
                <button class="btn btn-info btn-sm">flex-end</button>
            </router-link>
            <router-link :to="{name: 'AsCenterPage'}">
                <button class="btn btn-info btn-sm">center</button>
            </router-link>
            <router-link :to="{name: 'AsStretchPage'}">
                <button class="btn btn-info btn-sm">stretch</button>
            </router-link>
            <router-link :to="{name: 'AsBaselinePage'}">
                <button class="btn btn-info btn-sm">baseline</button>
            </router-link>
            <router-link :to="{name: 'AsAutoPage'}">
                <button class="btn btn-info btn-sm">auto</button>
            </router-link>
        </span>
        <ArticlePart 
            heading="Align Self"
            description="This property allows you to change the alignment of a single child item."
        />
        <div>
            <AsStartPage />
            <router-view />
        </div>
    </div>
</template>

<script>
import ArticlePart from '../components/ArticlePart.vue';
import OrderOne from '../childViews/order/OrderOne';
import GrowZero from '../childViews/grow/GrowZero';
import AsStartPage from '../childViews/as/AsStartPage';

export default {
    name: 'ChildPage',
    components: {
        ArticlePart,
        OrderOne,
        GrowZero,
        AsStartPage
    }
}
</script>

<style scoped>
.options {
    position: relative;
    top: 115px;
    padding: 0 10px;
}

.options button {
    margin: 0 10px;
}
</style>