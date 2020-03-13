<!-- =========================================================================================
    File Name: Pagination.vue
    Description: Pagination - Imports all page portions
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div id="pagination-demo">
        <pagination-default></pagination-default>
        <pagination-icon></pagination-icon>
        <pagination-links-limit></pagination-links-limit>
        <pagination-go-to></pagination-go-to>
        <pagination-color></pagination-color>
    </div>
</template>

<script>
import PaginationDefault from './PaginationDefault.vue'
import PaginationIcon from './PaginationIcon.vue'
import PaginationLinksLimit from './PaginationLinksLimit.vue'
import PaginationGoTo from './PaginationGoTo.vue'
import PaginationColor from './PaginationColor.vue'

export default{
    components: {
        PaginationDefault,
        PaginationIcon,
        PaginationLinksLimit,
        PaginationGoTo,
        PaginationColor,
    }   
}
</script>