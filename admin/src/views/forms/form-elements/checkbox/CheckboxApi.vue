<!-- =========================================================================================
    File Name: CheckboxApi.vue
    Description: API of Checkbox component
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
                    'type': 'String / boolean / array',
                    'params': '',
                    'desc': 'Link values.',
                    'default': '',
                },
                {
                    'name': 'color',
                    'type': 'String',
                    'params': 'primary, success, danger, warning, dark, RGB, HEX',
                    'desc': 'Color options for checkBox.',
                    'default': 'primary',
                },
                {
                    'name': 'vs-value',
                    'type': 'String',
                    'params': 'primary, success, danger, warning, dark, RGB, HEX',
                    'desc': 'Value if different from a boolean.',
                    'default': '',
                },
                {
                    'name': 'icon',
                    'type': 'String',
                    'params': 'Material Icons',
                    'desc': 'Change the checkBox icon.',
                    'default': 'checked',
                },
                {
                    'name': 'icon-pack',
                    'type': 'String',
                    'params': 'Icon Pack Class Name',
                    'desc': 'Icon Pack to be used. If not set, icon will default to Material Icons. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal.',
                    'default': 'material-icons',
                },
                
                
            ]
        }
    },
}
</script>