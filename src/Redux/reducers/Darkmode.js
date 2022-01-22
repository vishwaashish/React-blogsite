const mode = false

const Darkmode = (state = mode, action) => {
    switch (action.type) {
        case 'DARKMODE': return !state
        // case 'LIGHTMODE': return state
        default: return state
    }

}
export default Darkmode