import { Link } from "react-router-dom";
import Auth from "./Auth";
import { useCreateUser } from "../../hooks/useCreateUser";

const Signup = () => {
  const [createUser] = useCreateUser();

  return (
    <Auth
      submitLabel="Signup"
      onSubmit={async ({ email, password }) => {
        await createUser({
          variables: {
            createUserInput: {
              email,
              password,
            },
          },
        });
      }}
    >
      <Link to={"/login"}>Login</Link>
    </Auth>
  );
};

export default Signup;
