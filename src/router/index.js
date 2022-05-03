import { createRouter, createWebHistory } from 'vue-router'
import EventList from '@/views/EventList.vue'
import EventLayout from '@/views/event/EventLayout.vue'
import EventDetails from '@/views/event/EventDetails.vue'
import EventRegister from '@/views/event/EventRegister.vue'
import EventEdit from '@/views/event/EventEdit.vue'
import NotFound from '@/views/NotFound.vue'
import NetworkError from '@/views/NetworkError.vue'
import NProgress from 'nprogress'
import { useEventStore } from '@/stores/EventStore'
import { useFlashMessageStore } from '@/stores/FlashMessageStore'

const About = () =>
  import(/* webpackChunkName: "about" */ '../views/AboutView.vue')

const EventCreate = () =>
  import(/* webpackChunkName: "createEvent" */ '../views/event/EventCreate.vue')

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList,
    props: (route) => ({ page: parseInt(route.query.page) || 1 }),
    beforeEnter: () => {
      const eventStore = useEventStore()
      return eventStore.fetchEvents().catch(() => {
        return { name: 'NetworkError' }
      })
    },
  },
  {
    path: '/about-us',
    name: 'About',
    component: About,
  },
  {
    path: '/about',
    redirect: { name: 'About' },
  },
  {
    path: '/event/create',
    name: 'EventCreate',
    component: EventCreate,
  },
  {
    path: '/events/:id',
    name: 'EventLayout',
    props: true,
    component: EventLayout,
    beforeEnter: (to) => {
      const eventStore = useEventStore()
      return eventStore.fetchEvent(to.params.id).catch((error) => {
        if (error.response && error.response.status == 404) {
          return {
            name: '404Resource',
            params: { resource: 'event' },
          }
        } else {
          return { name: 'NetworkError' }
        }
      })
    },
    children: [
      {
        path: '',
        name: 'EventDetails',
        component: EventDetails,
      },
      {
        path: 'register',
        name: 'EventRegister',
        component: EventRegister,
      },
      {
        path: 'edit',
        name: 'EventEdit',
        component: EventEdit,
        meta: { requireAuth: true },
      },
    ],
  },
  {
    path: '/event/:afterEvent(.*)',
    redirect: (to) => {
      return { path: '/events/' + to.params.afterEvent }
    },
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
  },
  {
    path: '/404/:resource',
    name: '404Resource',
    component: NotFound,
    props: true,
  },
  {
    path: '/network-error',
    name: 'NetworkError',
    component: NetworkError,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

router.beforeEach((to, from) => {
  NProgress.start()
  const flashMessageStore = useFlashMessageStore()
  const notAuthorized = false
  if (to.meta.requireAuth && notAuthorized) {
    flashMessageStore.message =
      'Sorry, you are not authorized to view this page.'

    setTimeout(() => {
      flashMessageStore.message = ''
    }, 3000)

    if (from.href) {
      return false
    } else {
      return { path: '/' }
    }
  }
})
router.afterEach(() => {
  NProgress.done()
})

export default router
