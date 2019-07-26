function exposure (nodes, callback, once = true) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio === 1) {
        once && observer.unobserve(entry.target);

        callback(entry.target)
      }
    })
  }, { threshold: 1 });

  nodes.forEach(node => {
    observer.observe(node)
  })
}

function lazyLoad (nodes, callback, rootMargin) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);

        callback(entry.target)
      }
    })
  }, { rootMargin });

  nodes.forEach(node => {
    observer.observe(node)
  })
}

export { exposure, lazyLoad }
