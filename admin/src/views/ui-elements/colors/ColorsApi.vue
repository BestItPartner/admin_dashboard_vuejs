<!-- =========================================================================================
    File Name: ColorsApi.vue
    Description: API of Color
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
                    'name': '$vs.theme',
                    'type': 'function',
                    'params': 'primary, success, danger, warning, warning',
                    'desc': 'Change the color of the whole application and components (at run time)',
                    'default': '',
                },
            ]
        }
    },
}
</script>