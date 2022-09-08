export const getHero = ({ page, data }) => {
  return Array(data[page].data.attributes).map((itm) => ({
    title: itm.Hero.Title,
    desc: itm.Hero.Description,
    cover: itm.Hero.Cover.data.attributes,
    cta: itm.Hero?.CallToAction,
  }))[0]
}

export const getContent = ({ page, data }) => {
  return Array(data[page].data.attributes).map((itm) => itm.Content)[0]
}
