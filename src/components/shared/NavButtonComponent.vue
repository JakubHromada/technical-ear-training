<template>

    <div>
        <m-fab v-if="direction === 'prev'"  @click="setNextStep" aria-label="Next step" class="button-submit" v-bind:class="direction">
            <m-icon icon="keyboard_arrow_left" slot="icon"></m-icon>
            Prev
        </m-fab>

        <m-fab v-else @click="setNextStep" aria-label="Next step" class="button-submit" v-bind:class="direction">
            <m-icon icon="keyboard_arrow_right" slot="trailingIcon"></m-icon>
            Next
        </m-fab>
    </div>

</template>

<script>
    export default {
        props: {
            currentStepTitle: {
                type: String
            },
            currentStepCount: {
                type: Number
            },
            direction: {
                type: String
            }
        },
        methods: {
            setNextStep() {
                this.$store.dispatch('setCurrentStepTitle', this.currentStepTitle);
                this.$store.dispatch('setCurrentStepCount', this.currentStepCount);
            }
        },
    }
</script>

<style lang="sass" scoped>

</style>