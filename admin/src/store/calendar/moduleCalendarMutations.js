/*=========================================================================================
  File Name: moduleCalendarMutations.js
  Description: Calendar Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default {
    ADD_EVENT_TO_CALENDAR(state, event) {
        const length = state.calendarEvents.length
        let lastIndex = 0;
        if(length){
            lastIndex = state.calendarEvents[length - 1].id;
        }
        event.id = lastIndex + 1
        const newEvent = Object.assign({}, event);
        state.calendarEvents.push(newEvent);
    },
    EDIT_CALENDAR_EVENT(state, event) {
        const eventIndex = state.calendarEvents.findIndex((e) => e.id == event.id);
        state.calendarEvents[eventIndex].title = event.title;
        state.calendarEvents[eventIndex].start = event.start;
        state.calendarEvents[eventIndex].end = event.end;
        state.calendarEvents[eventIndex].desc = event.desc;
        state.calendarEvents[eventIndex].cssClass = event.cssClass;
        state.calendarEvents[eventIndex].label = event.label;
    },
    REMOVE_CALENDAR_EVENT(state, eventId) {
        const eventIndex = state.calendarEvents.findIndex((e) => e.id == eventId);
        state.calendarEvents.splice(eventIndex, 1);
    },
}