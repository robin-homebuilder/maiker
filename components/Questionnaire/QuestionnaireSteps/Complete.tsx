import Link from "next/link";

export default function Complete() {
  return (
    <>
      <h2 className="text-tertiary text-[25px] font-[800] mb-4">7. Questionnaire Complete</h2>
      <p className="text-dark text-[16px] font-[500] mb-4">We appreciate your time in completing the questionnaire. We will now go through your responses, and you can expect to hear from us within the next 5 business days to discuss further steps.</p>
      <p className="text-dark text-[16px] font-[500] mb-6">A duplicate of your responses will be sent to the email address you have provided.</p>
      <Link href="/">
        <button type="button" className="text-white bg-warning rounded-[20px] text-[16px] shadow-mainShadow font-[600] w-[240px] h-[42px]">Return to Home Page</button>
      </Link>
    </>
  );
};