import nc from 'next-connect'
import ErrorHandler from '@/src/handler/error.handler'
import { ProductValidator } from '@/src/validator';
import axios from 'axios';
const handler = nc(ErrorHandler);


handler.post(
    ProductValidator.create,
    async (req, res) => {
      try {
        const headers = { 'app-id': '64190d3fed8159a1880baab4' };
        console.log(typeof(req.body),req.body);
        const body = req.body;
        const [ err, data ] = await axios.post(
            'https://dummyapi.io/data/v1/user/create',
            body,
            { headers }
        )
        .then((res) => {
            return [ null, res.data]
        })
        .catch((err) => {
            return [ err, null]
        })
    

        console.log(data,err);
        // const response = await fetch('https://dummyapi.io/data/v1/user/create', {
        //   method: 'POST',
        //   headers,
        //   body, 
        // });
        // const data = await response.json();
        return res.status(200).json(data);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
      }
    }
  )
  
    

.get( async(req, res) => {
    const headers = { "app-id": "64190d3fed8159a1880baab4" };
   const [err, data] = await fetch('https://dummyapi.io/data/v1/user' , {headers})  
   .then((res )=> res.json())
   .then((result) => {
       return[null, result]
      })
   .catch((err)=>{
      return [err, null]
   })

   if(err){
       return res.status(400).json({
           error: true,
           message: "Ada Error Nih",
           data: null
       })
   }
   return res.status(200).json(data)
})

.delete(async (req, res) => {
    const headers = { "app-id": "64190d3fed8159a1880baab4" };
    const { id } = req.query;
  
    try {
      const response = await fetch(`https://dummyapi.io/data/v1/user/${id}`, {
        headers,
        method: "DELETE",
      });
      const data = await response.json();
      
      return res.status(200).json(data);
    } catch (err) {
      return res.status(400).json({
        error: true,
        message: "Ada Error Nih",
        data: null,
      });
    }
  });
  

export default handler
