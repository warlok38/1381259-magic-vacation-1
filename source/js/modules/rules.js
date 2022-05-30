export default () => {
  let counters = document.querySelectorAll(`.rules__item p`);
  counters.forEach((counter, index) => {
    return (counter.style.animationDelay = `${
      (index * 1000) / counters.length
    }ms`);
  });
};
