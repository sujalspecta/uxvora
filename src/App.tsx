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
		
		element: (
			<Wrapper>
				<Outlet /> 
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
]);

function App() { 
	
	return <RouterProvider router={router} />;
}

export default App;
