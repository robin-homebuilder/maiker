import { AuthenticateLoginProps, UserCredentialsProps } from "@/types";

interface LoginProps {
  email: string,
  password: string
}

interface SaveClientCredentialProps {
  data: UserCredentialsProps
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

export async function getUserCredentialByID(id: string){
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/authentication/credential/${id}`, { cache: 'no-store' })

    const credential : UserCredentialsProps = await response.json();

    return credential;
  } catch (error) {
    throw error;
  }
}

export async function saveUserCredential({ data } : SaveClientCredentialProps){
  const body = {
    id: data._id,
    password: data.user_pass
  }

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/authentication/credential`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      cache: "no-store"
    });

    const credential : UserCredentialsProps = await response.json();

    return credential;
  } catch (error) {
    throw error;
  }
}