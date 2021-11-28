
            <tbody>
         
            {props.minutelyInfo.minutely.map(({dt, precipitation }) => <tr key = {dt}>

                <td>{dt}</td> 
                <td>{precipitation}</td> 
            

            </tr>)}

            </tbody>
