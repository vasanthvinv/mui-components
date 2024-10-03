import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  Avatar,
  Box,
  CardMedia,
  Chip,
  Grid,
  IconButton,
} from "@mui/material";
import { Comment, Visibility, Share } from "@mui/icons-material";
import { datas } from "./data";

const MultiplePaperRootCards = () => (
  <Grid container spacing={2} justifyContent="center">
    {datas.map((article, index) => (
      <Grid item key={index} xs={12} sm={6} md={4}>
        <Card sx={{ display: "flex", height: "100%" }}>
          <CardContent>
            <Grid
              container
              spacing={1}
              alignItems="center"
              justifyContent="space-between"
            >
              <Grid item>
                <Chip label={article.labelroot} sx={{}} />
              </Grid>
              <Grid item>
                <Typography color="text.secondary" variant="body2">
                  {article.date}
                </Typography>
              </Grid>
            </Grid>
            <Typography variant="h6" gutterBottom>
              {article.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {article.content}
            </Typography>

            <Grid container spacing={1} alignItems="center">
              <Grid item>
                <IconButton size="small">
                  <Comment fontSize="small" />
                  <Typography sx={{ ml: 0.5 }}>
                    {article.data.comments}
                  </Typography>
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton size="small">
                  <Visibility fontSize="small" />
                  <Typography sx={{ ml: 0.5 }}>{article.data.views}</Typography>
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton size="small">
                  <Share fontSize="small" />
                  <Typography sx={{ ml: 0.5 }}>
                    {article.data.shares}
                  </Typography>
                </IconButton>
              </Grid>
            </Grid>
          </CardContent>
          <Box sx={{ position: "relative" }}>
            <CardMedia
              component="img"
              image={article.image}
              alt={article.title}
              sx={{
                height: 200,
                borderRadius: 3,
              }}
            />

            <Avatar
              src={article.avatarUrl}
              sx={{
                position: "absolute",
                top: 10,
                right: 10,
                width: 50,
                height: 50,
                border: "2px solid white",
              }}
            />
          </Box>
        </Card>
      </Grid>
    ))}
  </Grid>
);

export default MultiplePaperRootCards;
