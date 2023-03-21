import axios from "axios"
//import BackComponent from "@/src/components/BackComponent"

export default function ProductSsr( {data}){
    return (
        <div className="w-full">

            {
                Array.isArray(data) &&
                data.length >0 ?
                data.map((item)=>{
                    return (
                        <li>{item.id}</li>,
                        <li>{item.firstName}</li>,
                        <li>{item.lastName}</li>,
                        <li>{item.title}</li>
                    )
            })
            :'Empty'
        }
        </div>
    )
}

export async function getServerSideProps(context) {
    const headers = { 'app-id': '64190d3fed8159a1880baab4' };
     const [err,data] = await axios
     
    .get(`https://dummyapi.io/data/v1/user`, { headers})
    .then((Response)=>{
        return [null , Response.data]
    })
    .catch((err)=>{
        return [err, null]
    })

    if(err){
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }
    

    return {
        props: {
            data
        }
    }

}
