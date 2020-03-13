<!-- =========================================================================================
    File Name: SelectApi.vue
    Description: API of select component
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
                    'name': 'options',
                    'type': 'Array',
                    'params': '{ "text:\'Example\'": null, "value:\'1\'": null }',
                    'desc': 'Options to select.',
                    'default': '',
                },
                {
                    'name': 'color',
                    'type': 'String',
                    'params': '',
                    'desc': 'Change the color of the button.',
                    'default': 'primary',
                },
                {
                    'name': 'autocomplete',
                    'type': 'Boolean',
                    'params': '',
                    'desc': 'Enables the use of autocomplete in the select.',
                    'default': 'false',
                },
                {
                    'name': 'multiple',
                    'type': 'Boolean',
                    'params': '',
                    'desc': 'Determines whether the selection is of multiple selection.',
                    'default': 'false',
                },
                {
                    'name': 'max-selected',
                    'type': 'Number',
                    'params': '',
                    'desc': 'Determine the number of maximum options to be able to select (only for active multiple).',
                    'default': 'All options',
                },
                {
                    'name': 'label',
                    'type': 'String',
                    'params': '',
                    'desc': 'Label for the input element.',
                    'default': '',
                },
                {
                    'name': 'success',
                    'type': 'Boolean',
                    'params': 'boolean bind',
                    'desc': 'Activate the status of success in the input.',
                    'default': 'false',
                },
                {
                    'name': 'danger',
                    'type': 'Boolean',
                    'params': 'boolean bind',
                    'desc': 'Activate the status of danger in the input.',
                    'default': 'false',
                },
                {
                    'name': 'warning',
                    'type': 'Boolean',
                    'params': 'boolean bind',
                    'desc': 'Activate the status of warning in the input.',
                    'default': 'false',
                },
                {
                    'name': 'description-text',
                    'type': 'String',
                    'params': '',
                    'desc': 'Add a description text to the input.',
                    'default': 'false',
                },
                {
                    'name': 'danger-text',
                    'type': 'String',
                    'params': '',
                    'desc': 'Text to show when the item is invalid.',
                    'default': '',
                },
                {
                    'name': 'success-text',
                    'type': 'String',
                    'params': '',
                    'desc': 'Text to show when the item is valid.',
                    'default': '',
                },
                {
                    'name': 'warning-text',
                    'type': 'String',
                    'params': '',
                    'desc': 'Text that is displayed in the warning state.',
                    'default': '',
                },
                {
                    'name': 'is-selected.sync',
                    'type': 'Boolean sync',
                    'params': '',
                    'desc': 'Determines if the option is selected.',
                    'default': '',
                },
                {
                    'name': 'input-changed',
                    'type': 'Event',
                    'params': 'event (optional)',
                    'desc': 'Triggers method when input of select is changed (requires autocomplete prop)',
                    'default': '',
                },
                {
                    'name': 'icon',
                    'type': 'String',
                    'params': 'icon name',
                    'desc': 'Element icon.',
                    'default': 'keyboard_arrow_down',
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