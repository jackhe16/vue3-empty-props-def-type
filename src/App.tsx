import { defineComponent } from "vue";

import HelloWorld from "./components/HelloWorld";

export default defineComponent({
  setup() {
    return () => {
      return (
        <div>
          <HelloWorld />
        </div>
      );
    };
  },
});

// Type '{}' is not assignable to type 'IntrinsicAttributes & (Partial<{ [x: number]: string; } | {}> & Omit<(Readonly<readonly unknown[] & { [x: number]: string; } & { [iterator]?: IterableIterator<string> | undefined; ... 22 more ...; flat?: unknown[] | undefined; }> | Readonly<...>) & (VNodeProps & ... 2 more ... & Readonly<...>), never>)'.
//   Type '{}' is not assignable to type 'IntrinsicAttributes & Partial<{}> & Omit<(Readonly<readonly unknown[] & { [x: number]: string; } & { [iterator]?: IterableIterator<string> | undefined; ... 22 more ...; flat?: unknown[] | undefined; }> | Readonly<...>) & (VNodeProps & ... 2 more ... & Readonly<...>), never>'.
//     Type '{}' is missing the following properties from type 'Omit<(Readonly<readonly unknown[] & { [x: number]: string; } & { [iterator]?: IterableIterator<string> | undefined; length?: number | undefined; toString?: string | undefined; toLocaleString?: string | undefined; ... 19 more ...; flat?: unknown[] | undefined; }> | Readonly<...>) & (VNodeProps & ... 2 more ... & Read...': length, concat, join, slice, and 17 more.ts(2322)
