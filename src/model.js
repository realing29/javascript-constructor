import image from './assets/image.png'
import { TitleBlock, ImageBlock, TextColumnsBlock, TextBlock } from './classes/blocks'

export const model = [
  new TitleBlock(
    'Конструктор сайтов на чистом JavaScript',
    {
      tag: 'h2',
      styles: 'background: linear-gradient(to right, #ff0099, #493240); color: #fff; text-align: center; padding: 1.5rem;'
    }
  ),
  new ImageBlock(
    image,
    {
      alt: 'my image',
      styles: 'padding: 2rem 0; dispaly: flex; justify-content: center;',
      imageStyles: 'width: 500px; height: auto;'
    }
  ),
  new TextColumnsBlock(
    [
      'Приложение на чистом JavaScript, без использования библиотек',
      'Узнаешь как работают принципы SOLID и ООП в JavaScript за один курс',
      'JavaScript это просто, интересно. Научись создавать любые UI своими руками',
    ],
    {
      styles: 'background: linear-gradient(to bottom, #8e2de2, #4a00e0); color: #fff; padding: 2rem 0; font-weight: bold;'
    }
  ),
  new TextBlock(
    'Крутые видео и уроки по JavaScript тут: <a href="#">Владилен Минин</a>. Тут ты найдешь исчерпывающую информацию по любым аспектам языка, любым фреймворкам, таким как: React, Vue, Angular, Node, Svelte, Express, Next, Nuxt и многое другое. Присоединяйся',
    {
      styles: `background: linear-gradient(to left, #f2994a, #f2c94c); color: #000; padding: 1rem; font-weight: bold;`
    }
  )
]