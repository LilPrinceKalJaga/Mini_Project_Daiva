import React from 'react'
import BackComponent from '../src/components/back.components'

export default function SSR(props) {
    let { data } = props
    let i =1
    return (
        <div>
            <BackComponent/>
            <h1>Server Side Rendering</h1>
            <p>Simulasi Server Side Rendering di nextjs </p>

            <div>
                {
                     data.map((item) => {
                        return (
                            <div key={item.id} className="bg-gray-80 px-4 py-8">
                                <h1>Number {i++}</h1>
                                <h1 className={'text-red-500'}> Pronounce: {item.title}</h1>
                                <h1 className={'text-green-500'}> First Name: {item.firstName}</h1>
                                <h1  className="text-1xl text-blue-500 text-lg  "> Last Name: {item.lastName}</h1>
                               
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export async function getServerSideProps(context){
    const headers = { 'app-id': '64190d3fed8159a1880baab4' };
    let data = [] 
    await fetch('https://dummyapi.io/data/v1/user',{headers})
    .then((response)=> response.json())
    .then((response)=> {
        console.log("wtf")
        data = response.data
        })
        .catch((err)=>{
            console.log(err)
        })

    return{
        props: {
            data: data
            
        }
    }
}