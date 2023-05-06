import { onCleanup } from "solid-js";
import { createEffect } from "solid-js";

const LazyImage = ({ src, ...props }) => {
  let ref;

  createEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.src = src;
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(ref);

    onCleanup(() => {
      observer.disconnect();
    });
  });

  return (
    <img
      ref={ref}
      src=''
      {...props}
    />
  );
};

export default LazyImage;
