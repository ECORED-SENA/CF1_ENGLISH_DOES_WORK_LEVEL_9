<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.mb-5.bgr.p-5
      .col-xl-4
        figure
          img(src="@/assets/curso/sintesis/img1.png", alt="alt")
      .col-xl-8
        p.mb-5 <em>Up to this point, we have been able to appreciate everything that has to do with Present Simple, Simple Past and Past Continuous tenses, the use of “used to” and “would” to talk about past habits, and the sequential past linkers, that is why we invite you to consider the following conceptual scheme that summarizes the subject treated:</em>
        p.colr_2 Hasta este punto, se ha podido apreciar todo lo que tiene que ver con el tiempo presente simple, el pasado simple y el pasado continuo, el uso de "<em>used to</em>" y "<em>would</em>" para hablar de hábitos pasados, y los conectores de pasado secuencial, por lo que le invitamos a considerar el siguiente esquema conceptual que resume el tema tratado: 

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
