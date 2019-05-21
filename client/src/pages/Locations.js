import React from "react";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";

class Locations extends React.Component {
    render() {
        return (
            <Tabs defaultTab="vertical-tab-one" vertical>
                <TabList style={{overflowX: "hidden", overflowY: "auto", height: "650px" }}>
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
                </TabPanel>

                <TabPanel tabId="vertical-tab-10">
                    <h4>Address</h4>
                    <p>
                        2675 Cropley Ave <br />
                        San Jose, CA 95132 <br />
                        (Corner of Cropley Ave. and N. Capitol Ave.) <br /><br />

                        <span><strong>Phone Number</strong>: (408) 945-0888</span> <br />
                        <strong>Business Hours</strong>: <br />
                        <span style={{ paddingLeft: '25px' }}>
                            Monday - Friday: 3PM - 10PM
                        </span> <br />
                        <span style={{ paddingLeft: '25px' }}>
                            Saturday-Sunday: 12PM - 10PM
                        </span>
                    </p>
                    <hr />

                    <h4>Address</h4>
                    <p>
                        1735 E. Capitol Expressway, <br />
                        San Jose, CA 95121 <br />
                        (Corner of Capitol Expressway and Silver Creek Rd.) <br /><br />

                        <span><strong>Phone Number</strong>: (408) 809-8888</span> <br />
                        <strong>Business Hours</strong>: <br />
                        <span style={{ paddingLeft: '25px' }}>
                            Monday - Friday: 3PM - 10PM
                        </span> <br />
                        <span style={{ paddingLeft: '25px' }}>
                            Saturday-Sunday: 12PM - 10PM
                        </span>
                    </p>
                    <hr />

                    <h4>Address</h4>
                    <p>
                        1051 Blossom Hill Rd, <br />
                        San Jose, CA 95123 <br />
                        (Between Almaden Expressway and Sanchez Dr.) <br /><br />

                        <span><strong>Phone Number</strong>: (408) 622-3997</span> <br />
                        <strong>Business Hours</strong>: <br />
                        <span style={{ paddingLeft: '25px' }}>
                            Monday - Friday: 3PM - 10PM
                        </span> <br />
                        <span style={{ paddingLeft: '25px' }}>
                            Saturday-Sunday: 12PM - 10PM
                        </span>
                    </p>
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
                </TabPanel>

                <TabPanel tabId="vertical-tab-12">
                    <h4>Address</h4>
                    <p>
                        15496 Magnolia St., Suite 101, <br />
                        Westminster, CA 92683 <br />
                        (Corner of Magnolia St. and Mc Fadden Ave.) <br /><br />

                        <span><strong>Phone Number</strong>: (714) 892-9888</span> <br />
                        <strong>Business Hours</strong>: <br />
                        <span style={{ paddingLeft: '25px' }}>
                            Monday - Friday: 3PM - 10PM
                        </span> <br />
                        <span style={{ paddingLeft: '25px' }}>
                            Saturday-Sunday: 12PM - 10PM
                        </span>
                    </p> <hr />

                    <h4>Address</h4>
                    <p>
                        6777-A4 Westminster Blvd., <br />
                        Westminster, CA 92683 <br />
                        (Corner of Westminster Blvd. and Goldenwest) <br /><br />

                        <span><strong>Phone Number</strong>: (714) 799-7770</span> <br />
                        <strong>Business Hours</strong>: <br />
                        <span style={{ paddingLeft: '25px' }}>
                            Monday - Friday: 3PM - 10PM
                        </span> <br />
                        <span style={{ paddingLeft: '25px' }}>
                            Saturday-Sunday: 12PM - 10PM
                        </span>
                    </p>
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
                </TabPanel>
            </Tabs>
        );
    }
}

export default Locations;
