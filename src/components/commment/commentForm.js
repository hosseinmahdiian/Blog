import { useMutation } from "@apollo/client";
import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { SEND_COMMENT } from "../../graphQL/Muttations";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Comments from "./Coments";

const CommentForm = ({ slug }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const [sendComment, { data, loading, error }] = useMutation(SEND_COMMENT, {
    variables: { name, email, text, slug },
  });

  const sendHandler = () => {
    if (name && email && text) {
      console.log(data);
      sendComment();
    } else {
      toast.warn("کادر ها را کامل کنید ", { position: "top-center" });
    }
  };

  if (data) {
    toast.success("کامنت ارسال شد و منتظر تایید می باشد", {
      position: "top-center",
    });
  }

  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
        borderRadius: 4,
        py: 1,
        mt: 5,
      }}
    >
      <Grid item xs={12} m={2}>
        <Typography component="p" variant="h5" fontWeight={700} color="primary">
          ارسال نظر
        </Typography>
        <TextField
          label="نام کاربری"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ width: "100%", marginTop: 4 }}
        />
        <TextField
          label="نام ایمیل"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ width: "100%", marginTop: 4 }}
        />
        <TextField
          label="متن نظر"
          variant="outlined"
          value={text}
          onChange={(e) => setText(e.target.value)}
          sx={{ width: "100%", marginTop: 4 }}
          multiline
          minRows={4}
        />
        {loading ? (
          <Button variant="contained" disabled sx={{ mt: 2 }}>
            ارسال...
          </Button>
        ) : (
          <Button variant="contained" sx={{ mt: 2 }} onClick={sendHandler}>
            ارسال
          </Button>
        )}
      </Grid>
      <ToastContainer />
      <Grid item xs={12}>
        <Comments slug={slug}/>
      </Grid>
    </Grid>
  );
};

export default CommentForm;
