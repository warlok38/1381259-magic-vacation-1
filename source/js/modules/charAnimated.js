export default () => {
  let socialBlockFirst = document.querySelector(
    `.intro__title--mistery > .animation__wrapper`
  );
  let socialBlockSecond = document.querySelector(
    `.intro__title--vacation > .animation__wrapper`
  );
  let dateBlock = document.querySelector(`.animation__wrapper > .intro__date`);
  let historyBlock = document.querySelector(
    `.slider__item-title > .animation__wrapper`
  );
  let prizesBlock = document.querySelector(
    `.prizes__title > .animation__wrapper`
  );
  let rulesBlock = document.querySelector(
    `.rules__title > .animation__wrapper`
  );
  let gameBlock = document.querySelector(`.game__title > .animation__wrapper`);

  const modeProperties = {
    faster: {
      position: `4n + 3`,
      delay: 0,
    },
    default: {
      position: `2n + 2`,
      delay: 0.1,
    },
    lower: {
      position: `4n + 1`,
      delay: 0.2,
    },
  };

  const setAnimationProperties = (node, mode, ms = 0) => {
    const element = node.querySelectorAll(
      `.animated_char:nth-child(${modeProperties[mode].position})`
    );
    return element.forEach(
      (char) =>
        (char.style.animationDelay = `${
          modeProperties[mode].delay + ms / 1000
        }s`)
    );
  };

  const renderTextWithAnimation = async (node, ms = 0) => {
    const chars = await node.textContent
      .split(``)
      .map((char) =>
        char === ` `
          ? char
          : `<span class="animated_char" data-text="${char}">${char}</span>`
      )
      .join(``);
    const newNode = (node.innerHTML = chars);

    setAnimationProperties(node, `faster`, ms);
    setAnimationProperties(node, `default`, ms);
    setAnimationProperties(node, `lower`, ms);

    return newNode;
  };

  renderTextWithAnimation(socialBlockFirst, 500);
  renderTextWithAnimation(socialBlockSecond, 700);
  renderTextWithAnimation(dateBlock, 1500);
  renderTextWithAnimation(historyBlock);
  renderTextWithAnimation(prizesBlock);
  renderTextWithAnimation(rulesBlock);
  renderTextWithAnimation(gameBlock);
};
