export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const CONFIRM_REMOVE = 'CONFIRM_REMOVE';
export const REMOVE_ALL_ITEMS = 'REMOVE_ALL_ITEMS';

export const addItem = (item) => ({
    type: ADD_ITEM,
    payload: item
});

export const removeItem = (id) => ({
    type: REMOVE_ITEM,
    payload: id
});

export const confirmRemove = () => ({
    type: CONFIRM_REMOVE
});

export const removeAllItems = () => ({
    type: REMOVE_ALL_ITEMS
});

