import store from "@/store/index.js";

/*
@param {String} type Notification type
@param {String} message Notification Message
@param {Object} to Programmatic route
@param {Function} next Function to continue to the next middleware
*/
export function showNoti(type, message, to, next) {
  store.dispatch(
    "notification/addNoti",
    {
      type,
      message,
    },
    { root: true }
  );

  // got to the route if provided
  if (to && next) {
    next(to);
  }
}
