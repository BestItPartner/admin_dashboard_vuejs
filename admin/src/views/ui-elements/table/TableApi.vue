<!-- =========================================================================================
    File Name: TableApi.vue
    Description: API of table component
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
                    'name': 'data',
                    'type': 'Array, Object',
                    'params': '',
                    'desc': 'Data that will be represented in the table',
                    'default': '',
                },
                {
                    'name': 'header',
                    'type': 'slot',
                    'params': '',
                    'desc': 'Header of the table',
                    'default': '',
                },
                {
                    'name': 'thead',
                    'type': 'slot',
                    'params': '',
                    'desc': 'thead of the table and where the vs-th should be added',
                    'default': '',
                },
                {
                    'name': 'tbody',
                    'type': 'hoverFlat',
                    'params': '',
                    'desc': 'tbody of the table and where the vs-tr should be added',
                    'default': '',
                },
                {
                    'name': 'stripe',
                    'type': 'Boolean',
                    'params': '',
                    'desc': '   Add a stripes effect',
                    'default': 'false',
                },
                {
                    'name': 'hoverFlat',
                    'type': 'Boolean',
                    'params': '',
                    'desc': 'Change effect hover and flat',
                    'default': 'false',
                },
                {
                    'name': 'maxHeight',
                    'type': 'px',
                    'params': '',
                    'desc': 'Change the high maximum of the table, generating the scroll.',
                    'default': 'false',
                },
                {
                    'name': 'multiple',
                    'type': 'Boolean',
                    'params': '',
                    'desc': 'Determines if multiple items can be selected',
                    'default': 'false',
                },
                {
                    'name': 'notSpacer',
                    'type': 'Boolean',
                    'params': '',
                    'desc': 'Eliminates the space between each tr',
                    'default': 'false',
                },
                {
                    'name': 'search',
                    'type': 'Boolean',
                    'params': '',
                    'desc': 'Determine if the filtering functionality through an input is active',
                    'default': 'false',
                },
                {
                    'name': 'pagination',
                    'type': 'Boolean',
                    'params': '',
                    'desc': 'Determine if the page is active so that only a certain number of items can be displayed',
                    'default': 'false',
                },
                {
                    'name': 'maxItems',
                    'type': 'Number',
                    'params': '',
                    'desc': 'Change the maximum number of items that can be displayed when the page is active',
                    'default': '5',
                },
                {
                    'name': 'state (vs-tr)',
                    'type': 'Boolean',
                    'params': '',
                    'desc': 'Determine the state of the element with a color',
                    'default': '',
                },
                {
                    'name': 'data (vs-tr)',
                    'type': 'Object, Number, Array, String',
                    'params': '',
                    'desc': 'Determines the value of the element for when it is selected',
                    'default': '',
                },
                {
                    'name': 'sortKey (vs-th)',
                    'type': 'String',
                    'params': '',
                    'desc': 'Determine the value to be raffled and if this activates that functionality',
                    'default': '',
                },
                {
                    'name': 'data (vs-td)',
                    'type': 'String',
                    'params': '',
                    'desc': 'This property is required if you are going to use the edit slot',
                    'default': '',
                },
            ]
        }
    },
}
</script>