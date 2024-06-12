import React from 'react';

function Page() {
  return (
    <div className="min-h-screen flex flex-col justify-start items-start">
      <div className="w-full h-[72px] px-16 bg-white border-b border-black flex items-center">
        <div className="flex justify-between items-center w-full">
          <div className="h-[27px] flex items-center">
            <div className="w-[63px] h-[27px] relative" />
          </div>
          <div className="flex gap-8">
            <div className="text-black text-base font-normal font-['Roboto']">Discover</div>
            <div className="text-black text-base font-normal font-['Roboto']">Connect</div>
            <div className="text-black text-base font-normal font-['Roboto']">Learn</div>
            <div className="flex items-center gap-1">
              <div className="text-black text-base font-normal font-['Roboto']">More</div>
              <div className="w-6 h-6 relative" />
            </div>
          </div>
          <div className="flex items-center">
            <div className="px-5 py-2 bg-black border border-black flex items-center">
              <div className="text-white text-base font-normal font-['Roboto']">Join</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 px-16 py-28 bg-white flex flex-col gap-20">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <div className="text-center text-black text-base font-semibold font-['Roboto']">Connect</div>
            <div className="flex flex-col gap-6">
              <div className="text-black text-[56px] font-bold font-['Roboto']">Get in Touch</div>
              <div className="text-black text-lg font-normal font-['Roboto']">Have a question or need support? Contact us today!</div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="px-6 py-3 bg-black border border-black flex items-center">
              <div className="text-white text-base font-normal font-['Roboto']">Contact</div>
            </div>
            <div className="px-6 py-3 border border-black flex items-center">
              <div className="text-black text-base font-normal font-['Roboto']">Learn More</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-4">
            <div className="text-black text-base font-semibold font-['Roboto']">Connect</div>
            <div className="flex flex-col gap-6">
              <div className="text-black text-5xl font-bold font-['Roboto']">Get in Touch</div>
              <div className="text-black text-lg font-normal font-['Roboto']">Have any questions or need assistance? We're here to help!</div>
            </div>
          </div>
          <div className="flex gap-12">
            <div className="flex-1 flex flex-col gap-6">
              <div className="w-12 h-12 relative" />
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <div className="text-black text-[32px] font-bold font-['Roboto']">Email</div>
                  <div className="text-black text-base font-normal font-['Roboto']">Send us an email and we'll get back to you promptly.</div>
                </div>
                <div className="text-black text-base font-normal font-['Roboto'] underline">hello@mediconnect.com</div>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-6">
              <div className="w-12 h-12 relative" />
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <div className="text-black text-[32px] font-bold font-['Roboto']">Phone</div>
                  <div className="text-black text-base font-normal font-['Roboto']">Give us a call for immediate assistance or inquiries.</div>
                </div>
                <div className="text-black text-base font-normal font-['Roboto'] underline">+1 (555) 123-4567</div>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-6">
              <div className="w-12 h-12 relative" />
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <div className="text-black text-[32px] font-bold font-['Roboto']">Office</div>
                  <div className="text-black text-base font-normal font-['Roboto']">Visit our office for in-person meetings and discussions.</div>
                </div>
                <div className="text-black text-base font-normal font-['Roboto'] underline">123 Main Street, Anytown, USA</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <div className="text-center text-black text-base font-semibold font-['Roboto']">Connect</div>
            <div className="flex flex-col gap-6">
              <div className="text-black text-5xl font-bold font-['Roboto']">Get in Touch</div>
              <div className="text-black text-lg font-normal font-['Roboto']">Have a question or need assistance? Contact us!</div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <div className="text-black text-base font-normal font-['Roboto']">Name</div>
              <div className="p-3 bg-white border border-black" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-black text-base font-normal font-['Roboto']">Email</div>
              <div className="p-3 bg-white border border-black" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-black text-base font-normal font-['Roboto']">Message</div>
              <div className="h-[180px] p-3 bg-white border border-black flex items-start">
                <div className="text-stone-500 text-base font-normal font-['Roboto']">Write your message</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-[18px] h-[18px] relative bg-white border border-black" />
              <div className="text-black text-sm font-normal font-['Roboto']">I agree to the Terms</div>
            </div>
            <div className="px-6 py-3 bg-black border border-black flex items-center">
              <div className="text-white text-base font-normal font-['Roboto']">Send</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-4">
            <div className="text-center text-black text-base font-semibold font-['Roboto']">Connecting</div>
            <div className="flex flex-col gap-6">
              <div className="text-black text-5xl font-bold font-['Roboto']">Locations</div>
              <div className="text-black text-lg font-normal font-['Roboto']">Find our office locations around the world.</div>
            </div>
          </div>
          <div className="flex gap-16">
            <div className="flex-1 flex flex-col gap-8 items-center">
              <img className="w-[624px] h-96" src="https://via.placeholder.com/624x384" alt="Sydney" />
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <div className="text-black text-[32px] font-bold font-['Roboto']">Sydney</div>
                  <div className="text-black text-base font-normal font-['Roboto']">123 Main St, Sydney NSW 2000, Australia</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-black text-base font-normal font-['Roboto']">Get Directions</div>
                  <div className="w-6 h-6 relative" />
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-8 items-center">
              <img className="w-[624px] h-96" src="https://via.placeholder.com/624x384" alt="New York" />
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <div className="text-black text-[32px] font-bold font-['Roboto']">New York</div>
                  <div className="text-black text-base font-normal font-['Roboto']">456 Elm St, New York, NY 10001, USA</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-black text-base font-normal font-['Roboto']">Get Directions</div>
                  <div className="w-6 h-6 relative" />
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-8 items-center">
              <img className="w-[624px] h-96" src="https://via.placeholder.com/624x384" alt="London" />
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <div className="text-black text-[32px] font-bold font-['Roboto']">London</div>
                  <div className="text-black text-base font-normal font-['Roboto']">789 High St, London WC1V 7AA, UK</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-black text-base font-normal font-['Roboto']">Get Directions</div>
                  <div className="w-6 h-6 relative" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[89px] px-16 py-6 bg-black flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <div className="text-white text-base font-normal font-['Roboto']">© 2023 Mediconnect. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <div className="text-white text-base font-normal font-['Roboto']">Privacy Policy</div>
            <div className="text-white text-base font-normal font-['Roboto']">Terms of Service</div>
            <div className="text-white text-base font-normal font-['Roboto']">Contact Us</div>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <div className="w-6 h-6 relative" />
          <div className="w-6 h-6 relative" />
          <div className="w-6 h-6 relative" />
          <div className="w-6 h-6 relative" />
        </div>
      </div>
    </div>
  );
}

export default Page;
