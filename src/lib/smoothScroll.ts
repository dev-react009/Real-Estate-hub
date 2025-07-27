 export default function smoothScrollTo(element: HTMLElement, duration: number) {
    const start = window.scrollY
    const end = element.getBoundingClientRect().top + start
    const distance = end - start
    let startTime: number | null = null

    function animation(currentTime: number) {
      if (startTime === null) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 0.999)
      const ease = easeInOutQuad(progress)

      window.scrollTo(0, start + distance * ease)

      if (elapsed < duration) {
        requestAnimationFrame(animation)
      }
    }

    function easeInOutQuad(t: number) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
    }

    requestAnimationFrame(animation)
  }