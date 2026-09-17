import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; 
import Wrapper from "./layouts/Wrapper";
import HomeOne from "./components/homes/home-1";
import Aboutus from "./components/about-us";
import NotFound from "./error";
import Service from "./components/service";
import Portfolio from "./components/portfolio";
import Team from "./components/team";
import Faq from "./components/faq";
import Pricing from "./components/pricing";
import Blog from "./components/blog";
import Contactus from "./components/contact-us";
import SingleService from "./components/single-service";
import SinglePortfolio from "./components/single-portfolio";
import SingleBlog from "./components/single-blog";

const router = createBrowserRouter([
	{
		// 1. Define a parent route with your layout
		element: (
			<Wrapper>
				<Outlet /> {/* This is where the matching child pages will render */}
			</Wrapper>
		),
		children: [
			{ path: "/", element: <HomeOne /> },  
			{ path: "/about-us", element: <Aboutus /> }, 
			{ path: "/service", element: <Service /> }, 
			{ path: "/portfolio", element: <Portfolio /> }, 
			{ path: "/team", element: <Team /> }, 
			{ path: "/faq", element: <Faq /> }, 
			{ path: "/pricing", element: <Pricing /> }, 
			{ path: "/blog", element: <Blog /> }, 
			{ path: "/contact-us", element: <Contactus /> }, 
			{ path: "/single-service", element: <SingleService /> }, 
			{ path: "/single-portfolio", element: <SinglePortfolio /> }, 
			{ path: "/single-blog", element: <SingleBlog /> },  
			{ path: "*", element: <NotFound /> },
		]
	}
	
]
);

function App() { 
	// 2. Return ONLY the RouterProvider at the root level
	return <RouterProvider router={router} />;
}

export default App;
