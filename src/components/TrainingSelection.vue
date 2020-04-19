
<template>

    <section>
        <div class="header-wrap">
            <m-layout-grid>
                <m-layout-grid-inner>
                    <m-layout-grid-cell :spanPhone="4" :spanTablet="8" :spanDesktop="12">
                        <h1 class="header">Select your training</h1>
                    </m-layout-grid-cell>
                </m-layout-grid-inner>
            </m-layout-grid> 
        </div>

        <div class="mdc-layout-wrap">

            <m-layout-grid>
                <m-layout-grid-inner>
                    <m-layout-grid-cell :spanPhone="4" :spanTablet="8" :spanDesktop="12">
                        <m-button @click="setRoute('filterCutOff', $event)" raised class="training-selection-button cutoff active" outlined>Filter Cut Off</m-button>
                    </m-layout-grid-cell>
                </m-layout-grid-inner>      
            </m-layout-grid>
            
            <m-layout-grid>
                <m-layout-grid-inner>
                    <m-layout-grid-cell :spanPhone="4" :spanTablet="8" :spanDesktop="12">
                        <m-button @click="setRoute('eqMatching', $event)" raised class="training-selection-button eqMatching" outlined>EQ Matching</m-button>
                    </m-layout-grid-cell>
                </m-layout-grid-inner>      
            </m-layout-grid>

        </div>

        <router-link :to='nextUrl' class="app-fab--absolute">
            <m-fab>
                <m-icon icon="keyboard_arrow_right" slot="trailingIcon"></m-icon>
                Next 
            </m-fab>
        </router-link>

        <router-view></router-view>
        
    </section>

</template>

<script>
export default {
    data: function () {
         return {
             nextUrl: '/filterCutOffSettings'
         }
    },
    methods: {
        setRoute: function (routeName, event){
            if(event.currentTarget.classList.contains("active")){
                return;
            }

            const cutoffButton = document.querySelector(".cutoff");
            const eqMatchingButton = document.querySelector(".eqMatching");

            cutoffButton.classList.toggle('active');
            eqMatchingButton.classList.toggle('active');

            return this.nextUrl = routeName === "eqMatching"
                ? "/eqMatchingTraining"
                : "/filterCutOffSettings";
        }
    }
}
</script>

<style lang="scss">
    @import "../styles/components/trainingSelection.scss";
</style>