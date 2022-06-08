import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js";

const scrollTracker = document.querySelector(".scroll-tracker");

const animatedImages = document.querySelectorAll(".image-rotate-in");

//ScrollTracker
/* Creating a scroll timeline that is animating the scroll tracker. */
const scrollTrackingTimeline = new ScrollTimeline({
  source: document.scrollingElement,
  orientation: "block",
  scrollOffsets: [CSS.percent(0), CSS.percent(100)],
});

scrollTracker.animate(
  {
    transform: ["scaleX(0)", "scaleX(1)"],
  },
  {
    duration: 1,
    timeline: scrollTrackingTimeline,
  }
);

//Animated Images
/* A forEach loop that is looping through the images and animating them. */
animatedImages.forEach((image) => {
  image.animate(
    {
      transform: [
        "perspective(1000px) rotateX(45deg)",
        "perspective(1000px) rotate(0)",
      ],
      opacity: ["0", "1"],
    },
    {
      duration: 1,
      timeline: new ScrollTimeline({
        scrollOffsets: [
          { target: image, edge: "end", threshold: "0" },
          { target: image, edge: "start", threshold: "1" },
        ],
      }),
    }
  );
});
