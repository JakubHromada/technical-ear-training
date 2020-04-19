<template>
    <div class="settings-component-wrap">
        <m-layout-grid class="settings-section-header">
            <m-layout-grid-inner>
                <m-layout-grid-cell :spanPhone="4" :spanTablet="8" :spanDesktop="12">
                    <p class="settings-section-header-title">Select Audio Track</p>
                </m-layout-grid-cell>
            </m-layout-grid-inner>
        </m-layout-grid>

        <m-layout-grid class="button-selection-wrap">      
            <m-layout-grid-inner class="button-selection-wrap--inner">

                <select v-model="selectedAudioTrack" class="audio-select">
                    <option
                        v-for="option in selectAudioTrackOptions"
                        :key="option.text"
                        :value="option.value"
                        :selected="selectedAudioTrack === option.value"
                        :disabled="option.value === ''">
                        {{ option.text }}
                        </option>
                </select>

                <m-layout-grid-cell :spanPhone="4" :spanTablet="8" :spanDesktop="12">
                    <div class="text-primary">Or upload yours</div>
                </m-layout-grid-cell>
                
                <m-layout-grid-cell 
                    class="button-selection-cell" 
                    :spanPhone="4"
                    :spanTablet="2"
                    :spanDesktop="12">
                    <div class="upload-btn-wrapper">
                        <button class="selection-button">UPLOAD</button>
                        <input type="file" name="myfile" />
                    </div>
                </m-layout-grid-cell>

                

                <m-layout-grid-cell 
                    :spanPhone="4"
                    :spanTablet="4"
                    :spanDesktop="12">
                    <p v-show="selectedAudioTrack !== ''" class="selected-track">AUDIO TRACK: {{selectedAudioTrack}}</p>
                </m-layout-grid-cell>

            </m-layout-grid-inner>   
        </m-layout-grid>
        
        <NavButtonComponent :currentStepTitle="prevStepTitle" :currentStepCount="prevStepcount" :direction="'prev'" />
        <NavButtonComponent :currentStepTitle="nextStepTitle" :currentStepCount="nextStepcount" :direction="'next'" />
    </div>
</template>

<script>
    import NavButtonComponent from './NavButtonComponent';

    export default {
        components: {
            NavButtonComponent,
        },
        data() {
            return {
                selectAudioTrackOptions: [
                    { text: 'SELECT', value: '' },
                    { text: 'Track1', value: 'track1' },
                    { text: 'Track2', value: 'track2'}
                ],
                selectedAudioTrack: '',
                nextStepTitle: 'Filter Type',
                prevStepTitle: 'Mode',
                nextStepcount: 3,
                prevStepcount: 1
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>