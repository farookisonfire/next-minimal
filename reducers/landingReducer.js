import {UNMOUNT_CANVAS, MOUNT_CANVAS} from '../actions/landingActions';

export default function landingReducer(state = true, { type }){
  switch(type) {
    case UNMOUNT_CANVAS:
      return false;
    case MOUNT_CANVAS:
      return true;
    default:
      return state;
  }
}