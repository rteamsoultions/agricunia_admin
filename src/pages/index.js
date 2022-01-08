import React from 'react';
import {Route, Switch } from 'react-router';
import Demopage from '../Demopage';
import Layout from '../layout/Layout';
import LogRegLayout from '../layout/LogRegLayout';
import AboutAgricunia from './about-agricunia/AboutAgricunia';
import AboutUs from './about-us/AboutUs';
import FaqList from './customerservice/FaqList';
import FaqReg from './customerservice/FaqReg';
import Dashboard from './dashboard/Dashboard'
import BIOFarmPage from './farm-page/BIOFarmPage';
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
import PlayList from './playlist/PlayList';
import PlayListList from './playlist/PlayListList';
import PlayListReg from './playlist/PlayListReg';
import Privacy from './privacy/Privacy';
import Signup from './signup/Signup';
import Terms from './terms-condition/Terms';
import SingleUser from './users/SingleUser';
import User from './users/User';



const Index = () => {

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
            <RouteWrapper exact path="/" component={Dashboard}  layout={defaultLayout}/>
            <RouteWrapper exact path="/aboutagricunia" component={AboutAgricunia}  layout={defaultLayout}/>
            <RouteWrapper exact path="/aboutus" component={AboutUs}  layout={defaultLayout}/>
            <RouteWrapper exact path="/terms" component={Terms}  layout={defaultLayout}/>
            <RouteWrapper exact path="/user" component={User}  layout={defaultLayout}/>
            <RouteWrapper exact path="/user-details" component={SingleUser}  layout={defaultLayout}/>
            <RouteWrapper exact path="/privacy" component={Privacy}  layout={defaultLayout}/>
            <RouteWrapper exact path="/farm-page" component={BIOFarmPage}  layout={defaultLayout}/>







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
