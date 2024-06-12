import React from 'react';

function Page() {
  return (
    <div className="w-full min-h-screen flex flex-col items-start">
      <div className="w-full h-18 px-4 bg-white border-b border-black flex items-center">
        <div className="flex justify-between items-center w-full">
          <div className="h-7 w-16"></div>
          <div className="flex space-x-8">
            <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Discover</div>
            <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Connect</div>
            <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Learn</div>
            <div className="flex items-center space-x-1">
              <div className="text-black text-base font-normal font-['Roboto'] leading-normal">More</div>
              <div className="w-6 h-6"></div>
            </div>
          </div>
          <div className="flex items-center">
            <button className="px-5 py-2 bg-black border border-black text-white text-base font-normal font-['Roboto']">Join</button>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-start px-4 py-14 bg-white">
        <div className="flex flex-col md:flex-row items-start justify-between w-full gap-20">
          <div className="flex flex-col gap-4">
            <div className="text-center text-black text-base font-semibold font-['Roboto']">Discover</div>
            <div className="text-black text-4xl font-bold font-['Roboto']">Hear from Our Clients</div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="text-black text-lg font-normal font-['Roboto']">Read what our clients have to say about their experience with MediConnect. We take pride in providing a platform that connects healthcare professionals and empowers them to excel in their careers.</div>
            <div className="flex space-x-4">
              <button className="px-6 py-3 bg-black border border-black text-white text-base font-normal font-['Roboto']">Learn More</button>
              <button className="px-6 py-3 border border-black text-black text-base font-normal font-['Roboto']">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center px-4 py-14 bg-white">
        <div className="flex flex-col items-center gap-12 w-full">
          <div className="flex justify-between items-center w-full">
            <button className="p-3 rounded-full border border-black"></button>
            <div className="flex flex-col items-center gap-8">
              <div className="text-center text-black text-2xl font-bold font-['Roboto']">MediConnect has revolutionized the way I connect with other healthcare professionals. The platform has provided me with valuable networking opportunities and access to a wealth of medical knowledge.</div>
              <div className="flex items-center space-x-5">
                <img className="w-14 h-14 rounded-full" src="https://via.placeholder.com/56x56" alt="Profile" />
                <div className="flex flex-col">
                  <div className="text-black text-base font-semibold font-['Roboto']">Dr. Emily Johnson</div>
                  <div className="text-black text-base font-normal font-['Roboto']">Cardiologist, ABC Hospital</div>
                </div>
              </div>
            </div>
            <button className="p-3 rounded-full border border-black"></button>
          </div>
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-black rounded-full"></div>
            <div className="w-2 h-2 bg-stone-300 rounded-full"></div>
            <div className="w-2 h-2 bg-stone-300 rounded-full"></div>
            <div className="w-2 h-2 bg-stone-300 rounded-full"></div>
            <div className="w-2 h-2 bg-stone-300 rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center px-4 py-14 bg-white">
        <div className="flex flex-col items-center gap-8">
          <div className="text-center text-black text-2xl font-bold font-['Roboto']">MediConnect has been a game-changer for me. The networking opportunities it provides have allowed me to connect with professionals from all over the world, expanding my knowledge and skillset.</div>
          <div className="flex flex-col items-center gap-4">
            <img className="w-14 h-14 rounded-full" src="https://via.placeholder.com/56x56" alt="Profile" />
            <div className="text-center text-black text-base font-semibold font-['Roboto']">Dr. Emily Johnson</div>
            <div className="text-center text-black text-base font-normal font-['Roboto']">Chief Medical Officer</div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center px-4 py-14 bg-white">
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-20">
          <img className="w-full md:w-1/2 h-auto" src="https://via.placeholder.com/616x640" alt="Placeholder" />
          <div className="flex flex-col gap-8">
            <div className="text-black text-2xl font-bold font-['Roboto']">MediConnect has truly revolutionized the way healthcare professionals connect and collaborate. It has made networking and knowledge sharing seamless and efficient.</div>
            <div className="flex items-center space-x-5">
              <div className="flex flex-col">
                <div className="text-black text-base font-semibold font-['Roboto']">John Doe</div>
                <div className="text-black text-base font-normal font-['Roboto']">Doctor, ABC Hospital</div>
              </div>
              <div className="w-16 h-0 border-t border-black rotate-90"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-start px-4 py-14 bg-white">
        <div className="flex flex-col gap-6">
          <div className="text-black text-4xl font-bold font-['Roboto']">Hear from our satisfied users</div>
          <div className="text-black text-lg font-normal font-['Roboto']">Discover how MediConnect has transformed their professional lives</div>
        </div>
        <div className="flex space-x-4">
          <button className="px-6 py-3 bg-black border border-black text-white text-base font-normal font-['Roboto']">Share</button>
          <button className="px-6 py-3 border border-black text-black text-base font-normal font-['Roboto']">Sign Up</button>
        </div>
      </div>
      <div className="w-full flex flex-col items-center px-4 py-10 bg-white">
        <div className="flex justify-between items-center w-full">
          <div className="flex space-x-8">
            <div className="text-black text-base font-semibold font-['Roboto']">About Us</div>
            <div className="text-black text-base font-semibold font-['Roboto']">Services</div>
            <div className="text-black text-base font-semibold font-['Roboto']">Contact</div>
            <div className="text-black text-base font-semibold font-['Roboto']">FAQ</div>
            <div className="text-black text-base font-semibold font-['Roboto']">Blog</div>
          </div>
          <div className="flex space-x-3">
            <div className="w-6 h-6"></div>
            <div className="w-6 h-6"></div>
            <div className="w-6 h-6"></div>
            <div className="w-6 h-6"></div>
            <div className="w-6 h-6"></div>
          </div>
        </div>
        <div className="w-full border-t border-black mt-8"></div>
        <div className="flex justify-between items-center w-full mt-8">
          <div className="text-black text-sm font-normal font-['Roboto']">© 2024 MediConnect. All rights reserved.</div>
          <div className="flex space-x-6">
            <div className="text-black text-sm font-normal font-['Roboto'] underline">Privacy Policy</div>
            <div className="text-black text-sm font-normal font-['Roboto'] underline">Terms and Conditions</div>
            <div className="text-black text-sm font-normal font-['Roboto'] underline">Cookie Policy</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
