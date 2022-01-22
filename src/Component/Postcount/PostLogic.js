export const carousalpost = (data, len) => {
    const a = !!data && data.length
    const b = !!data && data.length - 5
    const shuff = !!data && data.slice(b, a)
    return !!shuff && shuff.reverse()
}

export const randompost = (data, len) => {
    const shuff = !!data && data?.sort(() => len - Math.random())
    return !!shuff && shuff.slice(0, len)
}

export const uniquepost = (data,len) => {
    const length = !!data && Math.floor(Math.random() * data?.length)
    const response = !!length && data[length]
    return response
}