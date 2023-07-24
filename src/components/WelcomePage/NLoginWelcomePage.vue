<template>
  <div>
    <section class="hero is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Bienvenido a nuestro Blog
          </h1>
          <h2 class="subtitle">
            ¡Explora nuestras publicaciones y descubre contenido interesante!
          </h2>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-one-third">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="@/assets/ImagenComentario.png" alt="Imagen de ejemplo">
                </figure>
              </div>
              <div class="card-content">
                <p class="title is-4">Comentar otras publicaciones</p>
                <div class="content">
                    ¡Descubre un mundo de interacción y conexión! En nuestra plataforma, no
                    solo podrás leer fascinantes publicaciones, ¡sino también comentar y compartir tus 
                    pensamientos! Expresa tu opinión, debate con otros usuarios y descubre diferentes perspectivas.
                    Conviértete en parte de una comunidad activa, donde tus comentarios importan y pueden
                    marcar la diferencia. Únete ahora y descubre la emoción de conectar a través de tus comentarios. ¡Tu voz cuenta!
                </div>
              </div>
              <footer class="card-footer">
                <a href="#" class="card-footer-item">Leer más</a>
              </footer>
            </div>
          </div>

          <div class="column is-one-third">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="@/assets/ImagenMensaje.png" alt="Imagen de ejemplo">
                </figure>
              </div>
              <div class="card-content">
                <p class="title is-4">Crear mensajes</p>
                <div class="content">
                  
                  ¡Descubre el poder de los mensajes creativos y cautivadores! En nuestro mundo digitalizado, cada palabra cuenta y nosotros sabemos cómo crear mensajes atractivos y efectivos. Con nuestra experiencia en marketing y comunicación, podemos ayudarte a transmitir tu mensaje de manera clara, persuasiva y memorable.

                  Ya sea que necesites un eslogan publicitario, contenido para tus redes sociales o textos para tu sitio web, estamos aquí para ayudarte a destacar. Nuestro equipo de expertos en redacción se enfoca en transmitir tu propuesta de valor única, despertando el interés de tu audiencia y generando impacto en cada palabra.
                </div>
              </div>
              <footer class="card-footer">
                <a href="#" class="card-footer-item">Leer más</a>
              </footer>
            </div>
          </div>

          <div class="column is-one-third">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="@/assets/ImagenComunidad.png" alt="Imagen de ejemplo">
                </figure>
              </div>
              <div class="card-content">
                <p class="title is-4">Crear comunidades</p>
                <p class="subtitle is-6">Fecha de publicación</p>
                <div class="content">
                  ¡Únete a nuestra plataforma y crea tu propia comunidad en línea! Aquí, no solo podrás disfrutar de increíbles publicaciones, 
                  sino que también podrás formar parte de comunidades temáticas que compartan tus intereses y pasiones. Conecta con personas afines, 
                  comparte conocimientos, organiza eventos y debates, y construye relaciones significativas. ¡Tú tienes el poder de generar 
                  comunidades vibrantes y enriquecedoras! Únete a nosotros y descubre un espacio donde puedes conectarte, inspirarte y crear juntos. 
                  ¡La comunidad te espera!
                </div>
              </div>
              <footer class="card-footer">
                <a href="#" class="card-footer-item">Leer más</a>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'NLoginWelcomePage',
 
  computed: {
    isUserLoggedIn() {
      const token = localStorage.getItem('token');
      return !!token; // Devuelve true si hay un token almacenado, indicando que el usuario está logeado
    }
  }
};
</script>

<style scoped>
.hero {
  margin-top: 3rem;
  margin-bottom: 3rem;
  padding: 3rem 0;
}

.subtitle {
  margin-top: 1.5rem;
}

.card {
  margin-bottom: 2rem;
}

.card-footer-item {
  justify-content: center;
}
</style>







