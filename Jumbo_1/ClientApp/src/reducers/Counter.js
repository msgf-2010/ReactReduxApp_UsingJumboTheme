const incrementCountType = 'INCREMENT_COUNT';
const decrementCountType = 'DECREMENT_COUNT';
const changeColorType = 'CHANGE_COLOR';
const changeNumType = 'CHANGE_NUM';

const initialState = { count: 0, num: "" };

export const actionCreators = {
    increment: () => ({ type: incrementCountType }),
    decrement: () => ({ type: decrementCountType }),
    changeColor: () => ({ type: changeColorType }),
    changeNum: () => ({ type: changeNumType })
};

export default (state, action) => {
    state = state || initialState;

    if (action.type === incrementCountType) {
        console.log(state.count)
        return { ...state, count: state.count + 1 };
    }

    if (action.type === decrementCountType) {
        return { ...state, count: state.count - 1 };
    }

    if (action.type === changeColorType) {
        var randomColor = "#" + ('00000' + (Math.random() * (1 << 24) | 0).toString(16)).slice(-6);
        return { ...state, color: randomColor };
    }

    if (action.type === changeNumType) {
        
        console.log(state.num);
        return { ...state, num: state.num };
    }

    return state;
}