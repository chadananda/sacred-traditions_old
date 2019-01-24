<template>
  <Ocean :artifacts="artifacts"/>
</template>

<script>
import Ocean from "~/components/ocean/Ocean.vue";
export default {
  layout: "ocean",
  head: function () {
    return {
      "title": "Ocean 2.0 Reader",
      "meta": [
        {"charset": "utf-8"},
        {"name": "viewport", "content": "width=device-width, initial-scale=1"},
        {"name": "keywords", "content": ""},
        {"name": "description", "content": ""},
        {"name": "viewport", "content": "width=device-width, initial-scale=1.0"},
        {"name": "msapplication-TileColor", "content": "#00aba9"},
        {"name": "theme-color", "content": "#ffffff"}
      ],
      "link": [
        {"rel": "stylesheet", "href": "/ocean_assets/styles/main.css"},
        {"rel": "apple-touch-icon", "sizes": "180x180", "href": "/ocean_assets/favicon/apple-touch-icon.png"},
        {"rel": "icon", "type": "image/png", "sizes": "32x32", "href": "/ocean_assets/favicon/favicon-32x32.png"},
        {"rel": "icon", "type": "image/png", "sizes": "16x16", "href": "/ocean_assets/favicon/favicon-16x16.png"},
        {"rel": "manifest", "href": "/ocean_assets/favicon/site.webmanifest"},
        {"rel": "mask-icon", "href": "/ocean_assets/favicon/safari-pinned-tab.svg", "color": "#5bbad5"},
        {"rel": "msapplication-TileColor", "content": "#00aba9"},
        {"rel": "theme-color", "content": "#ffffff"}
      ]
    };

  },
  components: {
    Ocean
  },
  data: function () {
    return {
      artifacts: {
        windows:  'https://ocean-download.dev2.us/win32_setup.exe',
        mac:      'https://ocean-download.dev2.us/mac_setup.pkg',
        linux:    'https://ocean-download.dev2.us/linux_setup.deb',
        android:  'https://ocean-download.dev2.us/android_setup.apk',
        ios:      'itms-services://?action=download-manifest&url=https://ocean.bahaistudies.org/manifest-https_-ocean.bahaistudies.org-.plist'
      }
    }
  }
};
</script>