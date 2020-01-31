export const SUBMITDATA ='SUBMITDATA';
export const RESET = 'RESET';

export function submit() {
return{
    type:SUBMITDATA
}
};
export const reset = () =>({
    type:RESET
});