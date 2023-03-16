import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box, Button, Link, Modal, Typography } from '@mui/material';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
const arrayRange = (start, stop, step) =>
  Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
  );


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width:{xs:"100%",lg:"50%"},
    bgcolor: 'background.paper',
   
    boxShadow: 20,
    p: 2,
  };
export default function Imagelist() {
    const [img,setImg] = React.useState(null)
    const [open, setOpen] = React.useState(false);
    
    const handleClose = () => setOpen(false);

  return (
   <Box>
   <Typography  color={'whitesmoke'} bgcolor="#2196f3" textAlign="center" mt={2} p={2} border="1px solid #2196f3" sx={{fontFamily:"-moz-initial",fontSize:{xs:20,md:30,lg:40}}}>Gallery</Typography>
  
   <Modal
   open={open}
   onClose={handleClose}
   aria-labelledby="modal-modal-title"
   aria-describedby="modal-modal-description"
 >
   <Box sx={style}>
   <TransformWrapper>
   <TransformComponent>
   <img src={img} alt="img" />
   <Button variant='contained' size='small' sx={{m:"auto",my:1}} href={img} download> Download image</Button>
   </TransformComponent>
 </TransformWrapper>
   
     
   </Box>
 </Modal>
   <ImageList
   sx={{ width: "100%", height: "100%" }}
   variant="standard"
   cols={3}
   
 >
   {arrayRange(1455, 1544, 1).map((item,i) => (
     <ImageListItem key={i}  >
       <img
        src= {require(`../assets/IMG_${item}.JPG`)}
         alt={item.title}
         loading="lazy"
         onClick={()=>{setOpen(true);setImg(require(`../assets/IMG_${item}.JPG`))}}
         style={{filter:"drop-shadow(8px 8px 10px gray)"}}
       />
     </ImageListItem>
   ))}
 </ImageList>
   </Box>
  );
}

