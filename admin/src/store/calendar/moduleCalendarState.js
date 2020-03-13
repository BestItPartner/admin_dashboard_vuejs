/*=========================================================================================
  File Name: moduleCalendarState.js
  Description: Calendar Module State
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

export default {
    calendarEvents: [
        {
            id: 1,
            title: 'My Event',
            start: '2019-04-16',
            end: '2019-04-17',
            desc: 'demo event',
            cssClass: 'event-danger',
            label: 'personal'
        },
    ],
    calendarLabels: [
        { text: 'Business' ,value : 'business', color: 'success' },
        { text: 'Work', value: 'work', color: 'warning'},
        { text: 'Personal', value: 'personal', color: 'danger'},
    ],
}
