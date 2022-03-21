import { createRouter, createWebHistory } from 'vue-router';
import ParentPage from '../views/ParentPage.vue';
import ChildPage from '../views/ChildPage.vue';
import DirectionColPage from '../parentViews/direction/DirectionColPage.vue';
import DirectionColRevPage from '../parentViews/direction/DirectionColRevPage.vue';
import DirectionRowPage from '../parentViews/direction/DirectionRowPage.vue';
import DirectionRowRevPage from '../parentViews/direction/DirectionRowRevPage.vue';
import NowrapPage from '../parentViews/wrap/NowrapPage.vue';
import WrapPage from '../parentViews/wrap/WrapPage.vue';
import WrapReversePage from '../parentViews/wrap/WrapReversePage.vue';
import JustifyStartPage from '../parentViews/justify/JustifyStartPage.vue';
import JustifyEndPage from '../parentViews/justify/JustifyEndPage.vue';
import JustifyCenterPage from '../parentViews/justify/JustifyCenterPage.vue';
import JustifySpaceBetweenPage from '../parentViews/justify/JustifySpaceBetweenPage.vue';
import JustifySpaceAroundPage from '../parentViews/justify/JustifySpaceAroundPage.vue';
import JustifySpaceEvenlyPage from '../parentViews/justify/JustifySpaceEvenlyPage.vue';
import AiStartPage from '../parentViews/ai/AiStartPage.vue';
import AiEndPage from '../parentViews/ai/AiEndPage.vue';
import AiCenterPage from '../parentViews/ai/AiCenterPage.vue';
import AiStretchPage from '../parentViews/ai/AiStretchPage.vue';
import AiBaselinePage from '../parentViews/ai/AiBaselinePage.vue';
import AcStartPage from '../parentViews/ac/AcStartPage.vue';
import AcEndPage from '../parentViews/ac/AcEndPage.vue';
import AcCenterPage from '../parentViews/ac/AcCenterPage.vue';
import AcStretchPage from '../parentViews/ac/AcStretchPage.vue';
import AcSpaceBetweenPage from '../parentViews/ac/AcSpaceBetweenPage.vue';
import AcSpaceAroundPage from '../parentViews/ac/AcSpaceAroundPage.vue';
import GapTen from '../parentViews/gap/GapTen.vue';
import GapTwenty from '../parentViews/gap/GapTwenty.vue';
import OrderOne from '../childViews/order/OrderOne.vue';
import OrderTwo from '../childViews/order/OrderTwo.vue';
import OrderThree from '../childViews/order/OrderThree.vue';
import OrderFour from '../childViews/order/OrderFour.vue';
import GrowZero from '../childViews/grow/GrowZero.vue';
import GrowOne from '../childViews/grow/GrowOne.vue';
import GrowTwo from '../childViews/grow/GrowTwo.vue';
import AsStartPage from '../childViews/as/AsStartPage.vue';
import AsEndPage from '../childViews/as/AsEndPage.vue';
import AsCenterPage from '../childViews/as/AsCenterPage.vue';
import AsStretchPage from '../childViews/as/AsStretchPage.vue';
import AsBaselinePage from '../childViews/as/AsBaselinePage.vue';
import AsAutoPage from '../childViews/as/AsAutoPage.vue';

const routes = [
  {
    path: '/',
    name: 'ParentPage',
    component: ParentPage,
    children:[
      {
      path: '/directioncol',
      name: 'DirectionColPage',
      component: DirectionColPage,
      },
      {
        path: '/directionrow',
        name: 'DirectionRowPage',
        component: DirectionRowPage,
      },
      {
        path: '/directionrowrev',
        name: 'DirectionRowRevPage',
        component: DirectionRowRevPage,
      },
      {
        path: '/directioncolrev',
        name: 'DirectionColRevPage',
        component: DirectionColRevPage,
      },
      {
        path: '/nowrap',
        name: 'NowrapPage',
        component: NowrapPage,
      },
      {
        path: '/wrap',
        name: 'WrapPage',
        component: WrapPage,
      },
      {
        path: '/wrapreverse',
        name: 'WrapReversePage',
        component: WrapReversePage,
      },
      {
        path: '/justifystart',
        name: 'JustifyStartPage',
        component: JustifyStartPage,
      },
      {
        path: '/justifyend',
        name: 'JustifyEndPage',
        component: JustifyEndPage,
      },
      {
        path: '/justifycenter',
        name: 'JustifyCenterPage',
        component: JustifyCenterPage,
      },
      {
        path: '/justifyspacebetween',
        name: 'JustifySpaceBetweenPage',
        component: JustifySpaceBetweenPage,
      },
      {
        path: '/justifyspacearound',
        name: 'JustifySpaceAroundPage',
        component: JustifySpaceAroundPage,
      },
      {
        path: '/justifyspaceevenly',
        name: 'JustifySpaceEvenlyPage',
        component: JustifySpaceEvenlyPage,
      },
      {
        path: '/aistart',
        name: 'AiStartPage',
        component: AiStartPage,
      },
      {
        path: '/aiend',
        name: 'AiEndPage',
        component: AiEndPage,
      },
      {
        path: '/aicenter',
        name: 'AiCenterPage',
        component: AiCenterPage,
      },
      {
        path: '/aistretch',
        name: 'AiStretchPage',
        component: AiStretchPage,
      },
      {
        path: '/aibaseline',
        name: 'AiBaselinePage',
        component: AiBaselinePage,
      },
      {
        path: '/acstart',
        name: 'AcStartPage',
        component: AcStartPage,
      },
      {
        path: '/acend',
        name: 'AcEndPage',
        component: AcEndPage,
      },
      {
        path: '/accenter',
        name: 'AcCenterPage',
        component: AcCenterPage,
      },
      {
        path: '/acstretch',
        name: 'AcStretchPage',
        component: AcStretchPage,
      },
      {
        path: '/acspacebetween',
        name: 'AcSpaceBetweenPage',
        component: AcSpaceBetweenPage,
      },
      {
        path: '/acspacearound',
        name: 'AcSpaceAroundPage',
        component: AcSpaceAroundPage,
      },
      {
        path: '/gapTen',
        name: 'GapTen',
        component: GapTen,
      },
      {
        path: '/gapTwenty',
        name: 'GapTwenty',
        component: GapTwenty,
      }
  ]
  },
  {
    path: '/child',
    name: 'ChildPage',
    component: ChildPage,
    children:[
      {
        path: '/orderOne',
        name: 'OrderOne',
        component: OrderOne,
      },
      {
        path: '/orderTwo',
        name: 'OrderTwo',
        component: OrderTwo,
      },
      {
        path: '/orderThree',
        name: 'OrderThree',
        component: OrderThree,
      },
      {
        path: '/orderFour',
        name: 'OrderFour',
        component: OrderFour,
      },
      {
        path: '/growZero',
        name: 'GrowZero',
        component: GrowZero,
      },
      {
        path: '/growOne',
        name: 'GrowOne',
        component: GrowOne,
      },
      {
        path: '/growTwo',
        name: 'GrowTwo',
        component: GrowTwo,
      },
      {
        path: '/asstart',
        name: 'AsStartPage',
        component: AsStartPage,
      },
      {
        path: '/asend',
        name: 'AsEndPage',
        component: AsEndPage,
      },
      {
        path: '/ascenter',
        name: 'AsCenterPage',
        component: AsCenterPage,
      },
      {
        path: '/asstretch',
        name: 'AsStretchPage',
        component: AsStretchPage,
      },
      {
        path: '/asbaseline',
        name: 'AsBaselinePage',
        component: AsBaselinePage,
      },
      {
        path: '/asauto',
        name: 'AsAutoPage',
        component: AsAutoPage,
      }
    ]
  },
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router