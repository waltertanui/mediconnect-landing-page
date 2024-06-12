import React from 'react';

function Page() {
  return (
    <div className="w-full h-full flex flex-col justify-start items-start">
      <div className="w-full h-18 px-4 sm:px-16 bg-white border-b border-black flex justify-between items-center">
        <div className="flex justify-start items-center">
          <div className="w-[63px] h-[27px] relative"></div>
        </div>
        <div className="flex justify-start items-center gap-8">
          <div className="text-black text-base font-normal">Discover</div>
          <div className="text-black text-base font-normal">Connect</div>
          <div className="text-black text-base font-normal">Learn</div>
          <div className="flex justify-center items-center gap-1">
            <div className="text-black text-base font-normal">More</div>
            <div className="w-6 h-6 relative"></div>
          </div>
        </div>
        <div className="flex justify-end items-center">
          <div className="px-5 py-2 bg-black text-white border border-black">Join</div>
        </div>
      </div>
      <div className="w-full py-28 bg-white flex flex-col justify-start items-start px-4 sm:px-16">
        <div className="flex flex-col sm:flex-row justify-between items-start w-full">
          <div className="flex-1 flex-col justify-start items-start gap-6">
            <div className="text-black text-4xl sm:text-5xl font-bold">Frequently Asked Questions</div>
          </div>
          <div className="flex-1 flex-col justify-start items-start gap-6">
            <div className="text-black text-lg">Find answers to common questions about MediConnect and its features.</div>
          </div>
        </div>
      </div>
      <div className="w-full py-28 bg-white flex flex-col justify-start items-center px-4 sm:px-16">
        <div className="flex flex-col justify-start items-center gap-20 w-full">
          <div className="text-center text-black text-3xl sm:text-5xl font-bold">FAQs</div>
          <div className="text-center text-black text-lg">Find answers to common questions about MediConnect and its features.</div>
          <div className="w-full flex flex-col justify-start items-start">
            {[
              "What is MediConnect?",
              "How to join?",
              "Is it free?",
              "How to reset password?",
              "How to delete account?",
            ].map((question, index) => (
              <div key={index} className="w-full py-5 border-b border-black flex justify-between items-center">
                <div className="text-black text-lg font-bold">{question}</div>
                <div className="w-8 h-8 relative"></div>
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-start items-center gap-6 w-full">
            <div className="text-center text-black text-2xl sm:text-3xl font-bold">Still have questions?</div>
            <div className="text-center text-black text-lg">Contact us for further assistance.</div>
            <div className="px-6 py-3 border border-black text-black">Contact</div>
          </div>
        </div>
      </div>
      <div className="w-full py-20 bg-white flex flex-col justify-start items-center px-4 sm:px-16">
        <div className="flex justify-between items-center w-full">
          <div className="flex-1 flex-col justify-start items-start">
            <div className="w-[63px] h-[27px] relative"></div>
          </div>
          <div className="flex justify-start items-start gap-8">
            <div className="text-black text-base font-semibold">About Us</div>
            <div className="text-black text-base font-semibold">Services</div>
            <div className="text-black text-base font-semibold">Contact</div>
            <div className="text-black text-base font-semibold">FAQ</div>
            <div className="text-black text-base font-semibold">Blog</div>
          </div>
          <div className="flex justify-end items-center gap-3">
            {Array(5).fill(0).map((_, index) => (
              <div key={index} className="w-6 h-6 relative"></div>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col justify-start items-center gap-8">
          <div className="w-full h-px bg-black"></div>
          <div className="flex justify-start items-start gap-6">
            <div className="text-black text-sm">© 2024 MediConnect. All rights reserved.</div>
            <div className="flex justify-start items-start gap-6">
              <div className="text-black text-sm underline">Privacy Policy</div>
              <div className="text-black text-sm underline">Terms and Conditions</div>
              <div className="text-black text-sm underline">Cookie Policy</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
