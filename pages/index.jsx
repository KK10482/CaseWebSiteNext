import PageLayout from '../components/layout/pageLayout'
import styles from '../styles/Home.module.css'
import { Grid } from '@mui/material';
import homeContent from '../components/static/Static';
import { Box } from '@mui/system';

export default function index() {
  return (
    <PageLayout>
      <Box sx={{ p: 5}}  >
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <homeContent.CaseInfo />
            <homeContent.AboutCase />
          </Grid>
          <Grid item xs={12} md={4}>
            <homeContent.CaseForms />
            <br />
            <homeContent.CaseDocuments />
            <br />
            <homeContent.CaseMilestones />
          </Grid>
        </Grid>
      </Box>
      <br />
    </PageLayout>
  )
}
