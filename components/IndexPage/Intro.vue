<template>
  <section class="intro content">
    <header class="intro__heading wrapper">
      <h2>What I do</h2>
    </header>
    <div class="intro__cards wrapper">
      <article v-for="skill in skills" :key="skill.id" class="card">
        <div class="cover">
          <nuxt-img
            fit="cover"
            quality="100"
            format="webp"
            width="1000"
            height="1000"
            :src="`/img/skill/${skill.image.src}`"
            :alt="skill.image.alt"
          />
        </div>

        <div class="body">
          <h3>
            {{ skill.title }}
          </h3>
          <p>
            {{ skill.body }}
          </p>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IndexPageIntro',

  data() {
    return {
      skills: [
        {
          id: 0,
          title: 'Web Development & Strategy',
          image: {
            src: 'web.jpg',
            alt: 'a laptop with code',
          },
          body: 'Utilizing core web building fundamentals and best practices, research and modern front-end tools I build scalable, accessible and resilient websites and web applications.',
        },
        {
          id: 1,
          title: 'UI Design',
          image: {
            src: 'branding.jpg',
            alt: 'a computer screen with the color system of a design on display',
          },
          body: 'Forming a long-term and fluid strategy that goes beyond your logo and trendy looks and encompassing accessibility and scalability into the design foundations I design a performant and inclusive website or application.',
        },
        {
          id: 2,
          title: 'Search Engine Optimization (SEO)',
          image: {
            src: 'seo.jpg',
            alt: 'a laptop with infographics that show the cumulative data analyzed from a website',
          },
          body: 'Optimizing your website to make sure it is indexed by popular search engines (google, bing, duckduckgo) increasing the chances for your website/business to reach your users.',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@use 'sass:math';
.intro {
  padding: $section-padding 0;
  background-color: $primary-500;
}
.intro__heading {
  position: relative;
  z-index: 1;

  padding: $spacing-md;

  // text-align: center;
  text-transform: capitalize;

  h2 {
    font-family: $heading;
    font-size: scale('h1');
    font-weight: 900;
    color: $neutral-50;
  }
}
.intro__cards {
  @include flex-wrap-row;
  gap: $spacing-lg;

  height: fit-content;

  padding: $section-padding $spacing-md;
}

.card {
  display: grid;
  grid-template-rows: 60% auto;

  // margin: $spacing-md auto;
  width: 100%;
  max-width: rem(400);
  height: rem(500);

  .cover,
  .body {
    width: 100%;
    height: 100%;
  }

  .body {
    @include center;
    align-self: end;
  }
}
.card > .body {
  color: $neutral-50;
  // padding: $spacing-sm;
  h3 {
    width: 100%;
    padding-block: $spacing-sm;

    text-decoration: none;
    // text-align: center;
    font-size: scale('h3');
    font-family: $heading;
  }
}

.card > .cover {
  border-radius: 0.5rem;
  overflow: hidden;
  height: 100%;
  box-shadow: 0.3px 0.3px 1.3px -25px hsla(340, 49%, 8%, 0.013),
    2.2px 2.2px 4.3px -25px hsla(340, 49%, 8%, 0.022),
    5.7px 5.7px 10.3px -25px hsla(340, 49%, 8%, 0.025),
    11.6px 11.6px 20.4px -25px hsla(340, 49%, 8%, 0.026),
    21.3px 21.3px 37px -25px hsla(340, 49%, 8%, 0.03),
    40px 40px 63px -25px hsla(340, 49%, 8%, 0.07);

  img {
    object-position: top;
  }
}
</style>
