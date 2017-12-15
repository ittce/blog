<template>
  <section
  class="postShorten-group main-content-wrap">
    <article
      v-for="(article, $index) in articles"
      :key="article.id"
      :class="['postShorten', `postShorten--thumbnailimg-${$index === 0 ? 'bottom': 'left'}`]">
      <div
      class="postShorten-wrap">
        <div class="postShorten-header">
          <h1
            class="postShorten-title"
            itemprop="headline">
            <a
              class="link-unstyled"
              :href="article.href">
              {{ article.title }}
            </a>
          </h1>
          <div class="postShorten-meta">
            <time
              itemprop="datePublished"
              datetime="2015-06-15T13:30:05-07:00">
              {{ article.publishTime }}
            </time>
            <span>in </span>
            <template v-for="(category, $i) in article.categories ">
              <a
                :key="category.title"
                class="category-link"
                :href="category.href">
                {{ category.title }}
              </a>
              {{ $i + 1 === article.categories.length ? '' : ',' }}
            </template>
          </div>
        </div>
        <div
          class="postShorten-excerpt"
          itemprop="articleBody">
          <p>
            {{ article.desc }}
            <br>
            <a
              :href="article.href"
              class="postShorten-excerpt_link link">
              Continue reading
            </a>
          </p>
        </div>
      </div>
      <a :href="article.href">
        <div class="postShorten-thumbnailimg">
          <img
            alt=""
            itemprop="image"
            :src="article.iconUrl">
        </div>
      </a>
    </article>
  </section>
</template>

<script>
export default {
  data() {
    return {
      articles: [
        {
          id: 1,
          title: '中文測試',
          publishTime: 'Oct 02, 2013',
          iconUrl:
            'http://d1u9biwaxjngwg.cloudfront.net/chinese-test-post/vintage-140.jpg',
          href: '/hexo-theme-tranquilpeak/2013/10/02/中文測試/',
          desc:
            'This is a chinese test post to show you how chinese is displayed.',
          categories: [
            {
              title: 'tranquilpeak',
              href: '/hexo-theme-tranquilpeak/categories/tranquilpeak/features/'
            }
          ]
        },
        {
          id: 2,
          title: '中文測試',
          publishTime: 'Oct 02, 2013',
          iconUrl:
            'http://d1u9biwaxjngwg.cloudfront.net/chinese-test-post/vintage-140.jpg',
          href: '/hexo-theme-tranquilpeak/2013/10/02/中文測試/',
          desc:
            'This is a chinese test post to show you how chinese is displayed.',
          categories: [
            {
              title: 'tranquilpeak',
              href: '/hexo-theme-tranquilpeak/categories/tranquilpeak/features/'
            }
          ]
        },
        {
          id: 3,
          title: '中文測試',
          publishTime: 'Oct 02, 2013',
          iconUrl:
            'http://d1u9biwaxjngwg.cloudfront.net/chinese-test-post/vintage-140.jpg',
          href: '/hexo-theme-tranquilpeak/2013/10/02/中文測試/',
          desc:
            'This is a chinese test post to show you how chinese is displayed.',
          categories: [
            {
              title: 'tranquilpeak',
              href: '/hexo-theme-tranquilpeak/categories/tranquilpeak/features/'
            },
            {
              title: 'tranquilpeak11',
              href: '/hexo-theme-tranquilpeak/categories/tranquilpeak/features/'
            }
          ]
        },
        {
          id: 4,
          title: '中文測試',
          publishTime: 'Oct 02, 2013',
          iconUrl:
            'http://d1u9biwaxjngwg.cloudfront.net/chinese-test-post/vintage-140.jpg',
          href: '/hexo-theme-tranquilpeak/2013/10/02/中文測試/',
          desc:
            'This is a chinese test post to show you how chinese is displayed.',
          categories: [
            {
              title: 'tranquilpeak',
              href: '/hexo-theme-tranquilpeak/categories/tranquilpeak/features/'
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang='scss'>
.main-content-wrap {
  display: block;
  max-width: 750px;
  margin: 0 auto;
  padding-right: 20px;
  padding-left: 20px;
}
.postShorten {
  margin-top: 15px;
  border-bottom: 1px solid #eef2f8;
  position: relative;
  width: 100%;
  display: inline-block;
  vertical-align: top;
}
.postShorten-wrap {
  display: block;
  width: 100%;
}
.postShorten-title {
  margin: 0;
  word-break: initial;
  overflow: hidden;
  font-size: 28px;
}
.link-unstyled {
  cursor: pointer;
  color: inherit;
  text-decoration: none;
}
.postShorten-meta {
  font-size: 13px;
  font-weight: 400;
  color: #9eabb3;
}
.postShorten-excerpt {
  margin-top: 15px;
  text-rendering: optimizelegibility;
  letter-spacing: -0.3px;
  font-family: Merriweather, serif;
  color: #5d686f;
  font-weight: 400;
  overflow: hidden;
}
.postShorten-excerpt_link {
  font-size: 13px;
  font-weight: 400;
  margin-top: -15px;
  margin-top: -15px;
}
.postShorten-thumbnailimg {
  display: block;
  width: 100%;
  overflow: hidden;
  margin: 15px 0;
}
.postShorten--thumbnailimg-left .postShorten-thumbnailimg {
  float: left;
  margin: 5px 15px 30px 0;
  display: block;
  width: 140px;
  height: 140px;
  object-fit: cover;
  overflow: hidden;
}
.postShorten.postShorten--thumbnailimg-left .postShorten-wrap {
  float: right;
  width: calc(100% - 140px - 20px);
}
</style>
