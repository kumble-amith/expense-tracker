import {  useState } from "react";
import Supabase from "../config/supabaseClient";
// import { useNavigate } from "react-router-dom";
interface Props {
  data: string;
}
function NewForm({ data }: Props) {
  // const navigate = useNavigate();
  const toModify = JSON.parse(data)[0];
  if (!toModify) {
    return (
      <>
        <h2>Wait </h2>
      </>
    );
  } else {
    const id = toModify.id;
    const [recipient, setName] = useState(toModify.itemName);
    // const [method, setDescription] = useState(toModify.method);
    const [amount, setRating] = useState(toModify.rating);
    async function handleSubmit() {
      const { data, error } = await Supabase.from("food")
        .update({ recipient, amount })
        .eq("id", id)
      setTimeout(()=>{console.log("Hello")} , 1000 * 5); 
    }
    return (
      <>
        <form action="/" onSubmit={handleSubmit}>
          <input
            type="text"
            name="recipient"
            placeholder="Enter the Person Name"
            required
            value={recipient}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <br />
          {/* <textarea
            name="description"
            rows={10}
            cols={30}
            placeholder="Enter the Recipie"
            required
            value={method}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          /> */}
          <br />
          <input
            type="number"
            name="amount"
            onChange={(e) => setRating(e.target.value)}
            value={amount}
          />
          <input type="submit" value="Submit" />
        </form>
        {/* <h2>Data Got </h2> */}
      </>
    );
  }
}
export default NewForm;
