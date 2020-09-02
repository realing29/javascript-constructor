export const model = [
  {
    type: 'title', value: 'Test title', options: {
      tag: 'h2',
      styles: 'background: darkred; color: #fff; text-align: center;'
    }
  },
  {
    type: 'text', value: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure vel, consequuntur et porro vero possimus', options: {
      styles: 'background: darkblue; color: yellow;'
    }
  },
  {
    type: 'textColumns', value: [
      '1 text',
      '2 text',
      '3 text',
      '4 text'
    ],
    options: {
      styles: 'padding: 1rem;'
    }
  }
]