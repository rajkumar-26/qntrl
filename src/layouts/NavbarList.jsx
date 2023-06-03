import { Drawer, Box, Accordion, AccordionSummary, Typography, Stack, AccordionDetails } from '@mui/material';
import { useState } from 'react';
import {  ExpandMore } from '@mui/icons-material';

const NavbarList = ({ isOpen }) => {
    const [expanded, setExpanded] = useState(null);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : null);
    };

    return (
        <Drawer
            anchor="bottom"
            open={isOpen}
            transitionDuration={500}
        >
            <Box >  {/* mountOnEnter unmountOnExit */}

                <Box sx={{ height: 'calc(100vh - 56px)', overflow: 'hidden' }}>

                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} >
                        <AccordionSummary expandIcon={<ExpandMore />}>
                            <Typography variant='subtitle1'>Features Tour</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Stack spacing={2} direction='column'>
                                <Typography variant='subtitle2'>Centralization & Visibility</Typography>
                                <Typography variant='subtitle2'>Process Compliance</Typography>
                                <Typography variant='subtitle2'>Workflow-Centric Collaboration</Typography>
                                <Typography variant='subtitle2'>Process Automation</Typography>
                                <Typography variant='subtitle2'>Reports and Dashbords</Typography>
                                <Typography variant='subtitle2'>Process Mapping</Typography>
                                <Typography variant='subtitle2'>Process Extensibility</Typography>
                                <Typography variant='subtitle2'>Designed for Enterprise</Typography>
                                <Typography variant='subtitle2'>All Features</Typography>
                            </Stack>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary expandIcon={<ExpandMore />}>
                            <Typography variant='subtitle1'>Soliutions</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Stack spacing={2} direction='column'>
                                <Typography variant='subtitle2'>Finance</Typography>
                                <Typography variant='subtitle2'>HR</Typography>
                                <Typography variant='subtitle2'>IT</Typography>
                                <Typography variant='subtitle2'>Marketing</Typography>
                                <Typography variant='subtitle2'>Customer Support</Typography>
                                <Typography variant='subtitle2'>IT Low-Code</Typography>
                                <Typography variant='subtitle2'>Procurement</Typography>
                            </Stack>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary>
                            <Typography variant='subtitle1'>Orchestration Gallery</Typography>
                        </AccordionSummary>
                    </Accordion>

                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                        <AccordionSummary >
                            <Typography variant='subtitle1'>Pricing</Typography>
                        </AccordionSummary>
                    </Accordion>

                    <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                        <AccordionSummary expandIcon={<ExpandMore />}>
                            <Typography variant='subtitle1'>Resources</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Stack spacing={2} direction='column'>
                                <Typography variant='subtitle2'>User Guide</Typography>
                                <Typography variant='subtitle2'>Webinars</Typography>
                                <Typography variant='subtitle2'>How To-Video</Typography>
                                <Typography variant='subtitle2'>Tutorials</Typography>
                                <Typography variant='subtitle2'>Short Help-Videos</Typography>
                                <Typography variant='subtitle2'>API Guide</Typography>
                                <Typography variant='subtitle2'>Extension Guide</Typography>
                                <Typography variant='subtitle2'>User Community</Typography>
                                <Typography variant='subtitle2'>Knowledge base</Typography>
                                <Typography variant='subtitle2'>Blog</Typography>
                            </Stack>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} sx={{boxShadow:0,borderWidth:1,borderStyle:'solid',borderColor:'#dcdcdc'}}>
                        <AccordionSummary >
                            <Typography variant='subtitle1'>Our Story</Typography>
                        </AccordionSummary>
                    </Accordion>
                </Box>
            </Box>
        </Drawer>
    );
};

export default NavbarList;

//  <Slide direction="down" in={isOpen} ></Slide>