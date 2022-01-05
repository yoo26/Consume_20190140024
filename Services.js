function getAll(){
    const respon = axios.get("http://localhost:8080/datatas/tas")
    const dr = respon.then(resp => resp.data)
    return dr

    // .then((result) => {
    //     console.log (result)
    //     return result.data
    // }).catch((err) => {
    //     console.error(err)
    // });
}