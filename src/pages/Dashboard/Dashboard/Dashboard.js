import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import AddProduct from '../AddProduct/AddProduct';
import ManageProducts from '../ManageProducts/ManageProducts';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import MyOrder from '../MyOrder/MyOrder';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from '../../../hooks/useAuth';
import DashboardHome from '../DashboardHome/DashboardHome';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import AddReview from '../AddReview/AddReview';
import Payment from '../Payment/Payment';



const drawerWidth = 150;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const {admin}= useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />

          <Link style={{ textDecoration: 'none' }} to='/home'>
              <Button color="inherit">Home</Button>
          </Link>
          {
              admin &&  
              <Box>  
                <Link style={{ textDecoration: 'none' }} to={`${url}/addProduct`}>
                  <Button color="inherit">Add Product</Button>
              </Link>
              <Link style={{ textDecoration: 'none' }} to={`${url}/manageProduct`}>
                  <Button color="inherit">Manage Product</Button>
              </Link>
              <Link style={{ textDecoration: 'none' }} to={`${url}/manageAllOrders`}>
                  <Button color="inherit">Manage Orders</Button>
              </Link>
              <Link style={{ textDecoration: 'none' }} to={`${url}/makeAdmin`}>
                  <Button color="inherit">Make Admin</Button>
              </Link>
            </Box>
           }
          {
            !admin && <Box>
                <Link style={{ textDecoration: 'none' }} to={`${url}/myOrder`}>
              <Button color="inherit">My Order</Button>
          </Link>
          <Link style={{ textDecoration: 'none' }} to={`${url}/addReview`}>
              <Button color="inherit">Add Review</Button>
          </Link>
          <Link style={{ textDecoration: 'none' }} to={`${url}/payment`}>
              <Button color="inherit">Payment</Button>
          </Link>
            </Box>
            
          }
              
          
         
      <Divider />
      <Divider />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
           Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Typography paragraph>
        
        </Typography>
       <Switch>
         <Route exact path={path}>
            <DashboardHome></DashboardHome>
        </Route>
              <AdminRoute path={`${path}/addproduct`}>
                  <AddProduct></AddProduct>
                </AdminRoute>
              <AdminRoute path={`${path}/manageProduct`}>
                  <ManageProducts></ManageProducts>
              </AdminRoute>
              <AdminRoute path={`${path}/manageAllOrders`}>
                  <ManageAllOrders></ManageAllOrders>
              </AdminRoute>

              <Route path={`${path}/myOrder`}>
                  <MyOrder></MyOrder>
              </Route>
              <Route path={`${path}/addReview`}>
                  <AddReview></AddReview>
              </Route>
              <Route path={`${path}/payment`}>
                  <Payment></Payment>
              </Route>

              <AdminRoute path={`${path}/makeAdmin`}>
                  <MakeAdmin></MakeAdmin>
              </AdminRoute>
              
       </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
