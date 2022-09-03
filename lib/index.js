import plugin from 'tailwindcss/plugin'

export default plugin(({ addUtilities, addComponents }) => {
  addUtilities({
    '.text-sideways': { textOrientation: 'sideways' },
    '.text-upright': { textOrientation: 'upright' },
    '.text-mixed': { textOrientation: 'mixed' },
    '.text-sideways-right': { textOrientation: 'sideways-right' },
    '.text-glyph': { textOrientation: 'use-glyph-orientation' },

    '.writing-lr': { writingMode: 'vertical-lr' },
    '.writing-rl': { writingMode: 'vertical-rl' },
    '.writing-tb': { writingMode: 'horizontal-tb' },
  })

  addComponents({
    '.block-text-topdown-lr': {
      textOrientation: 'upright',
      writingMode: 'vertical-lr',
    },
    '.block-text-topdown-rl': {
      textOrientation: 'upright',
      writingMode: 'vertical-rl',
    },
  })
})
