export default function WithConsole(WrappedComponent) {
  return {
    mounted() {
      console.log("I have already mounted");
      console.log(this.$options.render);
    },
    props: WrappedComponent.props,
    render(h) {
      const slots = Object.keys(this.$slots)
        .reduce((arr, key) => arr.concat(this.$slots[key]), [])
        .map(vnode => {
          vnode.context = this._self;
          return vnode;
        });

      return h(
        WrappedComponent,
        {
          on: this.$listeners,
          props: this.$props,
          // 透传 scopedSlots
          scopedSlots: this.$scopedSlots,
          attrs: this.$attrs
        },
        slots
      );
    }
  };
}
