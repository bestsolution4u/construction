const TASK_STATUS_PARAMS = [
  {
    current: 'new_task',
    button: 'Going Now',
    next: 'going',
  },
  {
    current: 'going_now',
    button: 'Start',
    next: 'start',
  },
  {
    current: 'start',
    button: 'Arrive',
    next: 'arrive',
  },
  {
    current: 'arrived',
    button: 'Complete',
    next: 'complete',
  },
  {
    current: 'completed',
    button: 'Completed',
    next: 'update',
  },
];

export const getTaskButtonText = status => {
  let params = TASK_STATUS_PARAMS.filter((item, index) => {
    if (item.current === status) return item;
  });
  return params && params.length ? params[0].button : '';
};

export const getTaskNextStatus = status => {
  let params = TASK_STATUS_PARAMS.filter((item, index) => {
    if (item.current === status) return item;
  });
  return params && params.length ? params[0].next : '';
};
