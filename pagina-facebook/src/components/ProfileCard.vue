<template>
  <aside class="profile-card">
    <img src="https://randomuser.me/api/portraits/men/32.jpg" class="profile-photo" />
    <h2>{{ profile.name }}</h2>
    <p class="subtitle">{{ profile.subtitle }}</p>
    <div class="stats">
      <div><strong>{{ profile.friends }}</strong><span>Amigos</span></div>
      <div><strong>{{ photosCount }}</strong><span>Fotos</span></div>
      <div><strong>{{ profile.boxes }}</strong><span>Boxes</span></div>
    </div>
    <button class="btn-edit">Editar perfil</button>
  </aside>
</template>

<script>
export default {
  props: {
    profile: Object,
    photosCount: Number
  }
}
</script>
