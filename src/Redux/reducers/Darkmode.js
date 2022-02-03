const mode = false

const Darkmode = (state = mode, action) => {
    switch (action.type) {
        case 'DARKMODE': return true  //true
        case 'LIGHTMODE': return false  //false
        default: return state
    }

}
export default Darkmode