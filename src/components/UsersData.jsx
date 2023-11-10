import { useAppContext } from "../hooks/useAppContext";

const UsersData = () => {
  const { users } = useAppContext();

  if (users.length > 0) {
    return (
      <div className="w-[90%] md:w-[25%] flex flex-col gap-4 mx-auto">
        {users.map((user) => (
          <div
            className="bg-gray-100 flex items-center font-bold text-2xl rounded-lg shadow-md p-4"
            key={user.id}
          >
            {user.username}({user.age} years old)
          </div>
        ))}
      </div>
    );
  }
};

export default UsersData;
