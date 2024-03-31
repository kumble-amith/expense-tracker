import { FormEvent, useState } from "react";
import Supabase from "../config/supabaseClient";
import { useNavigate } from "react-router-dom";
// interface Props {
//   itemName: string;
//   description: string;
//   rating: number;
// }
function Create() {
  const navigate = useNavigate();

  const [recipient, setName] = useState("");
  // const [method, setDescription] = useState("");
  const [amount, setRating] = useState(0);

  // const [total, setTotal] = useState<Props[]>([]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const { data, error } = await Supabase
      .from("food")
      .insert([
      { recipient, amount },
    ]);
    
    if (error) {
      console.log(error);
      alert(error);
    }else {
      
      navigate("/");
    }
    
    setName("");
    setRating(0);
  }
  return (
    <>
      <h1>Create Your Recipie </h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter the Person Name"
          required
          value={recipient}
        />
        <br />
        {/* <textarea
          name="description"
          cols={30}
          rows={10}
          required
          placeholder="Enter the Food Description"
          onChange={(e) => setDescription(e.target.value)}
          value={method}
        ></textarea> */}
        <br />
        <input
          type="number"
          placeholder="Enter the Amount"
          onChange={(e) => setRating(parseInt(e.target.value))}
          required
          value={amount}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Create;
