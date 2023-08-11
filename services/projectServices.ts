// "use server";
import { ProjectProps } from "@/types";

export async function getProjectsData(){
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/projects`, { cache: 'no-store' })

    const projects : ProjectProps[] = await response.json();

    return projects;
  } catch (error) {
    console.error('Error while creating payment intent:', error);
    throw error;
  }
}

export async function getPastProjectsData(){
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/projects/pasts`, { cache: 'no-store' })

    const projects : ProjectProps[] = await response.json();
    
    return projects;
  } catch (error) {
    console.error('Error while creating payment intent:', error);
    throw error;
  }
}