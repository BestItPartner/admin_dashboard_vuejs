/*=========================================================================================
  File Name: moduleCalendarActions.js
  Description: Calendar Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default {
    addEventToCalendar({ commit }, event) {
        commit('ADD_EVENT_TO_CALENDAR', event);
    },
    ediCalendarEvent({ commit }, event) {
        commit('EDIT_CALENDAR_EVENT', event);
    },
    removeCalendarEvent({ commit }, eventId) {
        commit('REMOVE_CALENDAR_EVENT', eventId);
    },
}