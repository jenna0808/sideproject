import { ComponentType, Suspense, lazy } from "react";

const lazyLoad = (
  currentComponent: () => Promise<{
    default: ComponentType<unknown>;
  }>,
) => {
  try {
    const LazyComponent = lazy(currentComponent);
    return (
      <Suspense fallback={<>Loading ... </>}>
        <LazyComponent />
      </Suspense>
    );
  } catch (error) {
    window.location.reload();
    console.log(`lazy load error!`);
  }
};

export default lazyLoad;
