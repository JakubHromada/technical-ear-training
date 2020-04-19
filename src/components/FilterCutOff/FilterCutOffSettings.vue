<template>
    <section>

        <m-layout-grid class="eq-cutoff-setup-header">
            <m-layout-grid-inner>
                <m-layout-grid-cell :spanPhone="4" :spanTablet="8" :spanDesktop="12">
                    <span class="header">{{currentStepTitle}}</span>

                    <section class="progress-bar">   
                        <div class="progress-dot" v-bind:class="{active: currentStepCount === 1, completed: currentStepCount !== 1}"></div>
                        <span class="dash" v-bind:class="{completed: currentStepCount !== 1}"></span>
                        <div class="progress-dot" v-bind:class="{active: currentStepCount === 2, completed: currentStepCount !== 1 && currentStepCount !== 2}"></div>            
                        <span class="dash" v-bind:class="{completed: currentStepCount !== 1 && currentStepCount !== 2}"></span>          
                        <div class="progress-dot" v-bind:class="{active: currentStepCount === 3, completed: currentStepCount !== 1 && currentStepCount !== 2 && currentStepCount !== 3}"></div>
                        <span class="dash" v-bind:class="{completed: currentStepCount !== 1 && currentStepCount !== 2 && currentStepCount !== 3}"></span>            
                        <div class="progress-dot" v-bind:class="{active: currentStepCount === 4, completed: currentStepCount !== 1 && currentStepCount !== 2 && currentStepCount !== 3 && currentStepCount !== 4}"></div>             
                    </section>
                    
                </m-layout-grid-cell>
            </m-layout-grid-inner>
        </m-layout-grid>

        <section class="eq-cutoff-settings-wrap">
            <ModeSelectComponent v-if="currentStepCount === 1" />
            <AudioSelectComponent v-if="currentStepCount === 2" />
            <FilterTypeSelectComponent v-if="currentStepCount === 3" />
            <DifficultySelectComponent v-if="currentStepCount === 4" />
        </section>
    
        <router-link to="/">
            <m-tab-bar class="bottom-bar">
                <m-tab>
                    <m-icon slot="icon" icon="home"/>
                </m-tab>            
            </m-tab-bar>
        </router-link>
    </section>
</template>

<script>
    import { mapState } from 'vuex';
    import AudioSelectComponent from '../shared/AudioSelectComponent';
    import FilterTypeSelectComponent from '../shared/FilterTypeSelectComponent';
    import ModeSelectComponent from '../shared/ModeSelectComponent';
    import DifficultySelectComponent from '../shared/DifficultySelectComponent';

    export default {
        components: {
            AudioSelectComponent,
            FilterTypeSelectComponent,
            ModeSelectComponent,
            DifficultySelectComponent
        },
        computed: {
            ...mapState({
                currentStepTitle: state => state.cutOff.currentStepTitle,
                currentStepCount: state => state.cutOff.currentStepCount,
            }),
        },
        created () {
            this.$store.dispatch('setCurrentStepCount', 1);
        },
    }
</script>

<style lang="scss">
    @import "../../styles/components/eqCutOffSettings.scss";
</style>