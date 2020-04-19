const state = {
    isPlaying: false,
    audioTrack: '',
    filterType: 'lowPass',
    mode: 'practice',
    difficulty: 'beginner',
    currentStepTitle: '',
    currentStepCount: 1
}

const getters = {
    
}

const mutations = {
    // mutation used to modify the state property
    setCurrentStepTitle(state, currentStepTitle) {     
        state.currentStepTitle = currentStepTitle;
    },
    setCurrentStepCount(state, currentStepCount) {     
        state.currentStepCount = currentStepCount;
    },
    setMode(state, mode) {     
        state.mode = mode;
    },
    setAudioTrack(state, audioTrack) {
        state.audioTrack = audioTrack;
    },
    setDifficulty(state, difficulty) {
        state.difficulty = difficulty;
    },
    setFilterType(state, filterType) {
        state.filterType = filterType;
    },
}

const actions = {
    setCurrentStepTitle(context, currentStepTitle) {
        context.commit('setCurrentStepTitle', currentStepTitle);
    },

    setCurrentStepCount(context, currentStepCount) {
        context.commit('setCurrentStepCount', currentStepCount);
    },
    setMode(context, mode) {
        context.commit('setMode', mode);
    },
    setAudioTrack(context, audioTrack) {
        context.commit('setAudioTrack', audioTrack);
    },
    setDifficulty(context, difficulty) {
        context.commit('setDifficulty', difficulty);
    },
    setFilterType(context, filterType) {
        context.commit('setFilterType', filterType);
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}