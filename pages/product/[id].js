import React from 'react'
import BackComponent from '../../src/components/back.components'
import { useState, useEffect } from 'react';




export default function ProductDetail(props){

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    useEffect(() => {
        setLoading(true);
        const headers = { 'app-id': '64190d3fed8159a1880baab4' };
        fetch(`https://dummyapi.io/data/v1/user/${props.id}`, { headers })
          .then((res) => res.json())
          .then((result) => {
            console.log('HASIL FETCH', result);
            setTimeout(() => {
              setData(result);
              setLoading(false);
            }, 3000);
            clearTimeout();
          })
          .catch((err) => {
            setLoading(false);
          });
      },[])


    console.log('props', props)
    props?.id
    props?.firsName
    props?.lastName
    props?.email
    props?.phone
    return (
        
        <div>
            <BackComponent/>
            <h1 className="bg-red-500">Product Details : {props?.id}  </h1>
            <h1 className="bg-red-500">First Name  : {data?.firstName}</h1>
            <h1 className="bg-red-500">Last Name : {data?.lastName}</h1>
            <h1 className="bg-red-500">Email : {data?.email}</h1>
            <h1 className="bg-red-500">Phone Number : {data?.phone}</h1>
            <h1 className='bg-red-500'>City : {data?.location?.city}</h1>
        </div>
    )
}

export async function getServerSideProps(context){
    console.log('context', context)
    let  { id } = context.params
    context.params?.id
    console.log('params',id)
    
    return{
        props: {
            id
        }
    }
}