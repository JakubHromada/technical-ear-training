<template>
    <div>
        <h1>EQ Matching screen</h1>
        <m-button outlined v-on:click="this.playAudio">Play</m-button>
        <router-link to="/">
            <m-button outlined>Back</m-button>
        </router-link>

        <m-tab-bar class="bottom-bar">
            <m-tab>
                <m-icon slot="icon" icon="equalizer"/>
                HOME
            </m-tab>
        </m-tab-bar>
    </div>
</template>

<script>
export default {
    methods: {
        playAudio: function () {
            const audioCtx = this.$store.state.audioCtx;
            const audioBuffer = this.$store.state.audioBuffer

            this.beginnerPlaySound = audioCtx.createBufferSource();
            this.beginnerPlaySound.buffer = audioBuffer["audioOne"];
            this.beginnerPlaySound.connect(audioCtx.destination);
            this.beginnerPlaySound.start();
        },
    },
}
</script>

<style lang="scss">

</style>