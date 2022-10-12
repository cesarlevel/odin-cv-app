export function addStateArrayItem(state, item) {
    state.push(item);
}

export function deleteStateArrayItem(state, itemIndex) {
    state.splice(itemIndex, 1);
}
