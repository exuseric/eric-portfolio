export const getHero = ({ page, data }) => {
  return Array(data[page].data.attributes).map((itm) => ({
    title: itm.Hero.Title,
    desc: itm.Hero.Description,
    cover: itm.Hero.Cover.data.attributes,
    cta: itm.Hero?.CallToAction,
  }))[0];
};

export const useContent = ({ sectionsArray, data, type }) => {
  return Array(data[type].data.attributes).map((content) => {
    return sectionsArray.map((section) => content[section]);
  })[0];
};
