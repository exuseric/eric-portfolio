<template>
  <section class="intro content">
    <article class="skill">
      <header class="article__header">
        <h2 class="article-header__title">What I Do Best</h2>
      </header>
      <ul class="list" role="list">
        <li v-for="skill in skills" :key="skill.id">
          <h2 class="list__title">{{ skill.title }}</h2>
        </li>
      </ul>
    </article>

    <article class="help">
      <header class="article__header">
        <h2 class="article-header__title">where can we work together</h2>
      </header>

      <ul class="list" role="list">
        <li v-for="help in helps" :key="help.id">
          <h2 class="list__title">
            {{ help.title }}
          </h2>
        </li>
      </ul>
    </article>
  </section>
</template>

<script>
export default {
  name: 'IndexPageIntro',

  data() {
    return {
      skills: [
        {
          id: '0',
          title: 'web design',
        },
        {
          id: '1',
          title: 'web strategy',
        },
        {
          id: '2',
          title: 'web development',
        },
        {
          id: '3',
          title: 'brand identity',
        },
        {
          id: '4',
          title: 'brand strategy',
        },
        {
          id: '5',
          title: 'rapid prototyping',
        },
        {
          id: '6',
          title: 'ui design',
        },
        {
          id: '6',
          title: 'seo',
        },
      ],
      helps: [
        {
          id: '0',
          title: 'i need a new website',
        },
        {
          id: '1',
          title: 'i do not have a website',
        },
        {
          id: '2',
          title: 'i need a (re)brand',
        },
        {
          id: '3',
          title: "my website is'nt accessible",
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.intro {
  color: neutral('500');
}

.article-header__title {
  font-family: family('heading');
  font-size: scale('h1');
  color: primary('500');
  text-align: center;
  text-transform: uppercase;
}
.list {
  padding: $pd-l $pd-m;
  // @include grid-flow($flow: row, $gap: 1.25rem);
  @include grid-column(
    $col-count: auto-fit,
    $col-width: minmax(350px, 1fr),
    $gap: $pd-m
  );
  justify-content: space-between;

  li {
    width: 100%;
    text-align: left;
  }

  &__title {
    font-family: family('small cap');
    font-size: scale('h2');
    color: neutral('950');

    padding: $pd-m 0;
  }
}
</style>
