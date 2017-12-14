<template>
  <nav id="sidebar" data-behavior="1">
    <div class="sidebar-container">
      <div class="sidebar-profile">
        <a href="/hexo-theme-tranquilpeak/#about">
          <img
            class="sidebar-profile-picture" src="https://www.gravatar.com/avatar/c91acb7faf4cf918fcb1b912810d323d?s=110" alt="Author's picture">
      </a>
      <h4 class='sidebar-profile-name'>Louis Barranqueiro</h4>
    </div>
    <ul class="sidebar-buttons" v-for="list in menuList" :key="list.title">
      <li class="sidebar-button" v-for='item in list.main' :key='item.title'>
        <a class="sidebar-button-link" :href='item.href' :title='item.title'>
          <i :class="['sidebar-button-icon', 'fa', 'fa-lg', item.icon]" aria-hidden='true'></i>
          <span class="sidebar-button-desc">{{item.title}}</span>
        </a>
      </li>
    </ul>
    </div>
</nav>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        {
          title: 'site_nav',
          main: [
            {
              title: 'HOME',
              icon: 'fa-home',
              href: ''
            },
            {
              title: 'Categories',
              icon: 'fa-bookmark',
              href: ''
            },
            {
              title: 'Tags',
              icon: 'fa-tags',
              href: ''
            },
            {
              title: 'Archive',
              icon: 'fa-archive',
              href: ''
            },
            {
              title: 'Search',
              icon: 'fa-search',
              href: ''
            },
            {
              title: 'About',
              icon: 'fa-question',
              href: ''
            }
          ]
        },
        {
          title: 'user_href',
          main: [
            {
              title: 'GitHub',
              icon: 'fa-github',
              href: ''
            },
            {
              title: 'Stack Overflow',
              icon: 'fa-stack-overflow',
              href: ''
            }
          ]
        },
        {
          title: 'others',
          main: [
            {
              title: 'Source Code',
              icon: 'fa-code',
              href: ''
            },
            {
              title: 'Rss',
              icon: 'fa-rss',
              href: ''
            }
          ]
        }
      ]
    };
  }
};
</script>
<style lang="scss">
  #sidebar{
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    -webkit-transition: -webkit-transform .25s ease-in-out;
    -webkit-font-smoothing: antialiased;
    &[data-behavior="1"]{
      width: 250px;
    }
  }
  .sidebar-container{
    overflow: auto;
  }
  .sidebar-profile{
    height: 130px;
    padding-top: 40px;
    padding-bottom: 7.5px;
    color: #ebebeb;
    text-align: center;
    margin-bottom: 15px;
  }
  .sidebar-profile-picture{
    width: 90px;
    height: 90px;
    border-radius: 90px;
    margin-bottom: 5px;
    display: block;
    margin: 0 auto;
  }
  .sidebar-profile-name{
    font-size: 16px;
    color: #ebebeb;
    margin: 1em 0 .5em;
    line-height: 1.45em;
  }
  .sidebar-buttons{
    padding: 0;
    margin: 0 0 20px;
  }
  .sidebar-button{
    display: block;
    width: 100%;
    height: 45px;
    line-height: 45px;
    text-align: left;
    a{
      text-align: left;
      width: auto;
      padding-left: 23px;
      padding-top: 0;
      color: #ebebeb;
      display: block;
      height: 100%;
      text-decoration: none;
    }
  }
  .sidebar-button-icon{
    font-size: 20px;
    display: inline-block;
    text-align: center;
    width: 30px;
    height: 30px;
    line-height: 30px;
    padding-top: 0;
    vertical-align: middle;
    margin-right: 15px;
  }
  .sidebar-button-desc{
    display: inline-block;
    width: auto;
    height: 35px;
    line-height: 35px;
    font-size: 15px;
    letter-spacing: .3px;
    vertical-align: middle;
    text-align: left;
    color: #ebebeb;
  }
</style>
