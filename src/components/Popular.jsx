import axios from "axios"

function Popular() {

    const token = process.env.REACT_APP_API_KEY
    const axiosconfig = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const axiosurl = 'https://api.themoviedb.org/3/movie/popular'


    axios.get(axiosurl,axiosconfig).then((res) => {
        console.log(res)
    })

    return(
        <>
        </>
    )
}
export default Popular