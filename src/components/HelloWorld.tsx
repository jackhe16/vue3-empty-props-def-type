import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {},
  setup() {
    return () => {
      return (
        <div class="hello">
          <h1>hello</h1>
        </div>
      );
    };
  },
});
