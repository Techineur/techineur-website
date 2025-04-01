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
import { Theme } from '@mui/material/styles';

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
    image: 'https://whatfix.com/blog/wp-content/uploads/2023/07/AI-and-customer-support.png', // Update with your image path
    description: 'AI-powered customer support solution for telecommunications',
    title: 'Customer Support Automation',
    details: {
      description: 'Implemented AI chatbot to handle high-volume customer inquiries for telecom company',
      features: [
        '40% reduction in response times',
        '30% increase in customer satisfaction scores',
        '25% reduction in operational costs',
        '20% increase in first-contact resolution rates',
        '24/7 automated customer support',
        'Seamless CRM integration',
        'Natural Language Processing (NLP) for query understanding'
      ]
    },
    customContent: (
      <>
        <Box mt={4}>
          <Typography variant="h6" gutterBottom sx={{ mb: 2, fontWeight: 600 }}>
            Client Overview
          </Typography>
          <Typography paragraph>
            A leading telecommunications company faced challenges with high volume of repetitive customer 
            inquiries, overwhelming support staff.
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ mb: 2, mt: 3, fontWeight: 600 }}>
            Business Requirements
          </Typography>
          <Typography paragraph>
            The client needed an AI-powered solution to handle common queries, freeing up human agents
            for more complex issues.
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ mb: 2, mt: 3, fontWeight: 600 }}>
            Solution
          </Typography>
          <Typography paragraph>
            Implemented an AI-powered chatbot integrated with the company's CRM system to provide personalized
            responses and utilized NLP for understanding and responding to customer queries.
          </Typography>
        </Box>
      </>
    )
  },
  {
    image: 'https://www.pngmart.com/files/6/Healthcare-PNG-Transparent.png', // Update with your image path
    description: 'Virtual assistant for healthcare appointment scheduling and patient support',
    title: 'Healthcare Virtual Assistant',
    details: {
      description: 'Deployed AI assistant for hospital appointment scheduling and patient inquiries',
      features: [
        '30% decrease in call center workload',
        '35% increase in patient engagement',
        '25% improvement in operational efficiency',
        '40% reduction in appointment scheduling times',
        'EHR system integration',
        'Machine learning for continuous improvement',
        '24/7 patient support'
      ]
    },
    customContent: (
      <>
        <Box mt={4}>
          <Typography variant="h6" gutterBottom sx={{ mb: 2, fontWeight: 600 }}>
            Client Overview
          </Typography>
          <Typography paragraph>
            A large healthcare provider faced challenges with long wait times for appointment
            scheduling and providing basic information to patients.
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ mb: 2, mt: 3, fontWeight: 600 }}>
            Business Requirements
          </Typography>
          <Typography paragraph>
            The client needed a virtual assistant to handle scheduling, provide medical
            information, and monitor patient inquiries.
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ mb: 2, mt: 3, fontWeight: 600 }}>
            Solution
          </Typography>
          <Typography paragraph>
            Deployed a virtual assistant integrated with the hospital's EHR system, using machine learning to
            improve responses over time.
          </Typography>
        </Box>
      </>
    )
  },
  {
    image: 'https://t4.ftcdn.net/jpg/09/31/49/29/360_F_931492933_hIAKrVpKRIm65JlsTFY3Q17mejirrlWq.jpg',
   description: 'Banking chatbot for account management and financial advice',
    title: 'Financial Services Chatbot',
    details: {
      description: 'Integrated banking chatbot for account management and financial services',
      features: [
        '20% reduction in call center volume',
        '15% increase in customer satisfaction',
        '10% improvement in customer engagement',
        '25% increase in self-service transactions',
        'Real-time account information',
        'Personalized financial advice',
        'Core banking system integration'
      ]
    },
    customContent: (
      <>
        <Box mt={4}>
          <Typography variant="h6" gutterBottom sx={{ mb: 2, fontWeight: 600 }}>
            Client Overview
          </Typography>
          <Typography paragraph>
            A major financial institution needed to provide clients with quick access to account information
            and transaction history.
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ mb: 2, mt: 3, fontWeight: 600 }}>
            Business Requirements
          </Typography>
          <Typography paragraph>
            The client required a chatbot to assist with account management, transaction
            inquiries, and financial advice.
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ mb: 2, mt: 3, fontWeight: 600 }}>
            Solution
          </Typography>
          <Typography paragraph>
            Integrated a chatbot with the bank's core banking system to provide real-time account information
            and personalized financial advice.
          </Typography>
        </Box>
      </>
    )
  },
  {
    image: 'https://writesonic.com/wp-content/uploads/11ff9846-9395-48bc-b27f-ad0b14dffed6.png', // Update with your image path
    description: 'AI-driven product recommendations and customer support',
    title: 'E-commerce Assistant',
    details: {
      description: 'Developed AI chatbot for product recommendations and customer support',
      features: [
        '20% increase in average order value',
        '25% reduction in cart abandonment rates',
        '30% improvement in customer satisfaction',
        '15% increase in sales',
        'Product database integration',
        'Personalized recommendations',
        '24/7 customer support'
      ]
    },
    customContent: (
      <>
        <Box mt={4}>
          <Typography variant="h6" gutterBottom sx={{ mb: 2, fontWeight: 600 }}>
            Client Overview
          </Typography>
          <Typography paragraph>
            A leading online retailer needed to provide quick product recommendations and answers to
            common inquiries.
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ mb: 2, mt: 3, fontWeight: 600 }}>
            Business Requirements
          </Typography>
          <Typography paragraph>
            The client required an AI-driven chatbot to assist with product searches,
            recommendations, and customer inquiries.
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ mb: 2, mt: 3, fontWeight: 600 }}>
            Solution
          </Typography>
          <Typography paragraph>
            Developed a chatbot integrated with the retailer's product database to provide real-time
            recommendations and customer support.
          </Typography>
        </Box>
      </>
    )
  },
  {
    image: 'https://thumbs.dreamstime.com/b/legal-legal-legally-law-lawyer-barrister-wisdom-judgment-112218901.jpg', // Update with your image path
    description: 'AI-driven contract review and compliance system',
    title: 'Legal Document Analysis',
    details: {
      description: 'Implemented AI system for automated contract reviews and compliance checks',
      features: [
        '60% reduction in contract review times',
        '40% improvement in compliance accuracy',
        '30% increase in operational efficiency',
        'Improved accuracy of contract compliance checks',
        'Document management system integration',
        'Key term identification',
        'Automated compliance verification'
      ]
    },
    customContent: (
      <>
        <Box mt={4}>
          <Typography variant="h6" gutterBottom sx={{ mb: 2, fontWeight: 600 }}>
            Client Overview
          </Typography>
          <Typography paragraph>
            A global law firm faced challenges with time-consuming contract reviews and compliance checks.
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ mb: 2, mt: 3, fontWeight: 600 }}>
            Business Requirements
          </Typography>
          <Typography paragraph>
            The client needed an AI-driven solution to automate contract reviews, identify key terms, and
            ensure compliance.
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ mb: 2, mt: 3, fontWeight: 600 }}>
            Solution
          </Typography>
          <Typography paragraph>
            Implemented an AI-driven document analysis system integrated with the firm's document management
            system to automate contract review processes.
          </Typography>
        </Box>
      </>
    )
  },
  {
    image: 'https://emeritus.org/in/wp-content/uploads/sites/3/2023/01/What-is-machine-learning-Definition-types.jpg.optimal.jpg', // Update with your image path
    description: 'AI-powered automated grading system for education',                    
    title: 'Education Grading System',
    details: {
      description: 'Developed AI system for automated student assignment grading',
      features: [
        '60% reduction in grading times',
        '40% improvement in grading consistency',
        '30% increase in student satisfaction',
        'Improved accuracy and speed of grading',
        'Learning Management System (LMS) integration',
        'Automated feedback generation',
        'Detailed performance analytics'
      ]
    },
    customContent: (
      <>
        <Box mt={4}>
          <Typography variant="h6" gutterBottom sx={{ mb: 2, fontWeight: 600 }}>
            Client Overview
          </Typography>
          <Typography paragraph>
            A large university faced challenges with manual grading of student assignments and exams,
            which was time-consuming and inconsistent.
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ mb: 2, mt: 3, fontWeight: 600 }}>
            Business Requirements
          </Typography>
          <Typography paragraph>
            The client needed an AI-driven solution to automate the grading process and provide
            detailed feedback to students.
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ mb: 2, mt: 3, fontWeight: 600 }}>
            Solution
          </Typography>
          <Typography paragraph>
            Implemented an AI-driven document analysis system integrated with the university's learning
            management system (LMS) to automate grading.
          </Typography>
        </Box>
      </>
    )
  }
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
    <Box>
        {/* Add the heading here */}
      <Typography 
        variant="h3" 
        component="h2" 
        align="center"
        gutterBottom
        sx={{
          fontWeight: 700,
          mb: 4,
          color: theme.palette.primary.main
        }}
      >
        Case Studies
      </Typography>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        flexDirection={{ xs: 'column', sm: 'row' }}
        marginBottom={0}
      >
      </Box>

      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Box
              onClick={() => handleOpen(item)}
              display={'block'}
              width={1}
              height={1}
              sx={{
                textDecoration: 'none',
                transition: 'all .2s ease-in-out',
                cursor: 'pointer',
                '&:hover': {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
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
                  p: 2
                }}
              >
                <CardMedia
                  image={item.image}
                  title={item.title}
                  sx={{
                    height: { xs: 300, md: 360 },
                    position: 'relative',
                    borderRadius: 1
                  }}
                />
                <Box component={CardContent} position={'relative'} sx={{ p: 3 }}>
                  <Typography variant={'h6'} gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {item.description}
                  </Typography>
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
          backdropFilter: 'blur(4px)'
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
            boxShadow: 24,
            borderRadius: 3,
            p: { xs: 3, md: 4 },
            outline: 'none',
            border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
            '&:focus': {
              outline: 'none'
            }
          }}
        >
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'fixed',
              right: { xs: 20, md: 30 },
              top: { xs: 20, md: 30 },
              color: theme.palette.grey[500],
              backgroundColor: alpha(theme.palette.background.paper, 0.9),
              zIndex: 1,
              width: 40,
              height: 40,
              '&:hover': {
                backgroundColor: theme.palette.error.light,
                color: theme.palette.error.contrastText
              }
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
                  borderBottom: `1px solid ${theme.palette.divider}`
                }}
              >
                <Typography 
                  variant="h3" 
                  component="h2" 
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    color: theme.palette.primary.main
                  }}
                >
                  {selectedProduct.title}
                </Typography>
                <Typography 
                  variant="subtitle1" 
                  sx={{
                    fontSize: '1.1rem',
                    color: theme.palette.text.secondary
                  }}
                >
                  {selectedProduct.details.description || selectedProduct.description}
                </Typography>
              </Box>

              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      mb: 4,
                      p: 3,
                      backgroundColor: alpha(theme.palette.primary.light, 0.05),
                      borderRadius: 2,
                      borderLeft: `4px solid ${theme.palette.primary.main}`
                    }}
                  >
                    <Typography 
                      variant="h5" 
                      gutterBottom
                      sx={{
                        fontWeight: 600,
                        mb: 2
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
                          '&:before': {
                            content: '"•"',
                            color: theme.palette.primary.main,
                            position: 'absolute',
                            left: -15,
                            fontSize: '1.2rem'
                          }
                        }
                      }}
                    >
                      {selectedProduct.details.features.map((feature, index) => (
                        <li key={index}>
                          <Typography>{feature}</Typography>
                        </li>
                      ))}
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
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
                        border: `1px solid ${theme.palette.divider}`
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>

              {/* Custom Content Section */}
              <Box sx={{ mt: 4 }}>
                {selectedProduct.customContent}
              </Box>
            </Box>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default Casestudy;