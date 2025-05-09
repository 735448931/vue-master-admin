import { defineStore } from 'pinia'

interface SurveyStore {
	componentList: []
	selectedId: string
}

const useSurveyStore = defineStore('survey', {
	state: () => {
		return {}
	},
	getters: {},
	actions: {}
})
