<!-- =========================================================================================
    File Name: Switch.vue
    Description: Switch element - Imports all page portion
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div id="form-element-switch-demo">
        <switch-state></switch-state>
        <switch-color></switch-color>
        <switch-text></switch-text>
        <switch-icons></switch-icons>
        <switch-array-value></switch-array-value>
        <switch-api></switch-api>
    </div>
</template>

<script>
import SwitchState from './SwitchState.vue' 
import SwitchColor from './SwitchColor.vue' 
import SwitchText from './SwitchText.vue'   
import SwitchIcons from './SwitchIcons.vue' 
import SwitchArrayValue from './SwitchArrayValue.vue'   
import SwitchApi from './SwitchApi.vue' 

export default{
    components: {
        SwitchState,
        SwitchColor,
        SwitchText,
        SwitchIcons,
        SwitchArrayValue,
        SwitchApi,
    }
}
</script>

<style lang="scss">
@import "@/assets/scss/vuesax/pages/switch.scss";
</style>