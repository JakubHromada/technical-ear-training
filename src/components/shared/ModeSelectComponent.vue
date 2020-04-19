<template>
    <div class="settings-component-wrap">
        <!-- Mode -->
        <m-layout-grid class="settings-section-header">
            <m-layout-grid-inner>
                <m-layout-grid-cell :spanPhone="4" :spanTablet="8" :spanDesktop="12">
                    <p class="settings-section-header-title">Select mode</p>
                </m-layout-grid-cell>
            </m-layout-grid-inner>
        </m-layout-grid>

        <m-layout-grid class="button-selection-wrap">      
            <m-layout-grid-inner class="button-selection-wrap--inner">

                <m-layout-grid-cell class="button-selection-cell" :spanPhone="2" :spanTablet="4" :spanDesktop="6">
                    <m-button @click="setMethod('practice', $event)" raised outlined class="selection-button practice" v-bind:class="{active: selectedMode === 'practice'}">Practice</m-button>
                </m-layout-grid-cell>

                <m-layout-grid-cell class="button-selection-cell" :spanPhone="2" :spanTablet="4" :spanDesktop="6">
                    <m-button @click="setMethod('quiz', $event)" raised outlined class="selection-button quiz" v-bind:class="{active: selectedMode === 'quiz'}">Quiz</m-button>
                </m-layout-grid-cell>

            </m-layout-grid-inner>   
        </m-layout-grid>

        <NavButtonComponent :currentStepTitle="'Audio Track'" :currentStepCount="2" :direction="'next'"/>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import NavButtonComponent from './NavButtonComponent';
    
    export default {
        components: {
            NavButtonComponent,
        },
        methods: {
            setMethod: function (method, event){
                if(event.currentTarget.classList.contains("active")){
                    return;
                }

                const practiceButton = document.querySelector(".practice");
                const quizButton = document.querySelector(".quiz");

                practiceButton.classList.toggle('active');
                quizButton.classList.toggle('active');

                return this.$store.dispatch('setMode', method);
            }
        },
        created () {
            this.$store.dispatch('setCurrentStepTitle', "Mode");
        },
        computed: {
            ...mapState({
                selectedMode: state => state.cutOff.mode,
            }),
        },
    }
</script>

<style lang="scss" scoped>
    
</style>