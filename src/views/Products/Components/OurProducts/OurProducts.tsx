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
    description:
      'The application that provides end-to-end solutions for restaurant food ordering systems',
    title: 'BOUFFAGE - A Restaurant Application',
    details: {
      description:
        'Comprehensive restaurant ordering and table reservation platform',
      features: [
        'Customer authentication and authorization',
        'Customer profile management with coupon programme',
        'Listing of restaurants for user selection',
        'Provision of menu across all restaurants',
        'Ordering system with cart functionality',
        'Past orders with repeat order feature',
        'Integration with UPI Payments',
        'Order and delivery tracking',
        'Table reservation functionality',
      ],
      additionalImages: [
        'https://techineur.com/assets/img/products/bouffagecustomer/img2.png',
        'https://techineur.com/assets/img/products/bouffagecustomer/img4.png',
        'https://techineur.com/assets/img/products/bouffagecustomer/img1.png',
        'https://techineur.com/assets/img/products/bouffagecustomer/img3.png',
      ],
    },
    customContent: (
      <>
        <Box mt={4}>
          <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
            Restaurant Booking Process
          </Typography>

          <Box
            sx={{
              backgroundColor: (theme) =>
                alpha(theme.palette.primary.light, 0.1),
              p: 3,
              borderRadius: 2,
              mb: 3,
              borderLeft: (theme: Theme) =>
                `4px solid ${theme.palette.primary.main}`,
            }}
          >
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{ fontWeight: 600 }}
            >
              Reserve in 2 easy steps:
            </Typography>
            <Box component="ol" sx={{ pl: 2 }}>
              <li>
                <Typography>
                  Select the &ldquo;Dine In&rdquo; option and enter reservation
                  details
                </Typography>
              </li>
              <li>
                <Typography>
                  Wait for restaurant confirmation and table allotment
                </Typography>
              </li>
              <li>
                <Typography>
                  Receive instant booking confirmation via app notification
                </Typography>
              </li>
            </Box>
          </Box>

          <Box
            sx={{
              backgroundColor: (theme) =>
                alpha(theme.palette.secondary.light, 0.1),
              p: 3,
              borderRadius: 2,
              mb: 3,
              borderLeft: (theme: Theme) =>
                `4px solid ${theme.palette.primary.main}`,
            }}
          >
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{ fontWeight: 600 }}
            >
              Dine in 3 easy steps:
            </Typography>
            <Box component="ol" sx={{ pl: 2 }}>
              <li>
                <Typography>
                  Arrive on time and present digital reservation
                </Typography>
              </li>
              <li>
                <Typography>Order from menu and enjoy your meal</Typography>
              </li>
              <li>
                <Typography>
                  Flexible payment options including corporate billing
                </Typography>
              </li>
            </Box>
          </Box>

          <Box
            sx={{
              backgroundColor: (theme) =>
                alpha(theme.palette.success.light, 0.1),
              p: 3,
              borderRadius: 2,
              borderLeft: (theme: Theme) =>
                `4px solid ${theme.palette.primary.main}`,
            }}
          >
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{ fontWeight: 600 }}
            >
              Unique Feature:
            </Typography>
            <Typography>
              Corporate teams can have management pay directly through the app,
              eliminating reimbursement paperwork.
            </Typography>
          </Box>
        </Box>
      </>
    ),
  },
  {
    image: 'https://assets.maccarianagency.com/backgrounds/img24.jpg',
    description:
      'Comprehensive telehealth solution connecting patients with healthcare providers',
    title: 'eTeleHealth Application',
    details: {
      description:
        'A complete healthcare management platform for patients and providers',
      features: [
        'Cross-platform Flutter application',
        'Digital forms with client-side validation',
        'Health plan information dashboard',
        'Dependent registration system',
        'QR code generation for access',
        'Face-to-face consultation approval',
        'In-app doctor chat feature',
        'Lab/diagnostic test approvals',
        'Rapid Antibody Testing scheduling',
        'Maternity benefits tracking',
        'Utilization tracking system',
        'Reimbursement status tracking',
        'Healthcare provider search',
        'MediCard Perks for discounts',
      ],
      additionalImages: [
        'https://techineur.com/assets/img/products/spa/1.png',
        'https://techineur.com/assets/img/products/spa/2.png',
      ],
    },
    customContent: (
      <>
        <Box mt={4}>
          <Typography variant="h6" gutterBottom>
            Complete Healthcare Management Solution
          </Typography>

          <Typography paragraph>
            Our application transforms healthcare services by providing
            end-to-end digital solutions: appointment scheduling, test result
            visibility, billing transparency, and seamless communication between
            patients and providers.
          </Typography>

          <Box
            sx={{
              backgroundColor: (theme) => alpha(theme.palette.info.light, 0.1),
              p: 3,
              borderRadius: 2,
              mb: 3,
            }}
          >
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{ fontWeight: 600 }}
            >
              Core Functionality:
            </Typography>
            <ul>
              <li>
                <Typography>
                  Single codebase Flutter application for cross-platform
                  accessibility
                </Typography>
              </li>
              <li>
                <Typography>
                  Digital forms with instant validation to replace paper
                  processes
                </Typography>
              </li>
              <li>
                <Typography>
                  Centralized dashboard for health plan information
                </Typography>
              </li>
              <li>
                <Typography>
                  Easy dependent registration with minimal steps
                </Typography>
              </li>
              <li>
                <Typography>
                  QR code generation for quick facility access
                </Typography>
              </li>
              <li>
                <Typography>
                  Streamlined approval system for consultations
                </Typography>
              </li>
              <li>
                <Typography>
                  Integrated chat for virtual doctor consultations
                </Typography>
              </li>
              <li>
                <Typography>Automated test approval workflows</Typography>
              </li>
            </ul>
          </Box>

          <Box
            sx={{
              backgroundColor: (theme) =>
                alpha(theme.palette.success.light, 0.1),
              p: 3,
              borderRadius: 2,
              mb: 3,
            }}
          >
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{ fontWeight: 600 }}
            >
              Patient Benefits:
            </Typography>
            <ul>
              <li>
                <Typography>
                  View all test results and medical history in one place
                </Typography>
              </li>
              <li>
                <Typography>
                  Track appointment status and healthcare utilization
                </Typography>
              </li>
              <li>
                <Typography>
                  Manage dependents&apos; healthcare needs with consent
                </Typography>
              </li>
              <li>
                <Typography>
                  Access exclusive MediCard perks and discounts
                </Typography>
              </li>
            </ul>
          </Box>

          <Box
            sx={{
              backgroundColor: (theme) =>
                alpha(theme.palette.warning.light, 0.1),
              p: 3,
              borderRadius: 2,
            }}
          >
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{ fontWeight: 600 }}
            >
              Healthcare Outcomes:
            </Typography>
            <ul>
              <li>
                <Typography>
                  80% reduction in paperwork and manual processes
                </Typography>
              </li>
              <li>
                <Typography>65% improvement in patient engagement</Typography>
              </li>
              <li>
                <Typography>75% faster appointment scheduling</Typography>
              </li>
              <li>
                <Typography>40% increase in provider efficiency</Typography>
              </li>
              <li>
                <Typography>
                  Complete digitization of healthcare workflows
                </Typography>
              </li>
            </ul>
          </Box>
        </Box>
      </>
    ),
  },
  {
    image: 'https://assets.maccarianagency.com/backgrounds/img25.jpg',
    description:
      'Digital platform connecting devotees with temples and spiritual services',
    title: 'Temple Connect Application',
    details: {
      description:
        'Comprehensive digital solution for temple management and devotee engagement',
      features: [
        'Temple history and significance overview',
        'E-Store for purchasing Prasad and items',
        'Secure donation portal with receipts',
        'Community discussion forums',
        'Digital library of shlokas/chants',
        'Real-time event notifications',
        'Special ceremony booking',
        'Virtual darshan options',
      ],
      additionalImages: [
        'https://techineur.com/assets/img/products/salesorder/1.png',
      ],
    },
    customContent: (
      <>
        <Box mt={4}>
          <Typography variant="h6" gutterBottom>
            Temple Management Solution
          </Typography>

          <Typography paragraph>
            This application bridges traditional temple practices with modern
            technology, enabling devotees to connect spiritually regardless of
            geographical constraints.
          </Typography>

          <Box
            sx={{
              backgroundColor: (theme) =>
                alpha(theme.palette.primary.light, 0.1),
              p: 3,
              borderRadius: 2,
              mb: 3,
            }}
          >
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{ fontWeight: 600 }}
            >
              Temple Administration:
            </Typography>
            <ul>
              <li>
                <Typography>Manage events and ceremony schedules</Typography>
              </li>
              <li>
                <Typography>
                  Process online donations with transparency
                </Typography>
              </li>
              <li>
                <Typography>Update devotees with push notifications</Typography>
              </li>
              <li>
                <Typography>
                  Handle Prasad and item orders efficiently
                </Typography>
              </li>
              <li>
                <Typography>
                  Maintain digital records of transactions
                </Typography>
              </li>
              <li>
                <Typography>Monitor community engagement metrics</Typography>
              </li>
              <li>
                <Typography>Manage volunteer coordination</Typography>
              </li>
            </ul>
          </Box>

          <Box
            sx={{
              backgroundColor: (theme) =>
                alpha(theme.palette.secondary.light, 0.1),
              p: 3,
              borderRadius: 2,
            }}
          >
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{ fontWeight: 600 }}
            >
              Devotee Features:
            </Typography>
            <ul>
              <li>
                <Typography>Book slots for special ceremonies</Typography>
              </li>
              <li>
                <Typography>Make secure donations online</Typography>
              </li>
              <li>
                <Typography>Purchase religious items and Prasad</Typography>
              </li>
              <li>
                <Typography>Participate in community discussions</Typography>
              </li>
              <li>
                <Typography>Access learning resources and tutorials</Typography>
              </li>
              <li>
                <Typography>Receive event reminders and updates</Typography>
              </li>
              <li>
                <Typography>
                  Experience virtual darshan when unable to visit
                </Typography>
              </li>
            </ul>
          </Box>
        </Box>
      </>
    ),
  },
  {
    image: 'https://assets.maccarianagency.com/backgrounds/img23.jpg',
    description:
      'Comprehensive platform for selling and managing financial education courses',
    title: 'FinEd - Financial Course Sales',
    details: {
      description:
        'A complete e-learning solution for financial education providers and students',
      features: [
        'Instructor course dashboard',
        'Real-time student chat',
        'Advanced course browsing',
        'Shopping cart system',
        'Course discussion forums',
        'Bookmarking capability',
        'Completion certificates',
        'Multi-device responsive design',
        'Personalized recommendations',
        'Secure payment processing',
      ],
      additionalImages: [
        'https://www.techineur.com/assets/img/products/expenses/1.png',
        'https://www.techineur.com/assets/img/products/expenses/2.png',
      ],
    },
    customContent: (
      <>
        <Box mt={4}>
          <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
            Course Platform Process
          </Typography>

          <Box
            sx={{
              backgroundColor: (theme) =>
                alpha(theme.palette.primary.light, 0.1),
              p: 3,
              borderRadius: 2,
              mb: 3,
              borderLeft: (theme: Theme) =>
                `4px solid ${theme.palette.primary.main}`,
            }}
          >
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{ fontWeight: 600 }}
            >
              How It Works:
            </Typography>
            <Box component="ol" sx={{ pl: 2 }}>
              <li>
                <Typography>
                  Instructors create and upload course content through intuitive
                  dashboard
                </Typography>
              </li>
              <li>
                <Typography>
                  Students browse courses with advanced filters and personalized
                  recommendations
                </Typography>
              </li>
              <li>
                <Typography>
                  Add courses to cart and complete secure checkout
                </Typography>
              </li>
              <li>
                <Typography>
                  Track learning progress and interact with instructors via chat
                </Typography>
              </li>
              <li>
                <Typography>
                  Receive completion certificates and provide feedback
                </Typography>
              </li>
            </Box>
          </Box>

          <Box
            sx={{
              backgroundColor: (theme) =>
                alpha(theme.palette.success.light, 0.1),
              p: 3,
              borderRadius: 2,
              borderLeft: (theme: Theme) =>
                `4px solid ${theme.palette.success.main}`,
            }}
          >
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{ fontWeight: 600 }}
            >
              Key Benefits:
            </Typography>
            <ul>
              <li>
                <Typography>75% increase in course completion rates</Typography>
              </li>
              <li>
                <Typography>3x more instructor-student interactions</Typography>
              </li>
              <li>
                <Typography>60% reduction in support tickets</Typography>
              </li>
              <li>
                <Typography>2.5x increase in course sales</Typography>
              </li>
            </ul>
          </Box>
        </Box>
      </>
    ),
  },
  {
    image: 'https://assets.maccarianagency.com/backgrounds/img24.jpg',
    description:
      'Comprehensive student networking platform for educational institutions',
    title: 'EduFloor - Student Networking',
    details: {
      description:
        'Smart campus solution connecting students, faculty and administration',
      features: [
        'Unified communication platform',
        'Centralized academic resources',
        'Assignment submission system',
        'Online examination portal',
        'Single-click class joining',
        'Goal setting and tracking',
        'Achievement portfolio',
        'Attendance management',
        'Dynamic timetable',
        'Blogging and resume building',
      ],
      additionalImages: [
        'https://www.techineur.com/assets/img/products/ems/1.png',
        'https://www.techineur.com/assets/img/products/ems/2.png',
        'https://www.techineur.com/assets/img/products/ems/3.png',
      ],
    },
    customContent: (
      <>
        <Box mt={4}>
          <Typography variant="h6" gutterBottom>
            Complete Education Solution
          </Typography>

          <Typography paragraph>
            EduFloor transforms academic institutions into smart campuses by
            connecting all stakeholders through a unified platform that enhances
            learning, communication, and administration.
          </Typography>

          <Box
            sx={{
              backgroundColor: (theme) => alpha(theme.palette.info.light, 0.1),
              p: 3,
              borderRadius: 2,
              mb: 3,
            }}
          >
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{ fontWeight: 600 }}
            >
              Student Features:
            </Typography>
            <ul>
              <li>
                <Typography>
                  Single platform for all classes and communications
                </Typography>
              </li>
              <li>
                <Typography>
                  Submit assignments with tracking and receipts
                </Typography>
              </li>
              <li>
                <Typography>
                  Access learning materials and recorded sessions
                </Typography>
              </li>
              <li>
                <Typography>
                  Showcase achievements and build digital portfolios
                </Typography>
              </li>
            </ul>
          </Box>

          <Box
            sx={{
              backgroundColor: (theme) =>
                alpha(theme.palette.warning.light, 0.1),
              p: 3,
              borderRadius: 2,
            }}
          >
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{ fontWeight: 600 }}
            >
              Institutional Benefits:
            </Typography>
            <ul>
              <li>
                <Typography>
                  95% reduction in lost assignments and materials
                </Typography>
              </li>
              <li>
                <Typography>
                  80% faster class joining with unified links
                </Typography>
              </li>
              <li>
                <Typography>3x increase in student engagement</Typography>
              </li>
              <li>
                <Typography>
                  Centralized knowledge repository for future reference
                </Typography>
              </li>
            </ul>
          </Box>
        </Box>
      </>
    ),
  },
  {
    image: 'https://assets.maccarianagency.com/backgrounds/img25.jpg',
    description:
      'Digital solution for processing insurance claims and reimbursements efficiently',
    title: 'Claims and Reimbursement Portal',
    details: {
      description:
        'End-to-end digital platform for insurance claims management',
      features: [
        'Digital claim submission forms',
        'Real-time status tracking',
        'Integrated messaging system',
        'Role-based access control',
        'Multi-device compatibility',
        'Advanced analytics dashboard',
        'Secure document management',
        'Automated workflow processing',
      ],
      additionalImages: [
        'https://www.techineur.com/assets/img/products/bouffagestaff/1.png',
        'https://www.techineur.com/assets/img/products/bouffagestaff/2.png',
      ],
    },
    customContent: (
      <>
        <Box mt={4}>
          <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
            Claims Management Features
          </Typography>

          <Box
            sx={{
              backgroundColor: (theme) =>
                alpha(theme.palette.secondary.light, 0.1),
              p: 3,
              borderRadius: 2,
              mb: 3,
              borderLeft: (theme: Theme) =>
                `4px solid ${theme.palette.secondary.main}`,
            }}
          >
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{ fontWeight: 600 }}
            >
              Core Functionality:
            </Typography>
            <ul>
              <li>
                <Typography>
                  Digital claim forms with validation and auto-fill
                </Typography>
              </li>
              <li>
                <Typography>
                  Real-time tracking of claim status and progress
                </Typography>
              </li>
              <li>
                <Typography>Secure document upload and management</Typography>
              </li>
              <li>
                <Typography>
                  Integrated communication between all parties
                </Typography>
              </li>
            </ul>
          </Box>

          <Box
            sx={{
              backgroundColor: (theme) =>
                alpha(theme.palette.success.light, 0.1),
              p: 3,
              borderRadius: 2,
              borderLeft: (theme: Theme) =>
                `4px solid ${theme.palette.success.main}`,
            }}
          >
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{ fontWeight: 600 }}
            >
              Business Benefits:
            </Typography>
            <ul>
              <li>
                <Typography>70% reduction in processing time</Typography>
              </li>
              <li>
                <Typography>90% fewer data entry errors</Typography>
              </li>
              <li>
                <Typography>Enhanced security and compliance</Typography>
              </li>
              <li>
                <Typography>
                  Data-driven insights for process optimization
                </Typography>
              </li>
            </ul>
          </Box>
        </Box>
      </>
    ),
  },
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
      ></Box>

      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid size={{ xs: 12,  sm:6, md:4 }} key={i}>
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
                  p: 2,
                }}
              >
                <CardMedia
                  image={item.image}
                  title={item.title}
                  sx={{
                    height: { xs: 300, md: 360 },
                    position: 'relative',
                    borderRadius: 1,
                  }}
                />
                <Box
                  component={CardContent}
                  position={'relative'}
                  sx={{ p: 3 }}
                >
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
          backdropFilter: 'blur(4px)',
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
              outline: 'none',
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
              color: theme.palette.grey[500],
              backgroundColor: alpha(theme.palette.background.paper, 0.9),
              zIndex: 1,
              width: 40,
              height: 40,
              '&:hover': {
                backgroundColor: theme.palette.error.light,
                color: theme.palette.error.contrastText,
              },
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
                  borderBottom: `1px solid ${theme.palette.divider}`,
                }}
              >
                <Typography
                  variant="h3"
                  component="h2"
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    color: theme.palette.primary.main,
                  }}
                >
                  {selectedProduct.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontSize: '1.1rem',
                    color: theme.palette.text.secondary,
                  }}
                >
                  {selectedProduct.details.description ||
                    selectedProduct.description}
                </Typography>
              </Box>

              <Grid container spacing={4}>
                <Grid size={{ xs: 12, md:{6} }}>
                  <Box
                    sx={{
                      mb: 4,
                      p: 3,
                      backgroundColor: alpha(theme.palette.primary.light, 0.05),
                      borderRadius: 2,
                      borderLeft: `4px solid ${theme.palette.primary.main}`,
                    }}
                  >
                    <Typography
                      variant="h5"
                      gutterBottom
                      sx={{
                        fontWeight: 600,
                        mb: 2,
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
                            fontSize: '1.2rem',
                          },
                        },
                      }}
                    >
                      {selectedProduct.details.features.map(
                        (feature, index) => (
                          <li key={index}>
                            <Typography>{feature}</Typography>
                          </li>
                        ),
                      )}
                    </Box>
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, md:{6} }}>
                  <Box
                    sx={{
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
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
                        border: `1px solid ${theme.palette.divider}`,
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>

              {/* Custom Content Section */}
              <Box sx={{ mt: 4 }}>{selectedProduct.customContent}</Box>

              {/* Screenshots Section */}
              {selectedProduct.details.additionalImages.length > 0 && (
                <Box sx={{ mt: 6 }}>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      mb: 3,
                    }}
                  >
                    Screenshots
                  </Typography>
                  <Grid container spacing={3}>
                    {selectedProduct.details.additionalImages.map(
                      (img, index) => (
                        <Grid size={{ xs: 12 }} sm={6} key={index}>
                          <Box
                            sx={{
                              p: 1,
                              backgroundColor: alpha(
                                theme.palette.background.default,
                                0.5,
                              ),
                              borderRadius: 2,
                              boxShadow: 1,
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                boxShadow: 3,
                                transform: 'translateY(-4px)',
                              },
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
                                display: 'block',
                              }}
                            />
                          </Box>
                        </Grid>
                      ),
                    )}
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
