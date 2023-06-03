import { Box, Drawer, Grid, IconButton, Stack, TextField, TextareaAutosize, Typography, Container, Button } from '@mui/material';
import { useState } from 'react';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import { Close, Send } from '@mui/icons-material';
import qntrl_logo_round2x from '../assets/qntrl_logo_round2x.png'
const Chat = () => {
    const [isOpenChat, setIsOpenChat] = useState(false)
    const [disabeled,setDisabeled] = useState(false)
    return (
        <>
            <IconButton onClick={() => setIsOpenChat(true)} sx={{ position: 'fixed', bottom: 10, right: 10, bgcolor: 'orangered' }}>
                <QuestionAnswerOutlinedIcon sx={{ color: '#fff' }} />
            </IconButton>

            <Drawer
                anchor="bottom"
                open={isOpenChat}
                transitionDuration={500}
                sx={{ position: 'relative' }}>
                <Box>
                    <IconButton onClick={() => setIsOpenChat(false)} sx={{ position: 'absolute', top: 10, right: 10, zIndex: 1255 }}>
                        <Close sx={{ color: '#fff' }} />
                    </IconButton>

                    <Box sx={{ height: 'calc(100vh - 56px)', overflow: 'hidden' }}>
                        <Stack direction='row' spacing={2} sx={{ height: '10%', p: 2, bgcolor: '#3b3b3b', clipPath: 'polygon(0 0,100% 0%, 100% 92%, 0 55%)' }}>
                            <img src={qntrl_logo_round2x} style={{ width: '30px', height: '30px' }} />
                            <Typography variant='h6' sx={{ fontWeight: 600 }}>Chat with us now</Typography>
                        </Stack>

                        <Container>
                            <Grid container rowSpacing={2}>
                                <Grid item xs={12}>
                                    <TextField fullWidth type='text' size='small' placeholder='Enter your Name' />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth type='email' size='small' placeholder='Enter your Email address' />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        multiline
                                        rows={20}
                                        placeholder="Type message and hit Enter"
                                        variant="outlined"
                                        onChange={(e)=>{
                                            let value = e.target.value
                                            if(value.length) setDisabeled(true)
                                            else setDisabeled(false)
                                        }}
                                    />
                                </Grid>
                            </Grid>
                            <Stack  direction='row' justifyContent='flex-end' alignItems='center' sx={{mt:3}}>
                                <Send sx={{color:disabeled?'orangered':'gray',fontWeight:'bold'}}/>
                                <Typography variant='subtitle1' sx={{color:disabeled?'orangered':'gray',fontWeight:'bold'}}>Start Chat</Typography>
                            </Stack>
                        </Container>

                    </Box>

                </Box>
            </Drawer>
        </>
    )
}

export default Chat