<!-- =========================================================================================
    File Name: PaginationColor.vue
    Description: Rendering of default pagination
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Color" code-toggler>

        <p>You can change the color of the component with the property color, you can use the Main colors or RGB and HEX colors</p>

        <vs-alert icon="warning" active="true" color="warning" class="mt-5">
            <span>Only <strong>RGB</strong> and <strong>HEX</strong> colors are supported.</span>
        </vs-alert>

        <div class="demo-alignment">
            <input class="input-color" v-model="colorx" type="color">
            <vs-pagination :color="colorx" :total="20" v-model="currentx"></vs-pagination>
            <vs-button @click="currentx++">{{ currentx }}</vs-button>
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;vs-pagination :color=&quot;colorx&quot; :total=&quot;20&quot; v-model=&quot;currentx&quot;&gt;&lt;/vs-pagination&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data: () =&gt; ({
    colorx: &apos;#f91f43&apos;,
    currentx: 7
  })
}
&lt;/script&gt;
        </template>

    </vx-card>
</template>

<script>
export default {
    data: () => ({
        colorx: '#f91f43',
        currentx: 7,
    })
}
</script>