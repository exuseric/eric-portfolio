<template>
  <header class="hero">
    <section class="hero__content">
      <article class="title">
        <div class="title__heading">
          <h1 class="name">I'm Eric. Front-end Developer;</h1>
          <h2 class="work">I build resilient and inclusive user interfaces.</h2>
        </div>
        <div class="title__contact">
          <nuxt-link to="/contact" class="contact__btn primary-btn">
            Let's Work Together
          </nuxt-link>

          <nuxt-link to="/page" class="sec-btn"> View Work </nuxt-link>
        </div>
      </article>
      <div class="image">
        <img
          src="~/assets/img/illustration/creative-team.svg"
          alt="an illustration of people having a party"
        />
      </div>
    </section>
  </header>
</template>

<script>
export default {
  name: 'IndexPageHeader',
}
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  z-index: 1;

  min-height: 50rem;
  height: fit-content;

  background: $primary-50;
  overflow-x: hidden;

  @include mid-screen {
    @include center;
    min-height: 40rem;
  }

  &__content {
    height: fit-content;

    @include mid-screen {
      @include content-grid;
      .title {
        grid-column: 1/ 8;
        grid-row: 1 / -1;
      }
      .image {
        grid-column: 8 / -1;
        grid-row: 1 / -1;
      }
    }
    @include large-screen {
      @include content-grid;
      .title {
        grid-column: 1 / 8;
        grid-row: 1 / -1;
      }
      .image {
        grid-column: 8 / -1;
        grid-row: 1 / -1;
      }
    }
  }
}

.title {
  @include content-grid;
  row-gap: 2.25rem;

  padding: $pd-l 0;

  &__heading {
    grid-column: 1 / -1;
    justify-self: center;
    align-self: center;
  }

  &__contact {
    grid-column: 1 / -1;
  }

  @include mid-screen {
    max-width: 100%;
    display: block;
  }

  @include large-screen {
    max-width: 100%;
    display: block;
  }
}

.name {
  font-weight: 400;
  font-size: scale('h5');
  color: $primary-500;

  padding: $pd-s 0;
}
.work {
  font-family: family('heading');
  font-size: scale('h1');
  color: $primary-950;
}

.title__contact {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;

  width: 100%;

  @include mid-screen {
    flex-flow: row wrap;
    width: fit-content;
    padding: $pd-l 0;
  }
}

.image {
  position: relative;
  // top: 10rem;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;

  width: auto;
  height: 100%;
  max-height: 40rem;

  margin-top: -10rem;

  img {
    width: 100%;
    height: 100%;
  }

  @include mid-screen {
    position: relative;
  }
}
</style>
