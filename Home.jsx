import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';

function Home() {

    const data = [
        {
          name: 'Jan',
          
          Qurterly:9000,
          
        },
        {
          name: 'Feb',
          
          Qurterly: 8000,
          
        },
        {
          name: 'Mar',
          
          Qurterly: 9800,
          
        },
        {
          name: 'Apr',
          
          Qurterly: 10500,
          
        },
        {
          name: 'May',
          
          Qurterly: 4800,
          
        },
        {
          name: 'Jun',
          
          Qurterly: 3800,
          
        },
        {
          name: 'Jul',
          
          Qurterly:4000,
          
        },
        {
          name: 'Aug',
          Qurterly:11000,
        },
        {
          name: 'Sep',
          
          Qurterly:7000,
          
        },
        {
          name: 'Oct',
          
          Qurterly:6000,
          
        },
        {
          name: 'Nov',
          
          Qurterly:4500,
          
        },
        {
          name: 'Dec',
          
          Qurterly:5000,
          
        },
        
      ];
     

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>Hello Shahrukh 👋,</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Earning<br></br>
                      $198K <br />  
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfRZOtosbFSUklttBnrA9YG_zlSGUmOAtba6DbSSEeSUX7X1zkS0HfFPWAGGl3pUeRcj4&usqp=CAU" alt="no image" height="15px" width="15px" /> 37.8% this month
                      </h3>

                    <BsFillArchiveFill className='card_icon'/>
                </div>
                
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Others<br></br>
                      $2.4k<br></br>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhpC4csNqiur6v6vVk3AS9JpNeT8nFUYLHepexCan0malsaOPTqxIjKnM90aH1rF-8LXU&usqp=CAU" alt="no image" width="15px" height="15px"/> 2% this month
                    </h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Balance<br></br>
                      $2.4k<br></br>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhpC4csNqiur6v6vVk3AS9JpNeT8nFUYLHepexCan0malsaOPTqxIjKnM90aH1rF-8LXU&usqp=CAU" alt="no image" width="15px" height="15px" /> 2% this month
                    </h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Total Sales<br></br>
                      $89k<br></br>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfRZOtosbFSUklttBnrA9YG_zlSGUmOAtba6DbSSEeSUX7X1zkS0HfFPWAGGl3pUeRcj4&usqp=CAU" alt="no image" width="15px" height="15px"/> 11% this Week 
                    </h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                
            </div>
        </div>
        <div><h6>Overview<br/>
              Monthly Earning
            </h6>
        </div>

        <div className='charts'>
            <BarChart
            width={600}
            height={300}
            data={data}
            margin={{
                top: 10,
                right: 20,
                left: 20,
                bottom: 10,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <Tooltip />
                <Legend />
                <Bar dataKey="Qurterly" fill="#8884d8" />
                </BarChart>
                <div>
                  <img src="https://img.myloview.com/murals/66-percent-pie-chart-circle-diagram-business-illustration-percentage-vector-infographics-400-241276534.jpg" alt="no image" height="239px" width="239px" />
                </div>
        </div>
        <div>
          <img src="https://a.storyblok.com/f/68896/1600x550/8fb5079a7f/02-my-izettle-products-overview-gb.png" alt="no image" height="100%" width="100%" />
        </div>
    </main>
  )
}

export default Home