import { useForm } from "react-hook-form";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleClearClick = () => {
    reset();
  };

  const handleSubmitForm = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <label>
        Name <input type="text" {...register("name", { required: true })} />
      </label>
      <br />
      <label>
        Age <input type="text" {...register("age", { required: true })} />
      </label>
      <br />
      <label>
        Address{" "}
        <input type="text" {...register("address", { required: true })} />
      </label>
      <br />
      <label>
        Zipcode{" "}
        <input type="text" {...register("zipcode", { required: true })} />
      </label>
      <br />
      <label>
        Phone <input type="text" {...register("phone", { required: true })} />
      </label>
      <br />
      <div>
        <button onClick={handleClearClick}>Clear</button>
        <button typ="submit">Submit</button>
      </div>
    </form>
  );
};

export default SignupForm;
