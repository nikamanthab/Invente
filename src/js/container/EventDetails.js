import React from 'react';
import { Tab, Grid } from 'semantic-ui-react';
import './../../css/eventdetails.css';


class EventDetails extends React.Component{

    render = ()=>{
        
        let data = {
            title:"hackathon",
            date: "Sept 22,2018 10AM",
            venue: "CSE Department",
            round1: "round 1 data",
            round2:"round 2 data",
            round3: "round 3 data"
        }

        const panes = [
            { menuItem: 'Round 1', render: () => <Tab.Pane>{data.round1}</Tab.Pane> },
            { menuItem: 'Round 2', render: () => <Tab.Pane>{data.round2}</Tab.Pane> },
            { menuItem: 'Round 3', render: () => <Tab.Pane>{data.round3}</Tab.Pane> },
          ]
          

        return(
            <div className="details-div">
                <div >
                    <h2>{data.title}</h2>
                    <Grid.Row columns={2}>
                        <Grid.Column>{data.date}</Grid.Column>
                        <Grid.Column>{data.venue}</Grid.Column>
                    </Grid.Row>
                </div>
                <Tab panes={panes} />
            </div>
        )
    }
}
export default EventDetails;