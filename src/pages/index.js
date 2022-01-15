import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router';
import Demopage from '../Demopage';
import AuthStorage from '../helper/AuthStorage';
import Layout from '../layout/Layout';
import LogRegLayout from '../layout/LogRegLayout';
import AboutAgricunia from './about-agricunia/AboutAgricunia';
import AboutUs from './about-us/AboutUs';
import Agricademy from './agricademy/Agricademy';
import BlogDes from './agricademy/BlogDes';
import BlogDetails from './agricademy/BlogDetails';
import BlogList from './agricademy/BlogList';
import FaqList from './customerservice/FaqList';
import FaqReg from './customerservice/FaqReg';
import Dashboard from './dashboard/Dashboard'
import BIOFarmPage from './farm-page/BIOFarmPage';
import Gallary from './gallary/Gallary';
import GallaryView from './gallary/GallaryView';
import GreenMarket from './greenMarket/GreenMarket';
import GreenMarketDes from './greenMarket/GreenMarketDes';
import GreenMarketDetails from './greenMarket/GreenMarketDetails';
import GreenMarketList from './greenMarket/GreenMarketList';
import Investment from './Investment/Investment';
import InvestmentDes from './Investment/InvestmentDes';
import InvestmentDetails from './Investment/InvestmentDetails';
import InvestmentList from './Investment/InvestmentList';
import Login from './login/Login';
import StelaStation from './mainpage/stelastation/StelaStation';
import StelaStationReg from './mainpage/stelastation/StelaStationReg';

import AllArtistMembers from './membermang/artistmember/allmember/AllArtistMembers';
import ArtistProfileReg from './membermang/artistmember/allmember/ArtistProfileReg';
import CreatorProfile from './membermang/stelamember/stelaallmember/CreatorProfile';
import StelaMember from './membermang/stelamember/stelaallmember/StelaMember';
import WithdrawalMember from './membermang/stelamember/withdrawmember/WithdrawalMember';
import MusicSource from './musicsource/MusicSource';
import MusicSourceReg from './musicsource/MusicSourceReg';
import PartnerPage from './partner/PartnerPage';
import PartnerView from './partner/PartnerView';
import PlayList from './playlist/PlayList';
import PlayListList from './playlist/PlayListList';
import PlayListReg from './playlist/PlayListReg';
import Privacy from './privacy/Privacy';
import Products from './Products/Products';
import ProductsDes from './Products/ProductsDes';
import ProductsDetails from './Products/ProductsDetails';
import ProductsList from './Products/ProductsList';
import OurServices from './Services/OurServices';
import Signup from './signup/Signup';
import Terms from './terms-condition/Terms';
import UserManagement from './users/UserManagement';
import UserRegistration from './users/UserRegistration';
import Video from './video/Video';
import VideoView from './video/VideoView';
import { useHistory } from 'react-router-dom'
import { ApiGet } from '../helper/API/ApiData';



const Index = () => {

    const pathname = ["/login"]
    const history = useHistory();
    const location = useLocation();

    useEffect(() => {

        if (AuthStorage.isUserAuthenticated()) {
              ApiGet("user/validate")
                .then((res) => {
                //   dispatch(changeLoginState(true));
                })
                .catch((error) => {
                  AuthStorage.deauthenticateUser();
                  history.push("/login");
                });
        }
        else {
            if (!pathname.includes(location.pathname)) {
                history.push("/login");
            }
        }
    }, []);


    const defaultLayout = ({ children }) => {
        return <Layout>
            {children}
        </Layout>
    }
    const loginLayout = ({ children }) => {
        return <LogRegLayout>
            {children}
        </LogRegLayout>
    }

    return (
        <Switch>
            {/* {<Redirect exact from="/" to="/dashboard" />} */}
            {/* {<Redirect  from="/" to="/login" />} */}

            {/* <RouteWrapper exact path="/" component={Dashboard} layout={defaultLayout} />
            <RouteWrapper path="/login" component={Login} layout={loginLayout} />
            <RouteWrapper path="/signup" component={Signup} layout={loginLayout} />
            <RouteWrapper path="/stelamember" component={StelaMember} layout={defaultLayout} />
            <RouteWrapper path="/allartistmembers" component={AllArtistMembers} layout={defaultLayout} />
            <RouteWrapper path="/artistprofilereg" component={ArtistProfileReg} layout={defaultLayout} />
            <RouteWrapper path="/withdrawalmember" component={WithdrawalMember} layout={defaultLayout} />
            <RouteWrapper path="/creatorprofile" component={CreatorProfile} layout={defaultLayout} /> */}



            <RouteWrapper path="/login" component={Login} layout={loginLayout} />
            <RouteWrapper path="/signup" component={Signup} layout={loginLayout} />
            <RouteWrapper exact path="/" component={Dashboard} layout={defaultLayout} />
            <RouteWrapper exact path="/aboutagricunia" component={AboutAgricunia} layout={defaultLayout} />
            <RouteWrapper exact path="/aboutus" component={AboutUs} layout={defaultLayout} />
            <RouteWrapper exact path="/terms" component={Terms} layout={defaultLayout} />
            <RouteWrapper exact path="/user" component={UserManagement} layout={defaultLayout} />
            <RouteWrapper exact path="/user-details" component={UserRegistration} layout={defaultLayout} />
            <RouteWrapper exact path="/privacy" component={Privacy} layout={defaultLayout} />
            <RouteWrapper exact path="/farm-page" component={BIOFarmPage} layout={defaultLayout} />
            <RouteWrapper exact path="/gallary" component={Gallary} layout={defaultLayout} />
            <RouteWrapper exact path="/gallary-view" component={GallaryView} layout={defaultLayout} />
            <RouteWrapper exact path="/partner" component={PartnerPage} layout={defaultLayout} />
            <RouteWrapper exact path="/partner-view" component={PartnerView} layout={defaultLayout} />
            <RouteWrapper exact path="/services" component={OurServices} layout={defaultLayout} />
            <RouteWrapper exact path="/video" component={Video} layout={defaultLayout} />
            <RouteWrapper exact path="/video-View" component={VideoView} layout={defaultLayout} />
            <RouteWrapper exact path="/agricademy" component={Agricademy} layout={defaultLayout} />
            <RouteWrapper exact path="/blog-description" component={BlogDes} layout={defaultLayout} />
            <RouteWrapper exact path="/blog" component={BlogList} layout={defaultLayout} />
            <RouteWrapper exact path="/blog-details" component={BlogDetails} layout={defaultLayout} />
            <RouteWrapper exact path="/green-market" component={GreenMarket} layout={defaultLayout} />
            <RouteWrapper exact path="/market-Description" component={GreenMarketDes} layout={defaultLayout} />
            <RouteWrapper exact path="/green-market-list" component={GreenMarketList} layout={defaultLayout} />
            <RouteWrapper exact path="/green-market-details" component={GreenMarketDetails} layout={defaultLayout} />
            <RouteWrapper exact path="/investment" component={Investment} layout={defaultLayout} />
            <RouteWrapper exact path="/investment-description" component={InvestmentDes} layout={defaultLayout} />
            <RouteWrapper exact path="/investment-details" component={InvestmentDetails} layout={defaultLayout} />
            <RouteWrapper exact path="/investment-list" component={InvestmentList} layout={defaultLayout} />
            <RouteWrapper exact path="/products" component={Products} layout={defaultLayout} />
            <RouteWrapper exact path="/products-description" component={ProductsDes} layout={defaultLayout} />
            <RouteWrapper exact path="/products-list" component={ProductsList} layout={defaultLayout} />
            <RouteWrapper exact path="/products-details" component={ProductsDetails} layout={defaultLayout} />























            <RouteWrapper path="/stelamember" component={StelaMember} layout={defaultLayout} />
            <RouteWrapper path="/allartistmembers" component={AllArtistMembers} layout={defaultLayout} />
            <RouteWrapper path="/artistprofilereg" component={ArtistProfileReg} layout={defaultLayout} />
            <RouteWrapper path="/withdrawalmember" component={WithdrawalMember} layout={defaultLayout} />
            <RouteWrapper path="/creatorprofile" component={CreatorProfile} layout={defaultLayout} />
            <RouteWrapper path="/musicsource" component={MusicSource} layout={defaultLayout} />
            <RouteWrapper path="/musicsourcereg" component={MusicSourceReg} layout={defaultLayout} />
            <RouteWrapper path="/playlist" component={PlayList} layout={defaultLayout} />
            <RouteWrapper path="/playlistreg" component={PlayListReg} layout={defaultLayout} />
            <RouteWrapper path="/demopage" component={Demopage} layout={defaultLayout} />
            <RouteWrapper path="/playlistlist" component={PlayListList} layout={defaultLayout} />
            <RouteWrapper path="/faqlist" component={FaqList} layout={defaultLayout} />
            <RouteWrapper path="/faqreg" component={FaqReg} layout={defaultLayout} />
            <RouteWrapper path="/stelastation" component={StelaStation} layout={defaultLayout} />
            <RouteWrapper path="/stelastationreg" component={StelaStationReg} layout={defaultLayout} />

        </Switch>
    )
}



export default Index

function RouteWrapper({
    component: Component,
    layout: Layout,
    ...rest
}) {
    return (
        <Route {...rest} render={(props) =>
            <Layout {...props}>
                <Component {...props} />
            </Layout>
        } />
    );
}
