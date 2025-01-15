import {Link, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import PostId from "./pages/PostId.jsx";
import { Container} from '@mui/system';


const AppRouter = () => {
	return (
			<>
				<header className='header'>
					<Container maxWidth="xl" 
								>
					<nav>
						<Link to="/">Home</Link>
					</nav>
					</Container>
				</header>
				<Routes>
					<Route path='/' element={<Home/>}/>
					<Route path='/posts/:postId' element={<PostId/>}/>
				</Routes>
			</>
	);
};

export default AppRouter;