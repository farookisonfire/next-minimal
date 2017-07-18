export const UNMOUNT_CANVAS = 'UNMOUNT_CANVAS';
export const MOUNT_CANVAS = 'MOUNT_CANVAS';

export function unmountCanvas() {
  console.log('canvas has been unmounted!!')
  return { type: UNMOUNT_CANVAS };
}

export function mountCanvas() {
    console.log('canvas has been mounted!!')

  return { type: MOUNT_CANVAS};
}
