import React from "react";
import { useAppContext } from "../hooks/useAppContext";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

const Form = () => {
  const { handleSubmit, register, reset } = useForm();
  const { users, setUsers, setModal } = useAppContext();

  const onSubmit = (data) => {
    data.id = uuidv4();
    if (!data.username || !data.age) {
      setModal({
        open: true,
        message: "Please enter all the information!",
      });
      return;
    } else if (data.age < 1) {
      setModal({
        open: true,
        message: "Please enter a valid age!",
      });
      return;
    }
    setUsers([...users, data]);
    setModal({
      open: false,
      message: "",
    });
    reset();
  };

  return (
    <div className="flex w-full justify-center p-4">
      <div className="card w-96 bg-base-200 shadow-md">
        <form
          className="card-body items-center text-center gap-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="text"
            placeholder="Enter username"
            className="input input-bordered w-full max-w-xs"
            {...register("username")}
          />
          <input
            type="number"
            placeholder="Enter user's age"
            className="input input-bordered w-full max-w-xs"
            {...register("age")}
          />
          <button className="btn btn-accent normal-case">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
