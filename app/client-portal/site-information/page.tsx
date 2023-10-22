import { getServerSession } from "next-auth/next"
import { options } from "@/app/api/auth/[...nextauth]/options";

import ClientPortal_SiteInformation_Details from "@/components/ClientPortal/SiteInformation/SiteDetails";
import ClientPortal_SiteInformation_Documents from "@/components/ClientPortal/SiteInformation/SiteDocuments";

import { getSiteInformation } from "@/services/clientAdministration/siteInformation";

export default async function SiteInformation() {
  const session = await getServerSession(options);

  const clientID = session?.user.client;

  const siteInformation = await getSiteInformation(clientID!);
  
  return (
    <>
      <section className='pl-[335px] pt-[113px] min-h-[1291px]'>
        <div className="p-[50px] pr-0 max-w-[1200px]">
          <h2 className='text-dark font-[800] text-[25px] mb-6'>Site Information</h2>
          <div className="mb-6">
            <ClientPortal_SiteInformation_Details siteDetails={siteInformation.siteDetails}/>
          </div>
          <div className="mb-6">
            <ClientPortal_SiteInformation_Documents siteDocuments={siteInformation.siteDocuments}/>
          </div>
        </div>
      </section>
    </>
  )
}
