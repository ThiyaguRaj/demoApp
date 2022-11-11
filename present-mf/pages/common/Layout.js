import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
	return (
		<div className="flex min-h-screen flex-col relative">
			<div className="">
				<Header />
				<div className="flex flex-1 flex-col bg-white ">
					<div className="">
						<main className="flex">
							<section
								aria-labelledby="primary-heading"
								className="leading-10 break-all flex h-full min-w-0 flex-1 flex-col lg:order-last text-gray-600 py-10 sm:px-40 px-5 max-h-full overflow-y-auto"
							>
								{children}
							</section>
						</main>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Layout;