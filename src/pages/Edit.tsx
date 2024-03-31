import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Supabase from "../config/supabaseClient";
import NewForm from './NewForm';
function Edit() {
  const {id} = useParams();
  const [formError , setFormError] = useState("");
  const [formData , setFormData]  = useState<any[]>([]);
  useEffect(() => {
    const fetchFood = async () => {
      const {data , error} = await Supabase
        .from("food")
        .select()
        .eq("id" , id)
      if(error){
        setFormError(JSON.stringify(error));
        setFormData([]);
        return;
      }else{
        setFormError("");
        setFormData(data);
      }
    }
    fetchFood();
  },[])
  return (
    <>
      {formError && <span> { formError} </span>}
       
      {/* <NewForm /> */}
      {formData && <NewForm  data= {JSON.stringify(formData)}/>}
    </>
  );
}

export default Edit;
