'use client';

import React, { useState } from 'react';
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
import Chip from '@mui/material/Chip';
import Fade from '@mui/material/Fade';
import Link from 'next/link';

type ProductDetails = {
  features: string[];
  description?: string;
};

type Product = {
  image: string;
  description: string;
  title: string;
  details: ProductDetails;
  customContent?: JSX.Element;
};

const mock: Product[] = [
  {
    image:
      'https://whatfix.com/blog/wp-content/uploads/2023/07/AI-and-customer-support.png', // Update with your image path
    description: 'AI-powered customer support solution for telecommunications',
    title: 'Customer Support Automation',
    details: {
      description:
        'Implemented AI chatbot to handle high-volume customer inquiries for telecom company',
      features: [
        '40% reduction in response times',
        '30% increase in customer satisfaction scores',
        '25% reduction in operational costs',
        '20% increase in first-contact resolution rates',
        '24/7 automated customer support',
        'Seamless CRM integration',
        'Natural Language Processing (NLP) for query understanding',
      ],
    },
    customContent: (
      <>
        <Box mt={4}>
          <Typography variant="h6" gutterBottom sx={{ mb: 2, fontWeight: 600 }}>
            Client Overview
          </Typography>
          <Typography paragraph>
            A leading telecommunications company faced challenges with high
            volume of repetitive customer inquiries, overwhelming support staff.
          </Typography>

          <Typography
            variant="h6"
            gutterBottom
            sx={{ mb: 2, mt: 3, fontWeight: 600 }}
          >
            Business Requirements
          </Typography>
          <Typography paragraph>
            The client needed an AI-powered solution to handle common queries,
            freeing up human agents for more complex issues.
          </Typography>

          <Typography
            variant="h6"
            gutterBottom
            sx={{ mb: 2, mt: 3, fontWeight: 600 }}
          >
            Solution
          </Typography>
          <Typography paragraph>
            Implemented an AI-powered chatbot integrated with the company&apos;s
            CRM system to provide personalized responses and utilized NLP for
            understanding and responding to customer queries.
          </Typography>
        </Box>
      </>
    ),
  },
  {
    image: 'https://www.pngmart.com/files/6/Healthcare-PNG-Transparent.png', // Update with your image path
    description:
      'Virtual assistant for healthcare appointment scheduling and patient support',
    title: 'Healthcare Virtual Assistant',
    details: {
      description:
        'Deployed AI assistant for hospital appointment scheduling and patient inquiries',
      features: [
        '30% decrease in call center workload',
        '35% increase in patient engagement',
        '25% improvement in operational efficiency',
        '40% reduction in appointment scheduling times',
        'EHR system integration',
        'Machine learning for continuous improvement',
        '24/7 patient support',
      ],
    },
    customContent: (
      <>
        <Box mt={4}>
          <Typography variant="h6" gutterBottom sx={{ mb: 2, fontWeight: 600 }}>
            Client Overview
          </Typography>
          <Typography paragraph>
            A large healthcare provider faced challenges with long wait times
            for appointment scheduling and providing basic information to
            patients.
          </Typography>

          <Typography
            variant="h6"
            gutterBottom
            sx={{ mb: 2, mt: 3, fontWeight: 600 }}
          >
            Business Requirements
          </Typography>
          <Typography paragraph>
            The client needed a virtual assistant to handle scheduling, provide
            medical information, and monitor patient inquiries.
          </Typography>

          <Typography
            variant="h6"
            gutterBottom
            sx={{ mb: 2, mt: 3, fontWeight: 600 }}
          >
            Solution
          </Typography>
          <Typography paragraph>
            Deployed a virtual assistant integrated with the hospital&apos;s EHR
            system, using machine learning to improve responses over time.
          </Typography>
        </Box>
      </>
    ),
  },
  {
    image:
      'https://t4.ftcdn.net/jpg/09/31/49/29/360_F_931492933_hIAKrVpKRIm65JlsTFY3Q17mejirrlWq.jpg',
    description: 'Banking chatbot for account management and financial advice',
    title: 'Financial Services Chatbot',
    details: {
      description:
        'Integrated banking chatbot for account management and financial services',
      features: [
        '20% reduction in call center volume',
        '15% increase in customer satisfaction',
        '10% improvement in customer engagement',
        '25% increase in self-service transactions',
        'Real-time account information',
        'Personalized financial advice',
        'Core banking system integration',
      ],
    },
    customContent: (
      <>
        <Box mt={4}>
          <Typography variant="h6" gutterBottom sx={{ mb: 2, fontWeight: 600 }}>
            Client Overview
          </Typography>
          <Typography paragraph>
            A major financial institution needed to provide clients with quick
            access to account information and transaction history.
          </Typography>

          <Typography
            variant="h6"
            gutterBottom
            sx={{ mb: 2, mt: 3, fontWeight: 600 }}
          >
            Business Requirements
          </Typography>
          <Typography paragraph>
            The client required a chatbot to assist with account management,
            transaction inquiries, and financial advice.
          </Typography>

          <Typography
            variant="h6"
            gutterBottom
            sx={{ mb: 2, mt: 3, fontWeight: 600 }}
          >
            Solution
          </Typography>
          <Typography paragraph>
            Integrated a chatbot with the bank&apos;s core banking system to
            provide real-time account information and personalized financial
            advice.
          </Typography>
        </Box>
      </>
    ),
  },
  {
    image:
      'https://writesonic.com/wp-content/uploads/11ff9846-9395-48bc-b27f-ad0b14dffed6.png', // Update with your image path
    description: 'AI-driven product recommendations and customer support',
    title: 'E-commerce Assistant',
    details: {
      description:
        'Developed AI chatbot for product recommendations and customer support',
      features: [
        '20% increase in average order value',
        '25% reduction in cart abandonment rates',
        '30% improvement in customer satisfaction',
        '15% increase in sales',
        'Product database integration',
        'Personalized recommendations',
        '24/7 customer support',
      ],
    },
    customContent: (
      <>
        <Box mt={4}>
          <Typography variant="h6" gutterBottom sx={{ mb: 2, fontWeight: 600 }}>
            Client Overview
          </Typography>
          <Typography paragraph>
            A leading online retailer needed to provide quick product
            recommendations and answers to common inquiries.
          </Typography>

          <Typography
            variant="h6"
            gutterBottom
            sx={{ mb: 2, mt: 3, fontWeight: 600 }}
          >
            Business Requirements
          </Typography>
          <Typography paragraph>
            The client required an AI-driven chatbot to assist with product
            searches, recommendations, and customer inquiries.
          </Typography>

          <Typography
            variant="h6"
            gutterBottom
            sx={{ mb: 2, mt: 3, fontWeight: 600 }}
          >
            Solution
          </Typography>
          <Typography paragraph>
            Developed a chatbot integrated with the retailer&apos;s product
            database to provide real-time recommendations and customer support.
          </Typography>
        </Box>
      </>
    ),
  },
  {
    image:
      'https://thumbs.dreamstime.com/b/legal-legal-legally-law-lawyer-barrister-wisdom-judgment-112218901.jpg', // Update with your image path
    description: 'AI-driven contract review and compliance system',
    title: 'Legal Document Analysis',
    details: {
      description:
        'Implemented AI system for automated contract reviews and compliance checks',
      features: [
        '60% reduction in contract review times',
        '40% improvement in compliance accuracy',
        '30% increase in operational efficiency',
        'Improved accuracy of contract compliance checks',
        'Document management system integration',
        'Key term identification',
        'Automated compliance verification',
      ],
    },
    customContent: (
      <>
        <Box mt={4}>
          <Typography variant="h6" gutterBottom sx={{ mb: 2, fontWeight: 600 }}>
            Client Overview
          </Typography>
          <Typography paragraph>
            A global law firm faced challenges with time-consuming contract
            reviews and compliance checks.
          </Typography>

          <Typography
            variant="h6"
            gutterBottom
            sx={{ mb: 2, mt: 3, fontWeight: 600 }}
          >
            Business Requirements
          </Typography>
          <Typography paragraph>
            The client needed an AI-driven solution to automate contract
            reviews, identify key terms, and ensure compliance.
          </Typography>

          <Typography
            variant="h6"
            gutterBottom
            sx={{ mb: 2, mt: 3, fontWeight: 600 }}
          >
            Solution
          </Typography>
          <Typography paragraph>
            Implemented an AI-driven document analysis system integrated with
            the firm&apos;s document management system to automate contract
            review processes.
          </Typography>
        </Box>
      </>
    ),
  },
  {
    image:
      'https://emeritus.org/in/wp-content/uploads/sites/3/2023/01/What-is-machine-learning-Definition-types.jpg.optimal.jpg', // Update with your image path
    description: 'AI-powered automated grading system for education',
    title: 'Education Grading System',
    details: {
      description:
        'Developed AI system for automated student assignment grading',
      features: [
        '60% reduction in grading times',
        '40% improvement in grading consistency',
        '30% increase in student satisfaction',
        'Improved accuracy and speed of grading',
        'Learning Management System (LMS) integration',
        'Automated feedback generation',
        'Detailed performance analytics',
      ],
    },
    customContent: (
      <>
        <Box mt={4}>
          <Typography variant="h6" gutterBottom sx={{ mb: 2, fontWeight: 600 }}>
            Client Overview
          </Typography>
          <Typography paragraph>
            A large university faced challenges with manual grading of student
            assignments and exams, which was time-consuming and inconsistent.
          </Typography>

          <Typography
            variant="h6"
            gutterBottom
            sx={{ mb: 2, mt: 3, fontWeight: 600 }}
          >
            Business Requirements
          </Typography>
          <Typography paragraph>
            The client needed an AI-driven solution to automate the grading
            process and provide detailed feedback to students.
          </Typography>

          <Typography
            variant="h6"
            gutterBottom
            sx={{ mb: 2, mt: 3, fontWeight: 600 }}
          >
            Solution
          </Typography>
          <Typography paragraph>
            Implemented an AI-driven document analysis system integrated with
            the university&apos;s learning management system (LMS) to automate
            grading.
          </Typography>
        </Box>
      </>
    ),
  },
];

const Casestudy = (): JSX.Element => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleOpen = (product: Product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProduct(null);
  };

  return (
    <Box
      sx={{
        py: 6,
        px: { xs: 2, sm: 4, md: 6 },
        backgroundColor: alpha(theme.palette.background.default, 0.9),
      }}
    >
      {/* Enhanced Header */}
      <Box textAlign="center" mb={6}>
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 800,
            color: theme.palette.primary.main,
            mb: 2,
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            textShadow: `1px 1px 2px ${alpha(theme.palette.primary.light, 0.3)}`,
          }}
        >
          Our Case Studies
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: theme.palette.text.secondary,
            maxWidth: 800,
            mx: 'auto',
            fontSize: { xs: '1rem', md: '1.1rem' },
          }}
        >
          Explore our successful implementations across various industries
        </Typography>
      </Box>

      {/* Case Study Grid with Hover Effects */}
      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card
              onClick={() => handleOpen(item)}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease-in-out',
                boxShadow: 3,
                borderRadius: 3,
                overflow: 'hidden',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 6,
                  '& .MuiCardMedia-root': {
                    transform: 'scale(1.05)',
                  },
                },
              }}
            >
              <CardMedia
                image={item.image}
                title={item.title}
                sx={{
                  height: 240,
                  transition: 'transform 0.5s ease',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative',
                  '&:before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(to bottom, transparent 60%, ${alpha(theme.palette.common.black, 0.7)})`,
                  },
                }}
              />
              <CardContent
                sx={{
                  flexGrow: 1,
                  background: `linear-gradient(${alpha(theme.palette.background.paper, 0.9)}, ${alpha(theme.palette.background.paper, 0.9)})`,
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {item.description}
                </Typography>
                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    mt: 'auto',
                    borderColor: theme.palette.primary.main,
                    color: theme.palette.primary.main,
                    '&:hover': {
                      backgroundColor: alpha(theme.palette.primary.main, 0.1),
                      borderColor: theme.palette.primary.dark,
                    },
                  }}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Enhanced Modal with Better Styling */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="case-study-modal"
        closeAfterTransition
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(8px)',
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: 'relative',
              width: { xs: '95%', sm: '90%', md: '85%', lg: '80%' },
              maxWidth: 1200,
              maxHeight: '90vh',
              overflowY: 'auto',
              bgcolor: 'background.paper',
              boxShadow: 24,
              borderRadius: 3,
              p: { xs: 2, md: 4 },
              outline: 'none',
              border: `2px solid ${alpha(theme.palette.primary.main, 0.2)}`,
              '&::-webkit-scrollbar': {
                width: '8px',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: alpha(theme.palette.primary.main, 0.4),
                borderRadius: '4px',
              },
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
                backgroundColor: alpha(theme.palette.error.main, 0.8),
                zIndex: 1,
                width: 40,
                height: 40,
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: theme.palette.error.main,
                  transform: 'rotate(90deg)',
                },
              }}
            >
              <CloseIcon />
            </IconButton>

            {selectedProduct && (
              <Box>
                {/* Header Section */}
                <Box
                  sx={{
                    mb: 4,
                    pb: 3,
                    borderBottom: `1px solid ${alpha(theme.palette.divider, 0.2)}`,
                    textAlign: 'center',
                  }}
                >
                  <Chip
                    label="Case Study"
                    color="primary"
                    size="small"
                    sx={{
                      mb: 2,
                      fontWeight: 600,
                      px: 1,
                      py: 0.5,
                    }}
                  />
                  <Typography
                    variant="h3"
                    component="h2"
                    gutterBottom
                    sx={{
                      fontWeight: 800,
                      color: theme.palette.primary.main,
                      fontSize: { xs: '1.8rem', md: '2.4rem' },
                      lineHeight: 1.2,
                    }}
                  >
                    {selectedProduct.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontSize: '1.1rem',
                      color: theme.palette.text.secondary,
                      maxWidth: '80%',
                      mx: 'auto',
                    }}
                  >
                    {selectedProduct.details.description ||
                      selectedProduct.description}
                  </Typography>
                </Box>

                <Grid container spacing={4}>
                  <Grid item xs={12} md={6}>
                    <Box
                      sx={{
                        mb: 4,
                        p: 4,
                        backgroundColor: alpha(
                          theme.palette.primary.light,
                          0.05,
                        ),
                        borderRadius: 3,
                        borderLeft: `4px solid ${theme.palette.primary.main}`,
                        boxShadow: 1,
                        height: '100%',
                      }}
                    >
                      <Typography
                        variant="h5"
                        gutterBottom
                        sx={{
                          fontWeight: 700,
                          mb: 3,
                          color: theme.palette.primary.dark,
                          display: 'flex',
                          alignItems: 'center',
                          '&:after': {
                            content: '""',
                            flexGrow: 1,
                            height: '1px',
                            backgroundColor: alpha(theme.palette.divider, 0.3),
                            ml: 2,
                          },
                        }}
                      >
                        Key Results
                      </Typography>
                      <Box
                        component="ul"
                        sx={{
                          pl: 0,
                          '& li': {
                            mb: 2,
                            pl: 0,
                            display: 'flex',
                            alignItems: 'flex-start',
                            '&:before': {
                              content: '""',
                              display: 'inline-block',
                              width: 8,
                              height: 8,
                              backgroundColor: theme.palette.primary.main,
                              borderRadius: '50%',
                              mt: 1,
                              mr: 2,
                              flexShrink: 0,
                            },
                          },
                        }}
                      >
                        {selectedProduct.details.features.map(
                          (feature, index) => (
                            <li key={index}>
                              <Typography variant="body1">{feature}</Typography>
                            </li>
                          ),
                        )}
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box
                      sx={{
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        borderRadius: 3,
                        overflow: 'hidden',
                        boxShadow: 3,
                        '&:hover img': {
                          transform: 'scale(1.03)',
                        },
                      }}
                    >
                      <Box
                        component="img"
                        src={selectedProduct.image}
                        alt={selectedProduct.title}
                        sx={{
                          width: '100%',
                          height: 'auto',
                          minHeight: 350,
                          objectFit: 'cover',
                          transition: 'transform 0.5s ease',
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: '40%',
                          background: `linear-gradient(to top, ${alpha(theme.palette.common.black, 0.7)}, transparent)`,
                        }}
                      />
                    </Box>
                  </Grid>
                </Grid>

                {/* Custom Content Section */}
                <Box
                  sx={{
                    mt: 6,
                    p: 4,
                    backgroundColor: alpha(
                      theme.palette.background.default,
                      0.5,
                    ),
                    borderRadius: 3,
                    boxShadow: 1,
                  }}
                >
                  {selectedProduct.customContent}
                </Box>

                {/* Footer with CTA */}
                <Box
                  sx={{
                    mt: 6,
                    pt: 4,
                    borderTop: `1px solid ${alpha(theme.palette.divider, 0.2)}`,
                    textAlign: 'center',
                  }}
                >
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: 600, mb: 3 }}
                  >
                    Interested in a similar solution for your business?
                  </Typography>
                  <Link href="ContactUs">
                    <Button
                      variant="contained"
                      size="large"
                      color="primary"
                      sx={{
                        px: 6,
                        py: 1.5,
                        fontWeight: 600,
                        borderRadius: 2,
                        boxShadow: `0 4px 20px ${alpha(theme.palette.primary.main, 0.2)}`,
                        '&:hover': {
                          boxShadow: `0 6px 24px ${alpha(theme.palette.primary.main, 0.3)}`,
                          transform: 'translateY(-2px)',
                        },
                      }}
                    >
                      Contact Our Team
                      {/* Contact Our Team */}
                    </Button>
                  </Link>
                </Box>
              </Box>
            )}
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default Casestudy;
