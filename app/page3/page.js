import React from 'react';

function Page() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Header */}
      <header className="w-full h-[72px] px-16 bg-white border-b border-black flex items-center">
        <div className="flex w-full justify-between items-center">
          <div className="w-16 h-6 bg-gray-200" />
          <nav className="flex gap-8">
            <a href="#discover" className="text-base font-normal text-black">Discover</a>
            <a href="#connect" className="text-base font-normal text-black">Connect</a>
            <a href="#learn" className="text-base font-normal text-black">Learn</a>
            <div className="flex items-center gap-1">
              <a href="#more" className="text-base font-normal text-black">More</a>
              <div className="w-6 h-6 bg-gray-200" />
            </div>
          </nav>
          <button className="px-5 py-2 bg-black text-white">Join</button>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full flex flex-col items-center bg-white">
        {/* Latest Posts Section */}
        <section className="w-full max-w-[1440px] px-16 py-28 flex flex-col gap-20">
          <div className="flex flex-col gap-12">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gray-200" />
              <h2 className="text-base font-normal text-black">Latest Posts</h2>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <span className="px-2 py-1 bg-zinc-100 text-sm font-semibold text-black">Health</span>
                <span className="text-sm font-semibold text-black">5 Minute Read</span>
              </div>
              <h1 className="text-5xl font-bold text-black">The Importance of Mental Health in Healthcare Professionals</h1>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <img src="https://via.placeholder.com/1312x600" alt="Post Image" className="w-full h-[600px] object-cover" />
            <div className="flex justify-between items-start">
              <div className="flex gap-12">
                <div className="flex flex-col gap-2">
                  <span className="text-base font-normal text-black">Written by</span>
                  <span className="text-base font-medium text-black">John Doe</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-base font-normal text-black">Published on</span>
                  <span className="text-base font-medium text-black">22nd January 2021</span>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="p-1 bg-zinc-100 rounded-full"><div className="w-6 h-6 bg-gray-200" /></div>
                <div className="p-1 bg-zinc-100 rounded-full"><div className="w-6 h-6 bg-gray-200" /></div>
                <div className="p-1 bg-zinc-100 rounded-full"><div className="w-6 h-6 bg-gray-200" /></div>
                <div className="p-1 bg-zinc-100 rounded-full"><div className="w-6 h-6 bg-gray-200" /></div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Section */}
        <section className="w-full max-w-[1440px] px-16 py-28 flex flex-col gap-20">
          <div className="flex justify-between">
            <article className="flex flex-col gap-8 max-w-[768px]">
              <h2 className="text-5xl font-bold text-black">Section 2</h2>
              <p className="text-base font-bold text-black">Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.</p>
              <p className="text-base font-normal text-black">Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.</p>
              <h3 className="text-[40px] font-bold text-black">Section 3</h3>
              <p className="text-base font-normal text-black">Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.</p>
              <p className="text-base font-normal text-black">Tristique odio senectus nam posuere ornare leo metus, ultricies. Blandit duis ultricies vulputate morbi feugiat cras placerat elit. Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit accumsan. Cursus viverra aenean magna risus elementum faucibus molestie pellentesque. Arcu ultricies sed mauris vestibulum.</p>
              <h4 className="text-[32px] font-bold text-black">Section 4</h4>
              <p className="text-base font-normal text-black">Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.</p>
              <div className="flex flex-col gap-2">
                <img src="https://via.placeholder.com/768x480" alt="Article Image" className="w-full h-[480px] object-cover" />
                <div className="flex gap-2 items-center">
                  <div className="w-0.5 bg-black h-full" />
                  <span className="text-sm font-normal text-black">Image caption goes here</span>
                </div>
              </div>
              <h5 className="text-2xl font-bold text-black">Section 5</h5>
              <p className="text-base font-normal text-black">Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.</p>
              <blockquote className="flex gap-5 p-5 border-l-4 border-black">
                <p className="text-xl font-normal text-black"> vffvcxvcx</p>
              </blockquote>
              <h6 className="text-xl font-bold text-black">Section 6</h6>
              <p className="text-base font-normal text-black">Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.</p>
            </article>

            {/* Table of Contents */}
            <aside className="w-80 flex flex-col gap-6">
              <h2 className="text-2xl font-bold text-black">Contents</h2>
              <div className="flex flex-col gap-4">
                <a href="#section2" className="px-4 py-3 bg-zinc-100 text-lg font-bold text-black">Section 2</a>
                <a href="#section3" className="px-8 py-3 text-lg font-normal text-black">Section 3</a>
                <a href="#section4" className="px-12 py-3 text-lg font-normal text-black">Section 4</a>
                <a href="#section5" className="px-16 py-3 text-lg font-normal text-black">Section 5</a>
                <a href="#section6" className="px-20 py-3 text-lg font-normal text-black">Section 6</a>
              </div>
            </aside>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="w-full max-w-[1440px] px-16 py-28 bg-white flex flex-col gap-20 items-center">
          <div className="flex flex-col gap-12 items-center">
            <div className="flex justify-between items-center w-full max-w-[768px]">
              <div className="p-3 rounded-full border border-black">
                <div className="w-6 h-6 bg-gray-200" />
              </div>
              <h2 className="text-4xl font-bold text-black">Testimonials</h2>
              <div className="p-3 rounded-full border border-black">
                <div className="w-6 h-6 bg-gray-200" />
              </div>
            </div>
            <div className="flex flex-col gap-12 items-center">
              <h3 className="text-3xl font-bold text-black">This service is amazing!</h3>
              <p className="text-base font-bold text-black text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus eget velit fermentum velit, viverra viverra tortor. Ultrices in faucibus velit nibh lacus.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-gray-200" />
              <div className="flex flex-col gap-2 items-center">
                <span className="text-lg font-bold text-black">Eleanor Pena</span>
                <span className="text-base font-normal text-black">Position, Company</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full h-[80px] px-16 bg-white flex justify-between items-center">
        <div className="w-16 h-6 bg-gray-200" />
        <span className="text-sm font-normal text-black">&copy; 2022 Your Company. All rights reserved.</span>
      </footer>
    </div>
  );
}

export default Page;
