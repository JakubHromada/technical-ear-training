<template>
    <div class="settings-component-wrap">
        <m-layout-grid class="settings-section-header">
            <m-layout-grid-inner>
                <m-layout-grid-cell :spanPhone="4" :spanTablet="8" :spanDesktop="12">
                    <p class="settings-section-header-title">Choose you level</p>
                </m-layout-grid-cell>
            </m-layout-grid-inner>
        </m-layout-grid>

        <m-layout-grid class="button-selection-wrap">      
            <m-layout-grid-inner class="button-selection-wrap--inner">

                <m-layout-grid-cell class="button-selection-cell" :spanPhone="2" :spanTablet="4" :spanDesktop="6">
                    <m-button @click="setDifficulty('beginner', $event)" raised outlined class="selection-button beginner" v-bind:class="{active: selectedDifficulty === 'beginner'}">Beginner</m-button>
                </m-layout-grid-cell>

                <m-layout-grid-cell class="button-selection-cell" :spanPhone="2" :spanTablet="4" :spanDesktop="6">
                    <m-button @click="setDifficulty('advanced', $event)" raised outlined class="selection-button advanced" v-bind:class="{active: selectedDifficulty === 'advanced'}">Advanced</m-button>
                </m-layout-grid-cell>

            </m-layout-grid-inner>   
        </m-layout-grid>
        
        <NavButtonComponent :currentStepTitle="'Filter Type'" :currentStepCount="3" :direction="'prev'" />

        <router-link to="/filterCutOffTraining" class="begin-button-wrap">
            <m-fab>
                <m-icon icon="keyboard_arrow_right" slot="trailingIcon"></m-icon>
                Begin 
            </m-fab>
        </router-link>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import NavButtonComponent from './NavButtonComponent';

    export default {
        components: {
            NavButtonComponent,
        },
        data() {
            return {
                selectedAudioTrack: '',
            }
        },
        methods: {
            setDifficulty: function (difficulty, event) {
                if(event.currentTarget.classList.contains("active")){
                    return;
                }

                const beginnerButton = document.querySelector(".beginner");
                const advancedButton = document.querySelector(".advanced");

                beginnerButton.classList.toggle('active');
                advancedButton.classList.toggle('active');

                return this.$store.dispatch('setDifficulty', difficulty);
            }
        },
        computed: {
            ...mapState({
                selectedDifficulty: state => state.cutOff.difficulty,
            }),
        },
    }
</script>

<style lang="scss" scoped>

</style>