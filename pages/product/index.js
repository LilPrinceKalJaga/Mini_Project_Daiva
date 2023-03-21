import { useState, useEffect } from 'react';
import BackComponent from '../../src/components/back.components';
import { useRouter } from 'next/router';

export default function ProductList() {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [detail, setDetail] = useState([]);
  const router = useRouter();
  

  useEffect(() => {
    setLoading(true);
    const headers = { 'app-id': '64190d3fed8159a1880baab4' };
    fetch(`https://dummyapi.io/data/v1/user?page=${page}&limit=20`, { headers })
      .then((res) => res.json())
      .then((result) => {
        console.log('HASIL FETCH', result);
        setTimeout(() => {
          setData(result.data);
          setLoading(false);
        }, 3000);
        clearTimeout();
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [visible]);

  console.log(loading, 'Loading');

  return (
    <div>
        <BackComponent/>
        
      <h1>Most Wanted List</h1>
      <div className='mt-8 grid-flow-row '>
      <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setPage(page + 1)+ setVisible(!visible)}
                >
                Load More
                </button>

                <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setPage(page - 1)+ setVisible(!visible)}
                >
                Load Less
                </button>

      </div>
                  
      {loading ? (
        <h1>Loading...</h1>
        
      ) : (
        Array.isArray(data) &&
        data.length > 0 &&
        data.map((item) => {
          return (
            
            <button onClick={() => 
              
              router.push(`/product/${item.id}`)
              }>
            <div key={item.id} className="max-w-screen-lg mx-auto mt-8 grid-flow-row">
              <h1 className={'text-red-500'}>id: {item.id}</h1>
              <h1 className={'text-green-500'}>title: {item.title}</h1>
              <h1 className={'text-blue-500'}>first name: {item.firstName}</h1>
              <h1 className={'text-yellow-500'}>last name: {item.lastName}</h1>
              <img src={item.picture} alt={item.firstName} />
            </div>
            </button>
          );
        })
      )}
     
    </div>
  );
}
