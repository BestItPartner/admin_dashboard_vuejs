<!-- =========================================================================================
    File Name: GridApi.vue
    Description: API of grid system
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
                    'name': 'vs-w',
                    'type': 'Number, String',
                    'params': '1-12',
                    'desc': 'width of the vs-row or vs-colum',
                    'default': 12,
                },
                {
                    'name': 'vs-offset',
                    'type': 'Number, String',
                    'params': '1-12',
                    'desc': 'Distance to the left of the',
                    'default': '0',
                },
                {
                    'name': 'vs-justify',
                    'type': 'String',
                    'params': 'flex-start, center, flex-end, space-around, space-between',
                    'desc': 'Define the alignment vertically of the elements within the vs-row or vs-col',
                    'default': '',
                },
                {
                    'name': 'vs-align',
                    'type': 'String',
                    'params': ' flex-start, center, flex-end, space-around, space-between',
                    'desc': '   Define the horizontal alignment of the elements within the vs-row or vs-col',
                    'default': '',
                },
                {
                    'name': 'vs-order',
                    'type': 'Number',
                    'params': '',
                    'desc': 'Changes the order of the vs-col with respect to his brothers vs-col',
                    'default': '',
                },
                {
                    'name': 'vs-lg',
                    'type': 'Number, String',
                    'params': '1-12',
                    'desc': 'Is for large devices such as desktops or laptops (large)',
                    'default': '',
                },
                {
                    'name': 'vs-sm',
                    'type': 'Number, String',
                    'params': '1-12',
                    'desc': 'Is for medium devices such as laptops or tablets',
                    'default': '',
                },
                {
                    'name': 'vs-xs',
                    'type': 'Number, String',
                    'params': '1-12',
                    'desc': '   Is for small devices such as tablets (small) and phones',
                    'default': '',
                },
            ]
        }
    },
}
</script>