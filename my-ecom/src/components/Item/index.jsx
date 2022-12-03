import React from "react";
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Item = ({ info }) => {
	return (
		<Link to={`/detalle/${info.id}`} style={{ textDecoration: 'none' }} className="card">
			<Card sx={{ maxWidth: 345 }}>
				<CardActionArea>
					<CardMedia
						component='img'
						height='350'
						image={info.imagen}
						alt='producto escogido'
					/>
					<CardContent>
						<Typography variant="h6" component="div" noWrap>
						{info.nombre}
						</Typography>
						<Typography variant="h6" component="div" noWrap>
						Precio: ${info.precio}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</Link>				
	);
};

export default Item;