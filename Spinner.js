import React from 'react';

const Spinner = props => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};

Spinner.defaultProps = {
  message: 'Loading...'
};

export default Spinner;


<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 60%;
  margin:20px
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 4px;
}

</style>
</head>
<body> 

<table>
  <tr>
    <td>Quote Submitted Date</td>
    <td>Date()</td>
    
  </tr>
  <tr>
    <td>TSE Contact Name</td>
    <td>abc</td>
   
  </tr>
  <tr>
    <td>TSE Contact Email</td>
    <td>abc@example.com</td>
    
  </tr>
  <tr>
    <td>Requestor Name</td>
    <td>xyz</td>
    
  </tr>
  <tr>
    <td>Requestor Contact Details</td>
    <td>xyz@example.com</td>
  </tr>
</table>

</body>
