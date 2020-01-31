export const INCREMENT ='INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export function add() {
return{
    type:INCREMENT
}
};
export const remove = () =>({
    type:DECREMENT
});
export const reset = () =>({
    type:RESET
});