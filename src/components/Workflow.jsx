import { Box, Card, CardContent, Container, Stack, Typography } from '@mui/material'
import Carousel from 'react-material-ui-carousel';
import { makeStyles } from '@mui/styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Grid from '@mui/material/Unstable_Grid2/Grid2';


const contents = [
  {
    title: 'Centralization & Visibility',
    subtitle: 'Centralized requests, Unparalleled visibility',
    description: 'Centralize the requests coming to your team. You can even use our API to create requests from other systems automatically. Everything that needs to be done, by whom and when it\'s due, is captured in Qntrl. Provide your team members with a quick view of the status of all items.',
  },
  {
    title: 'Process Compliance',
    subtitle: 'Ensure execution standards',
    description: "Qntrl puts an unprecedented level of granular control in your hands. You decide who's responsible for executing what parts of the process, and you control how tasks are assigned. You also control what rules to put in, and how to execute process checks through your workflow.",
  },
  {
    title: 'Workflow-Centric Collaboration',
    subtitle: 'Collaboration: when you need it, where you need it',
    description: "You'll have everything you need related to a particular request, right on your screen, where you need it. And when you're done, you can let your teammates know through any chat app. Conversation logs provide insights into the conversations that take place around a particular task.",
  },
  {
    title: 'Process Automation',
    subtitle: 'Make repetitive manual work a thing of the past',
    description: 'Send the email. Update the CRM. Decide the small things. Qntrl provides numerous ways to automate your processes, including automated workflow steps, auto-assignment of tasks, sending notifications through email, and automatic document and PDF generation, just to name a few.',
  },
  {
    title: 'Reports and Dashboards',
    subtitle: 'Improve your operational KPIs',
    description: "Qntrl helps you keep an eye on the most important metrics for your business, using built-in reports like blueprint duration chart, stage utilization chart, and blueprint usage report. You can also generate and schedule your own reports. Plus, SLA reminders help you stay compliant.",
  },
  {
    title: 'Process Mapping',
    subtitle: 'Orchestrate, Visually',
    description: 'Visual and intuitive process mapping gets you started designing your process in no time. Decide what forms should kick-start your process, and what fields to include. Our workflow designer also includes advanced features like parallel transitions and common states.',
  },
  {
    title: 'Process Extensibility',
    subtitle: 'Make Qntrl even more powerful',
    description: "Extend Qntrl's functionality or connect it to other systems in your organization. APIs, custom functions, client and server script are some of the options that will help you finish tailoring Qntrl to your exact needs. We also have a gallery of ready-made third-party integrations.",
  },
  {
    title: 'Designed for Enterprise',
    subtitle: 'Enterprise Security',
    description: "Field access privileges, encryption and field masks, role-based access controls, and encrypted file storage keep your sensitive information safe. Audit capabilities help you figure out who did what and when, while built-in Active Directory integration help you manage users effortlessly.",
  }
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  carouselImage: {
    width: '100%',
    height: '355px',
  },
}));

const Workflow = () => {
  const classes = useStyles();

  return (
    <>
      <Box sx={{ width: '100%', minHeight: 'calc(97vh - 56px)', bgcolor: '#3b3b3b', overflow: 'hidden', pt: 3 }} >

        <Stack direction='column' spacing={3} alignItems='center'>
          <Grid container rowSpacing={1}>
            <Grid xsOffset={2} xs={8}>
              <Typography variant='h6' sx={{ color: '#fff', textAlign: 'center' }}>Take a look at Qntrl</Typography>
            </Grid>
            <Grid xsOffset={2} xs={8}>
              <Typography variant='subtitle2' sx={{ color: '#fff', textAlign: 'center' }}>Qntrl is the world's #1 Workflow Orchestration Software. See why.</Typography>
            </Grid>
          </Grid>

          <Container>
            <Carousel
              index={0}
              autoPlay={false}
            >
              {contents.map((content, index) => (
                <Box key={index}>

                  <Stack direction='row'
                    sx={{ display: 'flex', justifyContent: 'center', borderBottom: '2px solid gray', mb: 3 }}>
                    <Typography variant='subtitle1' sx={{ color: 'orangered' }}>{content.title}</Typography>
                  </Stack>

                  <Card sx={{ borderRadius: 2 }} className={classes.carouselImage}>
                    <CardContent>
                      <Stack spacing={2} direction='column' sx={{ borderRadius: 2 }} className={classes.carouselImage}>
                        <Typography variant='subtitle1'>{content.title}</Typography>
                        <Typography variant='h6'>{content.subtitle}</Typography>
                        <Typography variant='body2'>{content.description}</Typography>
                        <Stack direction="row" alignItems="center" gap={1} >
                          <Typography variant="subtitle1" sx={{ color: 'orangered' }}>Explore all</Typography>
                          <ArrowForwardIosIcon fontSize='inherit' sx={{ color: 'orangered' }} />
                        </Stack>
                      </Stack>
                    </CardContent>
                  </Card>

                </Box>
              ))}
            </Carousel>
          </Container>
        </Stack>
      </Box>
    </>
  )
}

export default Workflow