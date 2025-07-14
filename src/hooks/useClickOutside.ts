import { RefObject, useEffect } from "react";

export const useClickOutside = <T extends HTMLElement>(ref: RefObject<T>, onClickOutside: () => void) => {
  useEffect(() => {
    const onDocumentClick = (event: MouseEvent) => {
      const target = event.target as Node;

      if (ref.current && !ref.current.contains(target)) {
        onClickOutside();
      }
    }

    document.addEventListener("mousedown", onDocumentClick);

    return () => {
      document.removeEventListener("mousedown", onDocumentClick);
    }
  }, [ref, onClickOutside]);
}
