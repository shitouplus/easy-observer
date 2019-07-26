"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.exposure = exposure;
exports.lazyLoad = lazyLoad;

function exposure(nodes, callback) {
  var once = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.intersectionRatio === 1) {
        once && observer.unobserve(entry.target);
        callback(entry.target);
      }
    });
  }, {
    threshold: 1
  });
  nodes.forEach(function (node) {
    observer.observe(node);
  });
}

function lazyLoad(nodes, callback, rootMargin) {
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        callback(entry.target);
      }
    });
  }, {
    rootMargin: rootMargin
  });
  nodes.forEach(function (node) {
    observer.observe(node);
  });
}