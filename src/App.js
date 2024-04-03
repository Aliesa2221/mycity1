import React from 'react';
import {
  Route,
  BrowserRouter,
  Routes,
}
  from "react-router-dom";
import SignUp from './template/SignIn/SignUp';
import SignIn from './template/SignIn/SignIn';
import Home from "./template/Home/Home"
import FormData from "./template/Home/FormData";
import Charges from "./template/Home/Charges";
import FollowPlan from './template/Home/StringPrData/FollowPlan';
import AddConsumer from "./template/Home/StringPrData/AddConsumer/AddConsumer"
import AddConsumerPage2 from './template/Home/StringPrData/AddConsumer/AddConsumerPage2';
import AddConsumerPage3 from './template/Home/StringPrData/AddConsumer/AddConsumerPage3';
import Factories from './screens/Factories/Factories';
import Samples from './screens/Samples/Samples';
import SamplingResults from './template/SamplingResults';
import CalculationOfSampling from './template/CalculationOfSampling';
import Orders from './template/Orders';
import PageGroup1 from './template/General/HomeData/GroupBuPage/PageGroup1';
import PageGroup2 from './template/General/HomeData/GroupBuPage/PageGroup2';
import PageGroup3 from './template/General/HomeData/GroupBuPage/PageGroup3';
import PageGroup4 from './template/General/HomeData/GroupBuPage/PageGroup4';
import PageGroup5 from './template/General/HomeData/GroupBuPage/PageGroup5';
import PageGroup6 from './template/General/HomeData/GroupBuPage/PageGroup6';
import PageGroup7 from './template/General/HomeData/GroupBuPage/PageGroup7';
import PageGroup8 from './template/General/HomeData/GroupBuPage/PageGroup7';
import PageGroup9 from './template/General/HomeData/GroupBuPage/PageGroup7';
import './App.css';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/home' element={<Home />} />
          <Route path='/charges' element={<Charges />} />
          <Route path='/data' element={<FormData />} />
          <Route path='/followPlan' element={<FollowPlan />} />
          <Route path='/AddConsumer' element={<AddConsumer />} />
          <Route path='/AddConsumerPage2' element={<AddConsumerPage2 />} />
          <Route path='/AddConsumerPage3' element={<AddConsumerPage3 />} />
          <Route path="/Factories" element={<Factories />} />
          <Route path="/Samples" element={<Samples />} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/SamplingResults" element={<SamplingResults />} />
          <Route path="/CalculationOfSampling" element={<CalculationOfSampling />} />
          <Route path="/PageGroup1" element={<PageGroup1 />} />
          <Route path="/PageGroup2" element={<PageGroup2 />} />
          <Route path="/PageGroup3" element={<PageGroup3 />} />
          <Route path="/PageGroup4" element={<PageGroup4 />} />
          <Route path="/PageGroup5" element={<PageGroup5 />} />
          <Route path="/PageGroup6" element={<PageGroup6 />} />
          <Route path="/PageGroup7" element={<PageGroup7 />} />
          <Route path="/PageGroup8" element={<PageGroup8 />} />
          <Route path="/PageGroup9" element={<PageGroup9 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}