import React from "react";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit } = useForm() 

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
    <h4 style={{textAlign:"center"}}>File upload using React HoC Concepts</h4>
    <form style={{textAlign:"center"}} onSubmit={handleSubmit(onSubmit)}>
      <input ref={register} type="file" name="picture" />
      <button>Submit</button>
    </form>
    </>
  );
}

export default App;
