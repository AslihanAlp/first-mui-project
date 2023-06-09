import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from "@mui/material";
import { Favorite, MoreVert, Share, FavoriteBorder } from "@mui/icons-material";
import { useState } from "react";
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"

const photoData = [
  {
    id: 1,
    imgUrl: "https://unsplash.com/photos/lsoogGC_5dg/download?force=true",
    title:"John J.",
    subheader:"September 14, 2023",
    comment: "Sunset.."
  },
  {
    id: 2,
    imgUrl: img3,
    title: "Teressa Rose",
    subheader: "September 14, 2023",
    comment: "No filter Yes Nature"
  },
  {
    id:3,
    imgUrl: img2,
    title:"Sung Wang",
    subheader:"September 14, 2023",
    comment:"Good Mornin'"
   
  }
];

const Post = () => {

  const [photos] = useState(photoData);

  return (
    <>
      {photos.map((photo) => (
        <Card key={photo.id} sx={{ margin: 5 }}>
          <CardHeader
            avatar={<Avatar aria-label="photos"/>}
            action={
              <IconButton aria-label="settings">
                <MoreVert />
              </IconButton>
            }
            title={photo.title}
            subheader={photo.subheader}
          />
          <CardMedia component="img" height="350" style={{objectFit: 'cover', height: "100%"}} src={photo.imgUrl} alt="Photo" />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {photo.comment}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: 'red' }} />} />
            </IconButton>
            <IconButton aria-label="share">
              <Share />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </>
  );
};

export default Post;