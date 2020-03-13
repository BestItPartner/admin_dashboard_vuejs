<!-- =========================================================================================
    File Name: SwitchApi.vue
    Description: API of Switch component
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="API">

        <vs-table stripe :data="api">

            <template slot="thead">
                <vs-th>Name</vs-th>
                <vs-th>Type</vs-th>
                <vs-th>Parametres</vs-th>
                <vs-th>Description</vs-th>
                <vs-th>Default</vs-th>
            </template>

            <template slot-scope="{data}">
                <vs-tr :key="indextr" v-for="(tr, indextr) in data">

                    <vs-td>
                        {{data[indextr].name}}
                    </vs-td>

                    <vs-td>
                        {{data[indextr].type}}
                    </vs-td>

                    <vs-td>
                        {{data[indextr].params}}
                    </vs-td>

                    <vs-td>
                        {{data[indextr].desc}}
                    </vs-td>

                    <vs-td>
                        {{data[indextr].default}}
                    </vs-td>

                </vs-tr>
            </template>
        </vs-table>

    </vx-card>
</template>

<script>
export default {
    data() {
        return {
            api: [
                {
                    'name': 'v-model',
                    'type': 'boolean || Array',
                    'params': 'true || false || []',
                    'desc': 'Link values.',
                    'default': '',
                },
                {
                    'name': 'vs-value',
                    'type': 'String',
                    'params': '',
                    'desc': 'Value if different from a boolean.',
                    'default': '',
                },
                {
                    'name': 'color',
                    'type': 'String',
                    'params': 'Default Colors | HEX | RGB',
                    'desc': 'Type of element or color.',
                    'default': 'primary',
                },
                {
                    'name': 'vs-icon',
                    'type': 'String',
                    'params': 'Material Icons',
                    'desc': 'Icon within the element.',
                    'default': '',
                },
                {
                    'name': 'vs-icon-on',
                    'type': 'String',
                    'params': 'Material Icons',
                    'desc': 'Icon that appears when the item is in active state.',
                    'default': '',
                },
                {
                    'name': 'vs-icon-off',
                    'type': 'String',
                    'params': 'Material Icons',
                    'desc': 'Icon that appears in the inactive state.',
                    'default': '',
                },
                {
                    'name': 'icon-pack',
                    'type': 'String',
                    'params': ' Icon Pack Class Name',
                    'desc': 'Icon Pack to be used. If not set, icon will default to Material Icons. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal.',
                    'default': 'material-icons',
                },
                
            ]
        }
    },
}
</script>