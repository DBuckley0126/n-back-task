const path = require('path')
const rootMain = require('../../../.storybook/main')

const toPath = (filePath) => path.join(process.cwd(), filePath)

module.exports = {
	...rootMain,

	core: { ...rootMain.core, builder: 'webpack5' },
	stories: [
		...rootMain.stories,
		'../src/lib/**/*.stories.mdx',
		'../src/lib/**/*.stories.@(js|jsx|ts|tsx)'
	],
	addons: [...rootMain.addons, '@nrwl/react/plugins/storybook'],
	webpackFinal: async (config, { configType }) => {
		let localConfig = config
		// apply any global webpack configs that might have been specified in .storybook/main.js
		if (rootMain.webpackFinal) {
			localConfig = await rootMain.webpackFinal(config, { configType })
		}

		// add your own webpack tweaks if needed

		return {
			...localConfig,
			resolve: {
				...localConfig.resolve,
				alias: {
					...localConfig.resolve.alias,
					'@emotion/core': toPath('node_modules/@emotion/react'),
					'emotion-theming': toPath('node_modules/@emotion/react')
				}
			}
		}
	}
}
