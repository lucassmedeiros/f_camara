import { toast } from "react-toastify";

import * as React from "react";
import authApi from "../services/authApi";
import { createContext, useCallback, useState } from "react";
import { message } from "../messages/index";

export interface SignInCredentials {
  username: string;
  password: string;
}

interface AuthContextProps {
  isAuthLoading: boolean;
  token: string;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  data: DataState;
}

interface DataState {
  email: string;
  firstName: string;
  gender: string;
  id: number;
  image: string;
  lastName: string;
  token: string;
  username: string;
}

interface SignInResponse {
  email: string;
  firstName: string;
  gender: string;
  id: number;
  image: string;
  lastName: string;
  token: string;
  username: string;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [isAuthLoading, setIsAuthLoading] = useState(false);
  const [data, setData] = useState<DataState>(() => {
    const session = localStorage.getItem("@fcamara:session");
    return JSON.parse(session as string) ?? {};
  });

  const signIn = useCallback(
    async ({ username, password }: SignInCredentials) => {
      try {
        setIsAuthLoading(true);
        const { data: loginData } = await authApi.post<SignInResponse>(
          "auth/login",
          {
            username,
            password,
          }
        );

        localStorage.setItem("@fcamara:token", JSON.stringify(loginData.token));
        localStorage.setItem(
          "@fcamara:username",
          loginData?.username.toString()
        );
        localStorage.setItem("@fcamara:session", JSON.stringify(loginData));

        toast(message("messages.welcome"), {
          type: "success",
        });
        setData({ ...loginData });
      } catch (err: any) {
        if (
          err.response.status === 400 ||
          err.response.status === 401 ||
          err.response.status === 404
        ) {
          toast(message("messages.invalidNameOrPassword"), {
            type: "error",
          });
        } else {
          toast(message("messages.somethingWentWrong"), {
            type: "error",
          });
        }
      } finally {
        setIsAuthLoading(false);
      }
    },
    []
  );

  const signOut = useCallback(() => {
    localStorage.clear();
    setData({} as DataState);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthLoading,
        token: data.token,
        data,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextProps {
  const context = React.useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context as never;
}

export { useAuth, AuthProvider };
