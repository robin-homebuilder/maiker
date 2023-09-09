import { ClientBriefProps, ClientOwnerProps, MailAddressProps, ProjectInformationOneProps, ProjectInformationTwoProps, SiteAddressProps } from "@/types";

type questionnaireProps = {
  step1Data: ClientOwnerProps[] | null,
  step2Data: MailAddressProps | null,
  step3Data: SiteAddressProps | null,
  step4Data: ProjectInformationOneProps | null,
  step5Data: ProjectInformationTwoProps | null,
  step6Data: ClientBriefProps | null,
}

export async function processQuestionnaire({ step1Data, step2Data, step3Data, step4Data, step5Data, step6Data} : questionnaireProps){
  try {
    const formData = new FormData();
    formData.append("client_information", JSON.stringify(step1Data));
    formData.append("mail_address", JSON.stringify(step2Data));
    formData.append("site_address", JSON.stringify(step3Data));
    formData.append("project_information_one", JSON.stringify(step4Data));
    formData.append("project_information_two", JSON.stringify(step5Data));
    formData.append("client_brief", JSON.stringify(step6Data));

    if (step4Data?.files) {
      for (let i = 0; i < step4Data.files.length; i++) {
        const file = step4Data.files[i];
        formData.append(`files`, file);
      }
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/questionnaire`, {
      method: 'POST',
      body: formData,
      cache: "no-store"
    });

    return 1;
  } catch (error) {
    console.error('Error while creating payment intent:', error);
    throw error;
  }
}