import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";
import { fetchFromApi } from "../utils/fetchFromApi";
const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);
  return (
    <Box minHeight="95vh">
      <Box>
        <ChannelCard channelDetail={channelDetail} />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "50px" } }} />
        <Videos videos={videos}></Videos>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
