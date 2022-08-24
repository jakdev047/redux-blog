import { useState } from "react";

export default function useDebounce() {
  const [typingTimeout, setTypingTimeout] = useState("");
  function debounce(func, wait = 500) {
    clearTimeout(typingTimeout);
    const timer = setTimeout(() => {
      func();
    }, wait);
    setTypingTimeout(timer);
  }

  return debounce;
}
