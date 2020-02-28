import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from "../components/session/Login";
import ViewUsers from "../components/user/ViewUsers";
import AddUser from "../components/user/AddUser";
import ViewCrops from "../components/crop/ViewCrops";
import AddCrop from "../components/crop/AddCrop";
import AddSoilType from "../components/soil/AddSoilType";
import AddDistrict from "../components/district/AddDistrict";
import ViewDistricts from "../components/district/ViewDistricts";
import ViewSoilTypes from "../components/soil/ViewSoilTypes";
import AddFarm from "../components/farm/AddFarm";
import ViewFarms from "../components/farm/ViewFarms";
import AddPrice from "../components/gmb/AddPrice";
import ViewPrices from "../components/gmb/ViewPrices";
import AddFarmer from "../components/farmer/AddFarmer";
import ViewFarmers from "../components/farmer/ViewFarmers";
import AddInput from "../components/inputs/AddInput";
import ViewInputs from "../components/inputs/ViewInputs";
import AddDistribution from "../components/distribution/AddDistribution";
import ViewDistributions from "../components/distribution/ViewDistributions";



const AppRouter = () => {
    return(
            <Router>
                    <Switch>
                        <Route path="/" exact component={Login} />
                        {/* User */}
                        <Route path="/view_users" exact component={ViewUsers} />
                        <Route path="/add_user" exact component={AddUser} />
                        {/* Crop */}
                        <Route path="/view_crops" exact component={ViewCrops} />
                        <Route path="/add_crop" exact component={AddCrop} />

                        {/* Soil */}
                        <Route path="/add_soil_type" exact component={AddSoilType} />
                        <Route path="/view_soil_types" exact component={ViewSoilTypes} />

                        {/* District */}
                        <Route path="/add_district" exact component={AddDistrict} />
                        <Route path="/view_districts" exact component={ViewDistricts} />

                        {/* Farm */}
                        <Route path="/add_farm" exact component={AddFarm} />
                        <Route path="/view_farms" exact component={ViewFarms} />
                        
                        {/* Prices */}
                        <Route path="/add_price" exact component={AddPrice} />
                        <Route path="/view_prices" exact component={ViewPrices} />

                        {/* Farmers */}
                        <Route path="/add_farmer" exact component={AddFarmer} />
                        <Route path="/view_farmers" exact component={ViewFarmers} />

                        {/* Farmers */}
                        <Route path="/add_input" exact component={AddInput} />
                        <Route path="/view_inputs" exact component={ViewInputs} />

                        {/* Farmers */}
                        <Route path="/add_distribution" exact component={AddDistribution} />
                        <Route path="/view_distributions" exact component={ViewDistributions} />
                        
                    </Switch>
            </Router>
    )
}

export default AppRouter;