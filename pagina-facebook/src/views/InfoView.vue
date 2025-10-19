<template>
  <section class="content">
    <h3>Información del perfil</h3>
    <p><strong>Nombre:</strong> {{ profile.name }}</p>
    <p><strong>Ubicación:</strong> {{ profile.location }}</p>
    <p><strong>Estudios:</strong> {{ profile.studies }}</p>
  </section>
</template>

<script>
export default { props: { profile: Object } }
</script>
