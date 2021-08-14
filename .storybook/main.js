module.exports = {
  "stories": ["../stories/**.stories.mdx"],
  "refs": {
    '@cstorybook/atoms': {
       title: "Atoms",
       url: "https://priyankag048.github.io/storybook-composition/stories-atoms"
    },
    '@cstorybook/molecules': {
      title: "Molecules",
      url: "https://priyankag048.github.io/storybook-composition/stories-molecules"
   }
  },
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ]
}
