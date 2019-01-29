<template>
  <div class="sideBar">
    <!-- sidebar -->
    <div class="col-md-4">
      <div class="site-sidebar">
        <!-- search component -->
        <SidebarSearch/>
        <!-- /search component -->
        <!-- about component -->
        <About
          :image="require('~/assets/img/astrif-about.jpg')"
          description="I become very fond of Bramachari, and he of me. We got along very well together, especially since he sensed that I was trying to feel my way into a settled religious conviction, and into some kind of a life that was centered, as his was, on God."
        />
        <!-- /about component -->
        <!-- .astrif_widget_follow_me -->
        <Follow/>
        <!-- /.astrif_widget_follow_me -->
        <!-- .astrif_widget_popular_entries -->
        <WidgetPopularEntries :articles="_articles"/>
        <!-- /.astrif_widget_popular_entries -->
        <!-- .astrif_widget_text -->
        <Advertisment :image="require('~/assets/img/astrif-sidebar-banner.jpg')" url="/"/>
        <!-- /.astrif_widget_text -->
        <!-- .widget_recent_entries -->
        <RecentPost/>
        <!-- /.widget_recent_entries -->
        <!-- .widget_categories -->
        <Categories/>
        <!-- .widget_categories -->
        <!-- .widget_tag_cloud -->
        <Tags/>
        <!-- /.widget_tag_cloud -->
      </div>
      <!-- .site-sidebar -->
    </div>
    <!-- .col-md-4 -->
  </div>
</template>

<script>
import ArticleSummary from "~/components/articles/ArticleSummary";
import ArticleSummaryFirst from "~/components/articles/ArticleSummaryFirst";
import SidebarSearch from "~/components/articles/sidebar/Search";
import About from "~/components/articles/sidebar/About";
import Follow from "~/components/articles/sidebar/FollowLinks";
import WidgetPopularEntries from "~/components/articles/sidebar/WidgetPopularEntries";
import Advertisment from "~/components/articles/sidebar/Advertisment";
import RecentPost from "~/components/articles/sidebar/RecentPost";
import Categories from "~/components/articles/sidebar/Categories";
import Tags from "~/components/articles/sidebar/Tags";

export default {
  props: ["_articles", "articleCount"],
  components: {
    ArticleSummary,
    ArticleSummaryFirst,
    SidebarSearch,
    About,
    Follow,
    WidgetPopularEntries,
    Advertisment,
    RecentPost,
    Categories,
    Tags
  },
};
</script>
