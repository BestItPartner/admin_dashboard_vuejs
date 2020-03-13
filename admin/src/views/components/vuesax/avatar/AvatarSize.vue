<!-- =========================================================================================
    File Name: AvatarSize.vue
    Description: Change size of avatars
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="size" code-toggler>
        
        <p>You can change the size of the Avatar with the property size the allowed values are:</p>
        <vx-list :list="['large', 'small', 'Custom measures']"></vx-list>

        <vs-alert color="primary" icon="new_releases" active="true" class="mb-1">
            <span>In the example the last avatar has the custom size of <code>70px</code> the added value will be the avatar's <strong>height</strong> and <strong>width</strong></span>
        </vs-alert>

        <div class="demo-alignment mt-5">

            <vs-avatar size="small" />
            <vs-avatar text="Luis Daniel"/>
            <vs-avatar size="large" src="https://avatars2.githubusercontent.com/u/31676496?s=460&v=4"/>
            <vs-avatar size="70px" src="https://avatars2.githubusercontent.com/u/31676496?s=460&v=4"/>

        </div>

        <template slot="codeContainer">
&lt;vs-avatar size=&quot;small&quot; /&gt;
&lt;vs-avatar text=&quot;Luis Daniel&quot;/&gt;
&lt;vs-avatar size=&quot;large&quot; src=&quot;https://avatars2.githubusercontent.com/u/31676496?s=460&amp;v=4&quot;/&gt;
&lt;vs-avatar size=&quot;70px&quot; src=&quot;https://avatars2.githubusercontent.com/u/31676496?s=460&amp;v=4&quot;/&gt;
        </template>

    </vx-card>
</template>