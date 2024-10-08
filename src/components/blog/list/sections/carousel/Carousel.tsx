import React, { useState, useRef } from "react";
import imageData from "./birdsData";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Box, Button, Card, CardMedia, styled } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const initialData = imageData.map((item) => item.image);

export default function Carousel() {
  const imageRef = useRef<HTMLUListElement>(null);
  const [uploadedImages, setUploadedImages] = useState<string[]>(initialData);
  const [images, setImages] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT98jT_P7ucO_2_pZ7OwZnCb9zWCmv1Wy42Gw&s"
  );
  const scrollLeft = () => {
    if (imageRef.current) {
      imageRef.current.scrollBy({
        left: -imageRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (imageRef.current) {
      imageRef.current.scrollBy({
        left: imageRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const handleChange = (item: string) => {
    setImages(item);
  };

  const handleImageUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const file = event.target.files?.[0];
    if (file) {
      const newImageUrl = URL.createObjectURL(file);
      setUploadedImages((prevImages) => [...prevImages, newImageUrl]);
    }
  };

  return (
    <Card sx={{ p: 4, borderRadius: 5, width: 500 }}>
      <Card sx={{ width: 500, height: 290 }}>
        <ImageListItem>
          <CardMedia component="img" image={images} alt="Paella dish" />
        </ImageListItem>
      </Card>
      <Card sx={{ width: 500, display: "flex", mt: 4 }}>
        {
          <Button onClick={scrollLeft}>
            <ArrowBackIosIcon />
          </Button>
        }
        <Box sx={{ width: 380 }}>
          <ImageList
            cols={imageData.length}
            ref={imageRef}
            sx={{ scrollbarWidth: "none", overflow: "hidden" }}
          >
            {uploadedImages
              .filter((item) => item !== images)
              .map((item) => (
                <ImageListItem sx={{ width: 72 }} key={item}>
                  <img
                    onClick={() => handleChange(item)}
                    src={item}
                    loading="lazy"
                    alt={item}
                  />
                </ImageListItem>
              ))}
          </ImageList>
        </Box>
        <Button onClick={scrollRight}>
          <ArrowForwardIosIcon />
        </Button>
      </Card>
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
        sx={{ p: 1, mt: 2, ml: 20 }}
      >
        Upload files
        <VisuallyHiddenInput
          accept="image/png, image/gif, image/jpeg"
          type="file"
          onChange={handleImageUpload}
          multiple
        />
      </Button>
    </Card>
  );
}
