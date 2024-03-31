import Header from './Header';
import Supabase from '../config/supabaseClient';
import { useEffect, useState } from "react";
import Display from './DisplayFood';  

function Home() {
  const [food, setFood] = useState<any[]>([]);
  const [error, setError] = useState("");
  
  useEffect(() => {
    const fetchFood  = async () => {
      const {data , error} = await Supabase
        .from("food")
        .select()
      if(error){  
        setFood([]);
        console.log();
      }
      else if(data) {
        setError("");
        setFood(data);  
        console.log(data);
      }
    }
    fetchFood();
  } ,[])
    return (
      <>
        <Header />
        <h1>Home</h1>
        <Display foods={food}/>
        
      </>
    );
  }
  
  export default Home;
  