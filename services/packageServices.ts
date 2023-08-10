"use server";

import { PackageProps } from "@/types";

type Slug = {
  slug: string
}

export async function getPackageBySlug({ slug } : Slug){
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/package/${slug}`, { cache: 'no-store' })

    const packageData : PackageProps = await response.json();

    return packageData;
  } catch (error) {
    console.error('Error while creating payment intent:', error);
    throw error;
  }
}