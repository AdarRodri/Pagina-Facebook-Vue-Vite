<template>
  <div>
    <HeaderBar />

    <div class="container">
      <ProfileCard :profile="profile" :photos-count="photos.length" />

      <main class="main">
        <!-- Tabs con enrutamiento -->
        <nav class="tabs">
          <RouterLink
            v-for="tab in tabs"
            :key="tab.path"
            :to="tab.path"
            class="tab"
            :class="{ active: $route.path === tab.path }"
          >
            {{ tab.label }}
          </RouterLink>
        </nav>

        <!-- Aquí se renderiza cada vista -->
        <RouterView :profile="profile" :photos="photos" @regenerate-photos="regeneratePhotos" />
      </main>
    </div>

    <FooterBar />
  </div>
</template>

<script>
import HeaderBar from './components/HeaderBar.vue'
import ProfileCard from './components/ProfileCard.vue'
import FooterBar from './components/FooterBar.vue'

export default {
  name: 'App',
  components: { HeaderBar, ProfileCard, FooterBar },
  data() {
    return {
      tabs: [
        { label: 'Muro', path: '/' },
        { label: 'Info', path: '/info' },
        { label: 'Photos', path: '/photos' },
        { label: 'Boxes', path: '/boxes' }
      ],
      profile: {
        name: 'Alex Angulo',
        subtitle: 'Estudiante · Apasionado por el desarrollo web',
        location: 'Cali, Colombia',
        studies: 'Ingeniería y Desarrollo Web',
        friends: 324,
        boxes: 56
      },
      photos: []
    }
  },
  methods: {
    regeneratePhotos() {
      this.photos = Array.from({ length: 6 }, () => {
        const w = 250 + Math.floor(Math.random() * 100)
        const h = 250 + Math.floor(Math.random() * 100)
        const seed = Math.floor(Math.random() * 1000)
        return `https://picsum.photos/${w}/${h}?random=${seed}`
      })
    }
  },
  mounted() {
    this.regeneratePhotos()
  }
}
</script>
