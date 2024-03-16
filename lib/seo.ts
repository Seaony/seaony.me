export const seo = {
  title: 'Seaony | 开发者、产品设计师、猫奴',
  description:
    '我叫 Seaony，一名开发者，产品设计师，猫奴，创造了小鹿剧本杀。目前就职于 Artefacts.AI，希望创造一个有生命力的产品。',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://cali.so'
      : 'http://localhost:3000'
  ),
} as const
