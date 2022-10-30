const getFeaturesData = async ()=>{
    const res = await fetch("./data/features.json")
    return await res.json()
}
export default getFeaturesData