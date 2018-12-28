<template>
  <!-- content -->
  <Wrapper>
    <Ocean/>
  </Wrapper>
</template>

<script>
import Wrapper from "~/components/wrapper/Wrapper";
import Ocean from "~/components/ocean/Ocean.vue";

export default {
  layout: "other",
  components: {
    Wrapper,
    Ocean
  }
};
</script>