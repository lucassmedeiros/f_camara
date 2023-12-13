import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SignInCredentials, useAuth } from "../../context/AuthContext";
import { loginSchema } from "./validator";

type UnitData = z.infer<typeof loginSchema>;

export const useLogin = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    } as SignInCredentials,
  });

  const { signIn } = useAuth();

  const onSubmit = (data: UnitData) => {
    signIn(data);
  };

  return { onSubmit, handleSubmit, control, errors };
};
