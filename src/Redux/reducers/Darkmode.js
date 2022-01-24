const mode = true

const Darkmode = (state = mode, action) => {
    switch (action.type) {
        case 'DARKMODE': return !state
        default: return state
    }

}
export default Darkmode