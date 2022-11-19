<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 <em>Grammar review</em> (Repaso gramatical)

    .row.mgb
      .col-12.col-xl-8(data-aos="fade-left")
        TraduccionT.color-acento-botones.mb-5(:dialogo="dialogo1")(data-aos="flip-up")
      .col-12.col-xl-4(data-aos="fade-right")
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema2/1.png", alt="alt")
    
    separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 <em>Present Simple</em> (Presente simple)
    
    .row.mgb
      .col-12.col-xl-4(data-aos="fade-right")
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema2/2.png", alt="alt")
      .col-12.col-xl-8(data-aos="fade-left")
        TraduccionT.color-acento-botones.mb-5(:dialogo="dialogo2")(data-aos="flip-up")
    
    .bg_grad-05
      .row.mb-5
        .col-xl-9
          p.colr <em>The simple present tense is conjugated using the basic form of the verb (it is the same as the infinitive, but without the word “to”). It is of great importance to consider that, when a verb is conjugated in the third-person singular, an "s" must be added at the end.</em> 
          p.mgb El tiempo presente simple se conjuga utilizando la forma básica del verbo (viene siendo igual al infinitivo, pero sin la palabra “<em>to</em>”). Resulta de gran importancia considerar que, cuando se conjuga un verbo en la tercera persona del singular, debe añadirse una “s” al final.
          .row
            .col-auto.d-flex.align-items-center
              figure.d-flex.justify-content-center
                img.w-auto(src="@/assets/curso/tema2/4.svg", alt="alt")
            .col-xl-10
              p.colr <em>Now, you are invited to listen to the following BBC Learning English Podcast, where the grammatical concepts and the use of regular and irregular verbs using the simple present will be explained.</em>
              span Ahora, le invitamos a escuchar el 
              span.colr_4 podcast de la BBC <em>Learning English</em>, 
              span donde se explicarán los conceptos gramaticales y el uso de los verbos regulares e irregulares utilizando el presente simple.

        .col-xl-3
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/tema2/3.png", alt="alt")
      
      SlyderF.mgb(columnas="col-lg-6 col-xl-12")
        div
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/tema2/5.png", alt="alt")
          .row.justify-content-center
            .col-xl-8
              TarjetaAudio.color-secundario(
                texto="Present simple - positives, negatives, and question forms…"
                :audio="require('@/assets/componentes/audios/2-1.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        div
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/tema2/6.png", alt="alt")
          .row.justify-content-center
            .col-xl-8
              TarjetaAudio.color-secundario(
                texto="Present simple - positives, negatives, and question forms… "
                :audio="require('@/assets/componentes/audios/2-2.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        div
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/tema2/7.png", alt="alt")
          .row.justify-content-center
            .col-xl-8
              TarjetaAudio.color-secundario(
                texto="Present simple - positives, negatives, and question forms… "
                :audio="require('@/assets/componentes/audios/2-3.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        div
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/tema2/8.png", alt="alt")
          .row.justify-content-center
            .col-xl-8
              TarjetaAudio.color-secundario(
                texto="Present simple - positives, negatives, and question forms… "
                :audio="require('@/assets/componentes/audios/2-4.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        div
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/tema2/9.png", alt="alt")
          .row.justify-content-center
            .col-xl-8
              TarjetaAudio.color-secundario(
                texto="Present simple - positives, negatives, and question forms… "
                :audio="require('@/assets/componentes/audios/2-5.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
    
    p.colr <em>In the following table, you can see the form of conjugation, which will depend on the subject or grammatical person being spoken about, taking into account whether it is in a singular or plural number.</em>
    p.mb-5 En la siguiente tabla, puede observarse la forma de conjugación, que va a depender del sujeto o persona gramatical de quien se habla, tomando en cuenta si está en número singular o plural.

    .titulo-sexto.color-acento-contenido
      h5 Tabla 1 
      span Persona gramatical con el verbo “<em>to work</em>”

    .row.mb-3
      .col-12.col-xl-9.position-relative
        figure
          img(src="@/assets/curso/tema2/10.svg", alt="alt")
        Audio.color-secundario.mx-3.pst_7(
          :audio="require('@/assets/componentes/audios/2-6.mp3')"
          @audio-hover="mostrarIndicadorAudio = false"
        )
          .indicador--click(v-if="mostrarIndicadorAudio")
        .tabla-a.color-acento-botones.mb-5 
          table.text-center
            thead.bgr_3
              tr
                td(colspan='2')(style= 'width:30%').text-center.colr.text-bold <em>Grammatical person</em> 
                  p.mb-0 Persona gramatical
                td(style= 'width:20%').text-center.colr.text-bold <em>Pronoun</em> 
                  p.mb-0 Pronombre
                td(style= 'width:15%').text-center.colr.text-bold <em>Verb</em> 
                  span.colr_3 / Verbo  
                  p.mb-0.text-bold “<em>to work</em>”
                td(style= 'width:35%').text-center.colr.text-bold <em>Conjugation</em> 
                  p.mb-0 Conjugación
            tbody
              tr
                td(rowspan= '5').colr.text-bold Singular
                td.colr.text-bold 1.ª persona 
                td.colr.text-bold <em>I </em> / Yo
                td.colr.text-bold <em>work</em>
                td.colr <b><em>I work.</em></b> 
                  span.colr_3 / Yo trabajo.
              tr  
                td.colr.text-bold 2.ª persona 
                td.colr.text-bold <em>You</em> / Tú
                td.colr.text-bold <em>work</em>
                td.colr <b><em>You work.</em></b> 
                  span.colr_3 / Tú trabajas.
              tr.bgr_4 
                td(rowspan='3').colr.text-bold 3.ª persona
                td.colr.text-bold <em>He</em> / Él
                td.colr.text-bold <em>work</em>
                td.colr <b><em>He works.</em></b> 
                  span.colr_3 /  Él trabaja. 
              tr.bgr_4  
                td.colr.text-bold <em>She</em> / Ella
                td.colr.text-bold <em>work</em>
                td.colr <b><em>She works.</em></b> 
                  span.colr_3 / Ella trabaja. 
              tr.bgr_4  
                td.colr.text-bold <em>It</em> / Ello
                td.colr.text-bold <em>work</em>
                td.colr <b><em>It works.</em></b> 
                  span.colr_3 / Ello trabaja. 
              tr
                td(rowspan= '3').colr.text-bold Plural
                td.colr.text-bold 1.ª persona 
                td.colr.text-bold <em>We</em> / Nosotros
                td.colr.text-bold <em>work</em>
                td.colr <b><em>We work.</em></b> 
                  span.colr_3 / Nosotros trabajamos.
              tr
                td.colr.text-bold 2.ª persona
                td.colr.text-bold <em>You</em> / Ustedes
                td.colr.text-bold <em>work</em>
                td.colr <b><em>You work.</em></b> 
                  span.colr_3 / Ustedes trabajan.
              tr
                td.colr.text-bold 3.ª persona
                td.colr.text-bold <em>They</em> / Ellos(as)
                td.colr.text-bold <em>work</em>
                td.colr <b><em>They work.</em></b> 
                  span.colr_3 / Ellos(as) trabajan.
      .col-xl-3
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema2/11.svg", alt="alt")
    
    p.mb-0.colr <em>Let's see how a verb interacts with the rest of the words in the sentences using the present simple in affirmative, negative, and interrogative sentences.</em>
    p.colr In the following resource, you can see each grammatical structure.

    p.mb-0 Veamos cómo un verbo interactúa con el resto de las palabras en las oraciones utilizando el presente simple en oraciones afirmativas, negativas e interrogativas.
    p.mb-5 En el siguiente recurso, se puede apreciar cada estructura gramatical.

    .row.mb-5
      .col-xl-8
        TabsB.color-acento-contenido.bgr_6.mb-5
          .py-4.py-md-5.bgr_5(titulo="<em>Affirmative</em>" :icono="require('@/assets/componentes/ej-04.svg')")
            .text-center
              h4.mb-0.colr <em>Affirmative form of the simple present tense.</em> 
              span / Forma afirmativa del tiempo presente simple.
              p.mt-3.colr_4 <em>In its affirmative form, the simple present tense uses its basic form and has the following structure:</em>
            figure.d-flex.justify-content-center.mb-3
              img.w-auto(src="@/assets/curso/tema2/14.svg", alt="alt")
            .row.justify-content-center
              .col-xl-8
                TarjetaAudio.color-secundario.mb-3(
                  texto="Charles enjoys romantic music."
                  :audio="require('@/assets/componentes/audios/2-7.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                p.ms-3 Carlos disfruta la música romántica.
          .py-4.py-md-5.bgr_5(titulo="<em>Negative</em>" :icono="require('@/assets/componentes/ej-04.svg')")
            .text-center
              h4.mb-0.colr <em>Negative form of the simple present tense</em> 
              span / Forma negativa del tiempo presente simple.
              p.mt-3.colr_4 <em>In its negative form, the simple present tense uses its basic form and has the following structure:</em>
            figure.d-flex.justify-content-center.mb-3
              img.w-auto(src="@/assets/curso/tema2/15.svg", alt="alt")
            .row.justify-content-center
              .col-xl-8
                TarjetaAudio.color-secundario.mb-3(
                  texto="Charles doesn't enjoy romantic music."
                  :audio="require('@/assets/componentes/audios/2-8.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                p.ms-3 Charles no disfruta la música romántica.
          .py-4.py-md-5.bgr_5(titulo="<em>Interrogative</em>" :icono="require('@/assets/componentes/ej-04.svg')")
            .text-center
              h4.mb-0.colr <em>Interrogative form of the simple present tense.</em> 
              span / Forma interrogativa del tiempo presente simple.
              p.mt-3.colr_4 <em>In its interrogative form, the simple present tense uses its basic form and has the following structure:</em>
            figure.d-flex.justify-content-center.mb-3
              img.w-auto(src="@/assets/curso/tema2/16.svg", alt="alt")
            .row.justify-content-center
              .col-xl-8
                TarjetaAudio.color-secundario.mb-3(
                  texto="Does Charles enjoy romantic music? "
                  :audio="require('@/assets/componentes/audios/2-9.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                p.ms-3 ¿A Charles le gusta la música romántica?
      .col-xl-4
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema2/12.svg", alt="alt")
    
    p.colr <em>In the following table, we will introduce some rules to keep in mind with some regular and irregular verbs.</em>
    p.mb-5 En la siguiente tabla, presentamos algunas reglas que se deben tener en cuenta con algunos verbos regulares e irregulares.

    .titulo-sexto.color-acento-contenido
      h5 Tabla 2 
      span Reglas verbos regulares e irregulares

    .row.mb-3
      .col-12.col-xl-7.position-relative
        figure
          img(src="@/assets/curso/tema2/17.svg", alt="alt")
        .tabla-a.color-acento-botones.mb-5 
          table.text-center
            thead.bgr_7
              tr
                td(colspan='2').text-center.colr_4.text-bold <em>Simple Present Tense</em> 
                  p.mb-0.text-bold Verbs for He/She/It and Singular Nouns
              tr
                td.text-center.text-bold <em>Spelling Rules</em> 
                td.text-center.text-bold <em>Examples</em> 
            tbody.bgr_8
              tr
                td <em>With most verbs, add </em>
                  span.colr_4 s
                td <em>Live - live</em>
                  span.colr_4.text-bold s
                  p.mb-0 <em>Sit - sit</em>
                    span.colr_4.text-bold s
                  p.mb-0 <em>work - Work</em>
                    span.colr_4.text-bold s
                  p.mb-0 <em>Read - read</em>
                    span.colr_4.text-bold s
              tr  
                td.p-3 <em>Ending in</em> 
                  span.colr.text-bold <em>consonant + </em> 
                  span <em>y change </em> 
                  span.colr_4 <em>y </em> 
                  span <em>to </em> 
                  span.colr_4 <em>i </em> 
                  span <em>and add </em> 
                  span.colr_4.text-bold <em>es</em>
                td <em>try - tr</em>
                  span.colr_4.text-bold <em>ies</em>
                  p.mb-0 <em>carry - carr</em>
                    span.colr_4.text-bold <em>ies</em>
              tr  
                td <em>Ending in</em> 
                  span.colr.text-bold <em>s, </em> 
                  span.colr.text-bold <em>z, </em> 
                  span.colr.text-bold <em>o, </em> 
                  span.colr.text-bold <em>sh, </em> 
                  span.colr.text-bold <em>ch, </em> 
                  span <em>or </em> 
                  span.colr.text-bold <em>x </em>
                  span <em>add </em>
                  span.colr_4.text-bold <em>es</em> 
                td <em>miss - -miss</em>
                  span.colr_4.text-bold <em>es</em>
                  p.mb-0 <em>buzz - buzz</em>
                    span.colr_4.text-bold <em>es</em>
                  p.mb-0 <em>catch - catch</em>
                    span.colr_4.text-bold <em>es</em>
                  p.mb-0 <em>fix - fix</em>
                    span.colr_4.text-bold <em>es</em>
              tr  
                td <em>Exceptions</em> 
                td <em>go - </em>
                  span.colr_4.text-bold <em>goes</em>
                  p.mb-0 <em>do - </em>
                    span.colr_4.text-bold <em>does</em>
                  p.mb-0 <em>have - </em>
                    span.colr_4.text-bold <em>has</em>
      .col-xl-5
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema2/18.svg", alt="alt")
    
    p.colr <em>“I just realized how little I do on weekends. In general, I just relax, read a little, watch some movies...” Based on this statement, we invite you to listen to the following more complex dialogue elaborated with the grammatical structures of the present simple:</em>
    p.mb-5 “Me acabo de dar cuenta de lo poco que hago los fines de semana. Por lo general, solo me relajo, leo un poco, veo algunas películas...” Con base en este enunciado, lo invitamos a escuchar el siguiente diálogo, más complejo y elaborado con las estructuras gramaticales del presente simple:

    .bg_grad-04
      .row.justify-content-center.mgb
        .col-xl-10
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/tema2/19.svg", alt="alt")
          .bgr_2.p-4
            p.colr.text-bold <em>Conversation</em> 2:
            span.text-bold.colr_4 <em>Joe: </em> 
            span.colr <em>Hey, Danna. What do you do on weekends?</em> 
            br
            span.text-bold <em>Danna: </em> 
            span.colr <em>Hi, Joe. Well, I travel to towns with my family.</em>
            br
            span.text-bold.colr_4 <em>Joe: </em> 
            span.colr <em>Wow! That sounds fun!</em> 
            br
            span.text-bold <em>Danna: </em> 
            span.colr <em>For sure! We love going to towns and trying new food.</em>
            .row.mt-3.justify-content-between
              .col-12.col-lg-9
                TarjetaAudio.color-secundario(
                  :audio="require('@/assets/componentes/audios/2-10.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              .col-12.col-lg-auto
                a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
                  span Ver traducción 
                  i.fas.fa-language
                  .indicador--click(v-if="mostrarIndicador")
    
    ModalA(:abrir-modal.sync="modal1")
      p.colr.text-bold Conversación 2 :
      span.text-bold.colr_4 Joe: 
      span Hola, Danna. ¿Qué haces los fines de semana?
      br
      span.text-bold Danna: 
      span Hola, Joe. Bueno, yo viajo a pueblos con mi familia.
      br
      span.text-bold.colr_4 Joe: 
      span ¡Increíble! ¡Eso suena divertido!
      br
      span.text-bold Danna: 
      span ¡Claro! Nos encanta ir a pueblos y probar comida nueva.

    p.colr <em>Now we are going to see a more complex interaction, where questions can be asked in the present simple using the <b>wh questions</b> and the word "<b>because</b>", that is used to connect the effect and the cause that can represent a reason or explanation. Complete the following dialogue.</em>
    p.mb-5 Ahora, vamos a ver una interacción más compleja, donde se pueden realizar preguntas en presente simple utilizando las 
     span.colr_4.text-bold <em>wh questions </em> 
     | y la palabra 
     span.colr_4.text-bold “<em>because</em>”, 
     | que se emplea para conectar el efecto y la causa que pueden representar una razón o explicación. Complete el siguiente diálogo.
    
    Dialogo.color-primario.mb-5(:dialogo="dialogo")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad) <em>Wh questions and the word “because”</em>
      template(#descripcion-actividad) Arrastra y suelta cada una de las palabras en el orden correcto.
    
    .row.mb-5.bgr_9.tarjeta.p-4.justify-content-center
      .col-xl-auto
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema2/22.svg", alt="alt")
      .col-xl-8
        p.colr <em>As seen in the examples, more complex interactions can be achieved by using linkers to introduce more useful information to the sentence, and it is not even necessary to use a different grammar tense.</em>
        p.mb-0 Como se vio en los ejemplos, las interacciones más complejas se pueden lograr a través del uso de los conectores para introducir más información útil en la oración y ni siquiera es necesario usar un tiempo gramatical diferente
    
    separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 <em>Past Simple </em> (Pasado simple)

    .row.mgb
      .col-12.col-xl-7(data-aos="fade-left")
        TraduccionT.color-acento-botones.mb-5(:dialogo="dialogo3")(data-aos="flip-up")
      .col-12.col-xl-5(data-aos="fade-right")
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema2/23.png", alt="alt")
    
    .bg_grad-06
      SlyderF.mgb.bgr_1.tarjeta.p-4(columnas="col-lg-6 col-xl-12")
        div
          TraduccionT.color-acento-botones.mb-5.pst_10(:dialogo="dialogo4")(data-aos="flip-up")
          .row.mb-3.justify-content-center
            .col-xl-10
              figure.mb-5.d-flex.justify-content-center
                img.w-auto(src="@/assets/curso/tema2/24.svg", alt="alt")
            .col-xl-auto.mt-5
              Audio.color-secundario(
                :audio="require('@/assets/componentes/audios/2-15.mp3')"
                @audio-hover="mostrarIndicadorAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorAudio")

          .row.justify-content-center
            .col-xl-4
              TarjetaAudio.color-secundario(
                texto="<em>Susy brought a sandwich.</em>"
                :audio="require('@/assets/componentes/audios/2-16.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            .col-xl-4
              TarjetaAudio.color-secundario(
                texto="<em>Peter played chess with her.</em>"
                :audio="require('@/assets/componentes/audios/2-17.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        div
          TraduccionT.color-acento-botones.mb-5.pst_10(:dialogo="dialogo5")(data-aos="flip-up")
          .row.mb-3.justify-content-center
            .col-xl-10
              figure.mb-5.d-flex.justify-content-center
                img.w-auto(src="@/assets/curso/tema2/25.svg", alt="alt")
            .col-xl-auto.mt-3
              Audio.color-secundario(
                :audio="require('@/assets/componentes/audios/2-18.mp3')"
                @audio-hover="mostrarIndicadorAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorAudio")

          .row.justify-content-center
            .col-xl-5
              TarjetaAudio.color-secundario(
                texto="<em>Susy didn’t bring a sandwich.</em>"
                :audio="require('@/assets/componentes/audios/2-19.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            .col-xl-5
              TarjetaAudio.color-secundario(
                texto="<em>Peter didn’t play chess with her.</em>"
                :audio="require('@/assets/componentes/audios/2-20.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        div
          TraduccionT.color-acento-botones.mb-5.pst_10(:dialogo="dialogo6")(data-aos="flip-up")
          .row.mb-3.justify-content-center
            .col-xl-10
              figure.mb-5.d-flex.justify-content-center
                img.w-auto(src="@/assets/curso/tema2/26.svg", alt="alt")
            .col-xl-auto.mt-3
              Audio.color-secundario(
                :audio="require('@/assets/componentes/audios/2-21.mp3')"
                @audio-hover="mostrarIndicadorAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorAudio")

          .row.justify-content-center
            .col-xl-5
              TarjetaAudio.color-secundario(
                texto="<em>Did Susy bring a sandwich?</em>"
                :audio="require('@/assets/componentes/audios/2-22.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            .col-xl-5
              TarjetaAudio.color-secundario(
                texto="<em>Did Peter play chess with her?</em>"
                :audio="require('@/assets/componentes/audios/2-23.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")

    p.colr <em>To write affirmative sentences in the simple past, you must write the verb in the past, but there are two types of verbs: regular and irregular. Irregular verbs are found in a list of conjugated verbs in their base form; however, regular verbs have to follow some rules to make them past tense.</em>
    p.mb-5 Para escribir oraciones afirmativas en pasado simple, se debe escribir el verbo en pasado, pero hay dos tipos de verbos: los regulares y los irregulares. Los verbos irregulares se encuentran en una lista de verbos conjugados en su forma base; sin embargo, los verbos regulares tienen que seguir unas reglas para convertirlos en pasado.

    .row.mb-5
      .col-xl-2
        figure.mb-5.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema2/27.svg", alt="alt")
      .col-xl-10
        p.colr <em>To <b>write in English</b> correctly, it is essential to master irregular verbs, which are the ones that break the regular rule. Irregular verbs are those that don’t follow the conjugation rules of regular verbs. That is, unlike regular verbs, irregular verbs don’t have the ending <b>-ed</b> or <b>-d</b> when conjugated in the past simple. Here are two lists of  verbs with some examples:</em>
        p.mb-5 Para <b>escribir en inglés</b> correctamente, es fundamental dominar los verbos irregulares, que son los que rompen la regla de los regulares. Los verbos irregulares son aquellos que no cumplen con las reglas de conjugación de los verbos regulares. Es decir, a diferencia de los regulares, los verbos irregulares no llevan la terminación 
          span.colr_4.text-bold -ed  
          | o 
          span.colr_4.text-bold -d 
          | al conjugarlos en pasado simple. A continuación, se presentan dos listas de verbos con algunos ejemplos:
    
    .row.mb-5
      .col-xl-6
          .tabla-b__header.bgr_11
            h4.mb-0 <em>Regular verbs</em>
            p <em>Regular verbs have rules that you have to follow:</em>
            Audio.color-secundario.m-auto(
                :audio="require('@/assets/componentes/audios/2-24.mp3')"
                @audio-hover="mostrarIndicadorAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorAudio")
          table.bgr_10
            tr
              td.p-5(style= 'width:40%') 
                h4 <em>RULE:</em>
                p.mb-0.text-bold.colr <em>General rule</em>
              td(style= 'width:60%') 
                h4.colr <em>CONJUGATION</em>
                p.colr <em>Add</em> 
                  span.colr_4.text-bold <em>“ED” </em> 
                  | <em>to the verb.</em>
                p.mb-0.colr <em>Example:</em>
                p.mb-0.colr <em>Walk → Walked</em>
                p.mb-0.colr <em>Play →  Played</em>
            tr
              td.p-5 
                p.mb-0.text-bold.colr <em>Verbs ended in “E”</em>
              td 
                p.colr <em>Add</em> 
                  span.colr_4.text-bold <em>“D” </em> 
                  | <em>to the verb.</em>
                p.mb-0.colr <em>Example:</em>
                p.mb-0.colr <em>Love → Loved</em>
                p.mb-5.colr <em>Live → Lived</em>
            tr
              td.p-5
                p.mb-0.text-bold.colr <em>Verbs ended in “Y” after a consonant</em>
              td 
                p.colr <em>Change</em>  
                  span.colr_4.text-bold <em>“Y” </em> 
                  | <em>for</em>
                  span.colr_4.text-bold <em> “IED” </em>
                  | <em>in the verb.</em> 
                p.mb-0.colr <em>Example:</em>
                p.mb-0.colr <em>Study →  Studied</em>
                p.mb-5.colr <em>Copy →  Copied</em>
            tr
              td.p-5 
                p.mb-0.text-bold.colr <em>Consonant doubling</em>
              td 
                p.mb-0.colr.text-bold <em>Double the last consonant when:</em>  
                p.mb-0.colr <em>It’s ended cons-vow-cons.</em>
                p.mb-0.colr <em>K, W, X are not doubled.</em>
                p.colr <em>Only double when the last syllable is stressed.</em>
                p.mb-0.colr <em>Example:</em>
                p.mb-0.colr <em>Stop → Stopped</em>
                p.mb-5.colr <em>Control → Controlled</em>
      .col-xl-6
        .color-secundario.mb-5
          .tabla-b__header.bgr_12
            h4.mb-0 <em>Irregular verbs</em>
            p <em>Irregular verbs don’t follow any rule, they all appear in a list, the irregular verb list:</em>
            Audio.color-primario.m-auto(
                :audio="require('@/assets/componentes/audios/2-25.mp3')"
                @audio-hover="mostrarIndicadorAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorAudio")
          table.bgr_13
            tr.text-center
              td.ps-5 
                h4 <em>Base Form</em>
              td 
                h4 <em>Past Simple</em>
              td 
                h4 <em>Past Participle</em>
            tr.text-center
              td.ps-5
                p.mb-0.text-bold.colr <em>awake</em>
              td 
                p.mb-0.text-bold.colr <em>awoke</em>
              td 
                p.mb-0.text-bold.colr <em>awoken</em>
            tr.text-center
              td.ps-5
                p.mb-0.text-bold.colr <em>be</em>
              td 
                p.mb-0.text-bold.colr <em>was, were</em>
              td 
                p.mb-0.text-bold.colr <em>been</em>
            tr.text-center
              td.ps-5
                p.mb-0.text-bold.colr <em>beat</em>
              td 
                p.mb-0.text-bold.colr <em>beat</em>
              td 
                p.mb-0.text-bold.colr <em>beaten</em>
            tr.text-center
              td.ps-5
                p.mb-0.text-bold.colr <em>become</em>
              td 
                p.mb-0.text-bold.colr <em>became</em>
              td 
                p.mb-0.text-bold.colr <em>become</em>
            tr.text-center
              td.ps-5
                p.mb-0.text-bold.colr <em>begin</em>
              td 
                p.mb-0.text-bold.colr <em>began</em>
              td 
                p.mb-0.text-bold.colr <em>begun</em>
            tr.text-center
              td.ps-5
                p.mb-0.text-bold.colr <em>bend</em>
              td 
                p.mb-0.text-bold.colr <em>bent</em>
              td 
                p.mb-0.text-bold.colr <em>bent</em>
            tr.text-center
              td.ps-5
                p.mb-0.text-bold.colr <em>bet</em>
              td 
                p.mb-0.text-bold.colr <em>bet</em>
              td 
                p.mb-0.text-bold.colr <em>bet</em>
            tr.text-center
              td.ps-5
                p.mb-0.text-bold.colr <em>bid</em>
              td 
                p.mb-0.text-bold.colr <em>bid</em>
              td 
                p.mb-0.text-bold.colr <em>bid</em>
            tr.text-center
              td.ps-5
                p.mb-0.text-bold.colr <em>bite</em>
              td 
                p.mb-0.text-bold.colr <em>bit</em>
              td 
                p.mb-0.text-bold.colr <em>bitten</em>
            tr.text-center
              td.ps-5
                p.mb-0.text-bold.colr <em>blow</em>
              td 
                p.mb-0.text-bold.colr <em>blew</em>
              td 
                p.mb-0.text-bold.colr <em>blown</em>
            tr.text-center
              td.ps-5
                p.mb-0.text-bold.colr <em>break</em>
              td 
                p.mb-0.text-bold.colr <em>broke</em>
              td 
                p.mb-0.text-bold.colr <em>broken</em>
            tr
              td(colspan='3')
                figure.mb-2.d-flex.justify-content-center
                  img.w-auto(src="@/assets/curso/tema2/28.png", alt="alt")
    
    .row.mb-5.justify-content-center
      .col-xl-6
        a.anexo.mb-4.mb-lg-0.m-auto(:href="obtenerLink('downloads/List-Irregular-Verbs.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Enlace web</b>. Para consultar una lista completa de los verbos irregulares, haga clic en el siguiente enlace:

    p.colr <em>Now that the basics are established, it is possible to start building complex sentences by using connectors, such as “when” or “because, that allow us to properly connect our ideas and sentences that can change an entire speech and demonstrate structure, argument, and flow. Let’s see an example:</em> 
    p.mb-5 Ahora que los fundamentos están establecidos, es posible empezar a construir frases complejas, utilizando conectores como "when" o "because”, que nos permiten conectar apropiadamente nuestras ideas y oraciones, y pueden cambiar todo un discurso y demostrar una estructura, argumento y fluidez.  Veamos un ejemplo:  

    .bg_grad-04
      .row.justify-content-center.mgb
        .col-xl-10
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/tema2/29.svg", alt="alt")
          .bgr_2.p-4
            p.colr.text-bold <em>Conversation</em> 3:
            span.text-bold.colr_4 <em>Zury: </em> 
            span.colr <em>Frank, why was your mother so angry when you arrived last night?</em> 
            br
            span.text-bold <em>Frank: </em> 
            span.colr <em>It’s a funny story. She was angry because I told her I was near home.</em>
            br
            span.text-bold.colr_4 <em>Zury: </em> 
            span.colr <em>So, it was my fault! I said we were downtown! Sorry!</em> 
            br
            span.text-bold <em>Frank: </em> 
            span.colr <em>Yes, Zury, you exposed me! But I wasn’t angry because I knew you didn’t do it on purpose.</em>
            .row.mt-3.justify-content-between
              .col-12.col-lg-9
                TarjetaAudio.color-secundario(
                  :audio="require('@/assets/componentes/audios/2-26.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              .col-12.col-lg-auto
                a.boton.color-acento-botones.indicador__container(@click="modal2 = true")
                  span Ver traducción 
                  i.fas.fa-language
                  .indicador--click(v-if="mostrarIndicador")
    
    ModalA(:abrir-modal.sync="modal2")
      p.colr.text-bold Conversación 3 :
      span.text-bold.colr_4 Zury: 
      span Frank, ¿por qué tu mamá se puso tan brava cuando llegaste anoche?
      br
      span.text-bold Frank: 
      span Es una historia graciosa. Ella estaba brava porque le dije que estaba cerca a la casa.
      br
      span.text-bold.colr_4 Zury: 
      span Entonces, ¡fue mi culpa! ¡Yo dije que estábamos en el centro! ¡Lo siento!
      br
      span.text-bold Frank: 
      span Sí, Zury, ¡me delataste! Pero no estaba molesto porque sé que no lo hiciste a propósito. 
    
    separador

    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 <em>Past Continuous</em> (Pasado continuo) 

    .row.mgb
      .col-12.col-xl-7(data-aos="fade-left")
        TraduccionT.color-acento-botones.mb-5(:dialogo="dialogo7")(data-aos="flip-up")
      .col-12.col-xl-5(data-aos="fade-right")
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema2/30.png", alt="alt")
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/EzmlajPkEaI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
   
    p.colr <em>In order to add ING to the verbs, you have to follow some specific rules. These rules are used in affirmative, negative, and interrogative sentences because the verb is always in ING form, let’s see them:</em>
    p.mb-5 Para añadir ING a los verbos, hay que seguir algunas reglas específicas. Estas reglas se utilizan en oraciones afirmativas, negativas e interrogativas, porque el verbo siempre está en la forma ING, veámoslas:

    h4.mb-5 <em>ING form rules</em>

    .row.mb-5
      .col-xl-3.p-4.bgr_11
        Audio.color-acento-botones.m-auto.mb-3(
          :audio="require('@/assets/componentes/audios/2-35.mp3')"
          @audio-hover="mostrarIndicadorAudio = false"
        )
          .indicador--click(v-if="mostrarIndicadorAudio")
        .tarjeta.bgr_1.pst_8.p-4
          p.text-bold <em>1. General rule</em>
          p <em>add <b>ING</b> to the verb.</em>
          p.mb-0 <em>Example:</em> 
          p.mb-0 <em>Call → Call</em>
            span.colr_4.text-bold <em>ing</em>
          p.mb-0 <em>Buy → Buy</em>
            span.colr_4.text-bold <em>ing</em>
      .col-xl-3.p-4.bgr_14
        Audio.color-acento-botones.m-auto.mb-3(
          :audio="require('@/assets/componentes/audios/2-36.mp3')"
          @audio-hover="mostrarIndicadorAudio = false"
        )
          .indicador--click(v-if="mostrarIndicadorAudio")
        .tarjeta.bgr_1.pst_8.p-4
          p.text-bold <em>2. Ended “e”</em>
          p <em>change <b>“E”</b> for <b>“ING”</b>.</em>
          p.mb-0 <em>Example:</em> 
          p.mb-0 <em>Drive → Driv</em>
            span.colr_4.text-bold <em>ing</em>
          p.mb-0 <em>Hide → Hid</em>
            span.colr_4.text-bold <em>ing</em>
      .col-xl-3.p-4.bgr_11
        Audio.color-acento-botones.m-auto.mb-3(
          :audio="require('@/assets/componentes/audios/2-37.mp3')"
          @audio-hover="mostrarIndicadorAudio = false"
        )
          .indicador--click(v-if="mostrarIndicadorAudio")
        .tarjeta.bgr_1.pst_8.p-4
          p.text-bold <em>3. Ended “ie”</em>
          p <em>change <b>“IE”</b> for <b>“YING”</b>.</em>
          p.mb-0 <em>Example:</em> 
          p.mb-0 <em>Die → D</em>
            span.colr_4.text-bold <em>ying</em>
          p.mb-0 <em>Tie → T</em>
            span.colr_4.text-bold <em>ying</em>
      .col-xl-3.p-4.bgr_14
        Audio.color-acento-botones.m-auto.mb-3(
          :audio="require('@/assets/componentes/audios/2-38.mp3')"
          @audio-hover="mostrarIndicadorAudio = false"
        )
          .indicador--click(v-if="mostrarIndicadorAudio")
        .tarjeta.bgr_1.p-4
          p.text-bold <em>4. Consonant doubling</em>
          p <em>double the last consonant when:</em> 
          p.mb-0 <em>It’s ended <b>cons-vow-cons.</b></em> 
          p.mb-0 <em><b>K, W, X</b> are not doubled.</em> 
          p <em>Only double when the last syllable is stressed.</em>
          p.mb-0 <em>Example:</em> 
          p.mb-0 <em>Run → Runn</em>
            span.colr_4.text-bold <em>ing</em>
          p.mb-0 <em>Control → Controll</em>
            span.colr_4.text-bold <em>ing</em>
    
    .bg_grad-07
      .row.mb-5.justify-content-center
        .col-xl-3
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/tema2/31.png", alt="alt")
        .col-xl-5.d-flex.align-items-center
          div
            .row.mb-3 
              .col-auto 
                figure.d-flex.justify-content-center
                  img.w-auto(src="@/assets/curso/tema2/32.svg", alt="alt")
              .col-xl-8
                h4.mb-0.colr_4 <em>Warning #1</em>
                h4 Advertencia #1
            p.mb-0.colr_1 <em>If any verb is misspelled, the whole sentence will be wrong.</em> 
            p.text-white Si algún verbo se escribe mal, toda la oración estará mal.
    
    .row.mgb
      .col-12.col-xl-7(data-aos="fade-left")
        TraduccionT.color-acento-botones.mb-5(:dialogo="dialogo8")(data-aos="flip-up")
      .col-12.col-xl-5(data-aos="fade-right")
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema2/33.png", alt="alt")
    
    p.colr <em>In the following video, you can see the past continuous that is used to set the scene and the things that happen continuously, and the past simple for brief actions that happen in the meantime... That is, the specific actions carried out by Mr. Cristian and Mrs. Lety in the middle of the scene.</em>
    p.colr <em>You are invited to explore the video below:</em>

    p En el siguiente video, se puede observar que el pasado continuo se usa para ambientar la escena y las cosas que pasan de manera continua, y el pasado simple para acciones breves que pasan mientras tanto… O sea, las acciones puntuales que lleva a cabo el señor Cristian y la señora Lety en medio de la escena.
    p.mb-5 Se le invita a explorar el video que se presenta a continuación:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/4F4rcynFhGQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    p.colr <em>Let’s see how past continuous is used to complement the past simple in order to give context to the actions that were being done at a moment in the past. Let’s practice with a short exercise.</em>
    p.mb-5 Veamos cómo se utiliza el pasado continuo para complementar el pasado simple con el fin de dar contexto a las acciones que se realizaban en un momento del pasado. Vamos a practicar con un ejercicio corto.

    Dialogo.color-primario.mb-5(:dialogo="dialogo9")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad) Diálogo A de práctica
      template(#descripcion-actividad) Arrastra y suelta cada una de las palabras en el orden correcto.

    .row.mgb
      .col-12.col-xl-5(data-aos="fade-right")
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema2/36.png", alt="alt")
      .col-12.col-xl-7(data-aos="fade-left")
        TraduccionT.color-acento-botones.mb-5(:dialogo="dialogo10")(data-aos="flip-up")

    Dialogo.color-primario.mb-5(:dialogo="dialogo11")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad) Diálogo B de práctica
      template(#descripcion-actividad) Arrastra y suelta cada una de las palabras en el orden correcto.




</template>

<script>
import TraduccionAudio from '../components/TraduccionAudio.vue'
import TraduccionT from '../components/TraduccionT.vue'
export default {
  name: 'Tema2',
  components: {
    TraduccionAudio,
    TraduccionT,
  },
  data: () => ({
    modal1: false,
    modal2: false,
    dialogo1: [
      {
        textoIng:
          '<em>Due to the nature of this component, it is necessary to review some important grammar, such as Present Simple, Past Simple, and Past Continuous. The idea is to start expressing more complex ideas by using basic grammar structures which will complement the knowledge acquired throughout the course.</em>',
        textoEsp:
          'Debido a la naturaleza de este componente, es necesario repasar algunas estructuras gramaticales importantes, como el presente simple, pasado simple y pasado continuo. La idea es empezar a expresar ideas más complejas mediante el uso de estructuras gramaticales básicas, lo cual complementará el conocimiento adquirido en el curso.',
      },
    ],
    dialogo2: [
      {
        textoIng:
          '<em>The present simple is one of the most common tenses when speaking because it is the one used to express about everyday activities, facts from the present, likes, dislikes, and routines in general.  So let’s take a look at the basic structures:</em>',
        textoEsp:
          'El presente simple es uno de los tiempos más comunes a la hora de hablar, porque es el que se utiliza para expresar actividades cotidianas, hechos del presente, gustos, disgustos y rutinas en general. Entonces, veamos las estructuras básicas:',
      },
    ],
    dialogo3: [
      {
        textoIng:
          '<em>The  past simple is quite an important tense when having a conversation at a basic, intermediate or advanced level. Therefore, being able to express your ideas using the past simple becomes a must. In order to do it, it is necessary to go from producing basic sentences using only one verb and one structure to link two or more ideas with different structures previously seen. <br><br>In order to do it, it is important to check the basics, let’s do it:</em>',
        textoEsp:
          'El pasado simple es un tiempo bastante importante cuando se mantiene una conversación a nivel básico, intermedio o avanzado. Por lo tanto, ser capaz de expresar sus ideas utilizando el pasado simple se convierte en algo imprescindible. Para ello, es necesario pasar de producir oraciones básicas con un solo verbo y una sola estructura a enlazar dos o más ideas con diferentes estructuras previamente vistas. <br><br>Para ello, es importante comprobar lo básico, hagámoslo:',
      },
    ],
    dialogo4: [
      {
        textoIng:
          '<em><b>Affirmative sentences:</b><br><br>To write affirmative sentences in the simple past, you must write the verb in the past, but there are two types of verbs: regular and irregular. Irregular verbs are found in a list of conjugated verbs in their base form; however, regular verbs have to follow some rules to make them past tense.</em>',
        textoEsp: 'FALTA TRADUCCION',
      },
    ],
    dialogo5: [
      {
        textoIng:
          '<em><b>Negative sentences:</b><br><br>It is also possible to write negative sentences in order to talk about those events that didn’t happen to us. To do it, we need the following structure:</em>',
        textoEsp: 'FALTA TRADUCCION',
      },
    ],
    dialogo6: [
      {
        textoIng:
          '<em><b>Interrogative sentences:</b><br><br>In case you need to know any information about something that happened in the past, you have to use an interrogative structure, let’s see how it works:</em>',
        textoEsp: 'FALTA TRADUCCION',
      },
    ],
    dialogo7: [
      {
        textoIng:
          '<em>Past continuous is a very useful tool when the goal is to complement ideas or just give context to an event in the past. This tense allows the speaker or writer to create more complex sentences by adding contextual information to them or showing simultaneous actions. Let’s see some examples.</em>',
        textoEsp:
          'El pasado continuo es una herramienta muy útil cuando el objetivo es complementar ideas o simplemente dar contexto a un evento en el pasado. Este tiempo permite al hablante o al escritor crear frases más complejas, añadiendo información contextual a las mismas o mostrando acciones simultáneas. Veamos unos ejemplos.',
      },
    ],
    dialogo8: [
      {
        textoIng:
          '<em>After having seen some specific rules of “<b>ing</b>”, we can conclude that the <b>past continuous</b> expresses the duration of a past action and does not indicate whether it is finished, while the <b>past simple</b> refers to a specific action that began and ended in the past.<br><br>To make the past simple, we put an <b>-ed</b> at the end of a regular verb, or we use an irregular verb, which has another form. The past continuous is formed with <b>was / were</b>, plus the gerund (the <b>-ing</b> form of the verb).</em>',
        textoEsp:
          'Después de haber visto algunas reglas específicas del “<b>ing</b>”, podemos concluir que el pasado continuo <em><b>(past continuous)</b></em> expresa la duración de una acción pasada y no indica si está terminada, mientras que el pasado simple <em><b>(past simple)</b></em> se refiere a una acción puntual que empezó y acabó en el pasado.<br><br>Para formar el pasado simple, ponemos una <b>-ed</b> al final de un verbo regular, o usamos un verbo irregular, que tiene otra forma. El pasado continuo se forma con <em><b>was / were</b></em> más el gerundio (la forma <b>-ing</b> del verbo).',
      },
    ],
    dialogo10: [
      {
        textoIng:
          '<em>By using expressions such as <b>“when”</b> (to introduce a simple sentence), <b>“while”</b> (to introduce a continuous sentence) or <b>“that’s why”</b> (to introduce an explanation), you can complement your ideas in English.<br><br>Let’s practice with a short exercise. Complete the following conversation using <b>“when”</b>, <b>“while”</b> or <b>“that’s why”</b>.</em>',
        textoEsp:
          'Con expresiones como <em><b>"when"</b></em> (para introducir una frase simple), <em><b>"while"</b></em> (para introducir una frase continua) o <em><b>"that’s why"</b></em> (para introducir una explicación), puede complementar sus ideas en inglés.<br><br>Vamos a practicar con un pequeño ejercicio. Complete la siguiente conversación utilizando <em><b>"when", " while"</b></em> o <em><b>"that’s why"</b></em>.',
      },
    ],
    dialogo: {
      personajes: [
        {
          nombre: 'Mary:',
          img: require('@/assets/curso/tema2/39.svg'),
        },
        {
          nombre: 'Nina:',
          img: require('@/assets/curso/tema2/21.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Mary:',
          textoIng:
            '<em>Nina, good to see that you still live in the same neighborhood.</em>',
          textoEsp: 'Nina, es bueno ver que aún vives en el mismo barrio.',
          audio: require('@/assets/componentes/audios/2-12.mp3'),
        },
        {
          personaje: 'Nina:',
          textoIng:
            '<em>Yes! It is impressive</em> *** <em>many people move from a place to another and you don’t even notice it.</em>',
          textoEsp:
            '¡Si! Es impresionante cómo muchas personas se mudan de un lugar a otro y uno ni siquiera se da cuenta.',
          audio: require('@/assets/componentes/audios/2-11.mp3'),
          palabra: '<em>how</em>',
        },
        {
          personaje: 'Mary:',
          textoIng:
            '*** <em>do you stay when you are not here? Because I usually pass by your house and I don’t always see you here.</em>',
          textoEsp:
            '¿Dónde te quedas cuando no estás aquí? Porque yo usualmente paso por tu casa y no siempre te veo aquí.',
          audio: require('@/assets/componentes/audios/2-14.mp3'),
          palabra: '<em>where</em>',
        },
        {
          personaje: 'Nina:',
          textoIng:
            '<em>Well, I have to go to my grandmother’s house in the afternoon</em> *** <em>she is ill and I take care of her.</em>',
          textoEsp:
            'Bueno, tengo que ir a casa de mi abuela en la tarde, porque ella está enferma y la cuido.',
          audio: require('@/assets/componentes/audios/2-13.mp3'),
          palabra: '<em>because</em>',
        },
      ],
    },
    dialogo9: {
      personajes: [
        {
          nombre: 'Helena:',
          img: require('@/assets/curso/tema2/34.svg'),
        },
        {
          nombre: 'Carla:',
          img: require('@/assets/curso/tema2/21.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Helena:',
          textoIng: '<em>What were you doing</em> *** <em>I called you?</em>',
          textoEsp: '¿Qué estabas haciendo cuando te llamé?',
          audio: require('@/assets/componentes/audios/2-27.mp3'),
          palabra: '<em>when</em>',
        },
        {
          personaje: 'Carla:',
          textoIng:
            '<em>Sorry Helena, I was listening to music</em> *** <em>the phone was ringing.</em>',
          textoEsp:
            'Lo siento Helena, estaba escuchando música mientras sonaba el teléfono.',
          audio: require('@/assets/componentes/audios/2-28.mp3'),
          palabra: '<em>while</em>',
        },
        {
          personaje: 'Helena:',
          textoIng:
            '<em>I was trying to fix my PC,</em> *** <em>I called you.</em>',
          textoEsp:
            'Estaba intentando arreglar mi ordenador, por eso te he llamado.',
          audio: require('@/assets/componentes/audios/2-29.mp3'),
          palabra: '<em>that’s why</em>',
        },
        {
          personaje: 'Carla:',
          textoIng:
            '<em>I thought you were working at the office. Please, forgive me!</em>',
          textoEsp:
            'Pensé que estabas trabajando en la oficina. Por favor, ¡perdóname!',
          audio: require('@/assets/componentes/audios/2-30.mp3'),
        },
      ],
    },
    dialogo11: {
      personajes: [
        {
          nombre: 'Teacher:',
          img: require('@/assets/curso/tema2/37.svg'),
        },
        {
          nombre: 'Student:',
          img: require('@/assets/curso/tema2/20.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Teacher:',
          textoIng:
            '<em>Were you checking your phone</em> *** <em>I was talking to you?</em>',
          textoEsp:
            '¿Estaba revisando su teléfono mientras yo hablaba con usted?',
          audio: require('@/assets/componentes/audios/2-31.mp3'),
          palabra: '<em>while</em>',
        },
        {
          personaje: 'Student:',
          textoIng:
            '<em>Of course not, I was just putting my phone in silent mode</em> *** <em>you called my name.</em>',
          textoEsp:
            'Por supuesto que no, solo estaba poniendo mi teléfono en modo de silencio cuando usted me llamó por mi nombre.',
          audio: require('@/assets/componentes/audios/2-32.mp3'),
          palabra: '<em>when</em>',
        },
        {
          personaje: 'Teacher:',
          textoIng:
            '<em>I thought you were playing, that’s</em> *** <em>I was in anger with you.</em>',
          textoEsp:
            'Pensé que estaba jugando, por eso estaba enojado con usted.',
          audio: require('@/assets/componentes/audios/2-33.mp3'),
          palabra: '<em>why</em>',
        },
        {
          personaje: 'Student:',
          textoIng: '<em>Sorry, teacher. It won’t happen again.</em>',
          textoEsp: 'Lo siento, profesor. No volverá a suceder',
          audio: require('@/assets/componentes/audios/2-34.mp3'),
        },
      ],
    },
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
