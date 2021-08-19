
// this file will only have common methods shared between api-endpoints

export const getJson = () => {
    if (process.env.secret === "super-secret")
        return { name: 'John Yay' }
        
    return { name: 'John Doe' }
}