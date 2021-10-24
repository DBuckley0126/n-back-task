import config from '../../config.json'

const letterArray = ['A', 'B', 'C', 'D', 'E', 'H', 'G', 'H', 'I', 'J', 'L', 'M']

export const getRandomisedLetterArray = () => {
	const output = []

	const letterArraySetToDifficulty = letterArray.slice(
		0,
		config.difficultyLevel
	)
	for (let i = 0; i < config.trialLength; i += 1) {
		output.push({
			index: i,
			letter: letterArraySetToDifficulty[
				Math.floor(Math.random() * letterArraySetToDifficulty.length)
			]
		})
	}
	return output
}
export const processCorrectChancesWithinArray = (array) =>
	array.reduce((totalChances, { index, letter }) => {
		if (array[index - config.nBack]?.letter === letter) {
			return totalChances + 1
		}
		return totalChances
	}, 0)

export const asyncTimeout = async (ms) => {
	return new Promise((resolve) => setTimeout(resolve, ms))
}
