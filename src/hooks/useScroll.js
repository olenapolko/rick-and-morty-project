import { useEffect, useState } from "react";

class ScrollCache {
  static #queryMap = new Map();

  static setYOffset(page, offset) {
    this.#queryMap.set(page, offset);
  }

  static getYOffset(page) {
    return this.#queryMap.get(page);
  }

  static resetYOffset() {
    this.#queryMap = new Map();
  }
}

export const resetYOffset = ScrollCache.resetYOffset.bind(ScrollCache);

const useScrollCache = (page) => {
  const [allowCache, setAllowCache] = useState(false);
  const currentScroll = ScrollCache.getYOffset(page) ?? 0;

  useEffect(() => {
    const scrollHandler = () => ScrollCache.setYOffset(page, window.scrollY);
    if (allowCache) {
      window.scrollTo({ top: currentScroll, behavior: "smooth" });
      window.addEventListener("scroll", scrollHandler);
    }
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [page, currentScroll, allowCache]);

  return setAllowCache;
};

export default useScrollCache;
