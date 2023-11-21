import React, { useRef, useState } from 'react'
import { TextField, Button, Modal, Box, Typography, Rating } from '@mui/material';
import { addComment } from '../api/games_request';
const ComponentForm = ({ openModal, setOpenModal ,currentGame,openAlert,setOpenAlert}) => {
  const [value, setValue] = useState(0);
  const commentTextRef = useRef("");
  const commentStarRef = useRef(0);

  function submitComment(e){
    e.preventDefault();
      let commentText = commentTextRef.current.children[1].children[0].value;
      let commentStar = value;

      let comment = {
        text: commentText,
        star: commentStar
      }
      if(currentGame.comments.length ==0){
        currentGame.comments.push(comment);
        addComment(currentGame.id,currentGame);
      }else{
        currentGame.comments[0] = comment;
        addComment(currentGame.id,currentGame);
        
      }
      setOpenModal(false);
      setOpenAlert(true);
      console.log(openAlert);

      

      
  }

  return (
    <Modal open={openModal}


      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 300,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}>

        <Typography id="simple-modal-title" variant="h6" component="h2">
          Comment Form
        </Typography>



        <form onSubmit={(e)=>{submitComment(e)}}>
          <TextField ref={commentTextRef}
            label="Comment text"
            variant="outlined"
            name="firstName"
            fullWidth
            margin="normal"
          />
          <div>
            <Typography component="legend">Give a rate:</Typography>
            <Rating ref={commentStarRef}
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />

          </div>
          <div className='d-flex justify-content-center '>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </div>

          <div className='d-flex justify-content-end '>

            <Button onClick={() => { setOpenModal(false) }}>Close Modal</Button>
          </div>

        </form>



      </Box>
    </Modal>

  )
}

export default ComponentForm