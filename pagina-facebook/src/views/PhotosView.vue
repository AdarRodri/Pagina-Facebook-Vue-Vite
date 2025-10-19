<template>
  <section class="content">
    <h3>Fotos</h3>
    <div class="photos-grid">
      <img v-for="(p, i) in photos" :key="i" :src="p" alt="foto random" />
    </div>
    <div style="text-align:center; margin-top:12px;">
      <button class="btn-edit" @click="$emit('regenerate-photos')">Regenerar fotos</button>
    </div>
  </section>
</template>

<script>
export default { props: { photos: Array } }
</script>
