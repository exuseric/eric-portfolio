<template>
  <section class="services section">
    <div class="container">
      <header>
        <h2>Stuff I do</h2>
      </header>

      <div class="service-grid">
        <article v-for="skill in skills" :key="skill.id" class="service">
          <div class="body text-container">
            <h3>{{ skill.title }}</h3>
            <p>
              {{ skill.body }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IndexPageServices',

  data() {
    return {
      skills: [
        {
          id: 0,
          title: 'Web Development',
          body: 'Utilizing core web building fundamentals and best practices, research and modern front-end tools I build scalable, accessible and rpesilient websites and web applications.',
        },
        {
          id: 1,
          title: 'Web Design',
          body: 'Forming a long-term strategy encompassing accessibility and scalability into the design foundations for a performant and inclusive website or application.',
        },
        {
          id: 2,
          title: 'S.E.O',
          body: 'Optimizing your website to make sure it is indexed by popular search engines — google, bing, duckduckgo — increasing the chances for your website/business to reach your users.',
        },
        {
          id: 3,
          title: 'Visual Design',
          body: 'Utilizing core design principles covering — graphic design, motion design and creating custom graphics — for a beautiful and inclusive website or application that fits.',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@use 'sass:math';

.services {
  height: 100%;

  overflow: hidden;
}

header {
  margin-bottom: $spacer-md;
  h2 {
    font-family: $heading;
    font-size: scale(h3);
    color: $light-gray;

    @include light-theme {
      color: $dark-gray;
    }
  }
}

.service-grid {
  @include grid-flow-row;
  gap: $spacer-md;

  @include screen(small) {
    // display: grid;
    // grid-template-columns: repeat(2, 50%);
    // grid-template-columns: repeat(2, 50%);
    display: flex;
    flex-flow: row wrap-reverse;
    gap: $spacer-md;
  }

  h3 {
    font-size: scale(h5);
    margin-bottom: $spacer-sm;
  }
}

.service {
  position: relative;
  inset: 0 0 auto;
  z-index: 1;

  @include center;

  width: 100%;
  max-width: rem(550);
  padding: $spacer-md;

  color: $light-gray;
  border-radius: rem(5);

  transition: background-color 0.35s ease;

  @include light-theme {
    color: $dark-gray;
  }
  &:hover {
    background-color: $primary-500;
  }
}

// .service:nth-child(1) {
// }
// .service:nth-child(2) {
//   background-color: hsl(50, 87%, 60%);
// }
// .service:nth-child(3) {
//   background-color: hsl(80, 87%, 60%);
// }
// .service:nth-child(4) {
//   background-color: hsl(50, 87%, 60%);
// }
</style>
