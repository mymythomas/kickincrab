import React from "react";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import Map from '../components/Map'

class Locations extends React.Component {

    render() {



        return (
            <Tabs defaultTab="vertical-tab-one" vertical>
                <TabList style={{ overflowX: "hidden", overflowY: "auto", height: "650px" }}>
                    <Tab tabFor="vertical-tab-1">Buena Park, CA</Tab>
                    <Tab tabFor="vertical-tab-2">Chino Hills, CA</Tab>
                    <Tab tabFor="vertical-tab-3">Costa Mesa, CA</Tab>
                    <Tab tabFor="vertical-tab-4">Hollywood, CA</Tab>
                    <Tab tabFor="vertical-tab-5">Irvine, CA</Tab>
                    <Tab tabFor="vertical-tab-6">Los Angeles, CA</Tab>
                    <Tab tabFor="vertical-tab-7">Lynwood, CA</Tab>
                    <Tab tabFor="vertical-tab-8">Riverside, CA</Tab>
                    <Tab tabFor="vertical-tab-9">Rowland Heights, CA</Tab>
                    <Tab tabFor="vertical-tab-10">San Jose, CA</Tab>
                    <Tab tabFor="vertical-tab-11">Santa Ana, CA</Tab>
                    <Tab tabFor="vertical-tab-12">Westminster, CA</Tab>
                    <Tab tabFor="vertical-tab-13">Carrollton, TX</Tab>
                    <Tab tabFor="vertical-tab-14">Garland, TX</Tab>
                </TabList>

                <TabPanel tabId="vertical-tab-1">
                    <h4>Address</h4>
                    <p>
                        8300 La Palma Ave., Ste A6, <br />
                        Buena Park, CA 90620 <br />
                        (Behind Sears and John's Incredible Pizza)
                        <br /><br />
                        <strong>Phone Number</strong>: (714) 828-8788 <br />
                        <strong>Business Hours</strong>: <br />
                        <span style={{ paddingLeft: '25px' }}>Monday - Sunday: 12PM - 10PM</span>
                    </p>

                    <Map
                        id="kcbuenapark"
                        options={{
                            center: { lat: 33.844423, lng: -117.990299 },
                            zoom: 18
                        }}
                        onMapLoad={map => {
                            new window.google.maps.Marker({
                                position: { lat: 33.844423, lng: -117.990299 },
                                map: map,
                                title: 'Kickin Crab Buena Park'
                            });
                        }}
                    />

                </TabPanel>

                <TabPanel tabId="vertical-tab-2">
                    <h4>Address</h4>
                    <p>
                        13925 City Center Dr. Ste 2005, <br />
                        Chino Hills, CA 91709 <br />
                        (The Shoppes at Chino Hills) <br /><br />

                        <span><strong>Phone Number</strong>: (909) 627-8188</span> <br />
                        <strong>Business Hours</strong>: <br />
                        <span style={{ paddingLeft: '25px' }}>
                            Monday - Friday: 11:30 AM - 10PM
                        </span> <br />
                        <span style={{ paddingLeft: '25px' }}>
                            Saturday - Sunday: 12PM - 10PM
                        </span>
                    </p>

                    <Map
                        id="kcchinohills"
                        options={{
                            center: { lat: 34.000040, lng: -117.729898 },
                            zoom: 18
                        }}
                        onMapLoad={map => {
                            new window.google.maps.Marker({
                                position: { lat: 34.000040, lng: -117.729898 },
                                map: map,
                                title: 'Kickin Crab Chino Hills'
                            });
                        }}
                    />
                </TabPanel>

                <TabPanel tabId="vertical-tab-3">
                    <h4>Address</h4>
                    <p>
                        1534 Adams Ave. Ste D,  <br />
                        Costa Mesa, CA 92626  <br />
                        (Corner of Adams Ave. and Harbor Bvld.) <br /><br />

                        <span><strong>Phone Number</strong>: (714) 760-49098</span> <br />
                        <strong>Business Hours</strong>: <br />
                        <span style={{ paddingLeft: '25px' }}>
                            Monday - Thursday: 3PM - 9:30PM
                        </span> <br />
                        <span style={{ paddingLeft: '25px' }}>
                            Friday - Saturday: 12PM - 10PM
                        </span> <br />
                        <span style={{ paddingLeft: '25px' }}>
                            Sunday: 12PM - 9:30PM
                        </span>
                    </p>

                    <Map
                        id="kccostamesa"
                        options={{
                            center: { lat: 33.673724, lng: -117.920909 },
                            zoom: 18
                        }}
                        onMapLoad={map => {
                            new window.google.maps.Marker({
                                position: { lat: 33.673724, lng: -117.920909 },
                                map: map,
                                title: 'Kickin Crab Costa Mesa'
                            });
                        }}
                    />
                </TabPanel>

                <TabPanel tabId="vertical-tab-4">
                    <h4>Address</h4>
                    <p>
                        6122 W. Sunset Blvd. <br />
                        Los Angeles, CA 90028<br /><br />

                        <strong>Phone Number</strong>: (323) 688-2158 <br />
                        <strong>Business Hours</strong>: <br />
                        <span style={{ paddingLeft: '25px' }}>Monday - Sunday: 12PM - 10PM</span>
                    </p>

                    <Map
                        id="kchollywood"
                        options={{
                            center: { lat: 34.097430, lng: -118.323150 },
                            zoom: 18
                        }}
                        onMapLoad={map => {
                            new window.google.maps.Marker({
                                position: { lat: 34.097430, lng: -118.323150 },
                                map: map,
                                title: 'Kickin Crab Hollywood'
                            });
                        }}
                    />
                </TabPanel>

                <TabPanel tabId="vertical-tab-5">
                    <h4>Address</h4>
                    <p>
                        2740 Alton Parkway,  <br />
                        Irvine, CA 92606 <br />
                        (Corner of Alton Parkway and Jamboree) <br /><br />

                        <span><strong>Phone Number</strong>: (949) 851-8889</span> <br />
                        <strong>Business Hours</strong>: <br />
                        <span style={{ paddingLeft: '25px' }}>
                            Monday-Thursday: 11:30 AM - 10PM
                        </span> <br />
                        <span style={{ paddingLeft: '25px' }}>
                            Friday: 11:30 AM - 11PM
                        </span> <br />
                        <span style={{ paddingLeft: '25px' }}>
                            Saturday: 12PM - 11PM
                        </span> <br />
                        <span style={{ paddingLeft: '25px' }}>
                            Sunday: 12PM - 10PM
                        </span>
                    </p>

                    <Map
                        id="kcirvine"
                        options={{
                            center: { lat: 33.688573, lng: -117.832780 },
                            zoom: 18
                        }}
                        onMapLoad={map => {
                            new window.google.maps.Marker({
                                position: { lat: 33.688573, lng: -117.832780 },
                                map: map,
                                title: 'Kickin Crab Irvine'
                            });
                        }}
                    />
                </TabPanel>

                <TabPanel tabId="vertical-tab-6">
                    <h4>Address</h4>
                    <p>
                        3755 Santa Rosalia Dr., Unit F, <br />
                        Los Angeles, CA 90008 <br />
                        (Baldwin Hills Crenshaw Mall) <br /><br />

                        <span><strong>Phone Number</strong>: (323) 294-8888</span> <br />
                        <strong>Business Hours</strong>: <br />
                        <span style={{ paddingLeft: '25px' }}>
                            Monday - Friday: 3PM - 10PM
                        </span> <br />
                        <span style={{ paddingLeft: '25px' }}>
                            Saturday - Sunday: 12PM - 10PM
                        </span>
                    </p>

                    <Map
                        id="kclosangeles"
                        options={{
                            center: { lat: 34.009728, lng: -118.337348 },
                            zoom: 18
                        }}
                        onMapLoad={map => {
                            new window.google.maps.Marker({
                                position: { lat: 34.009728, lng: -118.337348 },
                                map: map,
                                title: 'Kickin Crab Los Angeles'
                            });
                        }}
                    />
                </TabPanel>

                <TabPanel tabId="vertical-tab-7">
                    <h4>Address</h4>
                    <p>
                        3170 E. Imperial Hwy, Ste B-102, <br />
                        Lynwood, CA 90262<br />
                        (Corner of Imperial Hwy. and Long Beach Bvld.) <br /><br />

                        <strong>Phone Number</strong>: (310) 632-1983  <br />
                        <strong>Business Hours</strong>: <br />
                        <span style={{ paddingLeft: '25px' }}>Monday - Sunday: 12PM - 10PM</span>
                    </p>

                    <Map
                        id="kclynwood"
                        options={{
                            center: { lat: 33.928841, lng: -118.214036 },
                            zoom: 18
                        }}
                        onMapLoad={map => {
                            new window.google.maps.Marker({
                                position: { lat: 33.928841, lng: -118.214036 },
                                map: map,
                                title: 'Kickin Crab Lynwood'
                            });
                        }}
                    />
                </TabPanel>

                <TabPanel tabId="vertical-tab-8">
                    <h4>Address</h4>
                    <p>
                        2555 Canyon Springs Parkway  <br />
                        Riverside, CA 92507 <br /><br />

                        <span><strong>Phone Number</strong>: (951) 653-0880</span> <br />
                        <strong>Business Hours</strong>: <br />
                        <span style={{ paddingLeft: '25px' }}>
                            Monday-Thursday: 3PM - 9:30PM
                        </span> <br />
                        <span style={{ paddingLeft: '25px' }}>
                            Friday-Saturday: 12PM-10PM
                        </span> <br />
                        <span style={{ paddingLeft: '25px' }}>
                            Sunday: 12PM-9:30PM
                        </span>
                    </p>

                    <Map
                        id="kcriverside"
                        options={{
                            center: { lat: 33.941015, lng: -117.287396 },
                            zoom: 18
                        }}
                        onMapLoad={map => {
                            new window.google.maps.Marker({
                                position: { lat: 33.941015, lng: -117.287396 },
                                map: map,
                                title: 'Kickin Crab Riverside'
                            });
                        }}
                    />
                </TabPanel>

                <TabPanel tabId="vertical-tab-9">
                    <h4>Address</h4>
                    <p>
                        1390 Fullerton Rd., Ste 102, <br />
                        Rowland Heights, CA 91748 <br />
                        (Inside Diamond Plaza) <br /><br />

                        <span><strong>Phone Number</strong>: (626) 965-3888</span> <br />
                        <strong>Business Hours</strong>: <br />
                        <span style={{ paddingLeft: '25px' }}>
                            Monday - Friday: 3PM - 10PM
                        </span> <br />
                        <span style={{ paddingLeft: '25px' }}>
                            Saturday-Sunday: 12PM - 10PM
                        </span>
                    </p>

                    <Map
                        id="kcrowlandheights"
                        options={{
                            center: { lat: 33.993543, lng: -117.904429 },
                            zoom: 18
                        }}
                        onMapLoad={map => {
                            new window.google.maps.Marker({
                                position: { lat: 33.993543, lng: -117.904429 },
                                map: map,
                                title: 'Kickin Crab Rowland Heights'
                            });
                        }}
                    />
                </TabPanel>

                <TabPanel tabId="vertical-tab-10">
                    <h4>Address</h4>
                    <p>
                        2675 Cropley Ave <br />
                        San Jose, CA 95132 <br />
                        (Corner of Cropley Ave. and N. Capitol Ave.) <br />
                        <span><strong>Phone Number</strong>: (408) 945-0888</span> <br /><br />

                        1735 E. Capitol Expressway, <br />
                        San Jose, CA 95121 <br />
                        (Corner of Capitol Expressway and Silver Creek Rd.) <br />
                        <span><strong>Phone Number</strong>: (408) 809-8888</span> <br /><br />

                        1051 Blossom Hill Rd, <br />
                        San Jose, CA 95123 <br />
                        (Between Almaden Expressway and Sanchez Dr.) <br />
                        <span><strong>Phone Number</strong>: (408) 622-3997</span> <br /><br />


                        <strong>Business Hours</strong>: <br />
                        <span style={{ paddingLeft: '25px' }}>
                            Monday - Friday: 3PM - 10PM
                        </span> <br />
                        <span style={{ paddingLeft: '25px' }}>
                            Saturday-Sunday: 12PM - 10PM
                        </span>
                    </p>

                    <Map
                        id="kcsanjose"
                        options={{
                            center: { lat: 37.404340, lng: -121.882131 },
                            zoom: 18
                        }}
                        onMapLoad={map => {
                            new window.google.maps.Marker({
                                position: { lat: 37.404340, lng: -121.882131 },
                                
                                map: map,
                                title: 'Kickin Crab San Jose'
                            });
                        }}
                    />
                </TabPanel>

                <TabPanel tabId="vertical-tab-11">
                    <h4>Address</h4>
                    <p>
                        3611 S. Bristol St. Suite C, <br />
                        Santa Ana, CA 92704 <br />
                        (Corner of Bristol St. and MacArthur Blvd.) <br /><br />

                        <span><strong>Phone Number</strong>: (714) 754-8888</span> <br />
                        <strong>Business Hours</strong>: <br />
                        <span style={{ paddingLeft: '25px' }}>
                            Monday - Friday: 3PM - 10PM
                        </span> <br />
                        <span style={{ paddingLeft: '25px' }}>
                            Saturday-Sunday: 12PM - 10PM
                        </span>
                    </p>

                    <Map
                        id="kcsantaana"
                        options={{
                            center: { lat: 33.699046, lng:  -117.885007 },
                            zoom: 18
                        }}
                        onMapLoad={map => {
                            new window.google.maps.Marker({
                                position: { lat: 33.699046, lng: -117.885007 },
                                
                                map: map,
                                title: 'Kickin Crab Santa Ana'
                            });
                        }}
                    />
                </TabPanel>

                <TabPanel tabId="vertical-tab-12">
                    <h4>Address</h4>
                    <p>
                        15496 Magnolia St., Suite 101, <br />
                        Westminster, CA 92683 <br />
                        (Corner of Magnolia St. and Mc Fadden Ave.) <br />
                        <span><strong>Phone Number</strong>: (714) 892-9888</span> <br /><br />

                        6777-A4 Westminster Blvd., <br />
                        Westminster, CA 92683 <br />
                        (Corner of Westminster Blvd. and Goldenwest) <br />
                        <span><strong>Phone Number</strong>: (714) 799-7770</span> <br /><br />

                        <strong>Business Hours</strong>: <br />
                        <span style={{ paddingLeft: '25px' }}>
                            Monday - Friday: 3PM - 10PM
                        </span> <br />
                        <span style={{ paddingLeft: '25px' }}>
                            Saturday-Sunday: 12PM - 10PM
                        </span>
                    </p> <hr />

                    <Map
                        id="kcswestminster"
                        options={{
                            center: { lat: 33.737936, lng:  -117.971805 },
                            zoom: 18
                        }}
                        onMapLoad={map => {
                            new window.google.maps.Marker({
                                position: { lat: 33.737936, lng:  -117.971805 },
                                
                                map: map,
                                title: 'Kickin Crab Westminster'
                            });
                        }}
                    />
                </TabPanel>

                <TabPanel tabId="vertical-tab-13">
                    <h4>Address</h4>
                    <p>
                        2540 Old Denton Road, Suite 108,  <br />
                        Carrollton, Texas 75006 <br />
                        (corner of Old Denton Rd and President George Bush Turnpike) <br /><br />

                        <span><strong>Phone Number</strong>: (469) 892-2106</span> <br />
                        <strong>Business Hours</strong>: <br />
                        <span style={{ paddingLeft: '25px' }}>
                            Monday - Thursday: 3PM - 10PM
                        </span> <br />
                        <span style={{ paddingLeft: '25px' }}>
                            Friday: 12PM - 10:30 PM
                        </span> <br />
                        <span style={{ paddingLeft: '25px' }}>
                            Saturday: 12PM - 10:30 PM
                        </span> <br />
                        <span style={{ paddingLeft: '25px' }}>
                            Sunday: 12PM - 10PM
                        </span>
                    </p>

                    <Map
                        id="kccarrollton"
                        options={{
                            center: { lat: 32.981612, lng: -96.908644 },
                            zoom: 18
                        }}
                        onMapLoad={map => {
                            new window.google.maps.Marker({
                                position: { lat:32.981612, lng: -96.908644},
                                
                                map: map,
                                title: 'Kickin Crab Carrollton'
                            });
                        }}
                    />
                </TabPanel>

                <TabPanel tabId="vertical-tab-14">
                    <h4>Address</h4>
                    <p>
                        3545 W Walnut St, <br />
                        Garland, TX 75042<br />
                        (Corner of W. Walnut St and N. Jupiter Rd.)<br /><br />

                        <span><strong>Phone Number</strong>: (469) 969-0895</span> <br />
                        <strong>Business Hours</strong>: <br />
                        <span style={{ paddingLeft: '25px' }}>
                            Monday - Friday: 3PM - 10PM
                        </span> <br />
                        <span style={{ paddingLeft: '25px' }}>
                            Saturday-Sunday: 12PM - 10PM
                        </span>
                    </p>

                    <Map
                        id="kcgarland"
                        options={{
                            center: { lat:  32.917511, lng: -96.684743 },
                            zoom: 18
                        }}
                        onMapLoad={map => {
                            new window.google.maps.Marker({
                                position: { lat: 32.917511, lng: -96.684743},
                                
                                map: map,
                                title: 'Kickin Crab Garland'
                            });
                        }}
                    />
                </TabPanel>
            </Tabs>
        );
    }
}

export default Locations;
