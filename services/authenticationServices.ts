import { AuthenticateLoginProps } from "@/types";

interface LoginProps {
  email: string,
  password: string
}

export async function login({ email, password } : LoginProps){
  const body = {
    email,
    password
  }

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/authentication/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      cache: "no-store"
    });

    const credential : AuthenticateLoginProps = await response.json();

    return credential;
  } catch (error) {
    console.error('Error while creating payment intent:', error);
    throw error;
  }
}