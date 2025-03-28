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
  additionalImages: string[];
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
    image: 'https://assets.maccarianagency.com/backgrounds/img23.jpg',
    description: 'The application that provides end-to-end solutions for restaurant food ordering systems',
    title: 'BOUFFAGE - A Restaurant Application',
    details: {
      description: 'Comprehensive restaurant ordering and table reservation platform',
      features: [
        'Customer authentication and authorization',
        'Customer profile management with coupon programme',
        'Listing of restaurants for user selection',
        'Provision of menu across all restaurants',
        'Ordering system with cart functionality',
        'Past orders with repeat order feature',
        'Integration with UPI Payments',
        'Order and delivery tracking',
        'Table reservation functionality'
      ],
      additionalImages: [
        'https://techineur.com/assets/img/products/bouffagecustomer/img2.png',
        'https://techineur.com/assets/img/products/bouffagecustomer/img4.png',
        'https://techineur.com/assets/img/products/bouffagecustomer/img1.png',
        'https://techineur.com/assets/img/products/bouffagecustomer/img3.png'
      ]
    },
    customContent: (
      <>
        <Box mt={4}>
          <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
            Restaurant Booking Process
          </Typography>
          
          <Box sx={{ 
            backgroundColor: theme => alpha(theme.palette.primary.light, 0.1),
            p: 3,
            borderRadius: 2,
            mb: 3,
            borderLeft: (theme: Theme) => `4px solid ${theme.palette.primary.main}`
          }}>
            <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
              Reserve in 2 easy steps:
            </Typography>
            <Box component="ol" sx={{ pl: 2 }}>
              <li><Typography>Select the "Dine In" option and enter reservation details</Typography></li>
              <li><Typography>Wait for restaurant confirmation and table allotment</Typography></li>
              <li><Typography>Receive instant booking confirmation via app notification</Typography></li>
            </Box>
          </Box>

          <Box sx={{ 
            backgroundColor: theme => alpha(theme.palette.secondary.light, 0.1),
            p: 3,
            borderRadius: 2,
            mb: 3,
            borderLeft: (theme: Theme) => `4px solid ${theme.palette.primary.main}`
          }}>
            <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
              Dine in 3 easy steps:
            </Typography>
            <Box component="ol" sx={{ pl: 2 }}>
              <li><Typography>Arrive on time and present digital reservation</Typography></li>
              <li><Typography>Order from menu and enjoy your meal</Typography></li>
              <li><Typography>Flexible payment options including corporate billing</Typography></li>
            </Box>
          </Box>

          <Box sx={{ 
            backgroundColor: theme => alpha(theme.palette.success.light, 0.1),
            p: 3,
            borderRadius: 2,
            borderLeft: (theme: Theme) => `4px solid ${theme.palette.primary.main}`
          }}>
            <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
              Unique Feature:
            </Typography>
            <Typography>
              Corporate teams can have management pay directly through the app, eliminating reimbursement paperwork.
            </Typography>
          </Box>
        </Box>
      </>
    )
  },
  {
    image: 'https://assets.maccarianagency.com/backgrounds/img24.jpg',
    description: 'Comprehensive spa management solution for appointment booking and operations',
    title: 'SPA Management',
    details: {
      description: 'End-to-end spa business management platform',
      features: [
        'Appointment scheduling',
        'Customer check-in system',
        'Payment processing',
        'Staff management',
        'Multi-location support',
        'Integrated POS system',
        'Automated email receipts',
        'Client history tracking'
      ],
      additionalImages: [
        'https://techineur.com/assets/img/products/spa/1.png',
        'https://techineur.com/assets/img/products/spa/2.png'
      ]
    },
    customContent: (
      <>
        <Box mt={4}>
          <Typography variant="h6" gutterBottom>
            Complete Spa Management Solution
          </Typography>
          
          <Typography paragraph>
            Our application is designed to help Spa management teams handle the entire customer journey:
            booking appointments, customer check-in, treatment management, check-out, billing, 
            emailing invoices, payment collection, and maintaining customer history.
          </Typography>

          <Box sx={{ 
            backgroundColor: theme => alpha(theme.palette.info.light, 0.1),
            p: 3,
            borderRadius: 2,
            mb: 3
          }}>
            <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
              Core Functionality:
            </Typography>
            <ul>
              <li><Typography>Streamlined appointment software makes scheduling easy</Typography></li>
              <li><Typography>Block time off and accept online booking appointments</Typography></li>
              <li><Typography>View all therapists availability on demand</Typography></li>
              <li><Typography>Schedule appointments based on availability</Typography></li>
              <li><Typography>Multi-Tenancy support for 25+ spa locations</Typography></li>
              <li><Typography>Integrated Spa point of sale (POS) system</Typography></li>
              <li><Typography>Process credit card transactions with mobile reader</Typography></li>
              <li><Typography>Automated email receipts to reduce paper use</Typography></li>
            </ul>
          </Box>

          <Box sx={{ 
            backgroundColor: theme => alpha(theme.palette.success.light, 0.1),
            p: 3,
            borderRadius: 2,
            mb: 3
          }}>
            <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
              Client Management:
            </Typography>
            <ul>
              <li><Typography>View full client history including past services</Typography></li>
              <li><Typography>Track upcoming appointments</Typography></li>
              <li><Typography>Send texts or emails directly from the app</Typography></li>
              <li><Typography>Maintain up-to-date client records</Typography></li>
            </ul>
          </Box>

          <Box sx={{ 
            backgroundColor: theme => alpha(theme.palette.warning.light, 0.1),
            p: 3,
            borderRadius: 2
          }}>
            <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
              Business Benefits:
            </Typography>
            <ul>
              <li><Typography>Increase daily bookings and boost sales</Typography></li>
              <li><Typography>Eliminate empty seats and time slots</Typography></li>
              <li><Typography>Attract new customers with last-minute deals</Typography></li>
              <li><Typography>Mobile device compatible - no expensive software needed</Typography></li>
              <li><Typography>Improve customer retention with better service</Typography></li>
            </ul>
          </Box>
        </Box>
      </>
    )
  },
  {
    image: 'https://assets.maccarianagency.com/backgrounds/img25.jpg',
    description: 'Field sales management application for tracking customer visits',
    title: 'Sales Order App',
    details: {
      description: 'Mobile solution for field sales teams',
      features: [
        'Customer visit tracking',
        'GPS position monitoring',
        'Timesheet and expense recording',
        'Photo reports and visit notes',
        'Route optimization',
        'Real-time reporting',
        'Mileage tracking',
        'Offline capability'
      ],
      additionalImages: [
        'https://techineur.com/assets/img/products/salesorder/1.png'
      ]
    },
    customContent: (
      <>
        <Box mt={4}>
          <Typography variant="h6" gutterBottom>
            Field Sales Management Solution
          </Typography>
          
          <Typography paragraph>
            This application helps managers track field representatives' customer visits through 
            smartphones, with real-time GPS tracking and comprehensive visit reporting.
          </Typography>

          <Box sx={{ 
            backgroundColor: theme => alpha(theme.palette.primary.light, 0.1),
            p: 3,
            borderRadius: 2,
            mb: 3
          }}>
            <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
              Manager Dashboard:
            </Typography>
            <ul>
              <li><Typography>View reps GPS positions in real-time</Typography></li>
              <li><Typography>Monitor check-in times at each location</Typography></li>
              <li><Typography>Track visit completion status</Typography></li>
              <li><Typography>Review timesheets, expenses, and mileage</Typography></li>
              <li><Typography>Access photo reports and visit notes</Typography></li>
              <li><Typography>Generate performance analytics</Typography></li>
              <li><Typography>Optimize territory assignments</Typography></li>
            </ul>
          </Box>

          <Box sx={{ 
            backgroundColor: theme => alpha(theme.palette.secondary.light, 0.1),
            p: 3,
            borderRadius: 2
          }}>
            <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
              Field Representative Tools:
            </Typography>
            <ul>
              <li><Typography>Plan and optimize customer routes</Typography></li>
              <li><Typography>Record mileage and business expenses</Typography></li>
              <li><Typography>Capture and share photos/notes during visits</Typography></li>
              <li><Typography>Check-in/check-out at customer locations</Typography></li>
              <li><Typography>Submit orders directly from the field</Typography></li>
              <li><Typography>Access customer history and preferences</Typography></li>
              <li><Typography>Work offline with automatic sync when connected</Typography></li>
            </ul>
          </Box>
        </Box>
      </>
    )
  },
  {
    image: 'https://assets.maccarianagency.com/backgrounds/img23.jpg',
    description: 'Employees can capture their expenses while on move and submit the expense report for approval to the manager.',
    title: 'EXPENSES',
    details: {
      description: 'A comprehensive expense management solution for employees on the go.',
      features: [
        'Expense capture with receipt scanning',
        'Automatic categorization',
        'Policy compliance checks',
        'Multi-level approval workflows',
        'Real-time reporting',
        'Integration with accounting systems',
        'Mobile and web access'
      ],
      additionalImages: [
        'https://www.techineur.com/assets/img/products/expenses/1.png',
        'https://www.techineur.com/assets/img/products/expenses/2.png'
      ]
    },
    customContent: (  
      <>
        <Box mt={4}>
          <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
            Expense Management Process
          </Typography>
          
          <Box sx={{ 
            backgroundColor: theme => alpha(theme.palette.primary.light, 0.1),
            p: 3,
            borderRadius: 2,
            mb: 3,
            borderLeft: (theme: Theme) => `4px solid ${theme.palette.primary.main}`
          }}>
            <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
              How It Works:
            </Typography>
            <Box component="ol" sx={{ pl: 2 }}>
              <li><Typography>Capture expenses with receipts using mobile camera</Typography></li>
              <li><Typography>Categorize expenses by type (travel, meals, etc.)</Typography></li>
              <li><Typography>Submit expense reports with one click</Typography></li>
              <li><Typography>Real-time approval tracking from managers</Typography></li>
              <li><Typography>Direct reimbursement processing</Typography></li>
            </Box>
          </Box>

          <Box sx={{ 
            backgroundColor: theme => alpha(theme.palette.success.light, 0.1),
            p: 3,
            borderRadius: 2,
            borderLeft: (theme: Theme) => `4px solid ${theme.palette.success.main}`
          }}>
            <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
              Key Benefits:
            </Typography>
            <ul>
              <li><Typography>Eliminates paper receipts and manual forms</Typography></li>
              <li><Typography>Reduces expense report processing time by 70%</Typography></li>
              <li><Typography>Policy compliance built into submission process</Typography></li>
              <li><Typography>Real-time visibility into expense status</Typography></li>
            </ul>
          </Box>
        </Box>
      </>
    )
  },
  {
    image: 'https://assets.maccarianagency.com/backgrounds/img24.jpg',
    description: 'Application designed to help the tenants of apartments raise complaints against the various call-logs',
    title: 'HOME SERVICE MANAGEMENT SYSTEM',
    details: {
      description: 'Streamlined maintenance request system for apartment complexes.',
      features: [
        'Maintenance request submission',
        'Photo documentation',
        'Priority classification',
        'Status tracking',
        'Communication portal',
        'Vendor management',
        'Reporting dashboard'
      ],
      additionalImages: [
        'https://www.techineur.com/assets/img/products/ems/1.png',
        'https://www.techineur.com/assets/img/products/ems/2.png',
        'https://www.techineur.com/assets/img/products/ems/3.png'
      ]
    },
    customContent: (
      <>
        <Box mt={4}>
          <Typography variant="h6" gutterBottom>
            Complete Maintenance Solution
          </Typography>
          
          <Typography paragraph>
            Our system provides tenants with an easy way to report issues and track maintenance requests,
            while giving property managers powerful tools to manage work orders efficiently.
          </Typography>

          <Box sx={{ 
            backgroundColor: theme => alpha(theme.palette.info.light, 0.1),
            p: 3,
            borderRadius: 2,
            mb: 3
          }}>
            <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
              Tenant Features:
            </Typography>
            <ul>
              <li><Typography>Submit maintenance requests with photos</Typography></li>
              <li><Typography>Track request status in real-time</Typography></li>
              <li><Typography>Communicate directly with maintenance staff</Typography></li>
              <li><Typography>View request history and resolutions</Typography></li>
            </ul>
          </Box>

          <Box sx={{ 
            backgroundColor: theme => alpha(theme.palette.warning.light, 0.1),
            p: 3,
            borderRadius: 2
          }}>
            <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
              Management Benefits:
            </Typography>
            <ul>
              <li><Typography>Prioritize and assign work orders efficiently</Typography></li>
              <li><Typography>Track response times and completion rates</Typography></li>
              <li><Typography>Generate reports on common issues</Typography></li>
              <li><Typography>Integrate with vendor management systems</Typography></li>
            </ul>
          </Box>
        </Box>
      </>
    )
  },
  {
    image: 'https://assets.maccarianagency.com/backgrounds/img25.jpg',
    description: 'Bouffage staff application can be used by restaurants to manage their table bookings and reservations',
    title: 'BOUFFAGE STAFF APP',
    details: {
      description: 'Restaurant management solution for front-of-house operations.',
      features: [
        'Table management',
        'Reservation system',
        'Waitlist tracking',
        'Customer profiles',
        'Order management',
        'Payment processing',
        'Performance analytics'
      ],
      additionalImages: [
        'https://www.techineur.com/assets/img/products/bouffagestaff/1.png',
        'https://www.techineur.com/assets/img/products/bouffagestaff/2.png'
      ]
    },
    customContent: (
      <>
        <Box mt={4}>
          <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
            Restaurant Management Features
          </Typography>
          
          <Box sx={{ 
            backgroundColor: theme => alpha(theme.palette.secondary.light, 0.1),
            p: 3,
            borderRadius: 2,
            mb: 3,
            borderLeft: (theme: Theme) => `4px solid ${theme.palette.secondary.main}`
          }}>
            <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
              Core Functionality:
            </Typography>
            <ul>
              <li><Typography>Real-time table management and reservations</Typography></li>
              <li><Typography>Waitlist management with automatic notifications</Typography></li>
              <li><Typography>Customer profile and preference tracking</Typography></li>
              <li><Typography>Integrated with Bouffage customer app</Typography></li>
            </ul>
          </Box>

          <Box sx={{ 
            backgroundColor: theme => alpha(theme.palette.success.light, 0.1),
            p: 3,
            borderRadius: 2,
            borderLeft: (theme: Theme) => `4px solid ${theme.palette.success.main}`
          }}>
            <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
              Business Benefits:
            </Typography>
            <ul>
              <li><Typography>Increase table turnover with optimized seating</Typography></li>
              <li><Typography>Improve customer experience with personalized service</Typography></li>
              <li><Typography>Reduce no-shows with automated confirmations</Typography></li>
              <li><Typography>Gain insights into customer preferences and behavior</Typography></li>
            </ul>
          </Box>
        </Box>
      </>
    )
  }
];

const OurProducts = (): JSX.Element => {
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

              {/* Screenshots Section */}
              {selectedProduct.details.additionalImages.length > 0 && (
                <Box sx={{ mt: 6 }}>
                  <Typography 
                    variant="h5" 
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      mb: 3
                    }}
                  >
                    Screenshots
                  </Typography>
                  <Grid container spacing={3}>
                    {selectedProduct.details.additionalImages.map((img, index) => (
                      <Grid item xs={12} sm={6} key={index}>
                        <Box
                          sx={{
                            p: 1,
                            backgroundColor: alpha(theme.palette.background.default, 0.5),
                            borderRadius: 2,
                            boxShadow: 1,
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              boxShadow: 3,
                              transform: 'translateY(-4px)'
                            }
                          }}
                        >
                          <Box
                            component="img"
                            src={img}
                            alt={`${selectedProduct.title} screenshot ${index + 1}`}
                            sx={{
                              width: '100%',
                              height: 'auto',
                              maxHeight: 300,
                              borderRadius: 1,
                              objectFit: 'contain',
                              display: 'block'
                            }}
                          />
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              )}
            </Box>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default OurProducts;