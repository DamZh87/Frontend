import React, {useEffect, useState} from 'react';
import {Grid, Typography} from "@mui/material";
import PostCard from "./PostCard.jsx";
import {instance} from "../api/instance.js";
import Loader from "./Loader.jsx";
import { Container} from '@mui/system';

const PostsList = () => {
	const [posts, setPosts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		instance.get('/posts')
				.then((res) => {
					setPosts(res.data)
					setIsLoading(false)
				})
	}, []);

	if (isLoading) {
		return <Loader/>
	}

	return (
		<Container maxWidth="xl" 
				   sx={{
					margin: '0 auto',
					backgroundImage: 'url(/img/bg.png)',
					zIndex:"0"
				   }}
					>
			<Grid sx={{
				
				
			}} container spacing={3}>
				{posts?.map(({id, title}) => (
						<Grid key={id} item md={4}>
							<PostCard 
									id={id}
									title={title}
									description={''}
							/>
						</Grid>
				))}
			</Grid>
			</Container>
	);
};

export default PostsList;