const getDownloadData = async ()=>{
    const res = await fetch("./data/articles.json")
    return await res.json()
}
export default getDownloadData