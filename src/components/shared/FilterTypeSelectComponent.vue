<template>
    <div class="settings-component-wrap">
        <m-layout-grid class="settings-section-header">
            <m-layout-grid-inner>
                <m-layout-grid-cell :spanPhone="4" :spanTablet="8" :spanDesktop="12">
                    <p class="settings-section-header-title">Choose EQ Type</p>
                </m-layout-grid-cell>
            </m-layout-grid-inner>
        </m-layout-grid>

        <m-layout-grid class="button-selection-wrap">      
            <m-layout-grid-inner class="button-selection-wrap--inner">

                <m-layout-grid-cell class="button-selection-cell" :spanPhone="2" :spanTablet="4" :spanDesktop="6">
                    <m-button @click="setFilterType('lowPass', $event)" raised outlined class="selection-button low-pass" v-bind:class="{active: selectedFilterType === 'lowPass'}">Low Pass</m-button>
                </m-layout-grid-cell>

                <m-layout-grid-cell class="button-selection-cell" :spanPhone="2" :spanTablet="4" :spanDesktop="6">
                    <m-button @click="setFilterType('highPass', $event)" raised outlined class="selection-button high-pass" v-bind:class="{active: selectedFilterType === 'highPass'}">High Pass</m-button>
                </m-layout-grid-cell>

            </m-layout-grid-inner>   
        </m-layout-grid>

        <NavButtonComponent :currentStepTitle="'Audio Track'" :currentStepCount="2" :direction="'prev'" />
        <NavButtonComponent :currentStepTitle="nextStepTitle" :currentStepCount="nextStepcount" :direction="'next'" />
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
                nextStepTitle: 'Difficulty',
                nextStepcount: 4
            }
        },
        methods: {
            setFilterType: function (filterType, event) {
                if(event.currentTarget.classList.contains("active")){
                    return;
                }

                const lowPassButton = document.querySelector(".low-pass");
                const highPassButton = document.querySelector(".high-pass");

                lowPassButton.classList.toggle('active');
                highPassButton.classList.toggle('active');

                return this.$store.dispatch('setFilterType', filterType);
            }
        },
        computed: {
            ...mapState({
                selectedFilterType: state => state.cutOff.filterType,
            }),
        },
    }
</script>

<style lang="scss" scoped>

</style>