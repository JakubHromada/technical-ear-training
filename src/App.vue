<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue';

import MButton from 'material-components-vue/dist/button';
import MGrid from  'material-components-vue/dist/layout-grid';
import MTab from 'material-components-vue/dist/tabs';
import MIcon from 'material-components-vue/dist/icon';
import MFab from 'material-components-vue/dist/fab';
import MFormField from 'material-components-vue/dist/form-field';
import MSelect from 'material-components-vue/dist/select';
import MList from 'material-components-vue/dist/list';
import MFloatingLabel from 'material-components-vue/dist/floating-label';
import MLineRipple from 'material-components-vue/dist/line-ripple';

Vue.use(MButton);
Vue.use(MGrid);
Vue.use(MTab);
Vue.use(MIcon);
Vue.use(MFab);
Vue.use(MFormField);
Vue.use(MSelect);
Vue.use(MList);
Vue.use(MFloatingLabel);
Vue.use(MLineRipple);

export default {
  name: 'App',
  mounted() {
        this.loadSamplesIntoBuffer("/audioOne.wav", "audioOne");
    },
    data: function () {
         return {
             audioBuffer: [],
             begginerPlaySound: null
         }
    },
    methods: {
      loadSamplesIntoBuffer(url, key) {      

        const audioCtx = this.$store.state.audioCtx;
        let request = new XMLHttpRequest();
        let destBuffer = [];
        request.open('GET', url, true);
        request.responseType = 'arraybuffer';

        request.onload = function() 
        {
            audioCtx.decodeAudioData(request.response,
            function(buffer) {
                destBuffer[key] = buffer;
            },
            function() {
                alert("The file " + url + " could not be loaded!");
            });
        }
        request.send();
        
        this.$store.dispatch('setAudioBuffer', destBuffer);
    },
  },
}
</script>

<style>
  @import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500");
  @import url("https://fonts.googleapis.com/icon?family=Material+Icons");
</style>
