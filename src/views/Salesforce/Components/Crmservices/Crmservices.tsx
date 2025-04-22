import React, { JSX, useState } from 'react';
import { useTheme, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Grow from '@mui/material/Grow';
import { keyframes } from '@mui/system';
import { Theme } from '@mui/material/styles';

// Keyframe animation for the border effect
const borderAnimation = keyframes`
  0% {
    background-position: 0% 50%, 100% 50%, 50% 0%, 50% 100%;
  }
  50% {
    background-position: 0% 0%, 100% 100%, 0% 50%, 100% 50%;
  }
  100% {
    background-position: 0% 0%, 100% 0%, 0% 100%, 100% 100%;
  }
`;

// Keyframe animation for floating effect
const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
`;

const pulseAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

type ProductDetails = {
  features: string[];
  description?: string;
};

type Product = {
  image: string;
  description: string;
  title: string;
  details: ProductDetails;
  customContent?: (theme: Theme) => JSX.Element;
};

const mock: Product[] = [
  {
    image:
      'https://whatfix.com/blog/wp-content/uploads/2023/07/AI-and-customer-support.png',
    description:
      'Upgrade Your Business with Expert Salesforce® Consulting Services',
    title: 'Salesforce Consulting Services',
    details: {
      description:
        'Transformative Salesforce solutions tailored to your business needs',
      features: [
        'Certified Salesforce consultants with cross-cloud expertise',
        'End-to-end services from implementation to hypercare',
        'Customized solutions for your specific business demands',
        'Integration, app development, and post-implementation support',
        'Focus on workflow optimization and future scalability',
        'Industry-specific best practices and strategic insights',
        'Dedicated to maximizing your ROI',
      ],
    },
    customContent: (theme) => (
      <>
        <Box mt={4}>
          <Typography variant="h6" gutterBottom sx={{ mb: 2, fontWeight: 600 }}>
            Our Approach
          </Typography>
          <Typography variant="body1">
            We don&apos;t simply provide solutions with our Salesforce
            Consulting Services; we also design a transformative journey suited
            to your specific business demands. Our certified Salesforce
            consultants from various industries provide cross-cloud expertise
            and strategic insights to optimize your internal operations with the
            appropriate Salesforce technologies. Our dedication extends beyond
            standard CRM consulting services; we provide integration, app
            development, and post-implementation hypercare to guarantee CRM
            functions as planned.
          </Typography>

          <Typography variant="body1">
            Our Salesforce consultants prioritize improving your current
            workflows while leaving room for future scalability, ensuring your
            CRM solution adapts to changing market demands. By understanding
            your needs, we provide practical insights that decrease
            technological hassles while increasing ROI. Techineur implements
            Salesforce CRM and lays the groundwork for long-term success.
          </Typography>

          <Typography
            variant="h6"
            gutterBottom
            sx={{ mb: 2, mt: 3, fontWeight: 600 }}
          >
            Why You Should Choose Only Techineur For Salesforce® Consultants
          </Typography>

          <Grid container spacing={3} sx={{ mt: 2 }}>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Box
                sx={{
                  p: 3,
                  height: '100%',
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                  borderRadius: 2,
                  backgroundColor: alpha(theme.palette.primary.light, 0.05),
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: `0 10px 20px ${alpha(theme.palette.primary.main, 0.1)}`,
                  },
                }}
              >
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    mb: 2,
                    backgroundColor: alpha(theme.palette.primary.main, 0.1),
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Box
                    component="img"
                    src="/journey-builder-logo.png"
                    sx={{ width: 40, height: 40 }}
                  />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  Experience and Expertise
                </Typography>
                <Typography variant="body2">
                  Our team of certified Salesforce consultants possesses
                  extensive knowledge of Salesforce capabilities and industry
                  best practices, ensuring you receive the most effective and
                  tailored services.
                </Typography>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Box
                sx={{
                  p: 3,
                  height: '100%',
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                  borderRadius: 2,
                  backgroundColor: alpha(theme.palette.primary.light, 0.05),
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: `0 10px 20px ${alpha(theme.palette.primary.main, 0.1)}`,
                  },
                }}
              >
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    mb: 2,
                    backgroundColor: alpha(theme.palette.primary.main, 0.1),
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Box
                    component="img"
                    src="/automation-studio-logo.png"
                    sx={{ width: 40, height: 40 }}
                  />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  Comprehensive Solutions
                </Typography>
                <Typography variant="body2">
                  Techineur offers a full suite of Salesforce consulting
                  services, including implementation, customization,
                  integration, migration, and ongoing support. Our approach
                  guarantees a seamless, cohesive solution aligned with your
                  business objectives.
                </Typography>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Box
                sx={{
                  p: 3,
                  height: '100%',
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                  borderRadius: 2,
                  backgroundColor: alpha(theme.palette.primary.light, 0.05),
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: `0 10px 20px ${alpha(theme.palette.primary.main, 0.1)}`,
                  },
                }}
              >
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    mb: 2,
                    backgroundColor: alpha(theme.palette.primary.main, 0.1),
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Box
                    component="img"
                    src="/email-studio-logo.png"
                    sx={{ width: 40, height: 40 }}
                  />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  Commitment to Excellence
                </Typography>
                <Typography variant="body2">
                  We pride ourselves on delivering high-quality service and
                  support that distinguish us in the marketplace. Focusing on
                  clear communication, timely delivery, and continuous
                  improvement, we are dedicated to meeting and exceeding your
                  expectations.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </>
    ),
  },
  {
    image: 'https://www.pngmart.com/files/6/Healthcare-PNG-Transparent.png',
    description:
      'As Salesforce® Implementation Services We Deliver Your Success',
    title: 'Salesforce Implementation Services',
    details: {
      description:
        'End-to-end Salesforce implementation tailored to your business needs',
      features: [
        'Configuration, customization, and migration services',
        'Seamless integration with third-party systems',
        'Industry-specific implementation expertise',
        'Structured approach to project delivery',
        'Post-implementation support and training',
        'Cost-effective solutions for all business sizes',
        'Automated workflows to boost efficiency',
      ],
    },
    customContent: (theme) => (
      <>
        <Box mt={4}>
          <Typography variant="h6" gutterBottom sx={{ mb: 2, fontWeight: 600 }}>
            Our Implementation Services
          </Typography>
          <Typography variant="body1">
            Techineur provides assistance in Salesforce implementation services
            and customization to fit your specific business requirements. Our
            Salesforce implementation services include configuration,
            customization, migration, integration, and support for various
            industries. Techineur, as a Salesforce implementation company, will
            understand your business in detail and provide the right Salesforce
            implementation services with minimum risks and complexities to make
            your business process efficient. Through our cost-effective
            Salesforce implementation services, we provide economical solutions
            for businesses of all sizes.
          </Typography>

          <Typography
            variant="h6"
            gutterBottom
            sx={{ mb: 2, mt: 3, fontWeight: 600 }}
          >
            Benefits of Salesforce® Implementation Services by Techineur
          </Typography>
          <Typography variant="body1">
            With our Salesforce implementation services, businesses reap a range
            of benefits such as:
          </Typography>

          <Box component="ul" sx={{ pl: 3, mb: 3 }}>
            <li>
              <Typography>
                <Box component="span" sx={{ fontWeight: 600 }}>
                  Access to automated business processes and workflows:
                </Box>{' '}
                We automate a variety of mundane & repetitive workflows and
                processes. This enables the team(s) to focus on high-value tasks
                and responsibilities to grow your company at scale. Plus, with a
                high satisfaction sentiment, employee attrition also falls.
              </Typography>
            </li>
            <li>
              <Typography>
                <Box component="span" sx={{ fontWeight: 600 }}>
                  Acquire Salesforce solution(s) ideal for end users:
                </Box>{' '}
                We are experts in curating a seamless user experience, which
                makes Salesforce solution(s) great for marketing, sales, and
                service teams.
              </Typography>
            </li>
            <li>
              <Typography>
                <Box component="span" sx={{ fontWeight: 600 }}>
                  A systematic approach to solution delivery keeps users happy:
                </Box>{' '}
                Techineur experience & expertise show in the form of a
                structured approach to project delivery. Our customized tech
                solutions as per your unique business requirements.
              </Typography>
            </li>
          </Box>

          <Typography
            variant="h6"
            gutterBottom
            sx={{ mb: 2, mt: 3, fontWeight: 600 }}
          >
            Our Salesforce® Implementation Process
          </Typography>
          <Typography variant="body1">
            Have you ever wondered what are the stages in implementing
            Salesforce CRM in a business? We have listed below in detail the
            stage-by-stage process followed using best practices and the latest
            tech tools by our team of experienced & certified Salesforce
            professionals to deliver solutions within timelines and budgets as
            per client business goals & needs.
          </Typography>

          <Grid container spacing={3} sx={{ mt: 2 }}>
            {/* Step 1 */}
            <Grid size={{ xs: 12 }}>
              <Box
                sx={{
                  p: 3,
                  borderLeft: `4px solid ${theme.palette.primary.main}`,
                  backgroundColor: alpha(theme.palette.primary.light, 0.05),
                  borderRadius: 1,
                  display: 'flex',
                  alignItems: 'flex-start',
                }}
              >
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.common.white,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '1.2rem',
                    mr: 3,
                    flexShrink: 0,
                  }}
                >
                  01
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    Salesforce® Consulting
                  </Typography>
                  <Typography variant="body2">
                    In the first stage, our team of consultants engages
                    intensively with all the concerned teams and stakeholders.
                    The purpose is to identify pain points and challenges faced
                    by the business that impede business goals. This leads to
                    the creation of a roadmap with tech tools & solutions to
                    overcome the issues. It includes the important
                    customizations & integrations that prove beneficial to the
                    business. At this stage, the implementation process is
                    planned with timelines and a budget.
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* Step 2 */}
            <Grid size={{ xs: 12 }}>
              <Box
                sx={{
                  p: 3,
                  borderLeft: `4px solid ${theme.palette.secondary.main}`,
                  backgroundColor: alpha(theme.palette.secondary.light, 0.05),
                  borderRadius: 1,
                  display: 'flex',
                  alignItems: 'flex-start',
                }}
              >
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    backgroundColor: theme.palette.secondary.main,
                    color: theme.palette.common.white,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '1.2rem',
                    mr: 3,
                    flexShrink: 0,
                  }}
                >
                  02
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    Customization and Configuration
                  </Typography>
                  <Typography variant="body2">
                    In the second stage, customization and configuration of the
                    org are carried out as per the roadmap. Customization is as
                    per the needs & wants of the business. They can be simple
                    and few to intensive customization. Both impact timelines
                    and budgets.
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* Step 3 */}
            <Grid size={{ xs: 12 }}>
              <Box
                sx={{
                  p: 3,
                  borderLeft: `4px solid ${theme.palette.error.main}`,
                  backgroundColor: alpha(theme.palette.error.light, 0.05),
                  borderRadius: 1,
                  display: 'flex',
                  alignItems: 'flex-start',
                }}
              >
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    backgroundColor: theme.palette.error.main,
                    color: theme.palette.common.white,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '1.2rem',
                    mr: 3,
                    flexShrink: 0,
                  }}
                >
                  03
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    Integration
                  </Typography>
                  <Typography variant="body2">
                    Integration with third-party systems, tech tools, and apps
                    is carried out in a smooth & seamless manner. Thus, there is
                    no more switching between screens and productivity
                    increases.
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* Step 4 */}
            <Grid size={{ xs: 12 }}>
              <Box
                sx={{
                  p: 3,
                  borderLeft: `4px solid ${theme.palette.warning.main}`,
                  backgroundColor: alpha(theme.palette.warning.light, 0.05),
                  borderRadius: 1,
                  display: 'flex',
                  alignItems: 'flex-start',
                }}
              >
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    backgroundColor: theme.palette.warning.main,
                    color: theme.palette.common.white,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '1.2rem',
                    mr: 3,
                    flexShrink: 0,
                  }}
                >
                  04
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    Testing
                  </Typography>
                  <Typography variant="body2">
                    In this stage, testing is carried out in a sandbox
                    environment (a mirror image of your future org) and
                    modifications/corrections are based on feedback received
                    from the core group of users & testers. The org is
                    transferred to the UAT (User Acceptance Testing) environment
                    where the core team from the client can test it to see if it
                    meets the solution that addresses their needs, challenges,
                    and business goals.
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* Step 5 */}
            <Grid size={{ xs: 12 }}>
              <Box
                sx={{
                  p: 3,
                  borderLeft: `4px solid ${theme.palette.info.main}`,
                  backgroundColor: alpha(theme.palette.info.light, 0.05),
                  borderRadius: 1,
                  display: 'flex',
                  alignItems: 'flex-start',
                }}
              >
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    backgroundColor: theme.palette.info.main,
                    color: theme.palette.common.white,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '1.2rem',
                    mr: 3,
                    flexShrink: 0,
                  }}
                >
                  05
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    Launch
                  </Typography>
                  <Typography variant="body2">
                    This is the stage that is most looked after by everyone
                    involved in the project. The org goes live after the green
                    signal is given by the client. It is a moment of pride and
                    joy that weeks or months of work come to fruition.
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* Step 6 */}
            <Grid size={{ xs: 12 }}>
              <Box
                sx={{
                  p: 3,
                  borderLeft: `4px solid ${theme.palette.success.main}`,
                  backgroundColor: alpha(theme.palette.success.light, 0.05),
                  borderRadius: 1,
                  display: 'flex',
                  alignItems: 'flex-start',
                }}
              >
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    backgroundColor: theme.palette.success.main,
                    color: theme.palette.common.white,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '1.2rem',
                    mr: 3,
                    flexShrink: 0,
                  }}
                >
                  06
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    Training
                  </Typography>
                  <Typography variant="body2">
                    Customized and interactive training for different
                    personnel/teams is carried out by experienced trainers.
                    These engaging sessions ensure user adoption and the success
                    of the project. Refresher training courses are also advised.
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* Step 7 */}
            <Grid size={{ xs: 12 }}>
              <Box
                sx={{
                  p: 3,
                  borderLeft: `4px solid ${theme.palette.primary.dark}`,
                  backgroundColor: alpha(theme.palette.primary.light, 0.05),
                  borderRadius: 1,
                  display: 'flex',
                  alignItems: 'flex-start',
                }}
              >
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    backgroundColor: theme.palette.primary.dark,
                    color: theme.palette.common.white,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '1.2rem',
                    mr: 3,
                    flexShrink: 0,
                  }}
                >
                  07
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    Post-Implementation Support
                  </Typography>
                  <Typography variant="body2">
                    The deployment is the beginning of the journey. Post support
                    services by Techineur ensure that the org functions
                    smoothly, upgrades and modifications happen on time, all
                    glitches are resolved, and the clients team focuses on their
                    core business activities. User adoption and motivation are
                    high.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </>
    ),
  },
  {
    image:
      'https://t4.ftcdn.net/jpg/09/31/49/29/360_F_931492933_hIAKrVpKRIm65JlsTFY3Q17mejirrlWq.jpg',
    description:
      // eslint-disable-next-line quotes
      "Transform Your Workflow with Techineur's Salesforce® Integration",
    title: 'Salesforce Integration Services',
    details: {
      description:
        'Seamless integration solutions connecting Salesforce with your business ecosystem',
      features: [
        'ERP system integrations',
        'Accounting software connections',
        'E-commerce platform integrations',
        'Marketing automation links',
        'Payment gateway connections',
        'API-based integrations (REST/SOAP)',
        'Data migration services',
      ],
    },
    customContent: (theme) => (
      <>
        <Box mt={4}>
          <Typography variant="h6" gutterBottom sx={{ mb: 2, fontWeight: 600 }}>
            Our Integration Approach
          </Typography>
          <Typography variant="body1">
            We at Techineur, a Salesforce integration partner understand that a
            company must keep pace with the times. Therefore, to this end, you
            don&apos;t need to overhaul your business ways but just alter your
            business strategies to derive maximum benefits. We offer Salesforce
            Integration Services that can smoothen your daily workflow as well
            as speed up matters.
          </Typography>
          <Typography variant="body1">
            As one of the best Salesforce Integration Partners, we successfully
            provide secure, reliable, seamless, and scalable Salesforce
            Integration Services with current apps and external cloud services.
            We can seamlessly migrate your data from other applications such as
            QuickBooks and Microsoft Dynamics CRM to Salesforce. Techineur, one
            of the best Salesforce Integration Companies in India builds web
            services within Salesforce which assists a third-party app to share
            information via Salesforce Integration Services.
          </Typography>

          <Typography
            variant="h6"
            gutterBottom
            sx={{ mb: 2, mt: 3, fontWeight: 600 }}
          >
            Salesforce® Integration Services
          </Typography>
          <Typography variant="body1">
            We, as a Salesforce Integration Partner offering Salesforce
            Integration Services, believe that all systems in a business should
            work in synchronisation with all the departments of a firm. This
            translates into a trouble-free information flow across the company,
            a single-point approach for users, and automated information
            synchronization. The success of Salesforce CRM implementation is
            directly linked to accurate & up-to-speed information.
          </Typography>

          <Grid container spacing={3} sx={{ mt: 2, mb: 4 }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  p: 3,
                  height: '100%',
                  backgroundColor: alpha(theme.palette.primary.light, 0.05),
                  borderRadius: 2,
                  borderLeft: `4px solid ${theme.palette.primary.main}`,
                  boxShadow: `0 5px 15px ${alpha(theme.palette.primary.light, 0.1)}`,
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                  Integration Solutions We Offer
                </Typography>
                <Box component="ul" sx={{ pl: 2 }}>
                  <li>
                    <Typography>Salesforce Integration with ERP</Typography>
                  </li>
                  <li>
                    <Typography>
                      Salesforce Integration with Accounting Software
                    </Typography>
                  </li>
                  <li>
                    <Typography>
                      Salesforce Integration with E-commerce Platforms
                    </Typography>
                  </li>
                  <li>
                    <Typography>
                      Salesforce Calendar & Email Integration
                    </Typography>
                  </li>
                  <li>
                    <Typography>
                      Salesforce Integration with marketing software
                    </Typography>
                  </li>
                  <li>
                    <Typography>
                      Social Media & Digital Engagement Integration
                    </Typography>
                  </li>
                  <li>
                    <Typography>REST / SOAP API</Typography>
                  </li>
                  <li>
                    <Typography>Marketing Automation Integration</Typography>
                  </li>
                  <li>
                    <Typography>Chatbot Integration</Typography>
                  </li>
                  <li>
                    <Typography>Payment Gateway Integration</Typography>
                  </li>
                  <li>
                    <Typography>Collaboration Tools Integration</Typography>
                  </li>
                  <li>
                    <Typography>CTI</Typography>
                  </li>
                  <li>
                    <Typography>ITSM Integration</Typography>
                  </li>
                  <li>
                    <Typography>Salesforce data architecture HEDA</Typography>
                  </li>
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  p: 3,
                  height: '100%',
                  backgroundColor: alpha(theme.palette.secondary.light, 0.05),
                  borderRadius: 2,
                  borderLeft: `4px solid ${theme.palette.secondary.main}`,
                  boxShadow: `0 5px 15px ${alpha(theme.palette.secondary.light, 0.1)}`,
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                  Challenges We Solve
                </Typography>
                <Typography variant="body1">
                  Salesforce Integration and data migration can prove to be a
                  headache if you are not aware of all the processes involved.
                  Without a thorough understanding and Salesforce Integration
                  services, it can lead to unwanted situations and failures
                  which are best avoided.
                </Typography>
                <Typography variant="body1">
                  Our Salesforce integration consultants curate the best
                  Salesforce integration services plan and help you with
                  projects of any difficulty, including overcoming the following
                  hurdles:
                </Typography>
                <Typography variant="body1">
                  - Data synchronization issues
                  <br />
                  - System compatibility problems
                  <br />
                  - API limitations
                  <br />
                  - Security concerns
                  <br />- Performance bottlenecks
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Typography
            variant="h6"
            gutterBottom
            sx={{ mb: 2, mt: 3, fontWeight: 600 }}
          >
            Success Story
          </Typography>
          <Box
            sx={{
              p: 3,
              mb: 4,
              backgroundColor: alpha(theme.palette.success.light, 0.1),
              borderRadius: 2,
              borderLeft: `4px solid ${theme.palette.success.main}`,
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
              How Salesforce® Partners streamlined customer and dealer service
              operations
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              - 35% faster order delivery
              <br />- 90% customer satisfaction rate
            </Typography>
            <Typography variant="body1">
              Launched a single cloud based platform, accessible via mobile
              platforms and the desktop, for both support and sales functions
              and streamlined processes between the groups. Implemented
              Salesforce Community, Sales and Service Cloud with SAP & Web
              Portal Integrations.
            </Typography>
          </Box>

          <Typography
            variant="h6"
            gutterBottom
            sx={{ mb: 2, mt: 3, fontWeight: 600 }}
          >
            Why Choose Techineur for Salesforce® Integration
          </Typography>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Box
                sx={{
                  p: 3,
                  height: '100%',
                  backgroundColor: alpha(theme.palette.background.paper, 0.7),
                  borderRadius: 2,
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                  boxShadow: `0 5px 15px ${alpha(theme.palette.primary.light, 0.05)}`,
                }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                  Finest Service with Reliable Deliverables
                </Typography>
                <Typography variant="body2">
                  Techineur is an ISO 9001 certified company, we give credence
                  to providing qualitative and consistent deliveries and
                  endeavour enhancement as well as providing the finest of
                  services.
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Box
                sx={{
                  p: 3,
                  height: '100%',
                  backgroundColor: alpha(theme.palette.background.paper, 0.7),
                  borderRadius: 2,
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                  boxShadow: `0 5px 15px ${alpha(theme.palette.primary.light, 0.05)}`,
                }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                  Experienced & Skillful Resources
                </Typography>
                <Typography variant="body2">
                  Our team comprises 50+ certified personnel with over 30+
                  individual Salesforce Integration Certifications and 70+
                  completed projects.
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Box
                sx={{
                  p: 3,
                  height: '100%',
                  backgroundColor: alpha(theme.palette.background.paper, 0.7),
                  borderRadius: 2,
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                  boxShadow: `0 5px 15px ${alpha(theme.palette.primary.light, 0.05)}`,
                }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                  Flexible Engagement Models
                </Typography>
                <Typography variant="body2">
                  We offer both onsite and offsite staffing options to provide
                  cost-effective solutions while maintaining the highest quality
                  standards.
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Box
            sx={{
              mt: 4,
              p: 3,
              backgroundColor: alpha(theme.palette.warning.light, 0.1),
              borderRadius: 2,
              textAlign: 'center',
              border: `1px solid ${alpha(theme.palette.warning.main, 0.3)}`,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Need Consultations in Salesforce® Integration Services?
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Our Salesforce integration consultants are suitably armed to
              understand our client&apos;s integration requirements and provide
              appropriate solutions accordingly.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{
                px: 4,
                fontWeight: 600,
                boxShadow: 2,
                '&:hover': {
                  boxShadow: `0 0 15px ${alpha(theme.palette.primary.main, 0.5)}`,
                },
              }}
            >
              Schedule A Consultation Call
            </Button>
          </Box>
        </Box>
      </>
    ),
  },
  {
    image:
      'https://writesonic.com/wp-content/uploads/11ff9846-9395-48bc-b27f-ad0b14dffed6.png',
    description:
      // eslint-disable-next-line quotes
      "Grow Your Business with Techineur's Salesforce® CRM Development Services",
    title: 'Salesforce Development Services',
    details: {
      description:
        'Custom Salesforce solutions to maximize your CRM investment',
      features: [
        'AI-driven automation and personalization',
        'Custom application development',
        'Third-party service integration',
        'Smooth data migration',
        'DevOps for efficient deployment',
        'Hypercare support post-launch',
        'Scalable architecture design',
      ],
    },
    customContent: (theme) => (
      <>
        <Box mt={4}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              mb: 2,
              fontWeight: 600,
              color: theme.palette.primary.main,
              display: 'inline-block',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -5,
                left: 0,
                width: '50px',
                height: '3px',
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, transparent)`,
                borderRadius: '3px',
              },
            }}
          >
            Our Development Services
          </Typography>
          <Typography
            variant="body1"
            sx={{
              position: 'relative',
              pl: 3,
              '&::before': {
                content: '"»"',
                position: 'absolute',
                left: 0,
                color: theme.palette.primary.main,
              },
            }}
          >
            Salesforce development services help businesses maximize their
            Salesforce investment by improving the platform&apos;s built-in
            features and functions.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              position: 'relative',
              pl: 3,
              '&::before': {
                content: '"»"',
                position: 'absolute',
                left: 0,
                color: theme.palette.primary.main,
              },
            }}
          >
            At Techineur, we focus on providing AI-driven and personalized
            Salesforce solutions. Our team creates scalable Salesforce
            applications, allows easy integration with third-party services, and
            ensures smooth data migrations.
          </Typography>

          <Typography
            variant="h6"
            gutterBottom
            sx={{
              mb: 2,
              mt: 4,
              fontWeight: 600,
              color: theme.palette.primary.main,
              display: 'inline-block',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -5,
                left: 0,
                width: '50px',
                height: '3px',
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, transparent)`,
                borderRadius: '3px',
              },
            }}
          >
            Our Salesforce® Development Process
          </Typography>

          {/* Scrollable Process Steps */}
          <Box
            sx={{
              display: 'flex',
              overflowX: 'auto',
              gap: 3,
              py: 3,
              '&::-webkit-scrollbar': {
                height: '6px',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: alpha(theme.palette.primary.main, 0.3),
                borderRadius: '3px',
              },
            }}
          >
            {/* Step 1 */}
            <Box
              sx={{
                minWidth: 300,
                p: 3,
                borderRadius: 2,
                backgroundColor: alpha(theme.palette.primary.light, 0.1),
                border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                boxShadow: `0 4px 12px ${alpha(theme.palette.primary.main, 0.1)}`,
              }}
            >
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.common.white,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '1.2rem',
                  mb: 2,
                }}
              >
                1
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                Discover
              </Typography>

              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                  Understanding The Business
                </Typography>
                <Typography variant="body2">
                  Collaborating with department leaders, IT teams, and key
                  stakeholders ensures that Salesforce functionalities align
                  with your business objectives.
                </Typography>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                  User Requirements
                </Typography>
                <Typography variant="body2">
                  We emphasize essential business requirements, ensuring every
                  feature focuses on enhancing ROI and efficiency.
                </Typography>
              </Box>

              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                  Current Implementation Review
                </Typography>
                <Typography variant="body2">
                  Our specialists examine your Salesforce org to pinpoint areas
                  needing improvement and develop a robust strategy.
                </Typography>
              </Box>
            </Box>

            {/* Step 2 */}
            <Box
              sx={{
                minWidth: 300,
                p: 3,
                borderRadius: 2,
                backgroundColor: alpha(theme.palette.secondary.light, 0.1),
                border: `1px solid ${alpha(theme.palette.secondary.main, 0.2)}`,
                boxShadow: `0 4px 12px ${alpha(theme.palette.secondary.main, 0.1)}`,
              }}
            >
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  backgroundColor: theme.palette.secondary.main,
                  color: theme.palette.common.white,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '1.2rem',
                  mb: 2,
                }}
              >
                2
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                Build
              </Typography>

              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                  Solution Engineering
                </Typography>
                <Typography variant="body2">
                  Our architects create systematic designs detailing features
                  and workflows with best practices.
                </Typography>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                  Development
                </Typography>
                <Typography variant="body2">
                  We build using Apex, LWC, and REST APIs to create
                  high-performance apps with AI-driven automation.
                </Typography>
              </Box>

              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                  Quality Assurance
                </Typography>
                <Typography variant="body2">
                  We perform automated and manual testing to ensure
                  compatibility with your current configuration.
                </Typography>
              </Box>
            </Box>

            {/* Step 3 */}
            <Box
              sx={{
                minWidth: 300,
                p: 3,
                borderRadius: 2,
                backgroundColor: alpha(theme.palette.success.light, 0.1),
                border: `1px solid ${alpha(theme.palette.success.main, 0.2)}`,
                boxShadow: `0 4px 12px ${alpha(theme.palette.success.main, 0.1)}`,
              }}
            >
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  backgroundColor: theme.palette.success.main,
                  color: theme.palette.common.white,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '1.2rem',
                  mb: 2,
                }}
              >
                3
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                Test & Go-Live
              </Typography>

              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                  Migration
                </Typography>
                <Typography variant="body2">
                  We manage data extraction, transformation, and loading to
                  ensure accuracy and minimize interruptions.
                </Typography>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                  Go Live
                </Typography>
                <Typography variant="body2">
                  Systematic release approach with rollback procedures for
                  seamless transition.
                </Typography>
              </Box>

              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                  Training
                </Typography>
                <Typography variant="body2">
                  We offer training for key users and admins with clear
                  documentation to improve adoption.
                </Typography>
              </Box>
            </Box>

            {/* Step 4 */}
            <Box
              sx={{
                minWidth: 300,
                p: 3,
                borderRadius: 2,
                backgroundColor: alpha(theme.palette.warning.light, 0.1),
                border: `1px solid ${alpha(theme.palette.warning.main, 0.2)}`,
                boxShadow: `0 4px 12px ${alpha(theme.palette.warning.main, 0.1)}`,
              }}
            >
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  backgroundColor: theme.palette.warning.main,
                  color: theme.palette.common.white,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '1.2rem',
                  mb: 2,
                }}
              >
                4
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                Support
              </Typography>

              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                  Support & Maintenance
                </Typography>
                <Typography variant="body2">
                  Four weeks of complimentary hypercare assistance with ongoing
                  monitoring and troubleshooting.
                </Typography>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                  Staying Current
                </Typography>
                <Typography variant="body2">
                  We ensure your applications remain in sync with the latest
                  industry updates.
                </Typography>
              </Box>

              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                  Annual Maintenance
                </Typography>
                <Typography variant="body2">
                  Customized support plans to enhance and improve your
                  Salesforce configuration.
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Best Practices Section */}
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              mb: 2,
              mt: 4,
              fontWeight: 600,
              color: theme.palette.primary.main,
              display: 'inline-block',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -5,
                left: 0,
                width: '50px',
                height: '3px',
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, transparent)`,
                borderRadius: '3px',
              },
            }}
          >
            Our Salesforce® Development Best Practices
          </Typography>

          <Grid container spacing={3} sx={{ mt: 2 }}>
            {[
              { number: '1', title: 'Apex Design Patterns' },
              { number: '2', title: 'Version Controlling' },
              { number: '3', title: 'CI/CD' },
              { number: '4', title: 'Sandbox Development' },
              { number: '5', title: 'Governor Limits' },
              { number: '6', title: 'Reusable Code' },
              { number: '7', title: 'Multi-Level Testing' },
              { number: '8', title: 'Low Code Approach' },
              { number: '9', title: 'Commented Code' },
              { number: '10', title: 'Data Masking' },
            ].map((item, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <Box
                  sx={{
                    p: 3,
                    height: '100%',
                    borderRadius: 2,
                    backgroundColor: alpha(theme.palette.background.paper, 0.8),
                    border: `1px solid ${alpha(theme.palette.divider, 0.2)}`,
                    boxShadow: 1,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: `0 8px 24px ${alpha(theme.palette.primary.main, 0.1)}`,
                      borderColor: alpha(theme.palette.primary.main, 0.3),
                    },
                    animation: `${floatAnimation} ${3 + index * 0.5}s ease-in-out infinite`,
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 800,
                      mb: 2,
                      background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {item.number}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {item.title}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </>
    ),
  },
  {
    image:
      'https://thumbs.dreamstime.com/b/legal-legal-legally-law-lawyer-barrister-wisdom-judgment-112218901.jpg',
    description:
      'Expert staffing solutions for your marketing automation needs',
    title: 'Salesforce Marketing Cloud Staffing',
    details: {
      description:
        'Professional staffing services for Salesforce Marketing Cloud implementation and management',
      features: [
        'Certified Marketing Cloud experts',
        'Flexible engagement models',
        'Cost-effective staffing solutions',
        'Campaign management specialists',
        'Data architecture and migration',
        'ROI-focused marketing strategies',
        'Ongoing optimization support',
      ],
    },
    customContent: (theme) => (
      <>
        <Box mt={4}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              mb: 2,
              fontWeight: 600,
              color: theme.palette.primary.main,
              display: 'inline-block',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -5,
                left: 0,
                width: '50px',
                height: '3px',
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, transparent)`,
                borderRadius: '3px',
              },
            }}
          >
            Introduction to Salesforce Marketing Cloud Staffing Services
          </Typography>
          <Typography
            variant="body1"
            sx={{
              position: 'relative',
              pl: 3,
              '&::before': {
                content: '"»"',
                position: 'absolute',
                left: 0,
                color: theme.palette.primary.main,
              },
            }}
          >
            Salesforce Marketing Cloud is your robust marketing automation tool
            that empowers firms to design, handle, and analyse their marketing
            campaigns. If you however are not able to derive maximum benefits
            out of the solution then you need professionals to handle your
            entire implementation, management, and optimization of your
            marketing strategies.
          </Typography>

          <Typography
            variant="h6"
            gutterBottom
            sx={{
              mb: 3,
              mt: 4,
              fontWeight: 600,
              color: theme.palette.primary.main,
              display: 'inline-block',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -5,
                left: 0,
                width: '50px',
                height: '3px',
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, transparent)`,
                borderRadius: '3px',
              },
            }}
          >
            Why Choose Our Salesforce® Marketing Cloud Staffing Services?
          </Typography>

          {/* Benefits Cards with Animation */}
          <Grid container spacing={3} sx={{ mb: 4 }}>
            {[
              {
                title: 'Services by experts',
                content:
                  'Benefit from an experienced & certified team of Marketing Cloud experts',
                icon: '👨‍💼',
                color: theme.palette.primary.main,
              },
              {
                title: 'Budget Friendly',
                content:
                  'Save expenses on hiring, training, and salaries with our flexible staffing',
                icon: '💰',
                color: theme.palette.success.main,
              },
              {
                title: 'Flexibility',
                content:
                  'Scale your marketing efforts up or down as your business needs change',
                icon: '🔄',
                color: theme.palette.warning.main,
              },
              {
                title: 'Enhanced ROI',
                content:
                  'Generate effective campaigns that deliver measurable results and value',
                icon: '📈',
                color: theme.palette.info.main,
              },
            ].map((benefit, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <Box
                  sx={{
                    p: 3,
                    height: '100%',
                    borderRadius: 2,
                    border: `1px solid ${alpha(benefit.color, 0.3)}`,
                    backgroundColor: alpha(benefit.color, 0.05),
                    boxShadow: `0 4px 20px ${alpha(benefit.color, 0.1)}`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: `0 8px 25px ${alpha(benefit.color, 0.2)}`,
                    },
                    animation: `${floatAnimation} ${4 + index}s ease-in-out infinite`,
                  }}
                >
                  <Typography variant="h3" sx={{ mb: 1 }}>
                    {benefit.icon}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                      color: benefit.color,
                    }}
                  >
                    {benefit.title}
                  </Typography>
                  <Typography variant="body2">{benefit.content}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* Quick Start Section */}
          <Box
            sx={{
              mb: 4,
              p: 3,
              borderRadius: 2,
              backgroundColor: alpha(theme.palette.secondary.light, 0.1),
              border: `1px solid ${alpha(theme.palette.secondary.main, 0.2)}`,
              display: 'flex',
              alignItems: 'center',
              gap: 3,
              flexDirection: { xs: 'column', sm: 'row' },
            }}
          >
            <Box
              sx={{
                width: 80,
                height: 80,
                minWidth: 80,
                borderRadius: '50%',
                backgroundColor: theme.palette.secondary.main,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: theme.palette.common.white,
                fontSize: '2rem',
                '&:hover': {
                  animation: `${pulseAnimation} 0.5s ease`,
                },
              }}
            >
              ▶
            </Box>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                Quick Start with Marketing Cloud Staffing
              </Typography>
              <Typography>
                Get started immediately with our ready-to-deploy Marketing Cloud
                experts who can integrate seamlessly with your team.
              </Typography>
            </Box>
          </Box>

          <Typography
            variant="h6"
            gutterBottom
            sx={{
              mb: 3,
              fontWeight: 600,
              color: theme.palette.primary.main,
              display: 'inline-block',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -5,
                left: 0,
                width: '50px',
                height: '3px',
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, transparent)`,
                borderRadius: '3px',
              },
            }}
          >
            What&apos;s Included in Our Services?
          </Typography>

          {/* Services List */}
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Box
                sx={{
                  p: 3,
                  height: '100%',
                  borderRadius: 2,
                  borderLeft: `4px solid ${theme.palette.primary.main}`,
                  backgroundColor: alpha(theme.palette.primary.light, 0.05),
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateX(5px)',
                  },
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  Implementation
                </Typography>
                <Typography variant="body2">
                  Initial configuration & implementation including data model
                  design and system integration.
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Box
                sx={{
                  p: 3,
                  height: '100%',
                  borderRadius: 2,
                  borderLeft: `4px solid ${theme.palette.success.main}`,
                  backgroundColor: alpha(theme.palette.success.light, 0.05),
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateX(5px)',
                  },
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  Campaign Management
                </Typography>
                <Typography variant="body2">
                  Email template creation, automation workflows, and campaign
                  performance analysis.
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Box
                sx={{
                  p: 3,
                  height: '100%',
                  borderRadius: 2,
                  borderLeft: `4px solid ${theme.palette.info.main}`,
                  backgroundColor: alpha(theme.palette.info.light, 0.05),
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateX(5px)',
                  },
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  Data Management
                </Typography>
                <Typography variant="body2">
                  Data structure creation, data extensions setup, and secure
                  data migration services.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </>
    ),
  },
  {
    image:
      'https://emeritus.org/in/wp-content/uploads/sites/3/2023/01/What-is-machine-learning-Definition-types.jpg.optimal.jpg',
    description: 'Seamless transition from Classic to Lightning Experience',
    title: 'Salesforce Lightning Migration',
    details: {
      description:
        'Professional migration services to modernize your Salesforce platform',
      features: [
        'User experience modernization',
        'Einstein Analytics integration',
        'Cross-device consistency',
        'Productivity enhancements',
        'Future-proof platform',
        'Cost-effective custom development',
        'Minimal downtime migration',
      ],
    },
    customContent: (theme) => (
      <>
        <Box mt={4}>
          {/* Introduction Section */}
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              mb: 2,
              fontWeight: 600,
              color: theme.palette.primary.main,
              display: 'inline-block',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -5,
                left: 0,
                width: '50px',
                height: '3px',
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, transparent)`,
                borderRadius: '3px',
              },
            }}
          >
            Why Migrate from Classic to Lightning?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              position: 'relative',
              pl: 3,
              '&::before': {
                content: '"»"',
                position: 'absolute',
                left: 0,
                color: theme.palette.primary.main,
              },
            }}
          >
            The Lightning interface is modern, efficient, and smart. The look
            and feel experienced by the users are consistent across every device
            – desktop, tablet, and mobile. The User Interface (UI) upgrade alone
            is superior enough compared to Salesforce Classic reporting, plus
            with Salesforce Lightning Migration users can use Einstein (Wave)
            Analytics reporting.
          </Typography>

          {/* Urgency Section */}
          <Box
            sx={{
              mt: 4,
              p: 3,
              borderRadius: 2,
              backgroundColor: alpha(theme.palette.warning.light, 0.1),
              borderLeft: `4px solid ${theme.palette.warning.main}`,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
              Don&apos;t Wait - The Time to Migrate is Now
            </Typography>
            <Typography variant="body1">
              The debate is futile because all those currently using Salesforce
              Classic will have to opt for Salesforce Lightning Migration. This
              is because the classic version is being phased out sooner or
              later. With Salesforce not introducing many features &
              enhancements on the Classic version, if users wish to get the
              maximum benefit from their Salesforce org, they need to go for
              Salesforce Lightning migration.
            </Typography>
          </Box>

          {/* Benefits Grid */}
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              mb: 3,
              mt: 4,
              fontWeight: 600,
              color: theme.palette.primary.main,
              display: 'inline-block',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -5,
                left: 0,
                width: '50px',
                height: '3px',
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, transparent)`,
                borderRadius: '3px',
              },
            }}
          >
            Key Benefits of Lightning Migration
          </Typography>

          <Grid container spacing={3} sx={{ mb: 4 }}>
            {[
              {
                icon: '⚡',
                title: '2000+ New Features',
                content:
                  'Access features unavailable in Classic including Einstein Analytics',
              },
              {
                icon: '📈',
                title: 'Increased Productivity',
                content:
                  'Enhanced tools boost individual and team productivity',
              },
              {
                icon: '💡',
                title: 'Innovation Platform',
                content: 'Modern architecture supports continuous innovation',
              },
              {
                icon: '💰',
                title: 'Cost Savings',
                content: 'Reduced custom development and support costs',
              },
              {
                icon: '🔄',
                title: 'Streamlined Processes',
                content: 'Improved workflows and business processes',
              },
              {
                icon: '🤝',
                title: 'Better Collaboration',
                content: 'Enhanced tools for team collaboration',
              },
            ].map((item, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <Box
                  sx={{
                    p: 3,
                    height: '100%',
                    borderRadius: 2,
                    border: `1px solid ${alpha(theme.palette.primary.light, 0.3)}`,
                    backgroundColor: alpha(theme.palette.background.paper, 0.7),
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: `0 8px 24px ${alpha(theme.palette.primary.light, 0.2)}`,
                    },
                  }}
                >
                  <Typography variant="h3" sx={{ mb: 2 }}>
                    {item.icon}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2">{item.content}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* Techineur Approach Section */}
          <Box
            sx={{
              mt: 4,
              p: 4,
              borderRadius: 2,
              background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)}, ${alpha(theme.palette.secondary.main, 0.1)})`,
              border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                mb: 2,
                color: theme.palette.primary.main,
              }}
            >
              Our Lightning Migration Approach
            </Typography>
            <Typography variant="body1">
              We make your Salesforce Classic to Lightning migration simpler,
              quicker, and more economical. While UI upgrade is important,
              Lightning enables businesses to be more customer-centric thanks to
              enhanced processes. Our proprietary approach, accelerators,
              frameworks, and team of certified experts help accelerate the move
              with minimal risk and maximum ROI.
            </Typography>

            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      borderRadius: '50%',
                      backgroundColor: theme.palette.primary.main,
                      color: theme.palette.common.white,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    1
                  </Box>
                  <Typography>
                    <strong>Assessment:</strong> Comprehensive analysis of your
                    Classic org
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      borderRadius: '50%',
                      backgroundColor: theme.palette.primary.main,
                      color: theme.palette.common.white,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    2
                  </Box>
                  <Typography>
                    <strong>Planning:</strong> Custom migration roadmap
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      borderRadius: '50%',
                      backgroundColor: theme.palette.primary.main,
                      color: theme.palette.common.white,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    3
                  </Box>
                  <Typography>
                    <strong>Execution:</strong> Phased migration with minimal
                    disruption
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      borderRadius: '50%',
                      backgroundColor: theme.palette.primary.main,
                      color: theme.palette.common.white,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    4
                  </Box>
                  <Typography>
                    <strong>Optimization:</strong> Post-migration tuning and
                    training
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* CTA Section */}
          <Box
            sx={{
              mt: 4,
              p: 3,
              borderRadius: 2,
              backgroundColor: alpha(theme.palette.success.light, 0.1),
              border: `1px solid ${alpha(theme.palette.success.main, 0.3)}`,
              textAlign: 'center',
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Ready to Modernize Your Salesforce Platform?
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              We have successfully helped businesses across the country migrate
              to the present & future of Salesforce – The Lightning version.
              Isn&apos;t it time you also took advantage of our excellent
              services?
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                px: 4,
                fontWeight: 600,
                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                '&:hover': {
                  boxShadow: `0 0 15px ${alpha(theme.palette.primary.main, 0.5)}`,
                },
              }}
            >
              Start Your Migration Today
            </Button>
          </Box>
        </Box>
      </>
    ),
  },
];

const Crmservices = (): JSX.Element => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const [, setButtonHovered] = useState(false);

  const handleOpen = (product: Product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProduct(null);
  };

  return (
    <Box sx={{ py: 6, bgcolor: alpha(theme.palette.background.default, 0.9) }}>
      <Typography
        variant="h3"
        component="h2"
        align="center"
        gutterBottom
        sx={{
          fontWeight: 800,
          mb: 6,
          color: theme.palette.primary.main,
          fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
          textShadow: `1px 1px 2px ${alpha(theme.palette.primary.dark, 0.2)}`,
          letterSpacing: 1.2,
        }}
      >
        WE PROVIDE THE FOLLOWING
        <Box
          component="span"
          sx={{
            display: 'block',
            background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          SALESFORCE® CRM SERVICES
        </Box>
      </Typography>

      <Grid container spacing={4} sx={{ px: { xs: 2, sm: 4, md: 6 } }}>
        {mock.map((item, i) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
            <Box
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              display={'block'}
              width={1}
              height={1}
              position="relative"
              sx={{
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'translateY(-8px)',
                },
              }}
            >
              <Box
                component={Card}
                width={1}
                height={1}
                boxShadow={4}
                display={'flex'}
                flexDirection={'column'}
                sx={{
                  backgroundImage: 'none',
                  p: 2,
                  height: '100%',
                  borderRadius: 3,
                  overflow: 'hidden',
                  border: `1px solid ${alpha(theme.palette.primary.light, 0.2)}`,
                  background: `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.9)}, ${alpha(theme.palette.background.default, 0.9)})`,
                  '&:hover': {
                    boxShadow: `0 10px 30px ${alpha(theme.palette.primary.main, 0.2)}`,
                    borderColor: alpha(theme.palette.primary.main, 0.4),
                  },
                }}
              >
                <CardMedia
                  image={item.image}
                  title={item.title}
                  sx={{
                    height: { xs: 240, sm: 280, md: 300 },
                    position: 'relative',
                    borderRadius: 2,
                    overflow: 'hidden',
                    transition: 'all 0.5s ease',
                    transform: hoveredCard === i ? 'scale(1.05)' : 'scale(1)',
                    filter:
                      hoveredCard === i
                        ? 'brightness(0.7) saturate(1.2)'
                        : 'brightness(1) saturate(1)',
                  }}
                />
                <Box
                  component={CardContent}
                  position={'relative'}
                  sx={{ p: 3, flexGrow: 1 }}
                >
                  <Typography
                    variant={'h6'}
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      color: theme.palette.text.primary,
                      textShadow: `0 1px 2px ${alpha(theme.palette.common.black, 0.1)}`,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    color="text.secondary"
                    sx={{
                      mb: 2,
                      fontSize: '0.9rem',
                      lineHeight: 1.6,
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>

                {/* Enhanced Animated Read More Button */}
                <Box
                  position="absolute"
                  top="50%"
                  left="50%"
                  sx={{
                    transform: 'translate(-50%, -50%)',
                    zIndex: 2,
                    width: '100%',
                    textAlign: 'center',
                    pointerEvents: 'none',
                  }}
                >
                  <Grow in={hoveredCard === i} timeout={300}>
                    <Box
                      sx={{
                        position: 'relative',
                        display: 'inline-block',
                        pointerEvents: 'auto',
                        '&:hover': {
                          '&::before': {
                            opacity: 1,
                            background: `
                              linear-gradient(90deg, ${theme.palette.primary.main} 0%, transparent 100%) left,
                              linear-gradient(0deg, ${theme.palette.secondary.main} 0%, transparent 100%) top,
                              linear-gradient(90deg, ${theme.palette.error.main} 0%, transparent 100%) right,
                              linear-gradient(0deg, ${theme.palette.warning.main} 0%, transparent 100%) bottom
                            `,
                            backgroundSize:
                              '100% 2px, 2px 100%, 100% 2px, 2px 100%',
                            backgroundRepeat: 'no-repeat',
                            animation: `${borderAnimation} 1s linear infinite`,
                          },
                        },
                      }}
                    >
                      <Box
                        component="span"
                        sx={{
                          position: 'absolute',
                          inset: 0,
                          borderRadius: '50px',
                          padding: '2px',
                          background: `
                            linear-gradient(90deg, ${theme.palette.primary.main} 0%, transparent 100%) left,
                            linear-gradient(0deg, ${theme.palette.secondary.main} 0%, transparent 100%) top,
                            linear-gradient(90deg, ${theme.palette.error.main} 0%, transparent 100%) right,
                            linear-gradient(0deg, ${theme.palette.warning.main} 0%, transparent 100%) bottom
                          `,
                          backgroundSize:
                            '100% 2px, 2px 100%, 100% 2px, 2px 100%',
                          backgroundRepeat: 'no-repeat',
                          WebkitMask:
                            'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                          WebkitMaskComposite: 'xor',
                          maskComposite: 'exclude',
                          pointerEvents: 'none',
                          opacity: 0,
                          transition: 'all 0.3s ease',
                        }}
                      />
                      <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        onMouseEnter={() => setButtonHovered(true)}
                        onMouseLeave={() => setButtonHovered(false)}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpen(item);
                        }}
                        sx={{
                          px: 4,
                          py: 1.5,
                          fontWeight: 600,
                          boxShadow: 3,
                          position: 'relative',
                          overflow: 'hidden',
                          background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                          '&:hover': {
                            boxShadow: `0 0 20px ${alpha(theme.palette.primary.main, 0.5)}`,
                            transform: 'scale(1.05)',
                            background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
                          },
                          transition: 'all 0.3s ease',
                          borderRadius: '50px',
                          textTransform: 'none',
                          letterSpacing: 0.8,
                          fontSize: '0.9rem',
                        }}
                      >
                        Read More
                      </Button>
                    </Box>
                  </Grow>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Enhanced Product Details Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="product-details-modal"
        aria-describedby="product-details-description"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(8px)',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: { xs: '95%', sm: '90%', md: '85%', lg: '80%' },
            maxWidth: 1200,
            maxHeight: '90vh',
            overflowY: 'auto',
            bgcolor: 'background.paper',
            boxShadow: `0 20px 40px ${alpha(theme.palette.common.black, 0.3)}`,
            borderRadius: 3,
            p: { xs: 3, md: 4 },
            outline: 'none',
            border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
            '&:focus': {
              outline: 'none',
            },
            animation: `${floatAnimation} 6s ease-in-out infinite`,
            background: `linear-gradient(145deg, ${alpha(theme.palette.background.paper, 0.95)}, ${alpha(theme.palette.background.default, 0.95)})`,
          }}
        >
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'fixed',
              right: { xs: 20, md: 30 },
              top: { xs: 20, md: 30 },
              color: theme.palette.common.white,
              backgroundColor: alpha(theme.palette.error.main, 0.9),
              zIndex: 1,
              width: 40,
              height: 40,
              '&:hover': {
                backgroundColor: theme.palette.error.dark,
                transform: 'rotate(90deg)',
              },
              transition: 'all 0.3s ease',
              boxShadow: 3,
            }}
          >
            <CloseIcon />
          </IconButton>

          {selectedProduct && (
            <Box>
              <Box
                sx={{
                  mb: 4,
                  pb: 3,
                  borderBottom: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100px',
                    height: '3px',
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, transparent)`,
                    borderRadius: '3px',
                  },
                }}
              >
                <Typography
                  variant="h3"
                  component="h2"
                  gutterBottom
                  sx={{
                    fontWeight: 800,
                    color: theme.palette.primary.main,
                    fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
                    textShadow: `1px 1px 2px ${alpha(theme.palette.primary.dark, 0.2)}`,
                    letterSpacing: 1.1,
                  }}
                >
                  {selectedProduct.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontSize: '1.1rem',
                    color: theme.palette.text.secondary,
                    lineHeight: 1.6,
                  }}
                >
                  {selectedProduct.details.description ||
                    selectedProduct.description}
                </Typography>
              </Box>

              <Grid container spacing={4}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Box
                    sx={{
                      mb: 4,
                      p: 3,
                      backgroundColor: alpha(theme.palette.primary.light, 0.05),
                      borderRadius: 2,
                      borderLeft: `4px solid ${theme.palette.primary.main}`,
                      boxShadow: `0 5px 15px ${alpha(theme.palette.primary.light, 0.1)}`,
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '4px',
                        height: '100%',
                        background: `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      },
                    }}
                  >
                    <Typography
                      variant="h5"
                      gutterBottom
                      sx={{
                        fontWeight: 700,
                        mb: 2,
                        color: theme.palette.primary.main,
                        display: 'flex',
                        alignItems: 'center',
                        '&::before': {
                          content: '""',
                          display: 'inline-block',
                          width: '20px',
                          height: '3px',
                          background: theme.palette.primary.main,
                          marginRight: '10px',
                          borderRadius: '3px',
                        },
                      }}
                    >
                      Key Features
                    </Typography>
                    <Box
                      component="ul"
                      sx={{
                        pl: 2,
                        '& li': {
                          mb: 1.5,
                          pl: 1,
                          position: 'relative',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateX(5px)',
                            '&::before': {
                              color: theme.palette.secondary.main,
                            },
                          },
                          '&::before': {
                            content: '"•"',
                            color: theme.palette.primary.main,
                            position: 'absolute',
                            left: -15,
                            fontSize: '1.5rem',
                            transition: 'all 0.3s ease',
                          },
                        },
                      }}
                    >
                      {selectedProduct.details.features.map(
                        (feature, index) => (
                          <li key={index}>
                            <Typography
                              sx={{
                                position: 'relative',
                                '&::after': {
                                  content: '""',
                                  position: 'absolute',
                                  bottom: 0,
                                  left: 0,
                                  width: '0%',
                                  height: '1px',
                                  background: theme.palette.primary.main,
                                  transition: 'width 0.3s ease',
                                },
                                '&:hover::after': {
                                  width: '100%',
                                },
                              }}
                            >
                              {feature}
                            </Typography>
                          </li>
                        ),
                      )}
                    </Box>
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Box
                    sx={{
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        inset: 0,
                        borderRadius: '16px',
                        padding: '2px',
                        background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        WebkitMask:
                          'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        maskComposite: 'exclude',
                        pointerEvents: 'none',
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={selectedProduct.image}
                      alt={selectedProduct.title}
                      sx={{
                        width: '100%',
                        maxHeight: 350,
                        borderRadius: 2,
                        boxShadow: 3,
                        objectFit: 'cover',
                        border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                        transition: 'all 0.5s ease',
                        '&:hover': {
                          transform: 'scale(1.02)',
                          boxShadow: `0 10px 30px ${alpha(theme.palette.primary.main, 0.3)}`,
                        },
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>

              {/* Custom Content Section with enhanced styling */}
              <Box
                sx={{
                  mt: 4,
                  p: 3,
                  borderRadius: 2,
                  background: alpha(theme.palette.background.default, 0.5),
                  border: `1px solid ${alpha(theme.palette.divider, 0.2)}`,
                  boxShadow: `inset 0 0 20px ${alpha(theme.palette.primary.light, 0.1)}`,
                }}
              >
                {selectedProduct?.customContent &&
                  selectedProduct.customContent(theme)}
              </Box>
            </Box>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default Crmservices;
