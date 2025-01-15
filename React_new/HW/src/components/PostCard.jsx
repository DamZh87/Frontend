import React from 'react';
import {Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import {useNavigate} from "react-router-dom";
import { height } from '@mui/system';
import { Height } from '@mui/icons-material';

const PostCard = ({id, title, description}) => {
	const navigate = useNavigate();

	const handleRedirect = () => {
		navigate(`/posts/${id}`);
	}

	return (
		

				<Card
				sx={{
					height: '12rem',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					boxShadow: '0px 5px 10px 2px rgba(34, 60, 80, 0.2)',
					transition: 'transform .3s ease-in-out',
					":hover": {
						transform: 'scale(1.02)',
						}
				}}
				>	
				<CardContent >
					<Typography variant="h5" component="div">
						{title}
					</Typography>
					<Typography variant="body2">
						{description}
					</Typography>
				</CardContent>
				<CardActions>
					<Button
							onClick={handleRedirect}
							sx={{width: '100%'}}
							variant='contained'
					>
						Читать
					</Button>
				</CardActions>
			</Card>
			
		
	);
};

export default PostCard;